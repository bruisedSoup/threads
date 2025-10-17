import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (storeName, product) =>
    set((state) => {
      const storeIndex = state.cart.findIndex(
        (s) => s.storeName === storeName
      );

      if (storeIndex > -1) {
        const prodIndex = state.cart[storeIndex].products.findIndex(
          (p) => p.id === product.id
        );

        if (prodIndex > -1) {
          state.cart[storeIndex].products[prodIndex].quantity +=
            product.quantity;
        } else {
          state.cart[storeIndex].products.push(product);
        }

        return { cart: [...state.cart] };
      } else {
        return {
          cart: [
            ...state.cart,
            { storeName, products: [product] },
          ],
        };
      }
    }),
  updateQuantity: (productId, newQuantity) =>
    set((state) => {
      const updatedCart = state.cart.map(store => ({
        ...store,
        products: store.products.map(product => 
          product.id === productId 
            ? { ...product, quantity: newQuantity }
            : product
        )
      }));
      return { cart: updatedCart };
    }),

  removeFromCart: (productId) =>
    set((state) => {
      const updatedCart = state.cart.map(store => ({
        ...store,
        products: store.products.filter(product => product.id !== productId)
      })).filter(store => store.products.length > 0); // Remove store if no products left
      return { cart: updatedCart };
    }),

  removeFromStore: (storeName) =>
    set((state) => ({
      cart: state.cart.filter((store) => store.storeName !== storeName),
    })),

  clearCart: () =>
    set(() => ({
      cart: [],
    })),
}));

export default useCartStore;