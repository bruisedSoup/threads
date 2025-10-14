import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import BackIcon from './backicon.jsx';
import ExpandIcon from '../components/expandicon.jsx'; 

const AccountSecurity = () => {
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  const handleMyProfilePress = () => {
    router.push('/profile/userprofile');
  };

  const handlePhonePress = () => {
    router.push('/profile/phone');
  };

  const handleEmailPress = () => {
    router.push('/profile/email');
  };

  const handleSocialMediaPress = () => {
    router.push('/profile/socmed');
  };

  const handleChangePasswordPress = () => {
    router.push('/profile/password');
  };

  const SettingsItem = ({ label, onPress, showExpandIcon = true, rightText }) => (
    <TouchableOpacity 
        style={styles.settingsItem} 
        onPress={onPress}
        activeOpacity={0.7}
    >
        <View style={styles.itemRow}>
        <Text style={styles.settingsItemText}>{label}</Text>
        <View style={styles.rightGroup}>
            {rightText ? <Text style={styles.rightText}>{rightText}</Text> : null}
            {/* Always reserve space for expand icon */}
            {showExpandIcon ? (
            <ExpandIcon style={styles.expandIcon} />
            ) : (
            <View style={[styles.expandIcon, { width: 24, height: 24 }]} /> // Invisible placeholder for alignment
            )}
        </View>
        </View>
    </TouchableOpacity>
    );

  const SectionHeader = ({ title }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={handleBackPress}
          activeOpacity={0.7}
        >
          <BackIcon width={24} height={24} />
        </TouchableOpacity>
        <Text style={styles.title}>Account & Security</Text>
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <SectionHeader title="Account" />
        <SettingsItem label="My Profile" onPress={handleMyProfilePress}/>
        <SettingsItem label="Username" showExpandIcon={false} rightText="User Uno"/>
        <SettingsItem label="Phone" onPress={handlePhonePress} rightText="*******4148"/>
        <SettingsItem label="Email" rightText="i********s@yahoo.com" onPress={handleEmailPress}/>
        <SettingsItem 
          label="Social Media Accounts" 
          onPress={handleSocialMediaPress}
        />
        <SettingsItem 
          label="Change Password" 
          onPress={handleChangePasswordPress}
        />

        <View style={styles.bottomSpacer} />
      </ScrollView>

    </View>
  );
};

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
    paddingBottom: 20,
  },
  sectionHeader: {
    fontSize: 12,
    color: '#999',
    marginTop: 24,
    marginBottom: 8,
    marginLeft: 16,
    fontWeight: '500',
  },
  settingsItem: {
    flexDirection: 'row',           
    alignItems: 'center',           
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    },
  settingsItemText: {
    fontSize: 15,
    color: '#000',
   },
  expandIcon: {
    marginLeft: 10,                 
  },
  rightText: {
    fontSize: 15,
    color: '#666',
},
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
},
rightGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 80, // Ensures expand icon always has space
    justifyContent: 'flex-end',
},

});

export default AccountSecurity;