import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import BackIcon from '../backicon';
import CartIcon from '../wishlist/carticon';
import FollowingsIcon from '../wishlisticon/followingsicon.jsx';

const followingData = [
  {
    id: '1',
    shopName: 'Dazy Weekend',
    products: [
      require('../../../assets/clothing/bottoms/grey_sweatpants.png'),
      require('../../../assets/clothing/tops/pink_strapless_top.png'),
      require('../../../assets/clothing/tops/pink_animal_shirt.png'),
      require('../../../assets/clothing/tops/blue_corset_top.png'),
    ],
  },
];

const Following = () => {
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  const handleCartPress = () => {
    router.push('/tabs/cart');
  };

  const handleShopPress = (shopId) => {
    console.log(`Navigate to shop: ${shopId}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={handleBackPress}
          activeOpacity={0.7}
        >
          <BackIcon width={30} height={30} />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Following</Text>
        
        <TouchableOpacity 
          style={styles.cartButton} 
          onPress={handleCartPress}
          activeOpacity={0.7}
        >
          <CartIcon width={24} height={24} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        {followingData.map((shop) => (
          <View key={shop.id} style={styles.shopContainer}>
            <TouchableOpacity 
              style={styles.shopHeader}
              onPress={() => handleShopPress(shop.id)}
              activeOpacity={0.7}
            >
              <FollowingsIcon width={24} height={24} />
              <Text style={styles.shopName}>{shop.shopName}</Text>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>

            <View style={styles.productsGrid}>
              {shop.products.map((product, index) => (
                <TouchableOpacity 
                  key={index} 
                  style={styles.productCard}
                  activeOpacity={0.7}
                >
                  <Image 
                    source={product} 
                    style={styles.productImage}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 47,
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  cartButton: {
    position: 'absolute',
    right: 16,
    top: 50,
    padding: 8,
  },
  scrollView: {
    flex: 1,
  },
  shopContainer: {
    backgroundColor: '#fff',
    marginBottom: 8,
    paddingVertical: 12,
  },
  shopHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  shopIcon: {
    marginRight: 10,
  },
  shopName: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  chevron: {
    fontSize: 24,
    color: '#999',
    fontWeight: '300',
  },
  productsGrid: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingTop: 8,
    gap: 8,
  },
  productCard: {
    width: '23%',
    aspectRatio: 0.75,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f8f8f8',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
});

export default Following;