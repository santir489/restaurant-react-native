import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, errorMsg, searchApi] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price == price; 
    }) ;
  }


  return (
    <View style = {styles.screen}>
      <SearchBar term={term} 
        onTermChange={ setTerm } 
        onTermSubmit={ () => searchApi(term) }  
      />
      { errorMsg ? <Text>{errorMsg}</Text> : null }
      <ScrollView>
        <ResultList 
          results={filterResultsByPrice('$')} 
          title="Cost effective"
        />
        <ResultList 
          results={filterResultsByPrice('$$')} 
          title="Bit pricier"
        />
        <ResultList 
          results={filterResultsByPrice('$$$')} 
          title="Big spender"
        />
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white'
  }
});

export default SearchScreen;
