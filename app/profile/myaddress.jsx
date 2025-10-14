import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import BackIcon from './backicon.jsx'; 

const MyAddress = () => {
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  const handleAddAddress = () => {
    router.push('/profile/newaddress');
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
        <Text style={styles.title}>My Addresses</Text>
      </View>

      {/* Content */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Section Label */}
        <Text style={styles.sectionLabel}>Address</Text>

        {/* Address Card */}
        <View style={styles.addressCard}>
          <Text style={styles.addressName}>User Uno</Text>
          <Text style={styles.addressPhone}>+ (63) 965 401 4148</Text>
          <Text style={styles.addressDetail}>Zone 6, Cugman</Text>
          <Text style={styles.addressDetail}>
            Cagayan de Oro City, Misamis Oriental, Mindanao, 9000
          </Text>
        </View>

        {/* Add Address Button */}
        <TouchableOpacity style={styles.addAddressBtn} onPress={handleAddAddress}>
          <View style={styles.plusCircle}>
            <Text style={styles.plusText}>＋</Text>
          </View>
          <Text style={styles.addAddressText}>Add a new address</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default MyAddress;

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
    paddingHorizontal: 0,
    paddingBottom: 40,
  },
  sectionLabel: {
    color: '#999',
    fontSize: 13,
    backgroundColor: '#f7f7f9',
    paddingTop: 18,
    paddingBottom: 6,
    paddingLeft: 16,
    fontWeight: '500',
    borderBottomWidth: 1,
    borderBottomColor: '#ececec',
  },
  addressCard: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  addressName: {
    fontWeight: 'bold',
    color: '#222',
    fontSize: 15,
    marginBottom: 2,
  },
  addressPhone: {
    color: '#999',
    fontSize: 13,
    marginBottom: 6,
    fontWeight: '500',
  },
  addressDetail: {
    color: '#666',
    fontSize: 13,
    marginBottom: 1,
  },
  addAddressBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  plusCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#aaa',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  plusText: {
    fontSize: 21,
    color: '#222',
    fontWeight: '400',
    lineHeight: 22,
  },
  addAddressText: {
    fontWeight: '600',
    fontSize: 15,
    color: '#222',
  }
});
