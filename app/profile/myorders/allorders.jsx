import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import BackIcon from '../backicon';
import CustomSearchBar from '../../components/CustomSearch';
import EmptyIcon from '../../components/empty';
import ProductSuggestions from '../../components/ProductSuggestions';
import { products } from '../../data/product';
import StoreIcon from '../../components/storeicon';


const AllOrders = () => {
  const { initialTab } = useLocalSearchParams();
  const [activeTab, setActiveTab] = useState(initialTab || 'All orders');
  const router = useRouter();

  const handleBackPress = () => router.back();

  const tabs = [
    { key: 'All orders', label: 'All orders' },
    { key: 'Unpaid', label: 'Unpaid' },
    { key: 'Processing', label: 'Processing' },
    { key: 'Shipped', label: 'Shipped' },
    { key: 'Review', label: 'Review' },
    { key: 'Returns', label: 'Returns' },
  ];

  // Sample orders (mock logic; adjust as needed)
  const orders = [
    {
      id: 'GSHWN16Q002N24',
      status: 'Delivered',
      storeName: 'Dazy Weekend',
      image: require('../../../assets/clothing/tops/blue_corset_top.png'),
    },
  ];

  const productsFlat = products.flatMap(store =>
    store.products.map(product => ({
      ...product,
      storeName: store.storeName,
    }))
  );

  // Helper for rendering order or empty block
  const renderOrderContent = () => (
    <ScrollView contentContainerStyle={styles.ordersContent}>
      {orders.map(order => (
        <View key={order.id} style={styles.orderCard}>
          <Text style={styles.statusText}>{order.status}</Text>
          <Text style={styles.orderIdText}>Order # {order.id}</Text>
          <View style={styles.storeInfo}>
            <StoreIcon width={20} height={20} style={styles.storeIcon} />
            <Text style={styles.storeName}>{order.storeName}</Text>
          </View>
          <Image source={order.image} style={styles.productImage} />
          <TouchableOpacity style={styles.reviewButton}>
            <Text style={styles.reviewButtonText}>Review</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );

  const renderEmptyBlock = () => (
    <View style={styles.ordersContent}>
      <View style={styles.orderCard}>
        <View style={styles.emptyContainer}>
          <EmptyIcon style={styles.emptyIcon} />
          <Text style={styles.emptyText}>It is empty here :-(</Text>
        </View>
      </View>
    </View>
  );

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
        <Text style={styles.title}>My Orders</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBarBox}>
          <CustomSearchBar placeholder="Search my orders" />
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsContent}
        >
          {tabs.map((tab, idx) => (
            <TouchableOpacity
              key={tab.key}
              style={[
                styles.tab,
                idx !== tabs.length - 1 ? styles.tabMargin : null,
              ]}
              onPress={() => setActiveTab(tab.key)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab.key && styles.activeTabText,
                ]}
              >
                {tab.label}
              </Text>
              {activeTab === tab.key && <View style={styles.activeTabIndicator} />}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Content Per Tab */}
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        <View>
          {activeTab === 'All orders' && (
            <>
              {orders.length > 0 ? renderOrderContent() : renderEmptyBlock()}
              <ProductSuggestions
                products={productsFlat}
                title="You May Also Like"
                style={{ marginTop: 16 }}
              />
            </>
          )}

          {activeTab === 'Unpaid' && (
            <>
              {renderEmptyBlock()}
              <ProductSuggestions
                products={productsFlat}
                title="You May Also Like"
                style={{ marginTop: 16 }}
              />
            </>
          )}

          {activeTab === 'Processing' && (
            <>
              {renderEmptyBlock()}
              <ProductSuggestions
                products={productsFlat}
                title="You May Also Like"
                style={{ marginTop: 16 }}
              />
            </>
          )}

          {activeTab === 'Shipped' && (
            <>
              {renderEmptyBlock()}
              <ProductSuggestions
                products={productsFlat}
                title="You May Also Like"
                style={{ marginTop: 16 }}
              />
            </>
          )}

          {activeTab === 'Review' && (
            <>
              {renderOrderContent()}
              <ProductSuggestions
                products={productsFlat}
                title="You May Also Like"
                style={{ marginTop: 16 }}
              />
            </>
          )}

          {activeTab === 'Returns' && (
            <>
              {renderEmptyBlock()}
              <ProductSuggestions
                products={productsFlat}
                title="You May Also Like"
                style={{ marginTop: 16 }}
              />
            </>
          )}
        </View>
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
    backgroundColor: '#fff',
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
  searchContainer: {
    alignItems: 'center',
    width: '90%',
    paddingTop: 16,
    paddingBottom: 8,
  },
  searchBarBox: {
    width: '90%',
  },
  tabsWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    backgroundColor: '#fff',
  },
  tabsContent: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  tab: {
    paddingVertical: 12,
    position: 'relative',
    minWidth: 80,
    alignItems: 'center',
  },
  tabMargin: {
    marginRight: 24,
  },
  tabText: {
    fontSize: 15,
    color: '#999',
    fontWeight: '400',
  },
  activeTabText: {
    color: '#000',
    fontWeight: '500',
  },
  activeTabIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: '#000',
    borderRadius: 2,
    zIndex: 2,
  },
  ordersContent: {
    paddingBottom: 24,
    paddingTop: 8,
    paddingHorizontal: 16,
    flexGrow: 1,
  },
  orderCard: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f5f5f5',
  },
  statusText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  orderIdText: {
    fontSize: 13,
    color: '#999',
    marginBottom: 16,
  },
  storeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  storeIcon: {
    width: 20,
    height: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    marginRight: 8,
  },
  storeName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  productImage: {
    width: 104,
    height: 139,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#f5f5f5',
    resizeMode: 'cover',
  },
  reviewButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#000',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 4,
  },
  reviewButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 150,
  },
  emptyIcon: {
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
});

export default AllOrders;
