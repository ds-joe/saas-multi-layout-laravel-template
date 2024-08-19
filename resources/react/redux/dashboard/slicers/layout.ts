// Dependencies
import { createSlice } from '@reduxjs/toolkit'

// InitState 
import initialState from "../initialStates/layout"
import layoutActions from "../actions/layout";

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: layoutActions,
})

export const { changeLayoutTheme } = layoutSlice.actions;
export default layoutSlice.reducer