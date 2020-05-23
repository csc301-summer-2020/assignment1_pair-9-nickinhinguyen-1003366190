import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MyTabs from './screens/MainShop';

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
