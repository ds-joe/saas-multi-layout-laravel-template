import type { ComponentPropsWithRef } from 'react';

export type TableProps = ComponentPropsWithRef<'table'> & {
  responsive?: boolean;
};
export type TableHeadProps = ComponentPropsWithRef<'thead'>;
export type TableBodyProps = ComponentPropsWithRef<'tbody'>;
export type TableRowProps = ComponentPropsWithRef<'tr'>;
export type TableHeaderCellProps = ComponentPropsWithRef<'th'>;
export type TableCellProps = ComponentPropsWithRef<'td'>;
export type TableFooterProps = ComponentPropsWithRef<'tfoot'>;
