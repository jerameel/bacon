import { fork, all } from 'redux-saga/effects';
import bleEventWatcher from './bleEvent';
import bleWatcher from './ble';

const sagas: any[] = [...bleEventWatcher, bleWatcher];

export default function* root() {
  yield all(sagas.map(fork));
}
