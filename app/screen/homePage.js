import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TextInput,
    ScrollView,
    Button,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../style/styleHomePage';
import { pelabuhanAsal,pelabuhanTujuan, kelasTiket, waktuBerangkat, AllData } from "../data/data";
import { Picker } from "@react-native-picker/picker";
import DatePicker from "react-native-datepicker";


const Home = () => {
    const [asal, setAsal] = React.useState('Tanjung Priok');
    const [tujuan, setTujuan] = React.useState('Tanjung Priok');
    const [kelas, setKelas] = React.useState('Ekonomi');
    const [tanggal, setTanggal] = React.useState('2022-03-25');

    const navigation = useNavigation();
    
    const ticket = () => {
        navigation.navigate("order",{
            asal : pelabuhanAsal,
            tujuan : pelabuhanTujuan,
            kelas : kelasTiket,
            tanggal : waktuBerangkat,
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.center}>
                <View style={styles.boxMain}>
                    <Text style={styles.textTittle}>Kapal Sky</Text>
                    <View style={styles.space}></View>
                    
                    <Text style={styles.textSubs}>Pelabuhan Awal</Text>
                    <View style={styles.arrow}>
                        <MaterialCommunityIcons name='sail-boat' size={40} style={{marginLeft:10, marginTop:5, color:'black'}}/>
                        <View style={styles.picker}>
                            <Picker
                                selectedValue = {asal}
                                onValueChange = {(value, index) => setAsal(value)}
                                mode = "dropdown"
                            >
                                <Picker.Item label = "Tanjung Priok" value = "Tanjung Priok"></Picker.Item>
                                <Picker.Item label = "Merak" value = "Merak"></Picker.Item>
                                <Picker.Item label = "Tanjung Perak" value = "Tangjung Perak"></Picker.Item>
                                <Picker.Item label = "Bakauheni" value = "Bakauheni"></Picker.Item>
                                <Picker.Item label = "Tanjung Emas" value = "Tanjung Emas"></Picker.Item>
                            </Picker>
                        </View>
                    </View>
                    <Text style={styles.textSubs}>Pelabuhan Tujuan</Text>
                    <View style={styles.arrow}>
                        <MaterialCommunityIcons name='sail-boat' size={40} style={{marginLeft:10, marginTop:5, color:'black'}}/>
                        <View style={styles.picker}>
                            <Picker
                                selectedValue = {tujuan}
                                onValueChange = {(value, index) => setTujuan(value)}
                                mode = "dropdown"
                            >
                                <Picker.Item label = "Tanjung Priok" value = "Tanjung Priok"></Picker.Item>
                                <Picker.Item label = "Merak" value = "Merak"></Picker.Item>
                                <Picker.Item label = "Tanjung Perak" value = "Tangjung Perak"></Picker.Item>
                                <Picker.Item label = "Bakauheni" value = "Bakauheni"></Picker.Item>
                                <Picker.Item label = "Tanjung Emas" value = "Tanjung Emas"></Picker.Item>
                            </Picker>
                        </View>
                    </View>
                    <Text style={styles.textSubs}>Kelas Layanan</Text>
                    <View style={styles.arrow}>
                        <MaterialCommunityIcons name='table-chair' size={40} style={{marginLeft:10, marginTop:5, color:'black'}}/>
                        <View style={styles.picker}>
                            <Picker
                                selectedValue = {kelas}
                                onValueChange = {(value, index) => setKelas(value)}
                                mode = "dropdown"
                            >
                                <Picker.Item label = "Ekonomi" value = "Ekonomi"></Picker.Item>
                                <Picker.Item label = "Bisnis" value = "Bisnis"></Picker.Item>
                            </Picker>
                        </View>
                    </View>
                    <Text style={styles.textSubs}>Tanggal Masuk Pelabuhan</Text>
                    <View style={styles.arrow}>
                        <MaterialCommunityIcons name='calendar' size={40} style={{marginLeft:10, marginTop:5, color:'black'}}/>
                        <View style={styles.picker}>
                            <Picker
                                selectedValue = {tanggal}
                                onValueChange = {(value, index) => setTanggal(value)}
                                mode = "dropdown"
                            >
                                <Picker.Item label = "2022-03-25" value = "2022-03-25"></Picker.Item>
                                <Picker.Item label = "2022-03-26" value = "2022-03-26"></Picker.Item>
                                <Picker.Item label = "2022-03-27" value = "2022-03-27"></Picker.Item>
                                <Picker.Item label = "2022-03-28" value = "2022-03-28"></Picker.Item>
                                <Picker.Item label = "2022-03-29" value = "2022-03-29"></Picker.Item>
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.miniBox}>
                        <Text style={styles.textSubsLil}> Dewasa 1 Orang</Text>
                    </View>
                    
                    <View style={styles.button}>
                        <Button 
                            title="Buat Tiket"
                            onPress={ticket}
                            color='red'
                        />
                    </View>
                    
                </View>
            </View>
        </SafeAreaView>

    )
}

export default Home;