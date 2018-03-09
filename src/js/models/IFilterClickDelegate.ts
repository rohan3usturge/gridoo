import { FilterActionType } from "./FilterActionType";
import { GridOrderDirection } from "./GridOrderDirection";
import { IColumn } from "./IColumn";

export type IFilterClickDelegate = (column: string, value: any, actionType: FilterActionType, type?: string) => void;
