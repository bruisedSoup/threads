import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import BackIcon from './backicon.jsx'; 

const NewAddress = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [region, setRegion] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [streetAddress, setStreetAddress] = useState('');

  const handleBackPress = () => {
    router.back();
  };

  const handleSubmit = () => {
    // Handle form submission
    alert('Address submitted');
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
        <Text style={styles.title}>New Address</Text>
      </View>

      {/* Content */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Section Label */}
        <Text style={styles.sectionLabel}>Address</Text>

        {/* Form Fields */}
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#c0c0c0"
            value={fullName}
            onChangeText={setFullName}
          />
          
          <View style={styles.divider} />
          
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="#c0c0c0"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
          
          <View style={styles.divider} />
          
          <TouchableOpacity style={styles.inputRow}>
            <TextInput
              style={[styles.input, styles.inputWithArrow]}
              placeholder="Region, Province, City, Barangay"
              placeholderTextColor="#c0c0c0"
              value={region}
              onChangeText={setRegion}
              editable={false}
            />
            <Text style={styles.arrowIcon}>›</Text>
          </TouchableOpacity>
          
          <View style={styles.divider} />
          
          <TextInput
            style={styles.input}
            placeholder="Postal Code"
            placeholderTextColor="#c0c0c0"
            value={postalCode}
            onChangeText={setPostalCode}
            keyboardType="numeric"
          />
          
          <View style={styles.divider} />
          
          <TextInput
            style={styles.input}
            placeholder="Street name, Building, House No."
            placeholderTextColor="#c0c0c0"
            value={streetAddress}
            onChangeText={setStreetAddress}
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default NewAddress;

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
    backgroundColor: '#fff'
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
    color: '#000'
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#fafbfc',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  sectionLabel: {
    color: '#000',
    fontSize: 13,
    backgroundColor: '#f7f7f9',
    paddingTop: 18,
    paddingBottom: 6,
    paddingLeft: 16,
    fontWeight: '600',
    borderBottomWidth: 1,
    borderBottomColor: '#ececec',
  },
  formContainer: {
    backgroundColor: '#fff',
    marginTop: 0,
  },
  input: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    fontSize: 15,
    color: '#000',
    backgroundColor: '#fff',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inputWithArrow: {
    flex: 1,
  },
  arrowIcon: {
    fontSize: 24,
    color: '#c0c0c0',
    paddingRight: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginLeft: 16,
  },
  submitButton: {
    backgroundColor: '#2c2c2c',
    marginHorizontal: 16,
    marginTop: 320,
    paddingVertical: 16,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  }
});