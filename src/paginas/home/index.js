import { useNavigation } from '@react-navigation/native';
import React from 'react'

import { StyleSheet, Text, View, TouchableOpacity,Button} from 'react-native';




export default function Home(){



return(

    <View style = {{alignItems:'center'}}>

      <Text>Home </Text>
            
    </View>


);


}

const styles = StyleSheet.create({

    botao:{
        backgroundColor:'green',
        width:'80%',
        alignItems:"center",
        marginTop:10
    }

}
)