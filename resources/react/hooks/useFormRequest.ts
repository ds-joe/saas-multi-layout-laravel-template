// Dependencies
import { useEffect, useMemo } from "react";
import { v4 as uuid } from "uuid";

// Redux Dependencies
import { useDispatch, useSelector } from "react-redux";
import { addForm, removeForm, updateFormStatus, updateFormColumnData, updateFormData } from "@/redux/global/slicers/apiForm";
import type { DashboardRootState } from "@/redux/store";

// Types
import type { RouterInertiaClosureCallback, RouterInertiaClosureCallbackParameters } from "@/types/Services/Router";
import type { FormTypeState } from "@/redux/global/types/ApiForm";


/**
 * This hook using to handle both of inertia APIs & axios.
 * NOTE: please make sure you've using this hook inside Redux Provider & it contains global state.
 *
 * @param { RouterInertiaClosureCallback<D> } request
 * @param { RouterInertiaClosureCallbackParameters<D> } parameters
 * @param { string|null } formID
 * @returns Form Information
 */
const useFormRequest = <D extends {} = {}>(
  request: RouterInertiaClosureCallback<D>,
  parameters: RouterInertiaClosureCallbackParameters<D>,
  formID: string | null = null
) => {
  const formInfo = useSelector((state: DashboardRootState) => state.global.apiForm);
  const dispatch = useDispatch();
  const formId = useMemo(() => formID ?? uuid(), []);

  // Init form object
  useEffect(() => {
    if (Object.keys(parameters.data).length <= 0) return;

    dispatch(addForm({
      key: formId, form: {
        data: parameters.data as D,
        status: routerService.getRequestStatus()
      }
    }));

    return () => {
      if (Object.keys(parameters.data).length <= 0) return;
      dispatch(removeForm(formId));
    }
  }, []);

  /**
   * Set column
   *
   * @param { keyof D } column
   * @param { typeof parameters.data[K] } value
   * @return { void }
   */
  const setColumn = <K extends keyof typeof parameters.data>(column: K, value: typeof parameters.data[K]): void => {
    dispatch(updateFormColumnData({ formKey: formId, columnKey: column, data: value }))
  };

  /**
   * Set data
   *
   * @param { typeof parameters.data[K] } data
   * @return { void }
   */
  const setData = (data: typeof parameters.data): void => {
    dispatch(updateFormData({ key: formId, data }));
  }

  /**
   * Call request
   *
   * @return { void }
   */
  const call = (): void => {
    const from = getForm();
    if (!from && Object.keys(parameters.data).length > 0) {
      throw new Error(`From ${formId} not found.`);
    }

    request((from?.data ?? {}) as D, {
      ...parameters.options,
      onFinish: (res) => {
        dispatch(updateFormStatus({ key: formId, status: routerService.getRequestStatus() }))
        parameters.options?.onFinish && parameters.options.onFinish(res);
      },
    });
  }

  /**
   * Get form
   *
   * @return { FormTypeState<D>|null }
   */
  const getForm = (): FormTypeState<D> | null => {
    if (formInfo[formId]) return formInfo[formId];
    return null;
  }

  return {
    call,
    setColumn,
    setData,
    data: getForm()?.data as typeof parameters.data ?? parameters.data,
    status: getForm()?.status ?? routerService.getRequestStatus(),
    formId
  }
}

export default useFormRequest;
