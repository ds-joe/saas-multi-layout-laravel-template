
export type TableRecordDataType = string | number | boolean | Array<any>;
export type TableRecordData = Record<string, TableRecordDataType | Record<string, Array<TableRecordDataType>>>;

export type TableData<D = TableRecordData> = Array<Record<string, D>>;
