import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    Button,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { pelabuhanAsal,pelabuhanTujuan, kelasTiket, waktuBerangkat, AllData } from "../data/data";
import styles from '../style/styleOrderPage';

const order  = () => {

    const route = useRoute();
    const navigation = useNavigation();

    return(
        <SafeAreaView>
            <View>
                <MaterialCommunityIcons name="chevron-left" size={50} style={{color:'black'}} onPress={() => navigation.goBack()}/>
            </View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("order2")
                }}
            >
                <View style={styles.box}>
                    <Text style={styles.textTittle}> Kapal Sky</Text>
                    <Text style={styles.textSub}> Kuota tersedia (1000)</Text>
                    <Text style={styles.textSub}> Rincian Tiket</Text>
                    <Text style={styles.textSub}> Destinasi</Text>
                    <Text style={styles.textSubLil}> Tanjung Priok    -    Merak</Text>
                    <Text style={styles.textSubs}> Jadwal Masuk Pelabuhan</Text>
                    <Text style={styles.textNorm}> Senin, 28 Maret 2022</Text>
                    <Text style={styles.textSubs}> Layanan </Text>
                    <Text style={styles.textNorm}> Ekonomi</Text>
                    <Text style={styles.textSubs}> Total </Text>
                    <Text style={styles.textNorm}> Rp.100.100</Text>
                </View>
            </TouchableOpacity>
            
        </SafeAreaView>
    )
}



export default order;