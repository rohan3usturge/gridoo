import { IPageSearchClickDelegate } from "./../models/IPageSearchClickDelegate";
import { IPagination } from "./../models/IPagination";
import { IEventHandler } from "./IEventHandler";
export class PageSearchHandler<T> implements IEventHandler<T> {
    private pageSearchDelegate: IPageSearchClickDelegate;
    private parentElement: JQuery;
    private paginationData: IPagination;

    constructor(pageSearchDelegate: IPageSearchClickDelegate, element: JQuery) {
        this.pageSearchDelegate = pageSearchDelegate;
        this.parentElement = element;
    }

    public RegisterDomHandler = (): void => {
        this.paginationData = null;
    }
}
