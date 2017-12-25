import * as jQuery from "jquery";
import { ConfigStore } from "../config/ConfigStore";
import { Pager } from "../pagination/Pager";
import { IPageSearchClickDelegate } from "./../models/IPageSearchClickDelegate";
import { IPagination } from "./../models/IPagination";
import { IEventHandler } from "./IEventHandler";

export class PageSearchHandler<T> implements IEventHandler<T> {
    private configStore: ConfigStore<T>;
    private parentElement: JQuery;

    constructor(configStore: ConfigStore<T>, element: JQuery) {
        this.configStore = configStore;
        this.parentElement = element;
    }
    public onResize(): void {
        // throw new Error("Method not implemented.");
    }

    public onDocumentClick(): void {
        // throw new Error("Method not implemented.");
    }
    public RegisterDomHandler = (): void => {
        this.parentElement.on("click", ".table-footer .firstLink", (event) => {
            this.configStore.options.onPageSearch(Pager.PaginationData.pageSize, 1);
            event.stopPropagation();
        });
        this.parentElement.on("click", ".table-footer .nextLink", (event) => {
            this.configStore.options.onPageSearch(Pager.PaginationData.pageSize, Pager.PaginationData.pageIndex + 1);
            event.stopPropagation();
        });
        this.parentElement.on("click", ".table-footer .prevLink", (event) => {
            this.configStore.options.onPageSearch(Pager.PaginationData.pageSize, Pager.PaginationData.pageIndex - 1);
            event.stopPropagation();
        });
        this.parentElement.on("click", ".table-footer .lastLink", (event) => {
            this.configStore.options.onPageSearch(Pager.PaginationData.pageSize, Pager.PaginationData.noOfPages);
            event.stopPropagation();
        });
        this.parentElement.on("change", ".table-footer .pageSizeSelector", (event) => {
            const val: number = +jQuery(event.target).val().toString();
            this.configStore.options.onPageSearch(val, Pager.PaginationData.pageIndex);
            event.stopPropagation();
        });
        this.parentElement.on("keypress", ".table-footer .pager-input", (event) => {
            const ip = jQuery(event.target);
            const pageData = Pager.PaginationData;
            if (event.keyCode === 13) {
                const val: number = +ip.val().toString();
                if (isNaN(val) || val > pageData.noOfPages || val < 1) {
                    ip.val(pageData.pageIndex);
                } else {
                    this.configStore.options.onPageSearch(pageData.pageSize, val);
                }
            }
            event.stopPropagation();
        });
    }
}
