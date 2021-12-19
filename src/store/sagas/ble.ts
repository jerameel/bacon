import { put, call, takeLatest, select, delay } from 'redux-saga/effects';
import { bleActions } from 'store/ble';
import bleService from 'services/ble';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { addLogAction } from 'store/monitor';

function* startRunner() {
  try {
    const isSuccess: boolean = yield call(bleService.start);
    yield put(bleActions.updateInitStatus(isSuccess ? 'SUCCESS' : 'FAILED'));
  } catch (e) {
    yield put(bleActions.updateInitStatus('FAILED'));
  }
}

function* scanRunner() {
  try {
    const isSuccess: boolean = yield call(bleService.scan);
    yield put(bleActions.updateStatus(isSuccess ? 'SCANNING' : 'IDLE'));
  } catch (e) {
    yield put(bleActions.updateStatus('IDLE'));
  }
}

function* stopScanRunner() {
  try {
    const isSuccess: boolean = yield call(bleService.stopScan);
    if (isSuccess) {
      yield put(bleActions.updateStatus('IDLE'));
    }
  } catch (e) {
    // Do nothing
  }
}

function* connectRunner(action: PayloadAction<string>) {
  try {
    const result:
      | boolean
      | {
          characteristics: any[];
          targetWrite?: {
            characteristicUUID?: string;
            serviceUUID?: string;
          };
        } = yield call(bleService.connect, action.payload);
    if (typeof result === 'object') {
      yield put(
        addLogAction({
          message: `Connection established for device ${action.payload}...
${result.characteristics
  .map(
    (c) => `
S: ${c.service}
C: ${c.characteristic}
P: ${Object.keys(c.properties).join(', ')}
`,
  )
  .join('')}
          `,
          type: 'INFO',
        }),
      );

      yield put(bleActions.connected({ ...result, UUID: action.payload }));
    } else {
      yield put(bleActions.disconnected());
    }
  } catch (e) {
    yield put(bleActions.disconnected());
  }
}

function* disconnectRunner(action: PayloadAction<string>) {
  try {
    const isSuccess: boolean = yield call(
      bleService.disconnect,
      action.payload,
    );
    if (isSuccess) {
      yield put(bleActions.disconnected());
    }
  } catch (e) {
    // Do nothing
  }
}

function* sendMessageRunner(action: PayloadAction<string>) {
  try {
    const connection: {
      UUID?: string;
      targetWrite?: {
        serviceUUID?: string;
        characteristicUUID?: string;
      };
    } = yield select((state: RootState) => state.ble.connection);
    if (
      connection.UUID &&
      connection.targetWrite?.serviceUUID &&
      connection.targetWrite?.characteristicUUID &&
      action.payload
    ) {
      yield call(bleService.sendMessage, {
        UUID: connection.UUID || '',
        serviceUUID: connection.targetWrite?.serviceUUID || '',
        characteristicUUID: connection.targetWrite?.characteristicUUID || '',
        message: action.payload || '',
      });

      yield put(
        addLogAction({
          message: action.payload || '',
          characteristicUUID: connection.targetWrite?.characteristicUUID || '',
          serviceUUID: connection.targetWrite?.serviceUUID || '',
          type: 'OUTGOING',
        }),
      );
    }
  } catch (e) {
    // Do nothing
  }
}

function* startNotificationRunner() {
  try {
    const connection: {
      UUID?: string;
      characteristics: any[];
    } = yield select((state: RootState) => state.ble.connection);
    if (connection.UUID && connection.characteristics) {
      yield put(
        addLogAction({
          message: 'Starting to listen on NOTIFY and READ characteristics...',
          type: 'INFO',
        }),
      );
      const readCharacteristics = connection.characteristics.filter(
        (c: any) => c.properties.Notify || c.properties.Read,
      );

      // subscribe to each notification sequentially
      for (let readCharacteristic of readCharacteristics) {
        const readServiceUUID = readCharacteristic?.service || '';
        const readCharacteristicUUID = readCharacteristic?.characteristic || '';
        const isSuccess: boolean = yield call(
          bleService.startNotification,
          connection.UUID || '',
          readServiceUUID || '',
          readCharacteristicUUID || '',
        );

        if (isSuccess) {
          yield put(
            addLogAction({
              message: `Notification Started for ${readServiceUUID}/${readCharacteristicUUID}`,
              type: 'INFO',
            }),
          );
        } else {
          yield put(
            addLogAction({
              message: `Notification Failed for ${readServiceUUID}/${readCharacteristicUUID}`,
              type: 'ERROR',
            }),
          );
        }

        yield delay(200);
      }
    }
  } catch (e) {
    // Do nothing
  }
}

function* bleWatcher() {
  yield takeLatest('ble/start', startRunner);
  yield takeLatest('ble/scan', scanRunner);
  yield takeLatest('ble/stopScan', stopScanRunner);
  yield takeLatest('ble/connect', connectRunner);
  yield takeLatest('ble/disconnect', disconnectRunner);
  yield takeLatest('ble/sendMessage', sendMessageRunner);
  yield takeLatest('ble/connected', startNotificationRunner);
}

export default bleWatcher;
