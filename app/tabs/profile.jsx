import React from 'react';
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
import ProductSuggestions from '../components/ProductSuggestions';
import { products } from '../data/product';
import useIconStore from '../stores/iconStore';


const Profile = () => {
  const router = useRouter();

  const { favorites } = useIconStore();

  const handleSettingsPress = () => { router.push('/profile/settings'); };

  const handleAvatarPress = () => {
    router.push({
      pathname: '/profile/userprofile',
      params: { profilePicture: 'static_avatar' },
    });
  };
  const handleTabPress = route => { router.push(route); };

  const userData = {
    name: 'User One',
    username: 'My Profile',
    profilePicture: require('../../app/profile/static_avatar.jpg'),
  };

  const productsFlat = products.flatMap(store =>
    store.products.map(product => ({
      ...product,
      storeName: store.storeName,
    }))
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
              <TouchableOpacity style={styles.columnItem} onPress={() => handleTabPress('/tabs/likes')} activeOpacity={0.7}>
                <WishlistIcon width={24} height={24} />
                <Text style={styles.columnText}>
                  {favorites.length} wishlist
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.columnContainer}>
              <Text style={styles.columnTitle}>Followings</Text>
              <TouchableOpacity style={styles.columnItem} onPress={() => handleTabPress('/profile/following')} activeOpacity={0.7}>
                <FollowingsIcon width={24} height={24} />
                <Text style={styles.columnText}>1 followings</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Product Grid */}
        <ProductSuggestions
          products={productsFlat}
          title="You May Also Like"
          showTitle={false}
          numColumns={2}
          style={{ marginTop: 15 }}
        />
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
});

export default Profile;
