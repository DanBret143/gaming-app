import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert('Iniciar Sesión');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/gaming_logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Sign In</Text>

      <View style={styles.formContainer}>
        <View style={styles.labelContainer}>
          <Text style={[styles.label, { color: '#FAB749' }]}>Email:</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>

        <View style={styles.labelContainer}>
          <Text style={[styles.label, { color: '#FAB749' }]}>Password:</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#7331EE',
  },
  logo: {
    width: '100%',
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FAA749',
    marginBottom: 20,
  },
  labelContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 37,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: 'orange',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LoginScreen;
