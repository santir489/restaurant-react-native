import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

Icon.loadFont();

const SearchBar = ( {term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Icon name="search" style={styles.iconSearch} color="black" />
      <TextInput style={styles.inputStyle} placeholder='search'
        value={term}
        onChangeText={onTermChange}
        onEndEditing= {onTermSubmit} 
      />
    </View>
  )
};

const styles = StyleSheet.create({
  background: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row'
  },
  inputStyle: {
    fontSize: 18,
    flex: 1
  },
  iconSearch: {
    fontSize: 30,
    alignSelf: 'center',
    marginHorizontal: 10
  }
});

export default SearchBar;
