import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    status: 'Under Construction',
  },
  reducers: {
    categoryStatus: (state) => state.status,
  },
});

export const { addCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
