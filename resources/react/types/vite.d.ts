/// <reference types="vite/client" />
import { SetupOptions } from "@inertiajs/inertia-react";
import { AxiosInstance } from "axios";
import React, { ReactNode } from "react";
import { TypeOptions } from "react-toastify";
import { User } from "./types/Models/User";
import { route as ziggyRoute } from 'ziggy-js';

declare global {

  // Axios
  interface Window {
    axios: AxiosInstance;
  }

  // Ziggy route
  var route: typeof ziggyRoute;

  /** ***********************************************************************
   * Components & pages
   ************************************************************************ */
  interface RC<P = {}> extends React.FC<P> { } // react component
  interface RP<P = {}> extends React.FC<P> {
    layout?: (
      page: SetupOptions<unknown, ServerPageProps>["props"]["initialPage"]
    ) => JSX.Element;
  } // react page
  interface RPO<P = {}> extends React.FC<P & { children?: ReactNode }> { } // react provider
  interface RPL<P = {}> extends React.FC<P & { children?: ReactNode, title?: string }> { } // React layout

  /** ***********************************************************************
   *  In coming data from sever
   ************************************************************************ */
  type ServerPageProps<P = {}, D = Record<string, any>> = {
    auth: {
      user?: User;
    };
    page_words: Record<string, string>;
  } & SetupOptions<
    unknown,
    P
  >["props"]["initialPage"]["props"]


}
