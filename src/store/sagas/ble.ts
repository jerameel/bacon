import { put, call, takeLatest, select } from 'redux-saga/effects';
import { updateInitStatusAction } from 'store/ble';
import bleService from 'services/ble';
import { PayloadAction } from '@reduxjs/toolkit';

function* startBleRunner(action: PayloadAction<{}>) {
  try {
    const isSuccess: boolean = yield call(bleService.start);
    yield put(
      updateInitStatusAction({
        status: isSuccess ? 'SUCCESS' : 'FAILED',
      }),
    );
  } catch (e) {
    yield put(
      updateInitStatusAction({
        status: 'FAILED',
      }),
    );
  }
}

function* bleWatcher() {
  yield takeLatest('ble/startBLE', startBleRunner);
}

export default bleWatcher;
