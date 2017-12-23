import { ConfigStore } from "../config/ConfigStore";
import { OrderDirection } from "./../models/OrderDirection";
import { GridTemplateService } from "./../services/GridTemplateService";
import { IIndexCounter } from "./../virtualization/IndexCounter";
import { ScrollDirection } from "./../virtualization/ScrollDirection";
import { Virtualizer } from "./../virtualization/Virtualizer";
import { IEventHandler } from "./IEventHandler";

export class ScrollHandler<T> implements IEventHandler<T> {
    private virtualizer: Virtualizer;
    private parentElement: JQuery;
    private gridTemplateService: GridTemplateService<T>;
    private rendering: boolean =  false;
    private configStore: ConfigStore<T>;

    constructor(configStore: ConfigStore<T>, element: JQuery, gridTemplateService: GridTemplateService<T>) {
        this.parentElement = element;
        this.virtualizer = new Virtualizer();
        this.gridTemplateService = gridTemplateService;
    }
    public onResize(): void {
        // throw new Error("Method not implemented.");
    }

    public onDocumentClick(event): void {
        // throw new Error("Method not implemented.");
    }
    public RegisterDomHandler = (): void => {
        // Registering JQuery Event Handler if Header is Clicked.
        this.parentElement.find(".table-body").on("scroll", (event) => {
            const tBodyObj = this.parentElement.find(".table-body");
            this.parentElement.find(".table-header").offset(
                {
                    left: -1 * tBodyObj.scrollLeft(),
                    top: 0,
                },
            );
            const actualTableHeight = tBodyObj.find(".mainTable").height();
            this.virtualizer.TableHeight = actualTableHeight;
            this.virtualizer.ScrollContainerHeight = tBodyObj.height();
            event.preventDefault();
            if (this.rendering) {
                event.stopPropagation();
                return;
            }
            const scrollTop = tBodyObj.scrollTop();
            const indexCounter: IIndexCounter = this.virtualizer.GetIndexCounterForScroll(scrollTop);
            switch (indexCounter.direction) {
                case ScrollDirection.Down:
                    if (indexCounter.renderingRequired) {
                        this.rendering = true;
                        tBodyObj.find(".mainTable .mainTableBody").append(
                            this.gridTemplateService.GetRowsHtml(indexCounter.startIndex, indexCounter.endIndex));
                        tBodyObj.find(".mainTable .mainTableBody > tr")
                            .slice(0, this.configStore.options.chunkSize * 2).remove();
                    }
                    break;
                case ScrollDirection.Up:
                    if (indexCounter.renderingRequired) {
                        this.rendering = true;
                        tBodyObj.find(".mainTable .mainTableBody").prepend
                        (this.gridTemplateService.GetRowsHtml(indexCounter.startIndex, indexCounter.endIndex));
                        tBodyObj.find(".mainTable .mainTableBody > tr")
                            .slice((this.configStore.options.chunkSize * -2)).remove();
                    }
                    break;
            }
            event.stopPropagation();
        });
    }
}
