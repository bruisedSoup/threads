import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({size, iconColor, 
                       name, icon: Icon,
                       containerStyle, textStyle,
                       strokeWidth, onPress
                     }) => {
  return (
    <TouchableOpacity style={containerStyle ? containerStyle : defaultStyles.container} onPress={onPress}>
      {Icon && <Icon size={size} color={iconColor} strokeWidth={strokeWidth ? strokeWidth : 1.5} />}
      <Text style={textStyle}>{name}</Text>
    </TouchableOpacity>
  )
}

const defaultStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    padding: 7,
    borderRadius: 10,
    marginRight: 10,
    gap: 5,
    borderWidth: 1,
  },
})

export default CustomButton