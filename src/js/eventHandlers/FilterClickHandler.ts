import { IGridOptions } from "../main/IGridOptions";
import { CommonUtil } from "../util/ColumnUtil";
import { FilterActionType } from "./../models/FilterActionType";
import { IFilterClickDelegate } from "./../models/IFilterClickDelegate";
import { IEventHandler } from "./IEventHandler";

export class FilterClickHandler<T> implements IEventHandler<T> {
    private filterClickDelegate: IFilterClickDelegate;
    private parentElement: JQuery;
    private options: IGridOptions<T>;

    constructor(filterClickDelegate: IFilterClickDelegate, element: JQuery, options: IGridOptions<T>) {
        this.filterClickDelegate = filterClickDelegate;
        this.parentElement = element;
        this.options = options;
    }
    public onResize(): void {
        throw new Error("Method not implemented.");
    }

    public onDocumentClick(): void {
        throw new Error("Method not implemented.");
    }
    public RegisterDomHandler = (): void => {
        this.parentElement.on("click", ".table-body .detailsRow .detailsTable td i", (event) => {
            const element = jQuery(event.target);
            const parentTd = element.parent();
            const key = parentTd.attr("data-filter-key");
            const value = parentTd.attr("data-filter-value");
            const col = CommonUtil.getColumnObject(key, this.options.columns);
            if (col === undefined || col === null || !col.filterable ) {
                return;
            }
            let filterAction: FilterActionType = FilterActionType.Add;
            if (element.hasClass("removeFilter")) {
                filterAction = FilterActionType.Minus;
            }
            this.filterClickDelegate(key, value, filterAction);
            event.stopPropagation();
        });
    }
}
