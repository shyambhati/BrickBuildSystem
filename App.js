import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Navigation from './src/core/navigation/Navigation';

const App = () => {
  console.disableYellowBox = true;
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};
export default App;