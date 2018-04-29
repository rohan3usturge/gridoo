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
        this.parentElement.on("click", ".table-body .expansionArrows i", this.expandRow);
        this.parentElement.on("keyup", ".table-body .expansionArrows i", this.expandRow);
    }
    private expandRow = (event) => {
        const code = event.keyCode || event.which;
        if ( event.type !== "click" && (event.type === "keyup" && code !== 13 && code !== 32) ) {
            return;
        }
        const arrow = jQuery(event.target);
        const detailsRow = arrow.closest("tr").next();
        const currentIcon = arrow.hide().attr("aria-hidden", "true");
        const otherIcon = arrow.siblings("i").show().attr("aria-hidden", "false");
        if (arrow.hasClass("expandDetailsRowIcon")) {
            otherIcon.attr("aria-expanded", "true");
            detailsRow.slideDown(this.configStore.Options.animationTime);
        } else {
            currentIcon.attr("aria-expanded", "true");
            detailsRow.slideUp(this.configStore.Options.animationTime);
        }
        otherIcon.focus();
        event.stopPropagation();
    }
}
