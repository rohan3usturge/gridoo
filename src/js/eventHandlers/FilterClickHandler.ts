import { FilterActionType } from "./../models/FilterActionType";
import { IFilterClickDelegate } from "./../models/IFilterClickDelegate";
import { IEventHandler } from "./IEventHandler";

export class FilterClickHandler<T> implements IEventHandler<T> {
    private filterClickDelegate: IFilterClickDelegate;
    private parentElement: JQuery;

    constructor(filterClickDelegate: IFilterClickDelegate, element: JQuery) {
        this.filterClickDelegate = filterClickDelegate;
        this.parentElement = element;
    }

    public RegisterDomHandler = (): void => {
        this.parentElement.on("click", ".table-body .detailsRow .detailsTable td i", (event) => {
            const element = jQuery(event.target);
            const parentTd = element.parent();
            const key = parentTd.attr("data-filter-key");
            const value = parentTd.attr("data-filter-value");
            let filterAction: FilterActionType = FilterActionType.Add;
            if (element.hasClass("removeFilter")) {
                filterAction = FilterActionType.Minus;
            }
            this.filterClickDelegate(key, value, filterAction);
            event.stopPropagation();
        });
    }
}
