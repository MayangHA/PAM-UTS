import {StyleSheet} from 'react-native';

const styles =StyleSheet.create({
    container : {
        backgroundColor: 'rgb(255, 255, 255)',
        flex: 1,
    },
    boxMain : {
        width: '90%',
        height: 550,
        backgroundColor: 'rgb(215, 205, 204)',
        borderRadius: 10,
    },
    center: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    textTittle: {
        fontSize:30,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textSubs: {
        marginLeft: 20,
        color: '#252422',
        fontWeight: 'bold',
        fontSize: 16,
    },
    space : {
        marginTop: 30,
    },
    picker : {
        
        width: '80%',
        height: 50,
        marginTop: 5,
        
    },
    arrow : {
        flex: 0,
        flexDirection: 'row',
        backgroundColor: 'rgb(255, 255, 255)',
        height:30,
        width: '95%',
        borderRadius: 10,
        marginLeft: 9,
       
    },
    miniBox : {
        backgroundColor: 'rgb(255, 255, 255)',
        height:50,
        width: '95%',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 30,
        
    },
    textSubsLil: {
        marginLeft: 20,
        color: '#252422',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        marginRight: 20,
    },
    button: {
        width: '80%',
        height:35,
        backgroundColor: 'red',
        marginTop: 20,
        alignSelf: 'center',
    },
    boxEtc: {
        backgroundColor: 'rgb(255, 255, 255)',
        height:200,
        width: '95%',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 10,
        
    },

});

export default styles;