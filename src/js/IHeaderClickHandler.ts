import { IColumn } from "./Column";
import { OrderDirection } from "./OrderDirection";

export type IHeaderClickHandler = (column: string, direction: OrderDirection) => void;
