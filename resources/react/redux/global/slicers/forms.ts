// Dependencies
import { createSlice } from '@reduxjs/toolkit';

// InitState
import initialState from '../initialStates/forms';

// Actions
import formsActions from '../actions/forms';

export const formsSlice = createSlice({
  name: 'global_forms',
  initialState,
  reducers: formsActions,
});

export const { createForm, deleteForm, updateFormData, updateFormErrors, updateFormColumnData, updateProcessingState } = formsSlice.actions;
export default formsSlice.reducer;
