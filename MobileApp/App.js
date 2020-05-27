import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import MyTabs from './screens/MainShop';
import configstore from './redux/store.js';

const store = configstore();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </Provider>

  );
}
