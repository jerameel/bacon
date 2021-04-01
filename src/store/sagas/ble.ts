import { put, call, takeLatest, select } from 'redux-saga/effects';
import { bleActions } from 'store/ble';
import bleService from 'services/ble';
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
    yield put(bleActions.updateScanStatus(isSuccess ? 'SCANNING' : 'IDLE'));
  } catch (e) {
    yield put(bleActions.updateScanStatus('IDLE'));
  }
}

function* stopScanRunner() {
  try {
    const isSuccess: boolean = yield call(bleService.stopScan);
    if (isSuccess) {
      yield put(bleActions.updateScanStatus('IDLE'));
    }
  } catch (e) {
    // Do nothing
  }
}

function* bleWatcher() {
  yield takeLatest('ble/start', startRunner);
  yield takeLatest('ble/scan', scanRunner);
  yield takeLatest('ble/stopScan', stopScanRunner);
}

export default bleWatcher;
