import { GridOrderDirection } from "./GridOrderDirection";
import { IColumn } from "./IColumn";

export type IHeaderClickDelegate = (column: string, direction: GridOrderDirection) => void;
