import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ReturnDetail from './ResultDetail'

const ResultList = ({results, title}) => {
  return (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <FlatList 
      horizontal
      showsHorizontalScrollIndicator={false}
      data={results}
      keyExtractor={(result) =>result.id}
      renderItem= {({item}) =>{ 
        return (<ReturnDetail result={item} />)
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

export default ResultList;
