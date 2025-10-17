import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Store, Check } from 'lucide-react-native';
import useSelectionStore from '../stores/useSelectionStore';
import useCartStore from '../stores/cartStore';
import React from 'react'
    
const StoreCard = ({ storeName, children }) => {
    const {removeFromStore} = useCartStore();
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
                >
                    {isSelected && <Check size={20} color="#fff" strokeWidth={2} />}
                </TouchableOpacity>
                <View style={styles.storeNameContainer}>
                    <Store size={24} color="#000000ff" strokeWidth={1} />
                    <Text style={styles.storeName}>{storeName}</Text>
                </View>
                {isSelected && (
                    <TouchableOpacity style={styles.clearButton} onPress={() => removeFromStore(storeName)}>
                        <Text style={styles.clearText}>Clear</Text>
                    </TouchableOpacity>
                )}
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
    clearButton: {
        marginLeft: 'auto',
        backgroundColor: '#000000ff',
        padding: 8,
        borderRadius: 20,
    },

    clearText: { 
        color: '#fff' ,
        fontWeight: 'bold', 
        fontSize: 16 
    },
})

export default StoreCard;