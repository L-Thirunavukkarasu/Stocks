//import liraries
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../home';
import GetStarted from '../getstarted';

const Stack = createNativeStackNavigator();

// create a component
function MainNavigator () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted"
      screenOptions={{headerShown: false, gestureEnabled: false}}>
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Home" component={Home} options={{headerShown: true, gestureEnabled: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//make this component available to the app
export default MainNavigator;
