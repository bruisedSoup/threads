import { View, Text } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import React from 'react'

const CustomIcon = (props) => {
  return (
    <View>
      <Ionicons name={props.iconName} size={props.size} color={props.color} />
    </View>
  )
}

export default CustomIcon

