import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeft, ShoppingCart } from 'lucide-react-native'
import { useRouter } from 'expo-router';
import React from 'react'
import StoreCard from '../components/StoreCard'
import CartCard from '../components/CartCard'
import useCartStore from '../stores/cartStore'
import useSelectionStore from '../stores/useSelectionStore'
import CustomButton from '../components/CustomButton';

// ...existing code...

const Cart = () => {
  const router = useRouter();
  const { cart } = useCartStore();
  const { 
    selectedStores, 
    selectedProducts,
    selectAllStores, 
    deselectAllStores,
    selectAllProducts,
    deselectAllProducts
  } = useSelectionStore();

  // Get all store names from cart
  const allStoreNames = cart.map(store => store.storeName);
  
  // Get all product IDs from cart
  const allProductIds = cart.flatMap(store => 
    store.products.map(product => product.id)
  );
  
  // Check if all stores are selected
  const allStoresSelected = allStoreNames.length > 0 && 
    allStoreNames.every(store => selectedStores.includes(store));

  // Toggle select all stores and products
  const toggleSelectAllStores = () => {
    if (allStoresSelected) {
      deselectAllStores();
      deselectAllProducts();
    } else {
      selectAllStores(allStoreNames);
      selectAllProducts(allProductIds);
    }
  };

  // calculate total price
  const totalPrice = cart.reduce((sum, store) => {
    return sum + store.products.reduce((s, p) => {
      if (selectedProducts.includes(p.id)) {
        return s + (Number(p.price || 0) * (p.quantity || 1));
      }
      return s;
    }, 0);
  }, 0);

  return (
    <SafeAreaView style={styles.parentContainer} edges={['bottom']}>
      <View style={styles.container}>
        <View style={styles.cartHeader}>
          <Text style={styles.cartText}>Cart</Text>
          <Text style={styles.shippingText}>Ship to Zone 6, Cugman</Text>
        </View>

        <View style={styles.allBackButtonContainer}>
          <View style={styles.allButtonContainer}>
            <TouchableOpacity 
              style={[
                styles.allButton,
                { backgroundColor: allStoresSelected ? '#000000ff' : '#ffffffff' }
              ]}
              onPress={toggleSelectAllStores}
            />
            <Text>All</Text>
          </View>

          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <ChevronLeft size={28} color="#000000ff" strokeWidth={1} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        {cart.map((store) => (
          <StoreCard 
            key={store.storeName} 
            storeName={store.storeName}
          >
            {store.products.map((product) => (
              <CartCard
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                type={product.type}
                quantity={product.quantity}
              />
            ))}
          </StoreCard>
        ))}
        
        {cart.length === 0 && (
          <View style={styles.emptyCart}>
            <Text style={styles.emptyCartText}>Your cart is empty</Text>
          </View>
        )}
      </ScrollView>

      <View style={styles.addToCartContainer}>
        <CustomButton
          name={`Checkout | Php${totalPrice.toFixed(2)}`}
          icon={ShoppingCart}
          size={22}
          iconColor="#fff"
          containerStyle={styles.checkoutButton}
          textStyle={{ color: "white", fontSize: 16, fontWeight: "bold" }}
          onPress={() => router.push('/checkOut/CheckOut')}
          disabled={cart.length === 0}
        />
      </View>
    </SafeAreaView>
  )
}

// ...existing code...
const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingBottom: 100
  },
  container: {
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingBottom: 20,
  },
  cartHeader: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  shippingText: {
    fontSize: 15,
    color: '#888',
  },
  allBackButtonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  allButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  allButton: {
    backgroundColor: '#ffffffff',
    width: 30,
    height: 30,
    borderRadius: 50,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#c9c9c9ff',
  },
  backButton: {
    backgroundColor: '#ffffffff',
    width: 30,
    height: 30,
    borderRadius: 50,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#c9c9c9ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    padding: 10,
  },
  emptyCart: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  emptyCartText: {
    fontSize: 16,
    color: '#888',
  },
  addToCartContainer: {
    alignItems: 'center',
    paddingHorizontal: 25,
    zIndex: 10,
  },
  checkoutButton: {
    flexDirection: 'row',
    backgroundColor: '#000000ff',
    borderRadius: 35,
    padding: 23,
    width: '95%',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Cart;