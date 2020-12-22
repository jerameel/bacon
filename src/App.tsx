import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import * as React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './Routes';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'infrastracture';

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
