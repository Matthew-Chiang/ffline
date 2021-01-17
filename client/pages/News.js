import SearchResultsCard from '../components/SearchResultsCard';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomSearchBar from '../components/SearchBar';
import {Image} from 'react-native';

export default function News() {
  return (
    <View style={styles.main}>
      <Image source={require('../assets/NewsResults.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    //flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: '20',
    // textAlign: 'center',
    //paddingLeft: 20,
    //paddingRight: 20,
    //paddingTop: 300
  },

 
});
