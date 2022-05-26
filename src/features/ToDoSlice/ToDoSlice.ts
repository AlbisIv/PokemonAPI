import { createSlice } from '@reduxjs/toolkit';

export const ToDoSlice = createSlice({
  name: 'counter',
  initialState: {
    value: [] as string[],
  },
  reducers: {
    createElement: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    deleteElement: (state, action) => {
      state.value.splice(action.payload, 1);
    },

  },
});

// Action creators are generated for each case reducer function
export const { createElement, deleteElement } = ToDoSlice.actions;

export default ToDoSlice.reducer;
