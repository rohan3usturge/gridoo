import * as jQuery from "jquery";
import { ConfigStore } from "../config/ConfigStore";
import { ColSettingsHandler } from "../eventHandlers/ColSettingsHandler";
import { SelectEventHandler } from "../eventHandlers/SelectEventHandler";
import { IGridOrder } from "../models/IGridOrder";
import { IPaginationInput } from "../models/IPaginationInput";
import { Pager } from "../pagination/Pager";
import { DetailsRowHandler } from "./../eventHandlers/DetailsRowHandler";
import { FilterClickHandler } from "./../eventHandlers/FilterClickHandler";
import { HandlerNames } from "./../eventHandlers/HandlerNames";
import { HeaderClickHandler } from "./../eventHandlers/HeaderClickHandler";
import { IHandlerChain } from "./../eventHandlers/IHandlerChain";
import { PageSearchHandler } from "./../eventHandlers/PageSearchClickHandler";
import { ScrollHandler } from "./../eventHandlers/ScrollHandler";
import { IColumn } from "./../models/IColumn";
import { GridTemplateService } from "./../services/GridTemplateService";
import { IGridOptions } from "./IGridOptions";

export class Grid<T> {

    private handleChain: Array<IHandlerChain<T>>;
    private gridTemplateService: GridTemplateService<T>;
    private configStore: ConfigStore<T>;
    private scrollHandler: ScrollHandler<T>;
    private manageColHandler: ColSettingsHandler<T>;

    constructor(options: IGridOptions<T>) {
        this.configStore = new ConfigStore<T>(options);
        this.gridTemplateService = new GridTemplateService(this.configStore);
        this.InitHandlers();
    }

    public bindData = (data: T[], paginationInput?: IPaginationInput): void => {
        setTimeout(() => {
            Pager.CalculatePaginationData(paginationInput);
            this.internalRender(data);
        }, 1 );
    }
    public reRender = (): void => {
        setTimeout(() => {
            this.internalRender(this.gridTemplateService.Data);
        }, 1 );
    }
    public setColConfig = (colConfig: IColumn[]): void => {
        this.configStore.Options.columns = colConfig;
    }
    // TODO: Update Row Index
    public updateRows = (rows: T[]) => {
        if ( rows === undefined || !rows.length ) {
            return;
        }
        this.gridTemplateService.updateRows(rows);
        const container = $(this.configStore.Options.containerElement);
        const key = this.configStore.Options.keyColumn;
        for (const row of rows) {
            const rowHtml = this.gridTemplateService.getTemplateForOneRow(row);
            const rowJq = $(rowHtml);
            container.find(".mainRow").each((i: number, mR: Element) => {
                const mrJq = $(mR);
                const pkId = mrJq.attr("data-pk-attr");
                if ( pkId === row[key]) {
                    mrJq.html(rowJq[0].innerHTML);
                    mrJq.next().html(rowJq[2].innerHTML);
                    return;
                }
            });
        }
    }

    public setOrder = (orderByList: IGridOrder[]) => {
        for (const col of this.configStore.Options.columns) {
            col.orderBy = undefined;
        }
        if (orderByList === undefined || orderByList === null || orderByList.length === 0 ) {
            return;
        }
        for (const orderCol of orderByList) {
            for (const col of this.configStore.Options.columns) {
                if (orderCol.colId === col.id ) {
                    col.orderBy = orderCol.orderBy;
                    break;
                }
            }
        }
    }

