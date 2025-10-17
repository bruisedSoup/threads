import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { LayoutGrid } from 'lucide-react-native';

import WelcomeHeader from '../components/WelcomeHeader';
import SearchBar from '../components/SearchBar';
import CustomButton from '../components/CustomButton';
import DressIcon from '../components/dressicon';
import Shirt from '../components/shirticon';
import Bottoms from '../components/bottomicon';
import Tops from '../components/topsicon';
import ProductSuggestions from '../components/ProductSuggestions';
import { products } from '../data/product';

const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState("All Items");
  const [searchQuery, setSearchQuery] = useState("");

  // Define filter icons and matching product types
  const filterIcons = [
    { name: "Dress", icon: DressIcon, type: "Dress Modern" },
    { name: "T-Shirt", icon: Shirt, type: "T-Shirt" },
    { name: "Bottoms", icon: Bottoms, type: "Bottoms" },
    { name: "Tops", icon: Tops, type: "Top" }
  ];

  // Flatten nested structure
  const productsFlat = products?.flatMap(store =>
    store.products.map(product => ({
      ...product,
      storeName: store.storeName,
    }))
  ) || [];

  // Filter by type
  let filteredProducts =
    selectedFilter === "All Items"
      ? productsFlat
      : productsFlat.filter(product => product.type === selectedFilter);

  // Filter by search query
  if (searchQuery.trim() !== "") {
    filteredProducts = filteredProducts.filter(product => {
      const searchLower = searchQuery.toLowerCase();
      return (
        product.title.toLowerCase().includes(searchLower) ||
        product.type.toLowerCase().includes(searchLower) ||
        product.storeName.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower)
      );
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={{ zIndex: 10, backgroundColor: '#fff' }}>
        <WelcomeHeader name="User One" />
        <View style={styles.searchBarContainer}>
          <SearchBar 
            placeholder="Search clothes..." 
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Filter Tabs */}
      <View style={[styles.filterTabContainer, { zIndex: 10, backgroundColor: '#fff' }]}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 30 }}>
          {/* All Items Button */}
          <CustomButton
            name="All Items"
            icon={LayoutGrid}
            size={30}
            iconColor={selectedFilter === "All Items" ? "#fff" : "#000"}
            onPress={() => setSelectedFilter("All Items")}
            containerStyle={{
              backgroundColor: selectedFilter === "All Items" ? "#000" : "#fff",
              borderRadius: 10,
              marginRight: 10,
              paddingHorizontal: 13,
              paddingVertical: 3,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
              borderWidth: 1,
            }}
            textStyle={{ color: selectedFilter === "All Items" ? "#fff" : "#000", fontSize: 17 }}
          />

          {/* Dynamic Filter Buttons */}
          {filterIcons.map((item, index) => (
            <CustomButton
              key={index}
              name={item.name}
              icon={item.icon}
              size={30}
              iconColor={selectedFilter === item.type ? "#fff" : "#000"}
              onPress={() => setSelectedFilter(item.type)}
              containerStyle={{
                backgroundColor: selectedFilter === item.type ? "#000" : "#fff",
                borderRadius: 10,
                marginRight: 10,
                paddingHorizontal: 13,
                paddingVertical: 3,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                borderWidth: 1,
              }}
              textStyle={{ color: selectedFilter === item.type ? "#fff" : "#000", fontSize: 17 }}
            />
          ))}
        </ScrollView>
      </View>

      {/* Product Section */}
      <View style={styles.productSuggestionsContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ProductSuggestions
            products={filteredProducts}
            numColumns={2}
            showTitle={false}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingBottom: 60,
    marginTop: 5,
  },
  searchBarContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: -10,
    color: 'black',
  },
  filterTabContainer: {
    paddingHorizontal: 25,
  },
  productSuggestionsContainer: {
    flex: 1,
    paddingHorizontal: 1,
    marginTop: -65,
  },
});