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
        this.parentElement.on("click", ".table-body .expansionArrows button", (event) => {
            const arrow = jQuery(event.currentTarget);
            const detailsRow = arrow.closest("tr").next();
            const currentIcon = arrow.hide();
            const otherIcon = arrow.siblings("button").show();
            if (arrow.hasClass("expandDetailsRowIcon")) {
                detailsRow.slideDown(this.configStore.Options.animationTime);
                detailsRow.attr("tabindex", 0);
            } else {
                detailsRow.slideUp(this.configStore.Options.animationTime);
                detailsRow.attr("tabindex", -1);
            }
            otherIcon.focus();
            event.stopPropagation();
        });
    }
}
