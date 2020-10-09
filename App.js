

import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import LoginScreen from './screens/LoginScreen'
import OnboardingScreen from './screens/OnboardingScreen';

const AppStack=createStackNavigator();
export default function App (){
  return (
    <NavigationContainer>
     <AppStack.Navigator initialRouteName="onboarding" headerMode="none" >
       <AppStack.Screen name="onboarding" component={OnboardingScreen}/>
       <AppStack.Screen name="Login" component={LoginScreen}/>

     </AppStack.Navigator>
    </NavigationContainer>
  );
};


