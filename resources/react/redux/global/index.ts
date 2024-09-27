// Dependencies
import { combineReducers } from '@reduxjs/toolkit';

// Reducers
import themeReducer from './slicers/theme';

const globalReducers = combineReducers({
  themeReducer,
});

export default globalReducers;
