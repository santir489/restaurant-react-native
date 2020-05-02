import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import yelp from '../api/yelp';

const ResultShowScreen = ({ route }) => {
  const { itemId } = route.params;
  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  }

  useEffect(() => {
    getResult(itemId);
  }, []);

  if (!result){
    return null;
  }

  return (
    <View style = {styles.screen}>
        <Text> id : { itemId }, name: {result.name} </Text>
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
