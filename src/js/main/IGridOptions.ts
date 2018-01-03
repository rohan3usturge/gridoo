import { IColumn } from "./../models/IColumn";
import { IFilterClickDelegate } from "./../models/IFilterClickDelegate";
import { IHeaderClickDelegate } from "./../models/IHeaderClickDelegate";
import { IPageSearchClickDelegate } from "./../models/IPageSearchClickDelegate";
import { IRenderHybridDelegate } from "./../models/IRenderHybridDelegate";

export interface IGridOptions<T> {
    columns: IColumn[];
    hybridFunction: IRenderHybridDelegate<T>;
    onClickHeader: IHeaderClickDelegate;
    onClickFilter: IFilterClickDelegate;
    containerElement: HTMLElement | null;
    onPageSearch: IPageSearchClickDelegate;
    chunkSize: 5;
}
