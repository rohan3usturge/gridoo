import { IColumn } from "./Column";
import { OrderDirection } from "./OrderDirection";

export type IHeaderClickHandler = (column: IColumn, direction: OrderDirection) => void;
