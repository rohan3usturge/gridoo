import { GridOrderDirection } from "./GridOrderDirection";

export interface IColumn {
    id: string;
    orderByCol?: string;
    type?: string;
    name: string;
    width: number;
    renderHybrid: boolean;
    hidden: boolean;
    locked: boolean;
    sortable: boolean;
    filterable: boolean;
    order: number;
    orderBy?: GridOrderDirection;
    showOnExcel?: boolean;
}