    public destroy = () => {
        const parentElement = jQuery(this.configStore.Options.containerElement);
        if ( parentElement !== undefined ) {
            parentElement.off();
        }
        $(window).off("resize", this.documentResizeHandler);
        $(document).off("click", this.documentClickHandler);
        $(window).off("resize", this.documentResizeHandlerForCs);
        $(document).off("click", this.documentClickHandlerForCs);
    }
    private internalRender = (data: T[]): void => {
        const firstIndex = 0;
        let lastIndex = this.configStore.Options.chunkSize + this.getInitialRowCount();
        lastIndex = lastIndex >= data.length ? data.length - 1 : lastIndex;
        const gridContent: string = this.gridTemplateService.GetFirstTemplate(data,
                                                                              firstIndex,
                                                                              lastIndex,
                                                                              );
        this.configStore.Options.containerElement.innerHTML = gridContent;
        if ( this.scrollHandler !== undefined && this.scrollHandler !== null ) {
            this.scrollHandler.removeHandler();
            this.scrollHandler.setCurrentIndex(lastIndex + 1 );
        } else {
            this.scrollHandler = new ScrollHandler<T>(this.configStore, this.gridTemplateService, lastIndex + 1);
        }
        this.scrollHandler.RegisterDomHandler();
        this.setFocusToLastElement();
    }
    private getInitialRowCount = (): number => {
        return Math.floor((jQuery(window).innerHeight() * 0.65 ) / 32);
    }

    private InitHandlers = (): void => {
        const parentElement = jQuery(this.configStore.Options.containerElement);
        this.handleChain = [];
        this.handleChain.push({
            handler: new DetailsRowHandler<T>(this.configStore, parentElement),
            name: HandlerNames.DetailsRow,
        });
        this.handleChain.push({
            handler:  new FilterClickHandler<T>(this.configStore, parentElement),
            name: HandlerNames.FilterAction,
        });
        this.handleChain.push({
            handler: new HeaderClickHandler<T>(this.configStore, parentElement),
            name: HandlerNames.HeaderClick,
        });
        this.handleChain.push({
            handler: new PageSearchHandler<T>(this.configStore, parentElement),
            name: HandlerNames.PageSearch,
        });
        this.handleChain.push({
            handler: new SelectEventHandler<T>(this.configStore, parentElement, this.gridTemplateService),
            name: HandlerNames.ColSettings,
        });
        this.handleChain.forEach((value: IHandlerChain<T>): void => {
            value.handler.RegisterDomHandler();
        });
        jQuery(window).resize(this.documentResizeHandler);
        jQuery(document).click(this.documentClickHandler);
    }

    private documentResizeHandlerForCs = (event) => {
        this.manageColHandler.onResize();
        event.stopPropagation();
    }
    private documentClickHandlerForCs = (event) => {
        this.manageColHandler.onDocumentClick(event);
        event.stopPropagation();
    }
    private documentClickHandler = (event) => {
        this.handleChain.forEach((value: IHandlerChain<T>): void => {
            value.handler.onDocumentClick(event);
        });
        event.stopPropagation();
    }
    private documentResizeHandler = (event) => {
        this.handleChain.forEach((value: IHandlerChain<T>): void => {
            value.handler.onDocumentClick(event);
        });
        event.stopPropagation();
    }
    private setFocusToLastElement = (): void => {
        const element = this.configStore.getFocusableElement();
        if ( element ) {
            if ( element.classList.contains("firstLink")) {
                $(".table-footer .firstLink").focus();
            }
            if ( element.classList.contains("nextLink")) {
                $(".table-footer .nextLink").focus();
            }
            if ( element.classList.contains("prevLink")) {
                $(".table-footer .prevLink").focus();
            }
            if ( element.classList.contains("lastLink")) {
                $(".table-footer .lastLink").focus();
            }
            if ( element.classList.contains("pageSizeSelector")) {
                $(".table-footer .pageSizeSelector").focus();
            }
            if ( element.classList.contains("pager-input")) {
                $(".table-footer .pager-input").focus();
            }
            if ( element.tagName.toLowerCase() === "th" || element.parentElement.tagName.toLowerCase() === "th") {
                this.scrollHandler.scrollTableBody();
                setTimeout(() => {
                    const dataHeaderId = element.getAttribute("data-header-id")
                                        || element.parentElement.getAttribute("data-header-id");
                    let newFocusable;
                    $(".table-header th").each((index: number, elem: HTMLElement) => {
                        const eachHeader = $(elem);
                        const eachHeaderId = eachHeader.attr("data-header-id");
                        if ( eachHeaderId === dataHeaderId ) {
                            newFocusable = eachHeader;
                            return false;
                        }
                    });
                    if ( newFocusable ) {
                        newFocusable.focus();
                    }
                });
            }
        }
        this.configStore.setFocusableElement(undefined);

    }

}
