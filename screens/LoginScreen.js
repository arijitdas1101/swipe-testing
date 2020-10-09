import React from 'react';

import{View,Text,Button,StyleSheet} from 'react-native';

export default function LoginScreen(){
    return(
        <View style={styles.container} >
    <Text>
    Login screen
    </Text>

    <Button title="click here" 
        onPress={()=>alert('clicked')}
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
