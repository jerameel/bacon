import { take, put, call } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';

import { NativeModules, NativeEventEmitter } from 'react-native';

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
      console.log(`peripheral: ${peripheral}`);
    }
  } finally {
    console.log('discovery terminated');
  }
}

// creates an event Channel from an interval of seconds
function stopEventChannel(): any {
  return eventChannel((emitter) => {
    const subscription = bleManagerEmitter.addListener(
      'BleManagerStopScan',
      () => {
        emitter('stop');
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
      const stop: any = yield take(stopChannel);
      console.log(`stop: ${stop}`);
    }
  } finally {
    console.log('stop terminated');
  }
}

const bleEventWatcher = [discoveryWatcher, stopWatcher];

export default bleEventWatcher;
