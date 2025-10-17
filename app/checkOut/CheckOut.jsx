import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeft, MoreHorizontal, ChevronDown } from 'lucide-react-native'
import { useRouter } from 'expo-router'
import React from 'react'
import CartCard from '../components/CartCard'
import CustomButton from '../components/CustomButton'
import useCartStore from '../stores/cartStore'
import useSelectionStore from '../stores/useSelectionStore'

const CheckOut = () => {
  const router = useRouter()
  const { cart } = useCartStore()
  const { selectedProducts } = useSelectionStore()

  // Calculate totals
  const totalItems = cart.reduce((sum, store) => {
    return sum + store.products.reduce((s, p) => {
      if (selectedProducts.includes(p.id)) {
        return s + (p.quantity || 1)
      }
      return s
    }, 0)
  }, 0)

  const subtotal = cart.reduce((sum, store) => {
    return sum + store.products.reduce((s, p) => {
      if (selectedProducts.includes(p.id)) {
        return s + (Number(p.price || 0) * (p.quantity || 1))
      }
      return s
    }, 0)
  }, 0)

  const shippingFee = 0  
  const discount = 0
  const total = subtotal + shippingFee - discount

  const handlePay = () => {
    // Navigate to home tab after payment
    router.push('/tabs/home')
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <ChevronLeft size={24} color="#000" strokeWidth={1} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
        <TouchableOpacity style={styles.menuButton}>
          <MoreHorizontal size={24} color="#000" strokeWidth={1} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Cart Items */}
        <View style={styles.section}>
          {cart.map((store) => (
            <View key={store.storeName}>
              {store.products
                .filter(product => selectedProducts.includes(product.id))
                .map((product) => (
                  <CartCard
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    type={product.type}
                    quantity={product.quantity}
                  />
                ))
              }
            </View>
          ))}
        </View>

        {/* Shipping Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Shipping Information</Text>
          <View style={styles.paymentCard}>
            <View style={styles.paymentInfo}>
              <View style={styles.visaLogo}>
                <Text style={styles.visaText}>VISA</Text>
              </View>
              <Text style={styles.cardNumber}>**** **** **** 2143</Text>
            </View>
            <ChevronDown size={20} color="#666" />
          </View>
        </View>

        {/* Order Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order Summary</Text>
          <View style={styles.summaryContainer}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Total ({totalItems} items)</Text>
              <Text style={styles.summaryValue}>Php {subtotal.toFixed(2)}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Shipping Fee</Text>
              <Text style={styles.summaryValue}>$0.00</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Discount</Text>
              <Text style={styles.summaryValue}>$0.00</Text>
            </View>
            <View style={[styles.summaryRow, styles.totalRow]}>
              <Text style={styles.totalLabel}>Sub Total</Text>
              <Text style={styles.totalValue}>Php {total.toFixed(2)}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Pay Button */}
      <View style={styles.payButtonContainer}>
        <CustomButton
          name="Pay"
          containerStyle={styles.payButton}
          textStyle={styles.payButtonText}
          onPress={handlePay}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  menuButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#000',
  },
  paymentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  paymentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  visaLogo: {
    backgroundColor: '#1a1f71',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 10,
  },
  visaText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  cardNumber: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  summaryContainer: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#666',
  },
  summaryValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    marginTop: 8,
    paddingTop: 15,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  payButtonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 30,
  },
  payButton: {
    backgroundColor: 'black',
    borderRadius: 25,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})

export default CheckOut