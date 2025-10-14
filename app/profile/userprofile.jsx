import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import BackIcon from './backicon.jsx';
import ExpandIcon from '../components/expandicon.jsx'; 


const UserProfile = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  const imageMap = {
    static_avatar: require('./static_avatar.jpg'),
    // Add more images as needed
  };
  const profilePicture = imageMap[params.profilePicture] || require('./static_avatar.jpg');

  const handleBackPress = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBackPress}
          activeOpacity={0.7}
        >
          <BackIcon width={30} height={30} />
        </TouchableOpacity>

        <Text style={styles.title}>Edit Profile</Text>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.save}>Save</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.pfpContainer}>
        <Image
          source={profilePicture}
          style={{ width: 120, height: 120, borderRadius: 60, alignSelf: 'center', marginTop: 10 }}
        />
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.edit}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profileInfoCard}>
        <View style={styles.row}>
          <Text style={styles.label}>Name</Text>
          <TouchableOpacity style={styles.rightSection}>
            <Text style={styles.value}>User Uno</Text>
            <ExpandIcon style={styles.expandIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Bio</Text>
          <TouchableOpacity style={styles.rightSection}>
            <Text style={styles.setNow}>Set Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Gender</Text>
          <TouchableOpacity style={styles.rightSection}>
            <Text style={styles.setNow}>Set Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Birthday</Text>
          <TouchableOpacity style={styles.rightSection}>
            <Text style={styles.setNow}>Set Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Phone</Text>
          <TouchableOpacity style={styles.rightSection}>
            <Text style={styles.value}>********48</Text>
            <ExpandIcon style={styles.expandIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Email</Text>
          <TouchableOpacity style={styles.rightSection}>
            <View style={styles.emailRow}>
              <Text style={styles.value}>i******@yahoo.com</Text>
              <Text style={styles.verifyNow}>Verify Now</Text>
            </View>
            <ExpandIcon style={styles.expandIcon} />
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 75,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  backButton: {},
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  saveButton: {},
  save: {
    fontSize: 14,
    color: '#000',
  },
  pfpContainer: {
    paddingTop: 20,
    marginTop: 20,
    backgroundColor: '#222222',
    width: 420,
    height: 200,
  },
  editButton: {
    alignSelf: 'center', 
    marginTop: 12,       
  },
  edit: {
    fontSize: 14,
    color: '#ffffff',
  },
  profileInfoCard: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    paddingVertical: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
  },
  label: {
    fontSize: 15,
    color: '#333',
    fontWeight: '400',
  },
  value: {
    fontSize: 15,
    color: '#888',
    fontWeight: '400',
  },
  setNow: {
    fontSize: 15,
    color: '#333',
    fontWeight: '200',
    right: 25,
  },
  verifyNow: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
    marginLeft: 8,
  },
  emailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  expandIcon: {
    marginLeft: 1,
  },

});

export default UserProfile;
