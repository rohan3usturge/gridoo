import { IEventHandler } from "./IEventHandler";
export class DetailsRowHandler<T> implements IEventHandler<T> {
    private parentElement: JQuery;

    constructor(element: JQuery) {
        this.parentElement = element;
    }
    public onResize(): void {
        throw new Error("Method not implemented.");
    }

    public onDocumentClick(): void {
        throw new Error("Method not implemented.");
    }
    public RegisterDomHandler = (): void => {
        this.parentElement.on("click", ".table-body .expansionArrows i", (event) => {
            const arrow = jQuery(event.target);
            const detailsRow = arrow.closest("tr").next();
            const currentIcon = arrow.hide();
            const otherIcon = arrow.siblings("i").show();
            if (arrow.hasClass("expandDetailsRowIcon")) {
                detailsRow.show();
            } else {
                detailsRow.hide();
            }
            event.stopPropagation();
        });
    }
}
