import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import BackIcon from './backicon.jsx';
import CreditCardIcon from '../components/creditcard_icon.jsx';
import BankIcon from '../components/bank_icon.jsx';

const BankCard = () => {
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  const handleAddCard = (type) => {
    alert(`Add new ${type}`);
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
        <Text style={styles.title}>Bank Accounts / Cards</Text>
      </View>

      {/* Content */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Credit / Debit Card Section */}
        <Text style={styles.sectionLabel}>Credit / Debit Card</Text>
        
        <TouchableOpacity 
          style={styles.addCardButton}
          onPress={() => handleAddCard('credit/debit card')}
          activeOpacity={0.7}
        >
          <View style={styles.cardIconContainer}>
            <CreditCardIcon width={36} height={28} />
          </View>
          <Text style={styles.addCardText}>+ Add New Card</Text>
        </TouchableOpacity>

        {/* Bank Account Section */}
        <Text style={styles.sectionLabel}>Bank Account</Text>
        
        <TouchableOpacity 
          style={styles.addCardButton}
          onPress={() => handleAddCard('bank account')}
          activeOpacity={0.7}
        >
          <View style={styles.cardIconContainer}>
            <BankIcon width={32} height={24} />
          </View>
          <Text style={styles.addCardText}>+ Add New Account</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default BankCard;

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
    color: '#000',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#fafbfc',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  sectionLabel: {
    fontSize: 13,
    color: '#888',
    backgroundColor: '#f5f5f5',
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontWeight: '500',
    marginTop: 0,
  },
  addCardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  cardIconContainer: {
    marginRight: 12,
  },
  addCardText: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
  },
});