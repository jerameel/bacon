import { fork, all } from 'redux-saga/effects';
import bleEventsWatcher from './bleEvents';
import bleWatcher from './ble';

const sagas: any[] = [...bleEventsWatcher, bleWatcher];

export default function* root() {
  yield all(sagas.map(fork));
}
