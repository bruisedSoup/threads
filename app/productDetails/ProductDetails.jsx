import { View, Text, Image, StyleSheet, TouchableOpacity, Platform, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Star, Heart, ChevronLeft, Minus, Plus, ShoppingCart } from 'lucide-react-native';
import { useLocalSearchParams, useRouter } from "expo-router";
import HorizontalLine from '../components/HorizontalLine';
import useIconStore from '../stores/iconStore';
import CustomButton from '../components/CustomButton';
import useCartStore from '../stores/cartStore';
import CircledIcon from '../components/CircledIcon';
import React, { useState } from 'react';

const ProductDetails = () => {
  const { id, image, title, price, sizePrices, type, rating, reviews, description, storeName } = useLocalSearchParams();
  const [quantity, setQuantity] = useState(1);
  const [readMore, setReadMore] = useState(false);
  const sizes = ["S", "M", "L", "XL"];
  const colors = ["#787676", "#433F40", "#121111"];
  const router = useRouter();
  const { favorites, addFavorite, removeFavorite } = useIconStore();
  const isFavorite = favorites.some((p) => String(p.id) === String(id));
  const { chosenSize, addSize, removeSize } = useIconStore();

  const parsedSizePrices = sizePrices ? JSON.parse(sizePrices) : null;
  const selectedSize = chosenSize.length > 0 ? chosenSize[chosenSize.length - 1] : "M";
  const sizePrice = parsedSizePrices && parsedSizePrices[selectedSize] ? Number(parsedSizePrices[selectedSize]) : Number(price);
  const totalPrice = sizePrice * quantity;

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite({ id, image, title, price, type, rating, reviews, description });
    }
  };

  const toggleSize = (size) => {
    if (chosenSize.includes(size)) {
      removeSize(size);
    } else {
      chosenSize.forEach(removeSize);
      addSize(size);
    }
  };

  const { addToCart } = useCartStore();

  // ✅ Fixed: no more "product" undefined error
  const goToStore = () => {
    router.push({
      pathname: '/store',
      params: { storeName },
    });
  };

  const handleAddToCart = () => {
    addToCart(storeName, {
      id,
      image,
      title,
      price: sizePrice,
      size: selectedSize,
      sizePrices,
      type,
      rating,
      reviews,
      description,
      quantity,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <ChevronLeft color="black" />
          </TouchableOpacity>
          <Image source={image} style={styles.image} />
          <TouchableOpacity onPress={toggleFavorite} style={styles.heartButton}>
            <Heart size={25} color="black" fill={isFavorite ? "black" : "white"} />
          </TouchableOpacity>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.metaContainer}>
            <View>
              <Text style={styles.title}>{title}</Text>
              <View style={styles.ratingAndReviewsContainer}>
                <Star size={20} color="#FFD700" fill={"#FFD700"} />
                <Text style={styles.rating}>{rating}</Text>
                <Text style={styles.reviews}>({reviews})</Text>
              </View>
            </View>

            <View style={styles.quantityContainer}>
              <CircledIcon icon={Minus} color="black" size={15} padding={10} onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} />
              <TextInput
                style={styles.quantity}
                value={String(quantity)}
                onChangeText={(text) => setQuantity(Number(text))}
                keyboardType="numeric"
              />
              <CircledIcon icon={Plus} color="black" size={15} padding={10} onPress={() => setQuantity(quantity + 1)} />
            </View>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>
              {readMore ? description : `${description.substring(0, 100)}...`}
              <Text style={styles.readMore} onPress={() => setReadMore(!readMore)}>
                {readMore ? " Show Less" : " Read More"}
              </Text>
            </Text>
          </View>

          <HorizontalLine marginTop={20} />

          <View style={styles.sizeAndColorContainer}>
            <View style={styles.sizeContainer}>
              <Text style={styles.chooseText}>Choose Size</Text>
              <View style={{ flexDirection: 'row', marginTop: 10, gap: 10 }}>
                {sizes.map((size, index) => {
                  const selected = chosenSize.includes(size);
                  return (
                    <TouchableOpacity
                      key={index}
                      style={[styles.sizeButton, { backgroundColor: selected ? 'black' : null }]}
                      onPress={() => toggleSize(size)}
                    >
                      <Text style={selected ? { color: 'white' } : { color: 'black' }}>{size}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            <View style={styles.colorContainer}>
              <Text style={styles.chooseText}>Color</Text>
              <View style={{ flexDirection: 'row', marginTop: 10, gap: 5 }}>
                {colors.map((color, index) => (
                  <TouchableOpacity key={index} style={[styles.colorButton, { backgroundColor: color }]} />
                ))}
              </View>
            </View>
          </View>

          <HorizontalLine marginTop={20} />

          {/* ✅ Store Section */}
          <View style={styles.storeSection}>
            <TouchableOpacity onPress={goToStore}>
              <Text style={styles.storeText}>Sold by: {storeName}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Fixed Add to Cart Button */}
      <View style={styles.fixedAddToCart}>
        <CustomButton
          name={`Add to Cart | Php${totalPrice.toFixed(2)}`}
          icon={ShoppingCart}
          size={22}
          iconColor="#fff"
          containerStyle={styles.addToCartButton}
          textStyle={{ color: "white", fontSize: 16, fontWeight: "bold" }}
          onPress={() => {
            handleAddToCart();
            router.push({
              pathname: '/tabs/cart',
              params: { from: 'productDetails' },
            });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: Platform.OS === 'android' ? 25 : 0,
  },

  imageContainer: {
    paddingHorizontal: 25,
  },

  image: {
    width: '100%',
    height: 470,
    borderRadius: 20,
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    ...Platform.select({
      ios: {
        shadowColor: '#E9EAEC',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 15,
    left: 40,
    backgroundColor: 'white',
    zIndex: 1,
  },

  heartButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    ...Platform.select({
      ios: {
        shadowColor: '#E9EAEC',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 15,
    right: 40,
    backgroundColor: 'white',
    zIndex: 1,
  },

  infoContainer: {
    paddingHorizontal: 25,
    marginTop: 20,
  },

  metaContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  ratingAndReviewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rating: {
    fontSize: 16,
    marginLeft: 10,
    color: '#7B7979',
  },

  reviews: {
    fontSize: 15,
    marginLeft: 5,
    color: '#347CF5',
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  quantity: {
    fontSize: 20,
    marginHorizontal: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  descriptionContainer: {
    marginTop: 20,
  },

  description: {
    fontSize: 16,
    color: '#7B7979',
  },

  readMore: {
    color: 'black',
    fontWeight: 'bold',
  },

  sizeAndColorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  sizeContainer: {
    flex: 1,
  },

  chooseText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  sizeButton: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  colorButton: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  storeSection: {
    marginTop: 20,
  },

  storeText: {
    fontSize: 16,
    color: '#347CF5',
    fontWeight: '600',
  },

  addToCartButton: {
    flexDirection: 'row',
    backgroundColor: '#000000ff',
    borderRadius: 30,
    padding: 20,
    width: '100%',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  fixedAddToCart: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 15,
    borderTopWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
  },
});

export default ProductDetails;
