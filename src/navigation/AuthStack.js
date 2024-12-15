import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SocialAuth from '../screens/SocialAuth';
import BdayInfoScreen from '../screens/BdayInfoScreen';
import GenderInfo from '../screens/GenderInfo';
import NameScreen from '../screens/NameScreen';
import {NavigationContainer} from '@react-navigation/native';
import ProfileScreen from '../screens/ProfileScreen';
import {AppContext} from '../context/AppContext';
const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  const {userInfo} = useContext(AppContext);
  console.log('this is id', userInfo.googleId);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="socialAuth" component={SocialAuth} />
        <Stack.Screen name="Name" component={NameScreen} />
        <Stack.Screen name="bdayInfo" component={BdayInfoScreen} />
        <Stack.Screen name="genderInfo" component={GenderInfo} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
