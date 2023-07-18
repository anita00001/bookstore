import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import categoriesSlice from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    booksContainer: booksReducer,
    categories: categoriesSlice,
  },
});

export default store;
