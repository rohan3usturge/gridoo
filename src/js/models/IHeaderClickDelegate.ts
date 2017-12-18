import { IColumn } from "./IColumn";
import { OrderDirection } from "./OrderDirection";

export type IHeaderClickDelegate = (column: string, direction: OrderDirection) => void;
