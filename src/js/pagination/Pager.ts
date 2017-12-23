import { IPagination } from "../models/IPagination";
import { IPaginationInput } from "../models/IPaginationInput";

export class Pager {

    public static paginationData: IPagination;

    public static CalculatePaginationData = (paginationInput: IPaginationInput): void => {
            const paginationData: any = {};
            paginationData.pageIndex = paginationInput.pageIndex;
            paginationData.pageSize = paginationInput.pageSize;
            paginationData.pageSizes = paginationInput.pageSizes;
            paginationData.totalCount = paginationInput.totalCount;
            paginationData.noOfPages = Math.ceil(paginationInput.totalCount / paginationInput.pageSize);
            const minNum = ((paginationInput.pageIndex - 1) * paginationInput.pageSize);
            const lowerLimitOffset = paginationInput.pageSize > paginationInput.totalCount ?
                                     paginationInput.totalCount :
                                     paginationInput.pageSize;
            paginationData.range = {
                min : minNum + 1,
                max : minNum + lowerLimitOffset,
            };
            paginationData.firstPageLinkDisabled = paginationData.noOfPages === 1 || paginationData.pageIndex === 1;
            paginationData.lastPageLinkDisabled  = paginationData.noOfPages === 1
                                                    || (paginationData.pageIndex === paginationData.noOfPages);
            paginationData.prevPageLinkDisabled  = paginationData.pageIndex === 1
                                                    || (paginationData.pageIndex - 1) <= 0;
            paginationData.nextPageLinkDisabled  = paginationData.noOfPages === paginationData.pageIndex
                                                    || (paginationData.pageIndex + 1) >= paginationData.noOfPages;
            Pager.paginationData = paginationData;
    }

    public static get PaginationData(): IPagination {
        return Pager.paginationData;
    }
}
