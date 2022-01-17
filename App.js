import React from 'react';
import { Provider } from 'react-redux';
import { persistor,store } from './redux/configureStores';
import { PersistGate } from 'redux-persist/integration/react';
import { Navigue } from './components/Navigue';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Navigue/>
        </NavigationContainer>
      </PersistGate>
    </Provider>
    
    
  );
}
