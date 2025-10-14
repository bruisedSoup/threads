import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MasonryList from '@react-native-seoul/masonry-list'
import React from 'react'

import { LayoutGrid } from 'lucide-react-native'
import Icon from '../components/CustomIcon'

import WelcomeHeader from '../components/WelcomeHeader';
import SearchBar from '../components/SearchBar';
import FilterIcon from '../components/FilterIcon';
import ProductCard from '../components/ProductCard';
import CustomButton from '../components/CustomButton';

import DressIcon from '../components/dressicon';
import Shirt from '../components/shirticon';

const home = () => {
  const filterIcons = [
    { name: "Dress", icon: DressIcon }, 
    { name: "T-Shirt", icon: Shirt }, 
  ];

  const products = [
  {
    storeName: "NIKE FLAGSHIP STORE",
    products: [{
      id: 1,
      image: require("../../assets/clothing/tops/Product1.png"),
      title: "Modern Light Clothes",
      price: "2129.99",
      sizePrices: { S: 2000, M: 2129.99, L: 2200, XL: 2300 },
      type: "T-Shirt",
      rating: "4.5",
      reviews: "12",
      description: "Premium quality modern t-shirt made from breathable cotton blend. Features a contemporary slim fit design with subtle texture details. Perfect for casual outings or layering under jackets."
    }]
  },
  {
    storeName: "ADIDAS ORIGINALS",
    products: [{
      id: 2,
      image: require("../../assets/clothing/dresses/brown.png"),
      title: "Blue Dress",
      price: "2699.99",
      sizePrices: { S: 2500, M: 2699.99, L: 2800, XL: 2900 },
      type: "Dress Modern",
      rating: "4.8",
      reviews: "15",
      description: "Elegant blue midi dress with flowing silhouette and delicate floral patterns. Made from sustainable viscose fabric that drapes beautifully. Ideal for summer parties, brunches, or special occasions."
    }]
  },
  {
    storeName: "PUMA",
    products: [{
      id: 3,
      image: require("../../assets/clothing/tops/maroon.png"),
      title: "White T-Shirt",
      price: "19.99",
      sizePrices: { S: 18, M: 19.99, L: 21, XL: 22 },
      type: "T-Shirt",
      rating: "4.7",
      reviews: "10",
      description: "Classic crewneck white t-shirt made from 100% organic cotton. Features a comfortable regular fit and reinforced neckline for durability. The perfect wardrobe staple for everyday wear."
    }]
  },
  {
    storeName: "PUMA",
    products: [{
      id: 4,
      image: require("../../assets/clothing/dresses/yellow.png"),
      title: "Black T-Shirt",
      price: "24.99",
      sizePrices: { S: 22, M: 24.99, L: 26, XL: 27 },
      type: "T-Shirt",
      rating: "4.6",
      reviews: "8",
      description: "Essential black t-shirt with premium heavyweight cotton construction. Offers excellent color retention and minimal shrinkage. Versatile basic that pairs well with any outfit."
    }]
  },
];

  return (
    <SafeAreaView style={styles.container}> 
      <View>
        <WelcomeHeader name="User One" />
        <View style={styles.searchBarContainer}>
          <SearchBar placeholder="Search clothes..." />
        </View>
      </View>
      <View style={styles.filterTabContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginBottom: 30}}>
          <CustomButton
            name="All Items"
            icon={LayoutGrid}
            size={30}
            iconColor="#ffffffff"
            containerStyle={{
              backgroundColor: "#000000ff",
              borderRadius: 10,
              marginRight: 10,
              paddingHorizontal: 15,
              paddingVertical: 7,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
              borderWidth: 1,
            }}
            textStyle={{ color: "#ffffffff", fontSize: 17 }}
          />
          {filterIcons.map((item, index) => (
            <CustomButton
              key={index}
              name={item.name}
              icon={item.icon}
              size={30}
              iconColor="#000000ff"
              containerStyle={{
                backgroundColor: "#ffffffff",
                borderRadius: 10,
                marginRight: 10,
                paddingHorizontal: 15,
                paddingVertical: 7,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                borderWidth: 1,
              }}
              textStyle={{ color: "#000000ff", fontSize: 17 }}
            />
          ))}
        </ScrollView>
      </View> 

      <MasonryList
        data={products.flatMap(store =>
          store.products.map(product => ({
            ...product,
            storeName: store.storeName
          }))
        )}
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
              storeName={item.storeName}
            />
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default home

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingBottom: 60,
    marginTop: -30,
  },
  searchBarContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: -10,
  },
  filterTabContainer: {
    paddingHorizontal: 25,
    marginTop: 30,
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
})
