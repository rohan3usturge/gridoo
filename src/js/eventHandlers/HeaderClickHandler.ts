import { IGridOptions } from "../main/IGridOptions";
import { CommonUtil } from "../util/ColumnUtil";
import {IHeaderClickDelegate} from "./../models/IHeaderClickDelegate";
import { OrderDirection } from "./../models/OrderDirection";
import { IEventHandler } from "./IEventHandler";

export class HeaderClickHandler<T> implements IEventHandler<T> {
    private headerClickDelegate: IHeaderClickDelegate;
    private parentElement: JQuery;
    private options: IGridOptions<T>;

    constructor(headerClickDelegate: IHeaderClickDelegate, element: JQuery, options: IGridOptions<T>) {
        this.headerClickDelegate = headerClickDelegate;
        this.options = options;
        this.parentElement = element;
    }

    public onResize(): void {
        throw new Error("Method not implemented.");
    }

    public onDocumentClick(): void {
        throw new Error("Method not implemented.");
    }

    public RegisterDomHandler = (): void => {
        // Registering JQuery Event Handler if Header is Clicked.
        this.parentElement.on("click", ".table-header th", (event) => {
            const element = jQuery(event.target).closest("th");
            const headerId = element.attr("data-header-id");
            const col = CommonUtil.getColumnObject(headerId, this.options.columns);
            if (col === undefined || col === null || !col.sortable ) {
                return;
            }
            console.log(element);
            const arrowIcons = element.find("i");
            const upArrowIcon = arrowIcons.first();
            const downArrowIcon = arrowIcons.next();
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
            this.headerClickDelegate(headerId, direction);
            event.stopPropagation();
        });
    }
}
