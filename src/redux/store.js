import { configureStore } from '@reduxjs/toolkit';

// import booksReducer from './books/booksSlice.js';
// import categoriesReducer from './categories/categoriesSlice.js';

// import booksReducer from './books/booksSlice';
// import categoriesReducer from './categories/categoriesSlice';

import booksReducer from './books/booksSlice'
import categoriesReducer from './categories/categoriesSlice'

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;
