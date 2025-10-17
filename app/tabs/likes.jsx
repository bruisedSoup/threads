import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BackIcon from '../profile/backicon';
import { useRouter } from 'expo-router';
import CartIcon from '../profile/wishlist/carticon';
import useIconStore from '../stores/iconStore';
import MasonryList from '@react-native-seoul/masonry-list';
import ProductCard from '../components/ProductCard';

const Likes = () => {
  const router = useRouter();
  const { favorites } = useIconStore();

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Wishlist</Text>
        <TouchableOpacity style={styles.cartIcon} onPress={() => router.push('/tabs/cart')}>
          <CartIcon />
        </TouchableOpacity>
      </View>

      {/* Horizontal line below header */}
      <View style={styles.headerDivider} />

      {/* Items count and line */}
      <View style={styles.numlikesContainer}>
        <Text style={styles.likedCount}>
          Items({favorites.length})
        </Text>
        <View style={styles.divider} />
      </View>

      {/* Products grid */}
      <MasonryList
        data={favorites}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <ProductCard
              key={item.id}
              {...item}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginTop: 35,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartIcon: {
    position: 'absolute',
    right: 12,
    zIndex: 1,
  },
  // 🔹 Added gray line below header (like the Following screen)
  headerDivider: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    width: '100%',
  },
  numlikesContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
    marginTop: 10,
    backgroundColor: '#fff',
    left: -145,
  },
  likedCount: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    paddingVertical: 4,
    paddingHorizontal: 14,
    backgroundColor: '#fff',
    borderRadius: 14,
  },
  divider: {
    width: '17%',
    height: 5,
    backgroundColor: 'black',
    alignSelf: 'center',
    marginTop: 2,
    marginBottom: 6,
  },
  productContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});

export default Likes;
