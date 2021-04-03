import { put, call, takeLatest, select } from 'redux-saga/effects';
import { bleActions } from 'store/ble';
import bleService from 'services/ble';
import { PayloadAction } from '@reduxjs/toolkit';

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
      yield put(bleActions.connected(result));
    } else {
      yield put(bleActions.updateStatus('IDLE'));
    }
  } catch (e) {
    yield put(bleActions.updateStatus('IDLE'));
  }
}

function* bleWatcher() {
  yield takeLatest('ble/start', startRunner);
  yield takeLatest('ble/scan', scanRunner);
  yield takeLatest('ble/stopScan', stopScanRunner);
  yield takeLatest('ble/connect', connectRunner);
}

export default bleWatcher;
