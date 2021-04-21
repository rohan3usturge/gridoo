import { ISelectDelegate } from "../models/ISelectDelegate";
import { IColumn } from "./../models/IColumn";
import { IFilterClickDelegate } from "./../models/IFilterClickDelegate";
import { IHeaderClickDelegate } from "./../models/IHeaderClickDelegate";
import { IPageSearchClickDelegate } from "./../models/IPageSearchClickDelegate";
import { IRenderHybridDelegate, IRenderHybridExpansion } from "./../models/IRenderHybridDelegate";

export interface IGridOptions<T> {
    columns: IColumn[];
    keyColumn: string;
    hybridFunction: IRenderHybridDelegate<T>;
    onClickHeader: IHeaderClickDelegate;
    onClickFilter: IFilterClickDelegate;
    // onColSettingsChange: IColSettingsChangeDelegate;
    containerElement: HTMLElement | null;
    // manageColSettingsContainer?: HTMLElement | null;
    onSelect: ISelectDelegate<T>;
    onPageSearch: IPageSearchClickDelegate;
    renderHybridExpansion?: IRenderHybridExpansion<T>;
    chunkSize: number;
    animationTime: number;
    caption?: string;
    emptyValue?: string;
    showCaption?: boolean;
    summary?: string;
    isAlternateExpanded?: boolean;
    isCustomExpansion?: boolean;
    expansionFieldName?: string;
}
