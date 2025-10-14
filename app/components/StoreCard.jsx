import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Store } from 'lucide-react-native';
import useSelectionStore from '../stores/useSelectionStore';
import React from 'react'
    
const StoreCard = ({ storeName, children }) => {
    const { selectedStores, selectStore } = useSelectionStore();
    const isSelected = selectedStores.includes(storeName);
    
    // Extract product IDs from children
    const productIds = React.Children.map(children, (child) => child.props.id) || [];

    return (
        <View style={styles.storeCardContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    style={[
                        styles.selectAllButton,
                        { 
                            backgroundColor: isSelected ? '#000000ff' : '#ffffffff',
                            borderColor: isSelected ? '#000000ff' : '#ccc'
                        },
                    ]}
                    onPress={() => selectStore(storeName, productIds)}
                />
                <View style={styles.storeNameContainer}>
                    <Store size={24} color="#000000ff" strokeWidth={1} />
                    <Text style={styles.storeName}>{storeName}</Text>
                </View>
            </View>
            <View style={styles.childrenContainer}> 
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    storeCardContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 13,
        elevation: 2,
        marginBottom: 16,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    selectAllButton: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        marginRight: 12,
    },
    storeNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    storeName: {
        marginLeft: 8,
        fontSize: 16,
        fontWeight: 'bold',
    },
    childrenContainer: {
        marginTop: 8,
        flex: 1,
    },
})

export default StoreCard;