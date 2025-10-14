import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import BackIcon from './backicon.jsx';

const Email = () => {
  const router = useRouter();
  const [newEmail, setNewEmail] = useState('');

  const handleBackPress = () => {
    router.back();
  };

  const handleSavePress = () => {
    if (newEmail.trim() !== '') {
      // Example action (you can replace this with your own logic)
      alert(`Email updated to: ${newEmail}`);
      setNewEmail('');
    }
  };

  const isButtonActive = newEmail.trim() !== '';

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
        <Text style={styles.title}>Change Email</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Current Email</Text>
          <View style={styles.inputBox}>
            <Text style={styles.placeholderText}>i********s@yahoo.com</Text>
          </View>

          <Text style={styles.sectionLabel}>New Email</Text>
          {/* Touchable TextInput */}
          <TouchableOpacity activeOpacity={1}>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter new email"
                placeholderTextColor="#999"
                keyboardType="email-address"
                value={newEmail}
                onChangeText={setNewEmail}
              />
            </View>
          </TouchableOpacity>

          {/* Save Button */}
          <TouchableOpacity 
            style={[
              styles.saveButton, 
              { backgroundColor: isButtonActive ? '#000' : '#ccc' }
            ]}
            onPress={handleSavePress}
            activeOpacity={isButtonActive ? 0.8 : 1}
            disabled={!isButtonActive}
          >
            <Text style={styles.saveButtonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </View>
  );
};

export default Email;

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
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  section: {
    marginTop: 24,
  },
  sectionLabel: {
    fontSize: 14,
    color: '#999',
    marginBottom: 6,
    fontWeight: '500',
  },
  inputBox: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  placeholderText: {
    fontSize: 15,
    color: '#666',
  },
  textInput: {
    fontSize: 15,
    color: '#000',
  },
  saveButton: {
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomSpacer: {
    height: 40,
  },
});
