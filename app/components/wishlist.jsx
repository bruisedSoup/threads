import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
import Icon from 'react-native-vector-icons/FontAwesome';

const Wishlist = ({ data, renderHeader, onItemPress }) => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={item.image}
        style={[styles.itemImage, { height: item.imageHeight }]}
        resizeMode="cover"
      />
      <View style={styles.cardContent}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>{`Php${item.price}`}</Text>
        {item.rating && (
          <View style={styles.ratingContainer}>
            <Text style={styles.star}>⭐</Text>
            <Text style={styles.itemRating}>{item.rating}</Text>
          </View>
        )}
      </View>
      <TouchableOpacity style={styles.heartButton} onPress={() => onItemPress?.(item)}>
        <Icon name="heart" size={18} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      {renderHeader?.()}
      <View style={styles.numlikesContainer}>
        <Text style={styles.likedCount}>
          Items({data.length})
        </Text>
        <View style={styles.divider} />
      </View>
      <MasonryList
        data={data}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 8 }}
      />
    </View>
  );
};

const styles = { /* your actual styles here */ };
export default Wishlist;
