import { ConfigStore } from "../config/ConfigStore";
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
    private leftOffset: number;
    private currentIndex: number;

    constructor(configStore: ConfigStore<T>, gridTemplateService: GridTemplateService<T>, currentIndex: number) {
        this.configStore = configStore;
        this.parentElement = jQuery(this.configStore.Options.containerElement);
        this.gridTemplateService = gridTemplateService;
        this.currentIndex = currentIndex;
    }
    public onResize(): void {
        this.leftOffset = this.parentElement.find(".table-header").offset().left;
    }

    public onDocumentClick(event): void {
        // throw new Error("Method not implemented.");
    }
    public RegisterDomHandler = (): void => {
        // Registering JQuery Event Handler if Header is Clicked.
        this.parentElement.resize((event) => {
            this.leftOffset = this.parentElement.find(".table-header").offset().left;
        });
        this.parentElement.find(".table-body").on("scroll", (event) => {
            const tBodyObj = this.parentElement.find(".table-body");
            if (this.leftOffset === undefined || this.leftOffset === null) {
                this.leftOffset = this.parentElement.find(".table-header").offset().left;
            }
            this.parentElement.find(".table-header").offset(
                {
                    left: this.leftOffset + -1 * tBodyObj.scrollLeft(),
                    top: 0,
                },
            );
            const actualTableHeight = tBodyObj.find(".mainTable").height();
            const scrollContainerHeight = tBodyObj.height();
            event.preventDefault();
            if (this.rendering) {
                event.stopPropagation();
                return;
            }
            const scrollTop = tBodyObj.scrollTop();
            if ((scrollContainerHeight + scrollTop ) - (actualTableHeight * 0.8 ) > 0 ) {
                this.rendering = true;
                const html  = jQuery(this.gridTemplateService.getTemplate(this.currentIndex,
                                                                          this.currentIndex +
                                                                          this.configStore.Options.chunkSize));
                tBodyObj.find(".mainTableBody").append(html);
                this.currentIndex = this.currentIndex + this.configStore.Options.chunkSize;
                this.rendering = false;
            }
            event.stopPropagation();
        });
    }
    // private get Virtualizer(): Virtualizer {
    //     if (this.virtualizer === null || this.virtualizer === undefined) {
    //         return this.virtualizer = new Virtualizer(this.configStore.options.chunkSize,
    //                                             25, this.gridTemplateService.DataLength);
    //     } else {
    //         return this.virtualizer;
    //     }
    // }
}
