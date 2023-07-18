import { configureStore } from '@reduxjs/toolkit';

import booksSlice from './Books/booksSlice';
import categoriesSlice from './Categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksSlice,
    categories: categoriesSlice,
  },
});

export default store;
