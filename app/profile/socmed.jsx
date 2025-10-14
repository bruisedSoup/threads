import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import BackIcon from './backicon.jsx';

const SocMed = () => {
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  const handleSocMedPress = (selectedProvider) => {
    Alert.alert(
      `"Threads" Wants to Use "${selectedProvider === 'facebook' ? 'facebook.com' : 'google.com'}" to Sign In`,
      'This allows the app and website to share information about you.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Continue' }
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={handleBackPress}
          activeOpacity={0.7}
        >
          <BackIcon width={24} height={24} />
        </TouchableOpacity>
        <Text style={styles.title}>Social Media Accounts</Text>
      </View>

      {/* Social Media List */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.socmedItemWrapper}>
          <TouchableOpacity style={styles.socmedItem} onPress={() => handleSocMedPress('facebook')}>
            <Image
              source={require('../../assets/images/facebook.png')}
              style={styles.icon}
            />
            <Text style={styles.socmedText}>Click to connect</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socmedItem} onPress={() => handleSocMedPress('google')}>
            <Image
              source={require('../../assets/images/google.png')}
              style={styles.icon}
            />
            <Text style={styles.socmedText}>Click to connect</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SocMed;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    position: 'absolute',
    left: 16,
    top: 45,
    padding: 8,
    zIndex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 12,
    paddingHorizontal: 0,
    backgroundColor: '#fafbfc',
    minHeight: 800,
  },
  socmedItemWrapper: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  socmedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    backgroundColor: '#fff',
  },
  socmedText: {
    marginLeft: 12,
    fontSize: 15,
    color: '#666',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  }
});
