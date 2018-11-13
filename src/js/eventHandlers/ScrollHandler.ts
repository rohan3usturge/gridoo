import { ConfigStore } from "../config/ConfigStore";
import { GridTemplateService } from "./../services/GridTemplateService";
import { IEventHandler } from "./IEventHandler";

export class ScrollHandler<T> implements IEventHandler<T> {
    private parentElement: JQuery;
    private gridTemplateService: GridTemplateService<T>;
    private rendering: boolean =  false;
    private configStore: ConfigStore<T>;
    private leftMargin: number;
    private currentIndex: number;

    constructor(configStore: ConfigStore<T>, gridTemplateService: GridTemplateService<T>, currentIndex: number) {
        this.configStore = configStore;
        this.parentElement = jQuery(this.configStore.Options.containerElement);
        this.gridTemplateService = gridTemplateService;
        this.setCurrentIndex(currentIndex);
    }
    public onResize(): void {
        //
    }
    public setCurrentIndex = (index: number) => {
        this.currentIndex = index;
        this.gridTemplateService.CurrentIndex = index;
    }
    public getCurrentIndex = () => {
        return this.currentIndex;
    }
    public scrollTableBody = () => {
        if ( !this.leftMargin ) {
            return;
        }
        this.parentElement.find(".table-body").scrollLeft(-1 * this.leftMargin);
    }
    public onDocumentClick(event): void {
        // No Op
    }
    public RegisterDomHandler = (): void => {
        // Registering JQuery Event Handler if Header is Clicked.
        this.parentElement.find(".table-body").on("scroll", this.handleResize);
    }
    public removeHandler = () => {
        this.parentElement.find(".table-body").off("scroll", this.handleResize);
    }

    private handleResize = (event) => {
        const tBodyObj = this.parentElement.find(".table-body");
        const marginLeft = -1 * tBodyObj.scrollLeft();
        this.parentElement.find(".table-header").css(
            {
                "margin-left": marginLeft,
            },
        );
        this.leftMargin = marginLeft;
        const actualTableHeight = tBodyObj.find(".mainTable").height();
        const scrollContainerHeight = tBodyObj.height();
        event.preventDefault();
        if (this.rendering) {
            event.stopPropagation();
            return;
        }
        const scrollTop = tBodyObj.scrollTop();
        if ((scrollContainerHeight + scrollTop ) - (actualTableHeight * 0.8 ) > 0 ) {
            if ( this.currentIndex >= this.gridTemplateService.DataLength ) {
                return;
            }
            this.rendering = true;
            let lastIndex = this.currentIndex + this.configStore.Options.chunkSize;
            if ( lastIndex >= this.gridTemplateService.DataLength ) {
                lastIndex = this.gridTemplateService.DataLength - 1;
            }
            const html  = jQuery(this.gridTemplateService.getTemplate(this.currentIndex, lastIndex));
            tBodyObj.find(".mainTableBody").append(html);
            this.setCurrentIndex( lastIndex + 1 );
            this.rendering = false;
        }
        event.stopPropagation();
    }
}
