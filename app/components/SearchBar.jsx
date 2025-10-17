import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context'
import Filter from './AdvancedFilterIcon'
import React from 'react'
  
const SearchBar = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Ionicons name="search-outline" size={20} color="black" style={styles.searchIcon} />
        <TextInput placeholder={props.placeholder} style={styles.searchInput} />
      </View>
      <View style={styles.filterIconContainer}> 
        <TouchableOpacity onPress={props.onPress}>
          <Filter width={52} height={52} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        gap: 20,
    },

    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        padding: 5,
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
})

export default SearchBar