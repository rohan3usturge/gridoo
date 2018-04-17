import { GridOrderDirection } from "./GridOrderDirection";

export interface IColumn {
    id: string;
    type?: string;
    name: string;
    width: number;
    renderHybrid: boolean;
    hidden: boolean;
    sortable: boolean;
    filterable: boolean;
    order: number;
    orderBy?: GridOrderDirection;
}
