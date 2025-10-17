import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeft, ShoppingCart, Store } from 'lucide-react-native'
import { useRouter } from 'expo-router'
import MasonryList from '@react-native-seoul/masonry-list'
import {React, useState} from 'react'
import ProductCard from '../components/ProductCard'
import useIconStore from '../stores/iconStore'
import CartIcon from '../profile/wishlist/carticon'

const Favorites = () => {
  const router = useRouter()
  const { favorites } = useIconStore()
  const [textWidth, setTextWidth] = useState(0)

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Wishlist</Text>
        <TouchableOpacity style={styles.cartIcon} onPress={() => router.push('/tabs/cart')}>
          <CartIcon />
        </TouchableOpacity>
      </View>

      {/* Items Count */}
      <View style={styles.itemsCountContainer}>
        <Text style={styles.itemsCountText} onLayout={(e) => setTextWidth(e.nativeEvent.layout.width)}>Items({favorites.length})</Text>
        <View style={[styles.line, {width: textWidth}]}></View>
      </View>

      {/* Products Grid */}
      <MasonryList
        data={favorites}
        numColumns={2}
        contentContainerStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <ProductCard
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              sizePrices={item.sizePrices}
              type={item.type}
              rating={item.rating}
              reviews={item.reviews}
              description={item.description}
              storeName="Wishlist Store"
            />
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Your wishlist is empty</Text>
            <Text style={styles.emptySubText}>Add items you love to see them here</Text>
          </View>
        }
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
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
    alignItems: 'center',
  },
  itemsCountContainer: {
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  itemsCountText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginHorizontal: 10,
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
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 8,
  },
  emptySubText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },

  line: {
    height: 3,
    backgroundColor: 'black',
    marginHorizontal: 10,
  }
})

export default Favorites