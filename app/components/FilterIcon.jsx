import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const FilterIcon = ({ backgroundColor, size, iconColor, 
                      textColor, name, textSize, icon: Icon,
                      borderColor, containerStyle, textStyle
                     }) => {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor, borderColor}]}>
      <Icon size={size} color={iconColor} strokeWidth={1.5} />
      <Text style={{ color: textColor, fontSize: textSize }}>{name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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

export default FilterIcon