import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    Button,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const lainnya = ({navigation}) => {
    return(
       <SafeAreaView>
            <View>
                <MaterialCommunityIcons name='close-box-multiple' size={200} style={{color:'black',alignSelf:'center',marginTop:100}}/>
            </View>
            <Text style={{fontSize:20, alignSelf:'center'}}>Mayang Hermanda Anggraini - 119140197</Text>
        </SafeAreaView>
    )
}

export default lainnya;