import { View, Text } from 'react-native'
import React from 'react'

const HorizontalLine = (props) => {
  return (
    <View style={[styles.line, {marginVertical: props.marginTop}]} />
  )
}
const styles = {
  line: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#dfdfdfff',
  }
}

export default HorizontalLine