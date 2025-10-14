import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

import SettingsIcon from '../../app/profile/settingsicon.jsx';
import UnpaidIcon from '../../app/profile/myordersicon/unpaidicon.jsx';
import ProcessingIcon from '../../app/profile/myordersicon/processingincon.jsx';
import ShippedIcon from '../../app/profile/myordersicon/shippedicon.jsx';
import ReviewIcon from '../../app/profile/myordersicon/reviewicon.jsx';
import ReturnsIcon from '../../app/profile/myordersicon/returnsicon.jsx';
import WishlistIcon from '../../app/profile/wishlisticon/wishlisticon.jsx';
import FollowingsIcon from '../../app/profile/wishlisticon/followingsicon.jsx';

import MasonryList from '@react-native-seoul/masonry-list';
import Icon from 'react-native-vector-icons/FontAwesome';

const IMAGE_HEIGHTS = [250, 270, 290];

// wishlist data
const wishlistData = [
  {
    id: '1',
    title: 'Summer Cami Top',
    price: 428,
    rating: 4.0,
    image: require('../../assets/clothing/tops/summer_cami.jpg'),
  },
  {
    id: '2',
    title: 'Lace-A line skirt',
    price: 147.75,
    rating: 5.0,
    image: require('../../assets/clothing/bottoms/lace_skirt.jpg'),
  },
  {
    id: '3',
    title: 'Fairycore Camisole Top',
    price: 250,
    rating: 4.2,
    image: require('../../assets/clothing/tops/fairycore.jpg'),
  },
  {
    id: '4',
    title: 'Blue Corset Top',
    price: 180,
    rating: 4.8,
    image: require('../../assets/clothing/tops/blue_corset_top.png'),
  },
];

// Randomly assign image heights for the masonry effect
const assignImageHeights = array =>
  array.map(item => ({
    ...item,
    imageHeight: IMAGE_HEIGHTS[Math.floor(Math.random() * IMAGE_HEIGHTS.length)],
  }));

