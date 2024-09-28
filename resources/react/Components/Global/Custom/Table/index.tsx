// Dependencies
import { forwardRef } from 'react';

// Hooks
import useTheme from '@/hooks/useTheme';

// Tailwind Utils
import { cn } from '@/utilities/tailwind/cn';

// Components
import Typography from '../Typography';

// Types
import type {
  TableProps,
  TableHeadProps,
  TableHeaderCellProps,
  TableRowProps,
  TableBodyProps,
  TableCellProps,
  TableFooterProps,
} from '@/types/Components/Global/Custom/Table';

// Table Component
export const Table = forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  const theme = useTheme().global.components.custom.table;
  return (
    <div className={cn(props.responsive ? 'overflow-x-auto' : '')}>
      <table
        {...props}
        ref={ref}
        className={cn(
          theme.table.base,
          'border-collapse border-spacing-0 w-full',
          props.className,
        )}
      >
        {props.children}
      </table>
    </div>
  );
});

// Table Head Component
export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  (props, ref) => {
    return (
      <thead
        {...props}
        ref={ref}
        className={cn(props.className)}
      >
        {props.children}
      </thead>
    );
  },
);

// Table Header Cell Component
export const TableHeaderCell = forwardRef<
  HTMLTableCellElement,
  TableHeaderCellProps
>((props, ref) => {
  const theme = useTheme().global.components.custom.table;

  return (
    <th
      {...props}
      ref={ref}
      className={cn(theme.head.cell, props.className)}
    >
      <Typography
        variant={theme.head.text.variant}
        color={theme.head.text.color}
        className={theme.head.text.base}
      >
        {props.children}
      </Typography>
    </th>
  );
});

// Table Body Component
export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  (props, ref) => {
    return (
      <tbody
        {...props}
        ref={ref}
        className={cn(props.className)}
      >
        {props.children}
      </tbody>
    );
  },
);

// Table Row Component
export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  (props, ref) => {
    return (
      <tr
        {...props}
        ref={ref}
        className={cn(props.className)}
      >
        {props.children}
      </tr>
    );
  },
);

// Table Cell Component
export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  (props, ref) => {
    const theme = useTheme().global.components.custom.table;

    return (
      <td
        {...props}
        ref={ref}
        className={cn(theme.body.cell, props.className)}
      >
        <Typography
          variant={theme.body.text.variant}
          color={theme.body.text.color}
          className={theme.body.text.base}
        >
          {props.children}
        </Typography>
      </td>
    );
  },
);

// Table Footer Component
export const TableFooter = forwardRef<
  HTMLTableSectionElement,
  TableFooterProps
>((props, ref) => {
  return (
    <tfoot
      {...props}
      ref={ref}
      className={cn(props.className)}
    >
      {props.children}
    </tfoot>
  );
});
