import { IRange } from "./IRange";

export interface IPagination {
    totalCount: number;
    pageSize: number;
    pageIndex: number;
    pageSizes: number[];
    noOfPages: number;
    range: IRange;
    firstPageLinkDisabled: boolean;
    lastPageLinkDisabled: boolean;
    nextPageLinkDisabled: boolean;
    prevPageLinkDisabled: boolean;
    pageIndexInputDisabled: boolean;
}
