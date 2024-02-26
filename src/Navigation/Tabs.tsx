import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {ReactNode, memo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {background} from '../constants/colors';
import {IMAGES_ICONS} from '../constants/images';
import {routes} from './routes';

const Tab = createBottomTabNavigator();

function TabIcon(name: string, focused: boolean) {
  return (
    <View style={[styles.tabContainer]}>
      <Image
        style={styles.tabIcon}
        source={IMAGES_ICONS[name as keyof typeof IMAGES_ICONS]}
      />
      {focused && <Text style={styles.focused}>-</Text>}
    </View>
  );
}
const buildTabs = (): ReactNode[] => {
  return routes.map(({name, component}, index) => (
    <Tab.Screen
      key={index}
      name={name}
      component={component}
      options={{
        tabBarIcon: ({focused}) => TabIcon(name, focused),
      }}
    />
  ));
};

const Component = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: background.navBar.main,
          position: 'absolute',
          elevation: 10,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
          height: 80,
        },
      }}>
      {buildTabs()}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  navigator: {
    color: 'white',
  },
  tabContainer: {
    alignItems: 'center',
    width: '60%',
    borderRadius: 50,
    padding: 10,
  },
  tabIcon: {
    width: 25,
    height: 25,
  },
  focused: {
    position: 'absolute',
    fontSize: 30,
    top: 20,
  },
  plusSign: {
    marginTop: -5,
    fontSize: 20,
  },
});

export const BottomNavbar = memo(Component);
