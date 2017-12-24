import { IGridOptions } from "../main/IGridOptions";
import { IEventHandler } from "./IEventHandler";
import { ToggleColumnHandler } from "./ToggleColumnHandler";

export class ColSettingsHandler<T> implements IEventHandler<T> {
    private parentElement: JQuery;
    private toggleColumnHandler: ToggleColumnHandler<T>;

    constructor(element: JQuery, toggleColumnHandler: ToggleColumnHandler<T>) {
        this.parentElement = element;
        this.toggleColumnHandler = toggleColumnHandler;
    }
    public onResize(): void {
        const settngsPopup = this.parentElement.find(".column-settings-container");
        const tbodyHeight = this.parentElement.find(".table-body").innerHeight();
        settngsPopup.innerHeight(tbodyHeight - 10);
        settngsPopup.find(".col-settings-table").innerHeight(settngsPopup.innerHeight() -
                                settngsPopup.find(".col-settings-header").innerHeight());
    }

    public onDocumentClick(event): void {
        const targetElement = jQuery(event.target);
        if (targetElement.is(".col-settings-trigger")) {
            return;
        }
        if (!targetElement.parents().is(".column-settings-container")) {
            jQuery(".column-settings-container").hide();
        }
    }
    public RegisterDomHandler(): void {
        this.parentElement.on("click", ".table-footer .footer-left .col-settings-trigger", (event): void => {
            const element = jQuery(event.target);
            const settngsPopup = element.parents(".footer-left").children().last();
            this.onResize();
            settngsPopup.toggle();
            event.stopPropagation();
        });
        this.parentElement.on("keyup", ".column-settings-container .col-settings-header .col-settings-filter",
            (event): void => {
                const element = jQuery(event.target);
                const val = element.val().toString().toLowerCase();
                console.log(val);
                this.parentElement.find(".col-settings-table table tbody tr").each((i: number, e) => {
                    jQuery(e).show();
                    if (jQuery(e).attr("data-header-id").toLowerCase().indexOf(val) === -1 ) {
                        jQuery(e).hide();
                    }
                });
                event.stopPropagation();
        });
        this.parentElement.on("click", ".column-settings-container .show-all-column", (event): void => {
            this.parentElement.find(".column-settings-container .col-settings-hidden-checkbox")
            .each((index, element) => {
                jQuery(element).prop("checked", true);
            });
            this.toggleColumnHandler.showAllColumns();
            event.stopPropagation();
        });
        this.parentElement.on("click", ".column-settings-container .hide-all-column", (event): void => {
            this.parentElement.find(".column-settings-container .col-settings-hidden-checkbox")
            .each((index, element) => {
                jQuery(element).prop("checked", false);
            });
            this.toggleColumnHandler.hideAllColumns();
            event.stopPropagation();
        });
        this.parentElement.on("click", ".column-settings-container .col-settings-hidden-checkbox", (event): void => {
            if (event.originalEvent !== undefined) {
                const checkbox = jQuery(event.target);
                const id = checkbox.val().toString();
                if (checkbox.is(":checked")) {
                    this.toggleColumnHandler.showColumn(id);
                } else {
                    this.toggleColumnHandler.hideColumn(id);
                }
            }
            event.stopPropagation();
        });
    }

}