const Profile = () => {
  const router = useRouter();

  const handleSettingsPress = () => {
    router.push('/profile/settings');
  };

  const handleAvatarPress = () => {
    router.push({
      pathname: '/profile/userprofile',
      params: {
        profilePicture: 'static_avatar',
      }
    }); 
  };

  const handleTabPress = route => {
    router.push(route);
  };

  const userData = {
    name: 'User One',
    username: 'My Profile',
    profilePicture: require('../../app/profile/static_avatar.jpg'),
  };

  //product list with random image heights
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(assignImageHeights(wishlistData));
  }, []);

  const renderProduct = ({ item }) => (
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
    <View style={styles.container}>
      {/* Fixed Header */}
      <View style={styles.fixedHeader}>
        <TouchableOpacity style={styles.settingsButton} onPress={handleSettingsPress}>
          <SettingsIcon width={27} height={27} />
        </TouchableOpacity>

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <TouchableOpacity
            style={styles.avatarContainer}
            onPress={handleAvatarPress}
            activeOpacity={0.7}
          >
            <Image
              source={userData.profilePicture}
              style={styles.avatar}
              defaultSource={require('../../app/profile/static_avatar.jpg')}
            />
          </TouchableOpacity>
          <View style={styles.userInfo}>
            <Text style={styles.title}>{userData.name}</Text>
            <Text style={styles.prof}>{userData.username}</Text>
          </View>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
        bounces={false}
        style={styles.scrollView}
      >
        {/* My Orders Section */}
        <View style={styles.myOrders}>
          <View style={styles.ordersContainer}>
            <Text style={styles.myOrdersTitle}>My Orders</Text>
            <TouchableOpacity
              style={styles.viewAllButton}
              onPress={() => handleTabPress('/profile/myorders/allorders')}
              activeOpacity={0.7}
            >
              <Text style={styles.viewAllText}>View all &gt;</Text>
            </TouchableOpacity>
            <View style={styles.tabsContainer}>
              <TouchableOpacity
                style={styles.tab}
                onPress={() => handleTabPress('/profile/myorders/allorders?initialTab=Unpaid')}
                activeOpacity={0.7}
              >
                <UnpaidIcon width={26} height={26} />
                <Text style={styles.tabText}>Unpaid</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.tab}
                onPress={() => handleTabPress('/profile/myorders/allorders?initialTab=Processing')}
                activeOpacity={0.7}
              >
                <ProcessingIcon width={28} height={28} />
                <Text style={styles.tabText}>Processing</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.tab}
                onPress={() => handleTabPress('/profile/myorders/allorders?initialTab=Shipped')}
                activeOpacity={0.7}
              >
                <ShippedIcon width={28} height={28} />
                <Text style={styles.tabText}>Shipped</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.tab}
                onPress={() => handleTabPress('/profile/myorders/allorders?initialTab=Review')}
                activeOpacity={0.7}
              >
                <ReviewIcon width={28} height={28} />
                <Text style={styles.tabText}>Review</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.tab}
                onPress={() => handleTabPress('/profile/myorders/allorders?initialTab=Returns')}
                activeOpacity={0.7}
              >
                <ReturnsIcon width={26} height={26} />
                <Text style={styles.tabText}>Returns</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Wishlist & Followings */}
          <View style={styles.twoColumnsContainer}>
            <View style={styles.columnContainer}>
              <Text style={styles.columnTitle}>Wishlist</Text>
              <TouchableOpacity
                style={styles.columnItem}
                onPress={() => handleTabPress('/tabs/likes')}
                activeOpacity={0.7}
              >
                <WishlistIcon width={24} height={24} />
                <Text style={styles.columnText}>4 wishlist</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.columnContainer}>
              <Text style={styles.columnTitle}>Followings</Text>
              <TouchableOpacity
                style={styles.columnItem}
                onPress={() => handleTabPress('/profile/following')}
                activeOpacity={0.7}
              >
                <FollowingsIcon width={24} height={24} />
                <Text style={styles.columnText}>1 followings</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Masonry Product List */}
        <View style={{ flex: 1 }}>
          <MasonryList
            data={products}
            keyExtractor={item => item.id}
            numColumns={2}
            renderItem={renderProduct}
            contentContainerStyle={{ padding: 8, paddingBottom: 60 }}
            showsVerticalScrollIndicator={false}
          />
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
  fixedHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    zIndex: 10,
    paddingTop: 55,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  scrollView: {
    marginTop: 130,
  },
  settingsButton: {
    position: 'absolute',
    top: 55,
    right: 10,
    padding: 10,
    zIndex: 1,
  },
  profileSection: {
    left: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    marginRight: 15,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f0f0',
  },
  userInfo: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  prof: {
    fontSize: 11,
    fontFamily: 'EncodeSans-Regular',
    color: '#666',
  },
  myOrders: {
    padding: 20,
    backgroundColor: '#f2f2f2',
    width: '105%',
    alignSelf: 'center',
    minHeight: 200,
    
  },
  ordersContainer: {
    marginTop: -10,
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 20,
    alignSelf: 'center',
    width: '100%',
  },
  myOrdersTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    position: 'absolute',
    top: 10,
    left: 15,
  },
  viewAllButton: {
    position: 'absolute',
    top: 10,
    right: 15,
  },
  viewAllText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  tabsContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: -10,
  },
  tab: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
    gap: 6,
  },
  tabText: {
    fontSize: 9,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
  twoColumnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 10,
    gap: 10,
    marginBottom: -10,
  },
  columnContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 12,
    alignItems: 'center',
    minHeight: 80,
  },
  columnTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 6,
    textAlign: 'center',
  },
  columnItem: {
    alignItems: 'center',
    paddingVertical: 2,
    borderRadius: 8,
    gap: 4,
    width: '100%',
  },
  columnText: {
    fontSize: 9,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
  productsHeader: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 18,
    marginTop: 20,
    marginBottom: 12,
    color: '#292526',
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
});

export default Profile;