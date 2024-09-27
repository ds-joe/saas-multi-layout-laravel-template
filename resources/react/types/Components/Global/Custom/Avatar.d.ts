import type { ComponentPropsWithRef, ReactNode } from 'react';
import type { AvatarProps as MAvatarProps } from '@material-tailwind/react';

export type AvatarProps = ComponentPropsWithRef<'img'> & {
  fill_back?: ReactNode;
};
