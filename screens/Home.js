import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const data = [
    { id: '1', image: require('./assets/RV.jpg'), text: 'Virtual Reality' },
    { id: '2', image: require('./assets/Shooters.jpg'), text: 'Shooter' },
    { id: '3', image: require('./assets/OpenWorld.png'), text: 'Open World' },
    { id: '4', image: require('./assets/Sports.png'), text: 'Sports and Simulation' },
    { id: '5', image: require('./assets/racing.jpg'), text: 'Racing' },
    { id: '6', image: require('./assets/MMO.png'), text: 'MMO' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome To Menu!</Text>
        <Text style={styles.subtitle}>Categories:</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7331EE',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FAA749',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#0D99FF',
  },
  flatListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    marginBottom: 20,
    marginHorizontal: 10,
  },
  image: {
    width: 200,
    height: 120,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#FAA749',
    textAlign: 'center',
  },
});

export default HomeScreen;
