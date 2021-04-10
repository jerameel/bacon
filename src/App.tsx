import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './Routes';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store, runSaga } from 'infrastracture';
import sagas from './store/sagas';

runSaga(sagas);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
