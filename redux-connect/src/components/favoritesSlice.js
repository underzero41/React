import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [] // Начальное состояние - массив избранных товаров
  },
  reducers: {
    addFavorite: (state, action) => {
      state.items.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    }
  }
});

// Экспортируем действия и редюсер
export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
