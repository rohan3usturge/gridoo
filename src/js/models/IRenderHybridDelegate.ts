import { IColumn } from "./IColumn";

export type IRenderHybridDelegate<T> = (column: IColumn, row: T) => string;
export type IRenderHybridExpansion<T> = (row: T) => string;
