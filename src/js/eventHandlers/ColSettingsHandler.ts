import { IGridOptions } from "../main/IGridOptions";
import { ConfigStore } from "./../config/ConfigStore";
import { IEventHandler } from "./IEventHandler";
import { ToggleColumnHandler } from "./ToggleColumnHandler";

export class ColSettingsHandler<T> implements IEventHandler<T> {
    private parentElement: JQuery;
    private toggleColumnHandler: ToggleColumnHandler<T>;
    private configStore: ConfigStore<T>;

    constructor(element: JQuery, configStore: ConfigStore<T>, toggleColumnHandler: ToggleColumnHandler<T>) {
        this.parentElement = element;
        this.configStore = configStore;
        this.toggleColumnHandler = toggleColumnHandler;
    }
    public onResize(): void {
        // const settngsPopup = this.parentElement.find(".col-settings-container");
        // const tbodyHeight = this.parentElement.find(".table-body").innerHeight();
        // settngsPopup.innerHeight(tbodyHeight - 10);
        // settngsPopup.find(".col-settings-table").innerHeight(settngsPopup.innerHeight() -
        //                         settngsPopup.find(".col-settings-header").innerHeight());
    }

    public onDocumentClick(event): void {
        const targetElement = jQuery(event.target);
        if (targetElement.is(".col-settings-trigger")) {
            return;
        }
        if (!targetElement.parents().is(".col-settings-container")) {
            jQuery(".col-settings-trigger").removeClass("active");
            jQuery(".col-settings-container").slideUp(this.configStore.Options.animationTime);
        }
    }
    public RegisterDomHandler(): void {
        this.parentElement.on("click", ".col-settings-trigger", (event): void => {
            const element = jQuery(event.target);
            const settngsPopup = this.parentElement.find(".col-settings-container");
            this.onResize();
            jQuery(".col-settings-trigger").addClass("active");
            settngsPopup.slideToggle(this.configStore.Options.animationTime);
            event.stopPropagation();
        });
        this.parentElement.on("keyup", ".col-settings-header .col-settings-filter",
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
        this.parentElement.on("click", ".show-all-column", (event): void => {
            this.parentElement.find(".col-settings-hidden-checkbox")
            .each((index, element) => {
                jQuery(element).prop("checked", true);
            });
            this.toggleColumnHandler.showAllColumns();
            this.configStore.Options.onColSettingsChange(this.configStore.Options.columns);
            event.stopPropagation();
        });
        this.parentElement.on("click", ".hide-all-column", (event): void => {
            this.parentElement.find(".col-settings-hidden-checkbox")
            .each((index, element) => {
                jQuery(element).prop("checked", false);
            });
            this.toggleColumnHandler.hideAllColumns();
            this.configStore.Options.onColSettingsChange(this.configStore.Options.columns);
            event.stopPropagation();
        });
        this.parentElement.on("click", ".col-settings-hidden-checkbox", (event): void => {
            if (event.originalEvent !== undefined) {
                const checkbox = jQuery(event.target);
                const id = checkbox.val().toString();
                if (checkbox.is(":checked")) {
                    this.toggleColumnHandler.showColumn(id);
                } else {
                    this.toggleColumnHandler.hideColumn(id);
                }
            }
            this.configStore.Options.onColSettingsChange(this.configStore.Options.columns);
            event.stopPropagation();
        });
    }

}
