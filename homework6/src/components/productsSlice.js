import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [], // Массив продуктов
  },
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter(product => product.id !== action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.items.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    toggleAvailability: (state, action) => {
      const product = state.items.find(product => product.id === action.payload);
      if (product) {
        product.available = !product.available;
      }
    },
  },
});

// Экспорт действий и редюсера
export const { addProduct, removeProduct, updateProduct, toggleAvailability } = productsSlice.actions;
export default productsSlice.reducer;
