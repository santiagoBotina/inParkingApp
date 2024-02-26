import React, {memo} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

function Component() {
  return (
    <View>
      <TextInput style={styles.bar} placeholder="Search near spots" />
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#d9dbda',
    padding: 13,
    borderRadius: 8,
  },
});

const Searchbar = memo(Component);

export {Searchbar};
