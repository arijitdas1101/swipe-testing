import React from 'react';
import{View,Text,Button,StyleSheet,Image} from 'react-native'
import{NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Onboarding from 'react-native-onboarding-swiper';

export default function OnboardingScreen ({navigation}){
    return(
        <Onboarding
        onSkip={()=>navigation.replace("Login")}
        onDone={()=>navigation.navigate("Login")}
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/ama.png')} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/cycle.png')} />,
            title: 'Onboarding 2',
            subtitle: 'Done with React Native Onboarding Swiper',
          }
        ]}
      />
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
