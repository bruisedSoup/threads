import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import BackIcon from './backicon.jsx';

const Password = () => {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState('');

  const handleBackPress = () => {
    router.back();
  };

  const handleSavePress = () => {
    if (newPassword.trim() !== '') {
      // Example action (you can replace this with your own logic)
      alert(`Password updated to: ${newPassword}`);
      setNewPassword('');
    }
  };

  const isButtonActive = newPassword.trim() !== '';

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
        <Text style={styles.title}>Change Password</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Current Password</Text>
          <View style={styles.inputBox}>
            <Text style={styles.placeholderText}>i******a123</Text>
          </View>

          <Text style={styles.sectionLabel}>New Password</Text>
          {/* Touchable TextInput */}
          <TouchableOpacity activeOpacity={1}>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter new password"
                placeholderTextColor="#999"
                keyboardType="email-address"
                value={newPassword}
                onChangeText={setNewPassword}
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

export default Password;

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
