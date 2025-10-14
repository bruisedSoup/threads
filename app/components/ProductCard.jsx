import { View, Text, Image, StyleSheet, TouchableOpacity, } from 'react-native'
import {Star, Heart} from 'lucide-react-native'
import {React, useState} from 'react'
import { useRouter } from "expo-router";
import useIconStore from '../stores/iconStore';
import { store } from 'expo-router/build/global-state/router-store';

const ProductCard = ({
                      id,
                      image,
                      title,
                      price,
                      sizePrices,
                      type,
                      rating,
                      reviews,
                      description,
                      storeName}) => {

  const randomHeight = Math.floor(Math.random() * (381 - 280) + 280);
  const {favorites, addFavorite, removeFavorite} = useIconStore();
  const isFavorite = favorites.some((p) => String(p.id) === String(id));
  const router = useRouter();

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite({id, image, title, price, sizePrices, type, rating, reviews, description});
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={() => router.push({
      pathname: '/productDetails/ProductDetails',
      params: {id, image, title, price, sizePrices: JSON.stringify(sizePrices), type, rating, reviews, description, storeName}
    })}>

      <View>
        <TouchableOpacity style={styles.heartContainer} onPress={toggleFavorite}>
          <Heart size={20} color={"black"} fill={isFavorite ? "black" : "white"}/>
        </TouchableOpacity>
        <Image source={image} style={[styles.image, {height: randomHeight}]}/>
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.type}>{type}</Text>

      <View style={styles.textPriceContainer}>
        <Text style={styles.price}>Php{price}</Text>

        <View style={styles.ratingContainer}>
            <Star size={20} color="#FFD700" fill={"#FFD700"}/>
            <Text style={styles.rating}>{rating}</Text>
        </View>

      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffffff',
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center',
  },

  heartContainer: {
    backgroundColor: '#ffffffff',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 1,
  },

  image: {
    width: "100%",
    borderRadius: 25,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    color: '#000000ff',
    marginTop: 5,
    fontWeight: 'bold',
  },
  textPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  type: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    color: '#888',
    marginRight: 5,
  }
})

export default ProductCard