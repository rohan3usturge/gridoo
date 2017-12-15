import { IColumn } from "./Column";
import { FilterActionType } from "./FilterActionType";
import { OrderDirection } from "./OrderDirection";

export type IFilterClickHeader = (column: string, value: any, actionType: FilterActionType) => void;
