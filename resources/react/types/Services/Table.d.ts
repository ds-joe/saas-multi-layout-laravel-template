// Data section
export type TableRecordData = string | number | boolean | null | Record<string, string | number | boolean | null>
export type TableData<D = TableRecordData> = Array<Record<string, D>>;

// User options
export type TableUserOptions = {
  key: string;
  label?: string | number;
  type?: 'string' | 'number' | 'boolean'
}
