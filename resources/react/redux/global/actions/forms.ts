// Types
import type { PayloadAction } from "@reduxjs/toolkit";
import type { FormsTypeState, FormTypeState } from "../types/Forms";
import type { StateFormErrors } from "@/types/Hooks/StateForm";

export default {

  /**
   * Add new form
   *
   * @param { FormsTypeState } state
   * @param { PayloadAction<{ key: string, form: FormTypeState }>} action
   * @return { FormsTypeState }
   */
  createForm: (state: FormsTypeState, action: PayloadAction<{ key: string, form: FormTypeState }>): FormsTypeState => {
    if (state[action.payload.key]) return state;
    return {
      ...state,
      [action.payload.key]: action.payload.form
    }
  },

  /**
   * Update form errors
   *
   * @param { FormsTypeState } state
   * @param { PayloadAction<{key: string, errors: StateFormErrors> } action
   * @return { void }
   */
  updateFormErrors: (state: FormsTypeState, action: PayloadAction<{ key: string, errors: StateFormErrors }>) => {
    if (state[action.payload.key]) return state;
    state[action.payload.key].errors = action.payload.errors;
  },

  /**
   * Remove a from
   *
   * @param { FormsTypeState } state
   * @param { PayloadAction<string> } action
   * @return { FormsTypeState }
   */
  deleteForm: (state: FormsTypeState, action: PayloadAction<string>): FormsTypeState => {
    const newObj = state;
    delete state[action.payload];
    return newObj;
  },

  /**
   * Update form data
   *
   * @param { FormsTypeState } state
   * @param { PayloadAction<{ key: string, data: FormTypeState['data'] }>} action
   * @return { void }
   */
  updateFormData: (state: FormsTypeState, action: PayloadAction<{ key: string, data: FormTypeState['data'] }>): void => {
    state[action.payload.key].data = action.payload.data;
  },

  /**
   * Update form column
   *
   * @param { FormsTypeState } state
   * @param { PayloadAction<{ key: string, columnKey: any, data: any }> } action
   * @return { void }
   */
  updateFormColumnData: (state: FormsTypeState, action: PayloadAction<{ key: string, columnKey: any, data: any }>): void | FormsTypeState => {
    if (!state[action.payload.key]) return state;
    state[action.payload.key].data[action.payload.columnKey] = action.payload.data;
  },

  /**
   * Set form processing
   *
   * @param { FormsTypeState } state
   * @param { PayloadAction<{ key: string, processing: boolean }> } action
   * @return { void }
   */
  updateProcessingState: (state: FormsTypeState, action: PayloadAction<{ key: string, processing: boolean }>): void => {
    state[action.payload.key].processing = action.payload.processing;
  }


};
