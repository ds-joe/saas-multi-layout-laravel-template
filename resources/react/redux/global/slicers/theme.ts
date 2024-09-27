// Dependencies
import { createSlice } from '@reduxjs/toolkit';

// InitState
import initialState from '../initialStates/theme';

// Actions
import themeActions from '../actions/theme';

export const themeSlice = createSlice({
  name: 'global_theme',
  initialState,
  reducers: themeActions,
});

export const {} = themeSlice.actions;
export default themeSlice.reducer;
