import { ConfigStore } from "../config/ConfigStore";
import { IGridOptions } from "../main/IGridOptions";
import { CommonUtil } from "../util/ColumnUtil";
import { FilterActionType } from "./../models/FilterActionType";
import { IFilterClickDelegate } from "./../models/IFilterClickDelegate";
import { IEventHandler } from "./IEventHandler";

export class FilterClickHandler<T> implements IEventHandler<T> {
    private configStore: ConfigStore<T>;
    private parentElement: JQuery;

    constructor(configStore: ConfigStore<T>, element: JQuery) {
        this.configStore = configStore;
        this.parentElement = element;
    }
    public onResize(): void {
        // Nothing to Do.
    }

    public onDocumentClick(event): void {
        // Nothing to Do.
    }
    public RegisterDomHandler = (): void => {
        this.parentElement.on("click", ".table-body .detailsRow .detailsTable td i", (event) => {
            const element = jQuery(event.target);
            const parentTd = element.parents("td");
            const key = parentTd.attr("data-filter-key");
            const value = parentTd.attr("data-filter-value");
            const type = parentTd.attr("data-filter-type");
            const col = CommonUtil.GetColumnObject(key, this.configStore.Options.columns);
            if (col === undefined || col === null || !col.filterable ) {
                return;
            }
            let filterAction: FilterActionType = FilterActionType.Add;
            if (element.hasClass("removeFilter")) {
                filterAction = FilterActionType.Minus;
            }
            this.configStore.setFocusableElement(event.target);
            this.configStore.Options.onClickFilter(key, value, filterAction, type);
            event.stopPropagation();
        });
    }
}
