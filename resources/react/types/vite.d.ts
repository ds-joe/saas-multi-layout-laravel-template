/// <reference types="vite/client" />
import type { SetupOptions } from '@inertiajs/react';
import type { AxiosInstance } from 'axios';
import type { Page } from '@inertiajs/core';

import type React, { ReactNode, JSX } from 'react';
import type { TypeOptions } from 'react-toastify';
import type { UserModel } from '@/types/Models/User';
import { route as ziggyRoute } from 'ziggy-js';
import type Router from '@/Services/Router';
import type { Modules } from './Services/Module';

declare global {

  // Window interface
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
    layout?: (page: Page<ServerPageProps>) => JSX.Element;
  } // react page
  interface RPO<P = {}> extends React.FC<P & { children?: ReactNode }> { } // react provider
  interface RPL<P = {}>
    extends React.FC<P & { children?: any; title?: string }> { } // React layout

  /** ***********************************************************************
   *  In coming data from sever
   ************************************************************************ */

  type ServerPageProps<P = {}> = P & {
    auth: {
      user?: UserModel;
      permissions: Array<string>
    };
    page_words: Record<string, string | undefined>;
    notification?: {
      message: string;
      type: TypeOptions;
    };
    modules: Modules;
  } & Page['props'];
}
