import {
  take,
  put,
  call,
  select,
  takeEvery,
  takeLatest,
  race,
} from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';

import { NativeModules, NativeEventEmitter } from 'react-native';
import { bleActions } from 'store/ble';
import { RootState } from 'store';
import bleService from 'services/ble';

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

// creates an event Channel from an interval of seconds
function discoveryEventChannel(): any {
  return eventChannel((emitter) => {
    const subscription = bleManagerEmitter.addListener(
      'BleManagerDiscoverPeripheral',
      (peripheral) => {
        emitter(peripheral);
      },
    );
    // The subscriber must return an unsubscribe function
    return () => {
      subscription.remove();
    };
  });
}

function* discoveryWatcher(): any {
  const discoveryChannel: any = yield call(discoveryEventChannel);
  try {
    while (true) {
      // take(END) will cause the saga to terminate by jumping to the finally block
      const peripheral: any = yield take(discoveryChannel);
      if (peripheral.id) {
        const existingDevices = yield select(
          (state: RootState) => state.ble.devices,
        );
        const alreadyExists =
          existingDevices.findIndex((v) => v.id === peripheral.id) >= 0;
        if (!alreadyExists) {
          yield put(
            bleActions.addDevice({
              id: peripheral.id,
              name: peripheral.name || 'Unknown Device',
              rssi: peripheral.rssi,
            }),
          );
        }
      }
    }
  } finally {
    console.log('discoveryWatcher terminated');
  }
}

// creates an event Channel from an interval of seconds
function stopEventChannel(): any {
  return eventChannel((emitter) => {
    const subscription = bleManagerEmitter.addListener(
      'BleManagerStopScan',
      () => {
        emitter(true);
      },
    );
    // The subscriber must return an unsubscribe function
    return () => {
      subscription.remove();
    };
  });
}

function* stopWatcher(): any {
  const stopChannel: any = yield call(stopEventChannel);
  try {
    while (true) {
      // take(END) will cause the saga to terminate by jumping to the finally block
      const stop: boolean = yield take(stopChannel);
      const isScanning: boolean =
        (yield select((state: RootState) => state.ble.status)) === 'SCANNING';
      if (stop && isScanning) {
        yield put(bleActions.updateStatus('IDLE'));
      }
    }
  } finally {
    console.log('stopWatcher terminated');
  }
}

const signalWatcherEventChannel = (id: string) => {
  return eventChannel((emitter) => {
    const interval = setInterval(async () => {
      const rssi = await bleService.readRSSI(id);
      emitter(rssi);
    }, 3000);

    // The subscriber must return an unsubscribe function
    return () => {
      clearInterval(interval);
    };
  });
};

function* signalWatcher(): any {
  const id: string =
    (yield select((state: RootState) => state.ble.connection.UUID)) || '';

  if (id) {
    const signalWatcherChannel: any = yield call(signalWatcherEventChannel, id);

    try {
      while (true) {
        const { disconnect, rssi } = yield race({
          disconnect: take('ble/disconnect'),
          rssi: take(signalWatcherChannel),
        });

        if (disconnect) {
          signalWatcherChannel.close();
        } else if (typeof rssi === 'number') {
          yield put(bleActions.updateRSSI(rssi));
        }
      }
    } finally {
      console.log('signalWatcher terminated');
    }
  }
}

function* initSignalWatcher(): any {
  yield takeLatest(['ble/connected'], signalWatcher);
}

const bleEventsWatcher = [discoveryWatcher, stopWatcher, initSignalWatcher];

export default bleEventsWatcher;
