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
    private parentOffSetLeft: number;
    private currentIndex: number;
    private watches: any[] = [];

    constructor(configStore: ConfigStore<T>, gridTemplateService: GridTemplateService<T>, currentIndex: number) {
        this.configStore = configStore;
        this.parentElement = jQuery(this.configStore.Options.containerElement);
        this.gridTemplateService = gridTemplateService;
        this.currentIndex = currentIndex;
    }
    public onResize(): void {
        //
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
    public resetParentOffset = () => {
        this.parentOffSetLeft = this.parentElement.offset().left;
        this.leftOffset = this.parentElement.find(".table-header").offset().left;
    }
    public watchWidth = () => {
        this.parentOffSetLeft = this.parentElement.offset().left;
        this.watches.push(setInterval(this.setHeaderOffset, 300));
    }
    public unWatchWidth = () => {
        if (this.watches === undefined || this.watches === null ) {
            return;
        }
        for (const watch of this.watches) {
            clearInterval(watch);
        }
    }
    private handleResize = (event) => {
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
            this.currentIndex = lastIndex + 1;
            this.rendering = false;
        }
        event.stopPropagation();
    }

    private setHeaderOffset = () => {
        const left = this.parentElement.offset().left;
        if ( this.parentOffSetLeft !== left ) {
            const tBodyObj = this.parentElement.find(".table-body");
            if (this.leftOffset === undefined || this.leftOffset === null) {
                this.leftOffset = this.parentElement.find(".table-header").offset().left;
            }
            this.leftOffset = this.leftOffset - (this.parentOffSetLeft - left);
            this.parentElement
                .find(".table-header")
                .offset({left: this.leftOffset, top: 0});
            this.parentOffSetLeft = left;
            tBodyObj.scrollLeft(tBodyObj.scrollLeft() - 1);
        }
    }
}
