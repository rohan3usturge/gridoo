import { ConfigStore } from "../config/ConfigStore";
import { IEventHandler } from "./IEventHandler";
export class DetailsRowHandler<T> implements IEventHandler<T> {
    private parentElement: JQuery;

    constructor(private configStore: ConfigStore<T>, element: JQuery) {
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
                detailsRow.slideDown(this.configStore.Options.animationTime);
            } else {
                detailsRow.slideUp(this.configStore.Options.animationTime);
            }
            event.stopPropagation();
        });
    }
}
