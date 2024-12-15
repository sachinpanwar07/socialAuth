import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ProfileScreen from './src/screens/ProfileScreen';
import AuthStack from './src/navigation/AuthStack';
import {AppProvider} from './src/context/AppContext';
import {View} from 'react-native';
import BdayInfoScreen from './src/screens/BdayInfoScreen';
const App = () => {
  return (
    <AppProvider>
      <AuthStack />
    </AppProvider>
  );
};

export default App;
