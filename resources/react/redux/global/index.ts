// Dependencies
import { combineReducers } from '@reduxjs/toolkit';

// Reducers
import themeReducer from './slicers/theme';
import apiFormReducer from "./slicers/apiForm"

const globalReducers = combineReducers({
  theme: themeReducer,
  apiForm: apiFormReducer,
});

export default globalReducers;
