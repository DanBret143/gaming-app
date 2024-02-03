import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from 'screens/Login.js';
import HomeScreen from 'screens/Home.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
