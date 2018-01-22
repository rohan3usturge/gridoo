import { IEventHandler } from "./IEventHandler";
export class DetailsRowHandler<T> implements IEventHandler<T> {
    private parentElement: JQuery;

    constructor(element: JQuery) {
        this.parentElement = element;
    }
    public onResize(): void {
        // Nothing to Do.
    }

    public onDocumentClick(event): void {
        // Nothing to Do.
    }
    public RegisterDomHandler = (): void => {
        this.parentElement.on("click", ".table-body .expansionArrows i", (event) => {
            const arrow = jQuery(event.target);
            const detailsRow = arrow.closest("tr").next();
            const currentIcon = arrow.hide();
            const otherIcon = arrow.siblings("i").show();
            if (arrow.hasClass("expandDetailsRowIcon")) {
                detailsRow.show(200);
            } else {
                detailsRow.hide(200);
            }
            event.stopPropagation();
        });
    }
}
