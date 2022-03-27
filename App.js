import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import homePage from './android/app/screen/homePage';
import MyNavigator from './android/app/navigate/nav';
import order from './android/app/screen/order';
import order2 from './android/app/screen/order2';
import order3 from './android/app/screen/order3';

const Stack = createNativeStackNavigator();

const  App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyNavigator" component={MyNavigator}/>
      <Stack.Screen name="homePage" component={homePage}/>
      <Stack.Screen name="order" component={order}/>
      <Stack.Screen name='order2' component={order2}/>
      <Stack.Screen name='order3' component={order3}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;