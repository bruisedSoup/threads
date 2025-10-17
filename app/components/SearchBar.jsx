import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context'
import Filter from './AdvancedFilterIcon'
import React from 'react'
  
const SearchBar = ({ placeholder, value, onChangeText, onPress }) => {
  const handleClear = () => {
    if (onChangeText) {
      onChangeText("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Ionicons name="search-outline" size={20} color="black" style={styles.searchIcon} />
        <TextInput 
          placeholder={placeholder} 
          style={styles.searchInput}
          value={value}
          onChangeText={onChangeText}
        />
        {value && value.length > 0 && (
          <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
            <Ionicons name="close-circle" size={20} color="#888" />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.filterIconContainer}> 
        <TouchableOpacity onPress={onPress}>
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
        flex: 1,
    },

    searchIcon: {
        marginLeft: 10,
    },

    clearButton: {
        padding: 5,
        marginLeft: 5,
    },
    
})

export default SearchBar