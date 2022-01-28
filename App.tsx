//import liraries
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { DarkTheme, LightTheme } from './app/constants/theme';
import { RootState } from './app/redux/store';
import Home from './app/screen/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerNavigatorParams, RootStackNavigatorParams } from './app/interface/navigation';
import DrawerContent from './app/components/Drawer';

// create a component
const Stack = createNativeStackNavigator<RootStackNavigatorParams>();
const Drawer = createDrawerNavigator<DrawerNavigatorParams>();

const DrawerNavigation = () => {
  return(
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props}/>}
      initialRouteName='Home'
      screenOptions={{
        headerShown: false
      }}
    >
      <Drawer.Screen
        name='Home'
        component = {Home}
      />
    </Drawer.Navigator>
  )
}

const App: React.FC = () => {
  const { dark } = useSelector((state: RootState) => state.theme)
  return (
    <SafeAreaProvider
      style={styles.container}
    >
      <NavigationContainer
        theme={dark ? DarkTheme : LightTheme}
      >
        <Stack.Navigator
          initialRouteName='Drawer'
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen
            name='Drawer'
            component={DrawerNavigation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

//make this component available to the app
export default App;
