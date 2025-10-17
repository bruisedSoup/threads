import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Store } from 'lucide-react-native';
import CheckIcon from './checkicon';
import useSelectionStore from '../stores/useSelectionStore';
import useCartStore from '../stores/cartStore';
import React from 'react'
    
const StoreCard = ({ storeName, children, onRemove }) => {
    const { selectedStores, selectStore } = useSelectionStore();
    const isSelected = selectedStores.includes(storeName);
    
    // Extract product IDs from children
    const productIds = React.Children.map(children, (child) => child.props.id) || [];

    return (
        <View style={styles.storeCardContainer}>
            <View style={styles.headerContainer}>
                <View style={styles.storeInfoContainer}>
                    <TouchableOpacity
                        style={styles.selectButtonWrapper}
                        onPress={() => selectStore(storeName, productIds)}
                    >
                        {isSelected ? (
                            <CheckIcon width={24} height={24} />
                        ) : (
                            <View style={styles.uncheckedCircle} />
                        )}
                    </TouchableOpacity>
                    <View style={styles.storeNameContainer}>
                        <Store size={24} color="#000000ff" strokeWidth={1} />
                        <Text style={styles.storeName}>{storeName}</Text>
                    </View>
                </View>
                
                {isSelected && onRemove && (
                    <TouchableOpacity 
                        style={styles.removeButton}
                        onPress={onRemove}
                    >
                        <Text style={styles.removeButtonText}>Remove</Text>
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
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    storeInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    selectButtonWrapper: {
        marginRight: 12,
    },
    uncheckedCircle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#292526',
        backgroundColor: 'transparent',
    },
    storeNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    storeName: {
        marginLeft: 8,
        fontSize: 16,
        fontWeight: 'bold',
    },
    removeButton: {
        backgroundColor: '#000',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 15,
        marginLeft: 8,
    },
    removeButtonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 13,
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