import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const apiKey = 'ia3yMWMEvNiSm4Uw3RX9';

const URL = `${baseURL}${apiKey}/books`;

const initialState = {
  books: [],
  isLoading: false,
  error: undefined,
};

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (thunkAPI) => {
    try {
      const response = await axios(URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Error fetching books');
    }
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async (book, thunkAPI) => {
    try {
      const response = await axios.post(URL, book);
      thunkAPI.dispatch(fetchBooks());
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Error adding book');
    }
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${URL}/${id}`, id);
      thunkAPI.dispatch(fetchBooks());
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Error removing book');
    }
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        const data = Object.keys(action.payload).map((item) => {
          const book = {};
          book.item_id = item;
          book.title = action.payload[item][0].title;
          book.author = action.payload[item][0].author;
          book.category = action.payload[item][0].category;
          return book;
        });
        state.books = data;
      })

      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default booksSlice.reducer;
