import * as jQuery from "jquery";
import { IPageSearchClickDelegate } from "./../models/IPageSearchClickDelegate";
import { IPagination } from "./../models/IPagination";
import { IEventHandler } from "./IEventHandler";
export class PageSearchHandler<T> implements IEventHandler<T> {
    private pageSearchDelegate: IPageSearchClickDelegate;
    private parentElement: JQuery;
    private paginationData: IPagination;

    constructor(pageSearchDelegate: IPageSearchClickDelegate, element: JQuery, paginationData: IPagination) {
        this.parentElement = element;
        this.pageSearchDelegate = pageSearchDelegate;
        this.paginationData = paginationData;
    }
    public onResize(): void {
        throw new Error("Method not implemented.");
    }

    public onDocumentClick(): void {
        throw new Error("Method not implemented.");
    }
    public RegisterDomHandler = (): void => {
        this.parentElement.on("click", ".table-footer .firstLink", (event) => {
            this.pageSearchDelegate(1, this.paginationData.pageSize);
            event.stopPropagation();
        });
        this.parentElement.on("click", ".table-footer .nextLink", (event) => {
            this.pageSearchDelegate(this.paginationData.pageIndex + 1, this.paginationData.pageSize);
            event.stopPropagation();
        });
        this.parentElement.on("click", ".table-footer .prevLink", (event) => {
            this.pageSearchDelegate(this.paginationData.pageIndex - 1, this.paginationData.pageSize);
            event.stopPropagation();
        });
        this.parentElement.on("click", ".table-footer .lastLink", (event) => {
            this.pageSearchDelegate(this.paginationData.noOfPages, this.paginationData.pageSize);
            event.stopPropagation();
        });
        this.parentElement.on("change", ".table-footer .pageSizeSelector", (event) => {
            const val: number = +jQuery(event.target).val().toString();
            this.pageSearchDelegate(this.paginationData.pageIndex, val);
            event.stopPropagation();
        });
        this.parentElement.on("keypress", ".table-footer .pager-input", (event) => {
            const ip = jQuery(event.target);
            if (event.keyCode === 13) {
                const val: number = +ip.val().toString();
                if (isNaN(val) || val > this.paginationData.noOfPages || val < 1) {
                    ip.val(this.paginationData.pageIndex);
                } else {
                    this.pageSearchDelegate(val, this.paginationData.pageSize);
                }
            }
            event.stopPropagation();
        });
    }

    public set PaginationData(paginationData: IPagination) {
        this.paginationData = paginationData;
    }
}
