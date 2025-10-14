import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackIcon from '../profile/backicon';
import { useRouter } from 'expo-router';
import CartIcon from '../profile/wishlist/carticon';

const IMAGE_HEIGHTS = [250, 270, 290];

const wishlistData = [
  {
    id: '1',
    title: 'Casual Minimalist Drawstring Sweatpants',
    price: 428,
    rating: 4.0,
    image: require('../../assets/clothing/bottoms/grey_sweatpants.png'),
  },
  {
    id: '2',
    title: 'Strapless Floral Print',
    price: 147.75,
    rating: 5.0,
    image: require('../../assets/clothing/tops/pink_strapless_top.png'),
  },
  {
    id: '3',
    title: 'Round neck animal print',
    price: 250,
    rating: 4.2,
    image: require('../../assets/clothing/tops/pink_animal_shirt.png'),
  },
  {
    id: '4',
    title: 'Blue Corset Top',
    price: 180,
    rating: 4.8,
    image: require('../../assets/clothing/tops/blue_corset_top.png'),
  },
];

// Randomly assign image heights for masonry effect
const assignImageHeights = (array) => {
  return array.map(item => ({
    ...item,
    imageHeight: IMAGE_HEIGHTS[Math.floor(Math.random() * IMAGE_HEIGHTS.length)],
  }));
};

const shuffleArray = (array) => {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
};

const Likes = () => {
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(assignImageHeights(shuffleArray(wishlistData)));
  }, []);

  // Only wrap the card in TouchableOpacity, no style changes!
  const renderItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.105}
    >
      <View style={styles.card}>
        <Image
          source={item.image}
          style={[styles.itemImage, { height: item.imageHeight }]}
          resizeMode="cover"
        />
        <View style={styles.cardContent}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemPrice}>{`Php${item.price}`}</Text>
          {item.rating && (
            <View style={styles.ratingContainer}>
              <Text style={styles.star}>⭐</Text>
              <Text style={styles.itemRating}>{item.rating}</Text>
            </View>
          )}
        </View>
        <TouchableOpacity style={styles.heartButton}>
          <Icon name="heart" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backIcon} onPress={() => router.push('/tabs/profile')}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.headerText}>Wishlist</Text>
        <TouchableOpacity style={styles.cartIcon} onPress={() => router.push('/tabs/cart')}>
          <CartIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.numlikesContainer}>
        <Text style={styles.likedCount}>
          Items({data.length})
        </Text>
        <View style={styles.divider} />
      </View>
      <MasonryList
        data={data}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 8 }}
        showsVerticalScrollIndicator={false}
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
  backIcon: {
    position: 'absolute',
    left: 12,
    zIndex: 1,
  },
  cartIcon: {
    position: 'absolute',
    right: 12,
    zIndex: 1,
  },
  numlikesContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
    marginTop: 0,
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 6,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    overflow: 'hidden',
    width: '85%',
    alignSelf: 'center',
  },
  itemImage: {
    width: '100%',
    borderRadius: 12,
  },
  cardContent: {
    padding: 12,
    paddingBottom: 16,
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
    lineHeight: 18,
  },
  itemPrice: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    fontSize: 12,
    marginRight: 4,
  },
  itemRating: {
    fontSize: 12,
    color: '#666',
  },
  heartButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#292526',
    borderRadius: 20,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heartIcon: {
    fontSize: 16,
    color: '#fff',
  },
});

export default Likes;
