import React from 'react';

import{View,Text,Button,StyleSheet,TextInput,KeyboardAvoidingView} from 'react-native';
import { color } from 'react-native-reanimated';

export default function LoginScreen(){
    return(
        <View style={styles.container} >
  <TextInput 
      label="Email"
      mode="outlined"
    style={{marginLeft:18,marginRight:18,marginTop:20}}  
    
    />


     <TextInput 
      label="Password"
      mode="outlined"
    style={{marginLeft:18,marginRight:18,marginTop:20}}
     />

    <Button title="click  NAHI krna" 
        onPress={()=>alert('bsdk bole the click matt krna')}
    />
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
