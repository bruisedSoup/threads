import { View, Text, StyleSheet, Icon, TouchableOpacity } from 'react-native'
import React from 'react'

const CircledIcon = ({icon: Icon, color, size, padding, onPress}) => {
  return (
    <TouchableOpacity style={[styles.icon, { padding: padding }]} onPress={onPress}>
      <Icon color={color} size={size}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  icon: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default CircledIcon