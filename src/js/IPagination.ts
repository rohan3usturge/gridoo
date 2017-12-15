export interface IPagination {
    pageSize: number;
    pageIndex: number;
    pageSizes: number[];
    firstPageLinkEnabled: boolean;
    LastPageLinkEnabled: boolean;
    nextPageLinkEnabled: boolean;
    prevPageLinkEnabled: boolean;
    pageIndexInputDisabled: boolean;
}
