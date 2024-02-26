import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Card} from '../components/Cards';
import {HorizontalScrolleable} from '../components/HorizontalScrollable';
import {Searchbar} from '../components/SearchBar';
import {background} from '../constants/colors';

const parkingLots = [
  {
    name: 'ParkEase Plaza',
    description:
      'Convenient parking with easy access to attractions. Hassle-free for errands or a night out.',
  },
  {
    name: 'AutoHaven Hub',
    description:
      'Secure parking in the city center. State-of-the-art surveillance for peace of mind.',
  },
  {
    name: 'CityWheels Park-n-Go',
    description:
      'Quick and efficient urban parking. Swift entry and exit for those on the move.',
  },
  {
    name: 'UrbanDrive Depot',
    description:
      'Convenient parking near transportation hubs. Seamless transitions from road to rail.',
  },
  {
    name: 'MetroPark Junction',
    description:
      'Central hub for commuters using public transit. Shuttle services for easy connections.',
  },
];

const buildCards = (data: Array<{name: string; description: string}>) =>
  data.map(({name, description}, i) => (
    <Card heading={name} description={description} withImage={true} key={i} />
  ));

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={[styles.header, styles.boldHeader]}>Find Your</Text>
        <Text style={[styles.header, styles.lightHeader]}>
          Next Reservation
        </Text>
        <HorizontalScrolleable components={buildCards(parkingLots)} />
        <Searchbar />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: background.main,
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    fontSize: 40,
  },
  boldHeader: {
    fontWeight: 'bold',
  },
  lightHeader: {
    fontWeight: '300',
  },
});
