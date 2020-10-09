import React from 'react';

import{View,Text,Button,StyleSheet} from 'react-native';

export default function LoginScreen(){
    return(
        <View style={styles.container} >
    <Text>
    Shraddah kapoor
    </Text>

    <Button title="click matt krna" 
        onPress={()=>alert('madarchod bole the click matt krna')}
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
