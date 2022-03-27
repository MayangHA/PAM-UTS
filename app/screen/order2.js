import { useNavigation } from "@react-navigation/native";
import {useState} from 'react';
import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    Button,
    TextInput,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../style/styleOrderPage2';
import confirmOrder from "./confirmOrder";

const order2  = ({}) => {
    const [text, setText] = useState('');
    const navigation = useNavigation();
    const pindah = () => {
        navigation.navigate("order3")
    }
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
                    <Text style={{marginLeft: 20,color: '#252422',fontWeight: 'bold',fontSize: 16,marginTop:10,}}> Data Pemesan</Text>
                    <Text style={{marginLeft:20,fontSize:16}}>Nama Lengkap</Text>
                    <View style={styles.arrow}>
                       
                        <TextInput 
                            style={{height:40}}
                            placeholder="Mayang Hermanda Anggraini"
                            onChangeText={newText => setText(newText)}
                            defaultValue={text}/>
                    </View>
                    <Text style={{marginLeft:20, fontSize:16}}>Identitas</Text>
                    <View style={styles.arrow}>
                       
                        <TextInput 
                            style={{height:40}}
                            placeholder="Perempuan"
                            onChangeText={newText => setText(newText)}
                            defaultValue={text}/>
                    </View>
                    <Text style={{marginLeft:20, fontSize:16}}>Umur</Text>
                    <View style={styles.arrow}>
                       
                        <TextInput 
                            style={{height:40}}
                            placeholder="20 tahun"
                            onChangeText={newText => setText(newText)}
                            defaultValue={text}/>
                    </View>
                    <View style={styles.button}>
                        <Button 
                            title="Submit"
                            onPress={pindah}
                            color='red'
                        />
                    </View>
                </View>
            </View>
            
        </SafeAreaView>
    )
}

export default order2;