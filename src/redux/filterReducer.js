import { createSlice, current } from '@reduxjs/toolkit';
import { actionType, filterValue } from './constants';

const initialState = {
    filter: filterValue.all
}

const filterSlice = createSlice({
  name: 'Filter',
  initialState,
  reducers: {
    changeFilter: (state, action) => {state.filter = action.payload}
  }
});


export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
