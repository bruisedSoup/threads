import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { useRouter } from 'expo-router'

const StaticAvatar = require('../profile/static_avatar.jpg')

const WelcomeHeader = (props) => {
  const router = useRouter();

  const handleOnPress = () => {
    router.push('/tabs/profile'); // adapt path if needed
  };

  return (
    <SafeAreaView style={styles.headerContainer}>
      <View>
        <Text style={styles.greetingText}>Hello, Welcome👋</Text>
        <Text style={styles.userNameText}>{capitalize(props.name)}</Text>
      </View>
      <TouchableOpacity onPress={handleOnPress}>
        <Image source={StaticAvatar} style={styles.profileImage} />
      </TouchableOpacity>
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

  greetingText: {
    fontSize: 16,
    color: '#888',
  },

  userNameText: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  profileImage: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    resizeMode: 'cover',
  }
})

const capitalize = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export default WelcomeHeader
