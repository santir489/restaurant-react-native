import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native';

const ResulDetail = ({ result }) => {
  return (
  <View style={styles.container}>
    <Image style={styles.image} source={ { uri: result.image_url } }/>
    <Text style={styles.name}>{result.name}</Text>
    <Text >{result.rating} Stars, {result.review_count} Reviews</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 15,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14
  }
});

export default ResulDetail;
