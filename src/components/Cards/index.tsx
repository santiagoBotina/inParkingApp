import React, {memo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface Props {
  heading: string;
  description: string;
  withImage?: boolean;
}

function Component({heading, description, withImage}: Props) {
  return (
    <View style={[styles.card, styles.elevation]}>
      {withImage && (
        <Image
          style={styles.image}
          source={require('../../../assets/garage_1.jpg')}
        />
      )}
      <Text style={styles.heading}>{heading}</Text>
      <Text>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '40%',
  },
  card: {
    maxHeight: 350,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 30,
    paddingTop: 25,
    paddingHorizontal: 25,
    marginVertical: 10,
    marginRight: 10,
    marginLeft: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  elevation: {
    elevation: 20,
    shadowColor: '#000',
  },
  heading: {
    fontSize: 25,
    fontWeight: '600',
    marginBottom: 13,
    color: 'black',
    fontFamily: 'Galano Grotesque',
  },
});

const Card = memo(Component);

export {Card};
