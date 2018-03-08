import { OrderDirection } from "./OrderDirection";

export interface IColumn {
    id: string;
    type?: string;
    name: string;
    width: number;
    renderHybrid: boolean;
    hidden: boolean;
    sortable: boolean;
    filterable: boolean;
    order?: OrderDirection;
}
