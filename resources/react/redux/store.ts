// Dependencies
import { configureStore, combineReducers } from '@reduxjs/toolkit'

// Reducers
import dashboardReducers from './dashboard'
// import websiteReducers from './website'
// import globalReducers from './global';

export const dashboardStore = configureStore({
  reducer: combineReducers({
    dashboard: dashboardReducers,
    // global: globalReducers,
  }),
});

// export const websiteStore = configureStore({
//   reducer: combineReducers({
//     website: websiteReducers,
//     global: globalReducers,
//   }),
// });

export type DashboardRootState = ReturnType<typeof dashboardStore.getState>;
// export type WebsiteRootState = ReturnType<typeof websiteStore.getState>;