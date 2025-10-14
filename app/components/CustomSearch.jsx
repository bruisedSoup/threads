import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import SearchSVG from './search'; // adjust path if needed

const SCREEN_WIDTH = Dimensions.get('window').width;

const CustomSearchBar = ({ style, ...props }) => (
  <View style={[styles.wrapper, style]}>
    <SearchSVG width={SCREEN_WIDTH * 0.94} height={47} style={styles.svg} />
    <TextInput
      {...props}
      style={styles.input}
      placeholderTextColor="#AAA"
    />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: 47, // matches SVG height
  },
  svg: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 0,
  },
  input: {
    width: '90%',           // covers most of the SVG width, floats over it
    height: 47,
    fontSize: 16,
    paddingLeft: 40,        // if you want some padding on the left
    backgroundColor: 'transparent',
    color: '#000',
    borderRadius: 7,
    zIndex: 1,
  },
});

export default CustomSearchBar;
