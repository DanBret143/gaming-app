import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from 'C:\Users\Dell Latitude 7390\OneDrive\Documentos\UTD\Cuatrimestre 5\AppsMovilesMultiplataforma\Parcial1\gaming-app\screens\Login.js';
import HomeScreen from 'C:\Users\Dell Latitude 7390\OneDrive\Documentos\UTD\Cuatrimestre 5\AppsMovilesMultiplataforma\Parcial1\gaming-app\screens\Home.js';

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
