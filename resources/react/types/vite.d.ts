/// <reference types="vite/client" />
import { SetupOptions } from '@inertiajs/react';
import { AxiosInstance } from 'axios';
import { Page } from '@inertiajs/core';

import React, { ReactNode, JSX } from 'react';
import { TypeOptions } from 'react-toastify';
import { UserModel } from '@/types/Models/User';
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
  interface RC<P = {}> extends React.FC<P> {} // react component
  interface RP<P = {}> extends React.FC<P> {
    layout?: (page: Page<ServerPageProps>) => JSX.Element;
  } // react page
  interface RPO<P = {}> extends React.FC<P & { children?: ReactNode }> {} // react provider
  interface RPL<P = {}>
    extends React.FC<P & { children?: any; title?: string }> {} // React layout

  /** ***********************************************************************
   *  In coming data from sever
   ************************************************************************ */

  type ServerPageProps<P = {}> = {
    auth: {
      user?: UserModel;
    };
    page_words: Record<string, string | undefined>;
    notification?: {
      message: string;
      type: TypeOptions;
    };
  } & Page['props'];
}
