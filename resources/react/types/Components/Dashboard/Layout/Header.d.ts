import type { ComponentPropsWithRef } from "react";

export type HeaderProps = ComponentPropsWithRef<'header'> & {
  title?: string | number;
};
