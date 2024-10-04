// Dependencies
import { v4 as uuid } from "uuid";
import { useMemo, useEffect, useState } from "react";
import { router } from "@inertiajs/react";

// Redux Requirements
import { useSelector, useDispatch } from "react-redux";
import { DashboardRootState } from "@/redux/store";
import { createForm, deleteForm, updateFormColumnData, updateFormData, updateFormErrors, updateProcessingState } from "@/redux/global/slicers/forms";

// Types
import { StateFormData, StateFormErrors } from "@/types/Hooks/StateForm";
import type { Method, VisitOptions, RequestPayload } from '@inertiajs/core';


/**
 * @description
 * - This hook using to save data in redux to easy share it between components by form id.
 *
 * NOTE: please make sure the global redux store is exists before using this hook.
 *
 * @param { StateFormData<D>|undefined } initData
 * @param { string } formId
 * @returns
 */
const useStateForm = <D extends {}>(
  initData: StateFormData<D> | null = null,
  formId: string | null = null
) => {

  const dispatch = useDispatch();
  const targetFormId = useMemo(() => formId ?? uuid(), [])
  const form = useSelector((state: DashboardRootState) => state.global.forms[targetFormId]);
  const [render, setRender] = useState<boolean>(false);

  useEffect(() => {

    // Init data if new form.
    if (initData && !formId && !render) {
      setRender((_prev) => {

        dispatch(createForm({
          key: targetFormId,
          form: {
            data: initData,
            errors: {},
            processing: false
          }
        }));

        return true;
      });
    }

    // Cleanup on exist page.
    return () => {
      if (render) {
        dispatch(deleteForm(targetFormId));
      }
    }
  }, []);

  /**
   * Set form data column
   *
   * @param { keyof D } column
   * @param { D[keyof D] } value
   * @return { void }
   */
  const setColumnData = (column: keyof D, value: D[keyof D]) => {
    dispatch(updateFormColumnData({
      key: targetFormId,
      columnKey: column,
      data: value
    }));
  }

  /**
   * Set form data
   *
   * @param { D } data
   * @return { void }
   */
  const setFormData = (data: D): void => {
    dispatch(updateFormData({
      key: targetFormId,
      data
    }));
  }

  /**
   * Set form errors.
   *
   * @return { StateFormErrors<D> } errors
   * @return { void }
   */
  const setFormErrors = (errors: StateFormErrors<D>): void => {
    dispatch(updateFormErrors({
      key: targetFormId,
      errors
    }));
  };

  /**
   * Send inertia request
   *
   * @param { Method } method
   * @param { string } url
   * @param { RequestPayload } data
   * @param { VisitOptions } options
   * @return { void }
   */
  const inertiaRequest = (method: Method, url: string, data: RequestPayload = form.data, options: VisitOptions = {}): void => {
    return router[method](url, data, {
      ...options,
      onError: (errors) => {
        setFormErrors(errors as any);
        options?.onError && options.onError(errors);
      },
      onStart: (params) => {
        dispatch(updateProcessingState({ key: targetFormId, processing: true }));
        options.onStart && options.onStart(params);
      },
      onFinish: (params) => {
        dispatch(updateProcessingState({ key: targetFormId, processing: false }));
        options.onFinish && options.onFinish(params);
      }
    });
  }

  return {
    data: (form?.data ?? {}) as StateFormData<D>,
    errors: form?.errors ?? {} as StateFormErrors<keyof D>,
    processing: form?.processing ?? false,
    formId: targetFormId,
    setColumnData,
    setFormData,
    setFormErrors,
    inertiaRequest
  }
}

export default useStateForm;
