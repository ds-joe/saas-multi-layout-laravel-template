// Dependencies
import { createSlice } from '@reduxjs/toolkit';

// InitState
import initialState from '../initialStates/apiForm';

// Actions
import apiFormActions from '../actions/apiForm';

export const apiFormSlice = createSlice({
  name: 'global_api_form',
  initialState,
  reducers: apiFormActions,
});

export const { addForm, removeForm, updateFormData, updateFormStatus, updateFormColumnData } = apiFormSlice.actions;
export default apiFormSlice.reducer;
