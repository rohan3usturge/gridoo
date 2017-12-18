import {IHeaderClickDelegate} from "./../models/IHeaderClickDelegate";
import { OrderDirection } from "./../models/OrderDirection";
import { IEventHandler } from "./IEventHandler";

export class HeaderClickHandler<T> implements IEventHandler<T> {
    private headerClickDelegate: IHeaderClickDelegate;
    private parentElement: JQuery;

    constructor(headerClickDelegate: IHeaderClickDelegate, element: JQuery) {
        this.headerClickDelegate = headerClickDelegate;
        this.parentElement = element;
    }

    public RegisterDomHandler = (): void => {
        // Registering JQuery Event Handler if Header is Clicked.
        this.parentElement.on("click", ".table-header th", (event) => {
            const element = jQuery(event.delegateTarget);
            const arrowIcons = element.find("i");
            const upArrowIcon = arrowIcons.first();
            const downArrowIcon = arrowIcons.next();
            const headerId = element.attr("data-header-id");
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
