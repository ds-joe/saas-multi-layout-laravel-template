// Dependencies
import { combineReducers } from '@reduxjs/toolkit'

// Slicers
import layout from './slicers/layout';

const dashboardReducers = combineReducers({
  layout
});

export default dashboardReducers;