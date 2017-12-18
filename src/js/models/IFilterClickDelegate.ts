import { FilterActionType } from "./FilterActionType";
import { IColumn } from "./IColumn";
import { OrderDirection } from "./OrderDirection";

export type IFilterClickDelegate = (column: string, value: any, actionType: FilterActionType) => void;
