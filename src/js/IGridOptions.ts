import { IColumn } from "./Column";
import { IFilterClickHeader } from "./IFilterClickHandler";
import { IHeaderClickHandler } from "./IHeaderClickHandler";
import { IPageSearchClickHandler } from "./IPageSearchClickHandler";
import { IRenderHybridDelegate } from "./IRenderHybridDelegate";

export interface IGridOptions<T> {
    columns: IColumn[];
    hybridFunction: IRenderHybridDelegate<T>;
    onClickHeader: IHeaderClickHandler;
    onClickFilter: IFilterClickHeader;
    containerElement: Element;
    onPageSearch: IPageSearchClickHandler;
}
