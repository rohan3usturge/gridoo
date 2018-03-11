import * as jQuery from "jquery";
import { ConfigStore } from "../config/ConfigStore";
import { ColSettingsHandler } from "../eventHandlers/ColSettingsHandler";
import { SelectEventHandler } from "../eventHandlers/SelectEventHandler";
import { IGridOrder } from "../models/IGridOrder";
import { IPagination } from "../models/IPagination";
import { IPaginationInput } from "../models/IPaginationInput";
import { Pager } from "../pagination/Pager";
import { DetailsRowHandler } from "./../eventHandlers/DetailsRowHandler";
import { FilterClickHandler } from "./../eventHandlers/FilterClickHandler";
import { HandlerNames } from "./../eventHandlers/HandlerNames";
import { HeaderClickHandler } from "./../eventHandlers/HeaderClickHandler";
import { IEventHandler } from "./../eventHandlers/IEventHandler";
import { IHandlerChain } from "./../eventHandlers/IHandlerChain";
import { PageSearchHandler } from "./../eventHandlers/PageSearchClickHandler";
import { ScrollHandler } from "./../eventHandlers/ScrollHandler";
import { ToggleColumnHandler } from "./../eventHandlers/ToggleColumnHandler";
import { FilterActionType } from "./../models/FilterActionType";
import { GridOrderDirection } from "./../models/GridOrderDirection";
import { IColumn } from "./../models/IColumn";
import { GridTemplateService } from "./../services/GridTemplateService";
import { CommonUtil } from "./../util/ColumnUtil";
import { IGridOptions } from "./IGridOptions";

export class Grid<T> {

    private handleChain: Array<IHandlerChain<T>>;
    private gridTemplateService: GridTemplateService<T>;
    private configStore: ConfigStore<T>;
    private toggleHandler: ToggleColumnHandler<T>;
    private scrollHandler: ScrollHandler<T>;
    private manageColHandler: ColSettingsHandler<T>;

    constructor(options: IGridOptions<T>) {
        this.configStore = new ConfigStore<T>(options);
        this.gridTemplateService = new GridTemplateService(this.configStore);
        this.InitHandlers();
    }

    public bindData = (data: T[], paginationInput?: IPaginationInput): void => {
        const firstIndex = 0;
        let lastIndex = this.configStore.Options.chunkSize + this.getInitialRowCount();
        lastIndex = lastIndex >= data.length ? data.length - 1 : lastIndex;
        Pager.CalculatePaginationData(paginationInput);
        const gridContent: string = this.gridTemplateService.GetFirstTemplate(data,
                                                                              firstIndex,
                                                                              lastIndex,
                                                                              );
        this.configStore.Options.containerElement.innerHTML = gridContent;
        if (this.configStore.Options.manageColSettingsContainer !== undefined) {
            this.bindManageColums(this.configStore.Options.manageColSettingsContainer);
        }
        // Have to bind Scroll Handler After DOM has been created
        if ( this.scrollHandler !== undefined && this.scrollHandler !== null ) {
            this.scrollHandler.removeHandler();
        } else {
            this.scrollHandler = new ScrollHandler<T>(this.configStore, this.gridTemplateService, lastIndex + 1);
            this.scrollHandler.watchWidth();
        }
        this.scrollHandler.RegisterDomHandler();
    }

    public bindManageColums = (manageColContainer?: HTMLElement, force?: boolean): void => {
        if (this.manageColHandler !== undefined && !force ) {
            return;
        }
        const html = this.gridTemplateService.GetManageColumnsHtml();
        const element = jQuery(manageColContainer
                        || this.configStore.Options.manageColSettingsContainer
                        || this.configStore.Options.containerElement);
        this.toggleHandler = new ToggleColumnHandler(this.configStore,
                                                     jQuery(this.configStore.Options.containerElement));
        this.configStore.options.manageColSettingsContainer = element[0];
        this.manageColHandler = new ColSettingsHandler<T>(jQuery(element), this.configStore, this.toggleHandler);
        element.find(".col-settings-container").html(html);
        this.manageColHandler.RegisterDomHandler();
        jQuery(window).resize(this.documentResizeHandlerForCs);
        jQuery(document).click(this.documentClickHandlerForCs);
    }
    public applyColumnConfig = (columns: IColumn[]) => {
        this.toggleHandler.applyColumnConfig(columns);
        const html = this.gridTemplateService.GetManageColumnsHtml();
        const element = jQuery(this.configStore.Options.manageColSettingsContainer
                              || this.configStore.Options.containerElement);
        element.find(".col-settings-container").html(html);
    }

    public setOrder = (orderByList: IGridOrder[]) => {
        for (const col of this.configStore.Options.columns) {
            col.order = undefined;
        }
        if (orderByList === undefined || orderByList === null || orderByList.length === 0 ) {
            return;
        }
        for (const orderCol of orderByList) {
            for (const col of this.configStore.Options.columns) {
                if (orderCol.colId === col.id ) {
                    col.order = orderCol.order;
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
        const manageContainerElement = jQuery(this.configStore.Options.manageColSettingsContainer);
        if ( manageContainerElement !== undefined ) {
            manageContainerElement.off();
        }
        $(window).off("resize", this.documentResizeHandler);
        $(document).off("click", this.documentClickHandler);
        $(window).off("resize", this.documentResizeHandlerForCs);
        $(document).off("click", this.documentClickHandlerForCs);
        if ( this.scrollHandler !== undefined ) {
            this.scrollHandler.unWatchWidth();
        }
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
        const container = parentElement;
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
    private documentResizeHandlerForScroll = (event) => {
        this.manageColHandler.onResize();
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

}
