import { ConfigStore } from "../config/ConfigStore";
import { GridTemplateService } from "../services/GridTemplateService";
import { IEventHandler } from "./IEventHandler";

export class SelectEventHandler<T> implements IEventHandler<T> {
    private parentElement: JQuery;
    private configStore: ConfigStore<T>;
    private gridTemplateService: GridTemplateService<T>;

    constructor(configStore: ConfigStore<T>, element: JQuery, gridTemplateService: GridTemplateService<T>) {
        this.configStore = configStore;
        this.parentElement = element;
        this.gridTemplateService = gridTemplateService;
    }
    public RegisterDomHandler(): void {
        this.parentElement.on("change", ".select-key-checkbox", (event) => {
            const element = jQuery(event.target);
            const checked = element.is(":checked");
            const value = element.val().toString();
            if (checked) {
                this.gridTemplateService.selectRows(value);
                if (this.configStore.Options.isAlternateExpanded) {
                    this.gridTemplateService.selectChildRows(value);
                }
                element.parents(".mainRow").addClass("active");
            } else {
                if (this.configStore.Options.isAlternateExpanded) {
                    this.gridTemplateService.deSelectChildRows(value);
                }
                this.gridTemplateService.deSelectRows(value);
                element.parents(".mainRow").removeClass("active");
            }
            if (event.originalEvent === undefined) {
                return;
            }
            this.configStore.Options.onSelect(this.gridTemplateService.Selected, checked);
            event.stopPropagation();
        });
        this.parentElement.on("change", ".select-all-checkbox", (event) => {
            const element = jQuery(event.target);
            const checked = element.is(":checked");
            this.parentElement.find(".select-key-checkbox").prop("checked", checked);
            if (checked) {
                this.gridTemplateService.selectAll();
                this.parentElement.find(".mainTable .mainRow").addClass("active");
            } else {
                this.gridTemplateService.deSelectAll();
                this.parentElement.find(".mainTable .mainRow").removeClass("active");
            }
            this.configStore.Options.onSelect(this.gridTemplateService.Selected, checked);
            event.stopPropagation();
        });
        if (this.configStore.Options.isAlternateExpanded) {
            this.parentElement.on("change", ".select-details-checkbox", (event) => {
                const element = jQuery(event.target);
                const checked = element.is(":checked");
                const value = element.val().toString();
                if (checked) {
                    this.gridTemplateService.selectExpandedRow(value);
                    element.parents(".mainRow").addClass("active");
                } else {
                    this.gridTemplateService.deSelectExpandedRow(value);
                    element.parents(".mainRow").removeClass("active");
                }
                if (event.originalEvent === undefined) {
                    return;
                }
                this.configStore.Options.onSelect(this.gridTemplateService.Selected, checked);
                event.stopPropagation();
            });
        }
    }
    public onResize(): void {
        // Ignore
    }
    public onDocumentClick(event: any): void {
        // Ignore
    }
}
