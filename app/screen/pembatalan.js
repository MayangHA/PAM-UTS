import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    Button,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const pembatalan = ({navigation}) => {
    return(
        <SafeAreaView>
            
            <View>
                <MaterialCommunityIcons name='close-box-multiple' size={200} style={{color:'black',alignSelf:'center',marginTop:100}}/>
            </View>
            <Text style={{fontSize:50, alignSelf:'center'}}>Not Found</Text>
        </SafeAreaView>
    )
}

export default pembatalan;