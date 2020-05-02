import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ResultShowScreen = () => {

  return (
    <View style = {styles.screen}>
        <Text>ResultShow</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white'
  }
});

export default ResultShowScreen;
