import { put, call, takeLatest, select } from 'redux-saga/effects';
import { bleActions } from 'store/ble';
import bleService from 'services/ble';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

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
          serviceUUID: string;
          characteristicUUID: string;
        } = yield call(bleService.connect, action.payload);
    if (typeof result === 'object') {
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
      serviceUUID?: string;
      characteristicUUID?: string;
    } = yield select((state: RootState) => state.ble.connection);
    if (
      connection.UUID &&
      connection.serviceUUID &&
      connection.characteristicUUID &&
      action.payload
    ) {
      yield call(bleService.sendMessage, {
        UUID: connection.UUID || '',
        serviceUUID: connection.serviceUUID || '',
        characteristicUUID: connection.characteristicUUID || '',
        message: action.payload || '',
      });
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
}

export default bleWatcher;
