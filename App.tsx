import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {BottomNavbar} from './src/Navigation/Tabs';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <BottomNavbar />
    </NavigationContainer>
  );
}

export default App;
