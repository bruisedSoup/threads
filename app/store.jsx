import { View, StyleSheet, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { LayoutGrid } from 'lucide-react-native';
import { useLocalSearchParams, useRouter } from "expo-router";

import SearchBar from './components/SearchBar';
import CustomButton from './components/CustomButton';
import DressIcon from './components/dressicon';
import Shirt from './components/shirticon';
import Bottoms from './components/bottomicon';
import Tops from './components/topsicon';
import ProductSuggestions from './components/ProductSuggestions';
import BackIcon from './profile/backicon';
import { products } from './data/product';

const Store = () => {
  const { storeName } = useLocalSearchParams();
  const router = useRouter();
  const [selectedFilter, setSelectedFilter] = useState("All Items");
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch store data
  const storeData = products.find(s => s.storeName === storeName);
  const storeProducts = storeData?.products.map(prod => ({ ...prod, storeName })) || [];

  // Define filter icons (same as home)
  const filterIcons = [
    { name: "Dress", icon: DressIcon, type: "Dress Modern" },
    { name: "T-Shirt", icon: Shirt, type: "T-Shirt" },
    { name: "Bottoms", icon: Bottoms, type: "Bottoms" },
    { name: "Tops", icon: Tops, type: "Top" }
  ];

  // Filter logic
  let filteredProducts =
    selectedFilter === "All Items"
      ? storeProducts
      : storeProducts.filter(product => product.type === selectedFilter);

  if (searchQuery.trim() !== "") {
    const searchLower = searchQuery.toLowerCase();
    filteredProducts = filteredProducts.filter(product =>
      product.title.toLowerCase().includes(searchLower) ||
      product.type.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower)
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <BackIcon width={26} height={26}/>
      </TouchableOpacity>

      {/* Store Header */}
      <View style={styles.headerContainer}>
        <Image source={storeData?.logo} style={styles.logo} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.storeName}>{storeName}</Text>
          <Text style={styles.followerText}>18k followers</Text>
        </View>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followButtonText}>+ follow</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <SearchBar 
          placeholder="Search clothes..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Filter Tabs (identical to home) */}
      <View style={[styles.filterTabContainer, { zIndex: 10, backgroundColor: '#fff' }]}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 30 }}>
          {/* All Items */}
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

          {/* Other Filters */}
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

      {/* Product Grid */}
      <View style={styles.productSuggestionsContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={true}
        >
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

export default Store;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingBottom: 60,
  },
  backButton: {
    position: 'absolute',
    left: 25,
    top: 22,
    zIndex: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#E9EAEC',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.16,
    shadowRadius: 4,
    elevation: 4,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 15,
    marginTop: -5,
    backgroundColor: '#fff',
  },
  logo: {
    width: 44,
    height: 44,
    borderRadius: 12,
    marginRight: 13,
    backgroundColor: "#E9EAEC",
  },
  headerTextContainer: {
    flex: 1,
  },
  storeName: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  followerText: {
    fontSize: 13,
    color: '#7B7979',
    marginTop: 2,
  },
  followButton: {
    paddingVertical: 7,
    paddingHorizontal: 16,
    backgroundColor: '#000',
    borderRadius: 9,
  },
  followButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  searchBarContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: -45,
  },
  filterTabContainer: {
    paddingHorizontal: 25,
    marginTop: -10,
  },
  productSuggestionsContainer: {
    flex: 1,
    paddingHorizontal: 1,
    marginTop: -65,
  },
});
