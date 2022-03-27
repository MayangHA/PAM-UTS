import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    box: {
        marginTop: 20,
        width:'90%',
        height: 500,
        backgroundColor: 'rgb(215, 205, 204)',
        alignSelf: 'center',
        borderRadius: 5,
    },
    textSub: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 30,
        marginLeft: 10,
    },
    textSubLil: {
        fontSize: 16,
        color: 'black',
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'center',

    },
    textTittle: {
        fontSize:30,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textSubs: {
        fontSize:16,
        color: 'black',
        fontWeight: '500',
        marginLeft: 10,
        marginTop: 30,

    }, 
    textNorm: {
        fontSize:16,
        marginLeft: 10,
        marginTop:10,
    }
    
});

export default styles;