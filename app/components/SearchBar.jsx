import { View, Text, TextInput, StyleSheet, } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
  
const SearchBar = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Ionicons name="search-outline" size={20} color="black" style={styles.searchIcon} />
        <TextInput placeholder={props.placeholder} style={styles.searchInput} />
      </View>
      <View style={styles.filterIconContainer}> 
        <Ionicons name="options-outline" size={30} color="white" style={styles.filterIcon}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 13,
        gap: 10,
    },

    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        padding: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        flex: 1,
    },

    searchInput: {
        marginLeft: 10,
        fontSize: 16,
    },

    searchIcon: {
        marginLeft: 10,
    },

    filterIconContainer: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#000000ff',
    },
    
})

export default SearchBar