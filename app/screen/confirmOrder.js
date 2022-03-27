import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    Button,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../style/styleOrderPage2';

const confirmOrder = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}> 
            <View>
                <MaterialCommunityIcons name="chevron-left" size={50} style={{color:'black'}} onPress={() => navigation.goBack()}/>
            </View>
            <View style={styles.center}>
                <View style={styles.boxMain}>
                    <Text style={styles.textTittle}>Kapal Sky</Text>
                    <Text style={{fontSize:16,marginTop:20,fontWeight:'bold',color:'black',marginLeft:10,}}>Informasi Pemesanan</Text>
                    <View style={styles.boxEtc}>
                        <Text style={styles.textSubs}> Destinasi</Text>
                        <Text style={styles.textSubLil}> Tanjung Priok    -    Merak</Text>
                        <Text style={styles.textSubs}> Jadwal Masuk Pelabuhan</Text>
                        <Text style={styles.textNorm}> Senin, 28 Maret 2022</Text>
                        <Text style={styles.textSubs}> Layanan </Text>
                        <Text style={styles.textNorm}> Ekonomi</Text>
                        <Text style={styles.textSubs}> Total </Text>
                        <Text style={styles.textNorm}> Rp.100.100</Text>
                    </View>
                    
                    
                </View>
            </View>
            
        </SafeAreaView>
    )
}

export default confirmOrder;