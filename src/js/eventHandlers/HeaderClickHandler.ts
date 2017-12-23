import { ConfigStore } from "../config/ConfigStore";
import { IGridOptions } from "../main/IGridOptions";
import { CommonUtil } from "../util/ColumnUtil";
import {IHeaderClickDelegate} from "./../models/IHeaderClickDelegate";
import { OrderDirection } from "./../models/OrderDirection";
import { IEventHandler } from "./IEventHandler";

export class HeaderClickHandler<T> implements IEventHandler<T> {
    private parentElement: JQuery;
    private configStore: ConfigStore<T>;

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
        // Registering JQuery Event Handler if Header is Clicked.
        this.parentElement.on("click", ".table-header th", (event) => {
            const element = jQuery(event.target).closest("th");
            const headerId = element.attr("data-header-id");
            const col = CommonUtil.GetColumnObject(headerId, this.configStore.Options.columns);
            if (col === undefined || col === null || !col.sortable ) {
                return;
            }
            const arrowIcons = element.find("i");
            const upArrowIcon = arrowIcons.first();
            const downArrowIcon = arrowIcons.last();
            let direction: OrderDirection;
            if (arrowIcons.is(":visible")) {
                if (upArrowIcon.is(":visible")) {
                    direction = OrderDirection.Desc;
                    upArrowIcon.hide();
                    downArrowIcon.show();
                } else {
                    direction = OrderDirection.Asc;
                    downArrowIcon.hide();
                    upArrowIcon.show();
                }
            } else {
                direction = OrderDirection.Asc;
                upArrowIcon.show();
            }
            this.configStore.Options.onClickHeader(headerId, direction);
            event.stopPropagation();
        });
    }
}
