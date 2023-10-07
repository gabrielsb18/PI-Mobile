import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home/Home';
import Routes from './src/routers';

import RouterTab from './src/routers/routerTab';

export default function App() {
  return (
    // <Home/>
    <Routes/>
  );
};