import { View, Text, StyleSheet, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from "@expo/vector-icons";
import React from 'react'

const WelcomeHeader = (props) => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <View>
        <Text style={styles.greetingText}>Hello, Welcome👋</Text>
        <Text style={styles.userNameText}>{capitalize(props.name)}</Text>
      </View>
      <View>
        <Ionicons name="person-circle-outline" size={50} color="black" />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,     
    },

    greetingText:{
        fontSize: 16,
        color: '#888',
    },

    userNameText:{
        fontSize: 30,
        fontWeight: 'bold',
    },

    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 50,
    }
})

const capitalize = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

export default WelcomeHeader