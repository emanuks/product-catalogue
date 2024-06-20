import { createSlice } from "@reduxjs/toolkit";

import { CategoryI } from "@/app/global.types";

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: {
      search: '',
      categories: [] as CategoryI[],
    }
  },
  reducers: {
    changeSearch: (state, action) => {
      state.filter.search = action.payload;
    },
    addCategory: (state, action) => {
      state.filter.categories.push(action.payload);
    },
    removeCategory: (state, action) => {
      state.filter.categories = state.filter.categories.filter(category => category.id !== action.payload.id);
    },
  }
});

export const { changeSearch, addCategory, removeCategory } = filterSlice.actions;

export default filterSlice.reducer;