import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    Button,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const order3  = ({navigation}) => {
    return(
        <SafeAreaView>
            <View style={{flex:0, flexDirection:'row'}}>
                <MaterialCommunityIcons name="chevron-left" size={50} style={{color:'black'}} onPress={() => navigation.goBack()}/>
            </View>
            <View>
                <MaterialCommunityIcons name='check' size={200} style={{color:'black',alignSelf:'center',marginTop:100}}/>
            </View>
            <Text style={{fontSize:50, color:'black',alignSelf:'center'}}>BERHASIL!!</Text>
        </SafeAreaView>

    )
}

export default order3;