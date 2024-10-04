// Dependencies
import { combineReducers } from '@reduxjs/toolkit';

// Reducers
import themeReducer from './slicers/theme';
import formsReducer from "./slicers/forms"

const globalReducers = combineReducers({
  theme: themeReducer,
  forms: formsReducer,
});

export default globalReducers;
