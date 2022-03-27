import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import homePage from '../screen/homePage';
import confirmOrder from '../screen/confirmOrder';
import pembatalan from '../screen/pembatalan';
import lainnya from '../screen/lainnya';

const Tab = createBottomTabNavigator();

const MyNavigator = ({navigation}) => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveBackgroundColor: 'rgb(241, 247, 237)',
                headerShown : false,
                tabBarStyle: {posisition: 'absolute'},
                tabBarStyle: {height: 70, backgroundColor: 'rgb(215, 205, 204)'},
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={homePage}
                options={{
                    tabBarIcon: ({color,size}) => (
                        <MaterialCommunityIcons name="home" color={'black'} size={30} />
                    ),
                }} />
            
            <Tab.Screen
                name="Order"
                component={confirmOrder}
                options={{
                    tabBarIcon: ({color,size}) => (
                        <MaterialCommunityIcons name="notebook-multiple" color={'black'} size={30}/>
                    ),
                }}/>
            
            <Tab.Screen
                name="Pembatalan"
                component={pembatalan}
                options={{
                    tabBarIcon: ({color,size}) => (
                        <MaterialCommunityIcons name="close-box-multiple" color={'black'} size={30}/>
                    ),
                }}/>
            <Tab.Screen
                name="Lainnya"
                component={lainnya}
                options={{
                    tabBarIcon: ({color,size}) => (
                        <MaterialCommunityIcons name="menu" color={'black'} size={30}/>
                    ),
                }}/>

        </Tab.Navigator>
    )
}

export default MyNavigator;