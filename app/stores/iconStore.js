import {create} from 'zustand';

const useIconStore = create((set) => ({
  favorites: [],
  addFavorite: (product) => set((state) => ({
    favorites: [...state.favorites, product]
  })),
  removeFavorite: (productId) => set((state) => ({
    favorites: state.favorites.filter((p) => String(p.id) !== String(productId))
  })),
  isFavorite: (productId) => (get) => get().favorites.some((p) => String(p.id) === String(productId)),

  chosenSize: [],
  addSize: (size) => set((state) => ({
    chosenSize: [...state.chosenSize, size]
  })),
  removeSize: (size) => set((state) => ({
    chosenSize: state.chosenSize.filter((s) => s !== size)
  })),
  isSizeChosen: (size) => (get) => get().chosenSize.includes(size),
}));

export default useIconStore;