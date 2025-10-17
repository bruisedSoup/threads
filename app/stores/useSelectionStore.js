import { create } from 'zustand';

const useSelectionStore = create((set) => ({
  selectedStores: [],
  selectedProducts: [],
  
  selectStore: (storeName, productIds = []) =>
    set((state) => {
      const isCurrentlySelected = state.selectedStores.includes(storeName);
      
      if (isCurrentlySelected) {
        // Deselect store and all its products
        return {
          selectedStores: state.selectedStores.filter((s) => s !== storeName),
          selectedProducts: state.selectedProducts.filter(
            (id) => !productIds.includes(id)
          ),
        };
      } else {
        // Select store and all its products
        return {
          selectedStores: [...state.selectedStores, storeName],
          selectedProducts: [...new Set([...state.selectedProducts, ...productIds])],
        };
      }
    }),
    
  selectAllStores: (storeNames) =>
    set(() => ({
      selectedStores: storeNames,
    })),
    
  deselectAllStores: () =>
    set(() => ({
      selectedStores: [],
    })),

  deselectStore: (storeName) =>
    set((state) => ({
      selectedStores: state.selectedStores.filter((s) => s !== storeName),
    })),
    
  selectProduct: (productId) =>
    set((state) => ({
      selectedProducts: state.selectedProducts.includes(productId)
        ? state.selectedProducts.filter((id) => id !== productId)
        : [...state.selectedProducts, productId],
    })),
    
  selectAllProducts: (productIds) =>
    set(() => ({
      selectedProducts: productIds,
    })),
    
  deselectAllProducts: () =>
    set(() => ({
      selectedProducts: [],
    })),
}));

export default useSelectionStore;