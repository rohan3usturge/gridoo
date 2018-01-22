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
            if (event.originalEvent === undefined) {
                return;
            }
            const element = jQuery(event.target);
            const row = element.data("value");
            this.configStore.Options.onSelect([row], element.is(":checked"));
            event.stopPropagation();
        });
        this.parentElement.on("change", ".select-all-checkbox" , (event) => {
            const element = jQuery(event.target);
            const checked = element.is(":checked");
            this.configStore.Options.onSelect(this.gridTemplateService.Data, checked);
            this.parentElement.find(".select-key-checkbox").prop("checked", checked);
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
