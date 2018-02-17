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
        this.parentElement.on("change", ".select-key-checkbox" , (event) => {
            const element = jQuery(event.target);
            const row = element.data("value");
            const checked = element.is(":checked");
            if (checked) {
                element.parents(".mainRow").addClass("active");
            } else {
                element.parents(".mainRow").removeClass("active");
            }
            if (event.originalEvent === undefined) {
                return;
            }
            this.configStore.Options.onSelect([row], checked);
            event.stopPropagation();
        });
        this.parentElement.on("change", ".select-all-checkbox" , (event) => {
            const element = jQuery(event.target);
            const checked = element.is(":checked");
            this.configStore.Options.onSelect(this.gridTemplateService.Data, checked);
            this.parentElement.find(".select-key-checkbox").prop("checked", checked);
            if (checked) {
                this.parentElement.find(".mainTable .mainRow").addClass("active");
            } else {
                this.parentElement.find(".mainTable .mainRow").removeClass("active");
            }
            event.stopPropagation();
        });
    }
    public onResize(): void {
        // Ignore
    }
    public onDocumentClick(event: any): void {
        // Ignore
    }
}
