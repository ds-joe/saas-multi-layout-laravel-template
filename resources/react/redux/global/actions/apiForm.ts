// Types
import type { PayloadAction } from "@reduxjs/toolkit";
import { ApiFormState, FormTypeState } from "../types/ApiForm";

export default {

  /**
   * Add new form
   *
   * @param { ApiFormState }state
   * @param { PayloadAction<{ key: string, form: FormTypeState }>} action
   * @return { ApiFormState }
   */
  addForm: (state: ApiFormState, action: PayloadAction<{ key: string, form: FormTypeState }>): ApiFormState => {
    if (state[action.payload.key]) return state;
    return {
      ...state,
      [action.payload.key]: action.payload.form
    }
  },

  /**
   * Remove a from
   *
   * @param { ApiFormState } state
   * @param { PayloadAction<string> } action
   * @return { ApiFormState }
   */
  removeForm: (state: ApiFormState, action: PayloadAction<string>): ApiFormState => {
    const newObj = state;
    delete state[action.payload];
    return newObj;
  },

  /**
   * Update form status
   *
   * @param { ApiFormState } state
   * @param { PayloadAction<{ key: string, status: FormTypeState['status'] }> } action
   * @return { void }
   */
  updateFormStatus: (state: ApiFormState, action: PayloadAction<{ key: string, status: FormTypeState['status'] }>): void => {
    state[action.payload.key].status = action.payload.status;
  },

  /**
   * Update form data
   *
   * @param { ApiFormState } state
   * @param { PayloadAction<{ key: string, data: FormTypeState['data'] }>} action
   * @return { void }
   */
  updateFormData: (state: ApiFormState, action: PayloadAction<{ key: string, data: FormTypeState['data'] }>): void => {
    state[action.payload.key].data = action.payload.data;
  },

  /**
   * Update form column
   *
   * @param { ApiFormState } state
   * @param { PayloadAction<{ formKey: string, columnKey: any, data: any }> } action
   * @return { void|ApiFormState }
   */
  updateFormColumnData: (state: ApiFormState, action: PayloadAction<{ formKey: string, columnKey: any, data: any }>): void | ApiFormState => {
    if (state[action.payload.formKey]) {
      state[action.payload.formKey].data[action.payload.columnKey] = action.payload.data;
    }
    return state;
  },


};
