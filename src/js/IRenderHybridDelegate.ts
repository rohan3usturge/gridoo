import { IColumn } from "./Column";

export type IRenderHybridDelegate<T> = (column: IColumn, row: T) => string;
