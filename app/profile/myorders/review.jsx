import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import BackIcon from '../backicon.jsx'; 

const ReviewScreen = () => {
  const router = useRouter();

  const handleBackPress = () => {
    router.back(); 
  };

  return (
    <View style={styles.container}>
      {/* Back Button with SVG Icon */}
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={handleBackPress}
        activeOpacity={0.7}
      >
        <BackIcon width={30} height={30} />
      </TouchableOpacity>

      <Text style={styles.title}>Review</Text>
      
      {/* Add your unpaid orders content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 37,
    left: 20,
    padding: 10,
    zIndex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    position: 'absolute',
    top: 50,
  },
});

export default ReviewScreen;