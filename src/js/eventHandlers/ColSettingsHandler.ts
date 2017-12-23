import { IGridOptions } from "../main/IGridOptions";
import { IEventHandler } from "./IEventHandler";

export class ColSettingsHandler<T> implements IEventHandler<T> {
    private parentElement: JQuery;
    private options: IGridOptions<T>;

    constructor(element: JQuery, options: IGridOptions<T>) {
        this.parentElement = element;
        this.options = options;
    }
    public onResize(): void {
        const settngsPopup = this.parentElement.find(".column-settings-container");
        const tbodyHeight = this.parentElement.find(".table-body").innerHeight();
        settngsPopup.innerHeight(tbodyHeight - 10);
        settngsPopup.find(".col-settings-table").innerHeight(settngsPopup.innerHeight() -
                                settngsPopup.find(".col-settings-header").innerHeight());
    }

    public onDocumentClick(): void {
        throw new Error("Method not implemented.");
    }
    public RegisterDomHandler(): void {
        this.parentElement.on("click", ".table-footer .footer-left .col-settings-trigger", (event): void => {
            const element = jQuery(event.target);
            const settngsPopup = element.siblings(".column-settings-container");
            this.onResize();
            settngsPopup.toggle();
        });
    }

}
