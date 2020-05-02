import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from '@react-navigation/compat';
import ReturnDetail from './ResultDetail'

const ResultList = ({results, title, navigation}) => {
  return (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <FlatList 
      horizontal
      showsHorizontalScrollIndicator={false}
      data={results}
      keyExtractor={(result) =>result.id}
      renderItem= {({item}) =>{ 
        return (
          <TouchableOpacity onPress={() => navigation.navigate('ResultShow')}>
            <ReturnDetail result={item} />
          </TouchableOpacity> 
        );
       }}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15
  },
  title: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  }
});

export default withNavigation(ResultList);
