import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
import ProductCard from './ProductCard';

const shuffleArray = (array) =>
  array
    .map(item => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);

const ProductSuggestions = ({
  products = [],
  title = "You May Also Like",
  showTitle = true,
  numColumns = 2,
  style = {},
}) => {
  const [shuffled, setShuffled] = useState([]);

  useEffect(() => {
    setShuffled(shuffleArray(products));
  }, [products]);

  return (
    <View style={[styles.container, style]}>
      {showTitle && <Text style={styles.title}>{title}</Text>}
      <MasonryList
        data={shuffled}
        keyExtractor={item => item.id.toString()}
        numColumns={numColumns}
        contentContainerStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <ProductCard
              key={item.id}
              {...item}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 65,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: -40,
    marginBottom: 20,
    textAlign: 'center',
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
});

export default ProductSuggestions;