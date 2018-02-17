import * as jQuery from "jquery";
import { ConfigStore } from "../config/ConfigStore";
import { ColSettingsHandler } from "../eventHandlers/ColSettingsHandler";
import { SelectEventHandler } from "../eventHandlers/SelectEventHandler";
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
import { IColumn } from "./../models/IColumn";
import { OrderDirection } from "./../models/OrderDirection";
import { GridTemplateService } from "./../services/GridTemplateService";
import { CommonUtil } from "./../util/ColumnUtil";
import { IGridOptions } from "./IGridOptions";

export class Grid<T> {

    private handleChain: Array<IHandlerChain<T>>;
    private gridTemplateService: GridTemplateService<T>;
    private configStore: ConfigStore<T>;

    constructor(options: IGridOptions<T>) {
        this.configStore = new ConfigStore<T>(options);
        this.gridTemplateService = new GridTemplateService(this.configStore);
        this.InitHandlers();
    }

    public bindData = (data: T[], paginationInput?: IPaginationInput): void => {
        const firstIndex = 0;
        let lastIndex = this.configStore.Options.chunkSize + this.getInitialRowCount();
        lastIndex = lastIndex > data.length ? data.length - 1 : lastIndex;
        Pager.CalculatePaginationData(paginationInput);
        const gridContent: string = this.gridTemplateService.GetFirstTemplate(data,
                                                                              firstIndex,
                                                                              lastIndex,
                                                                              );
        this.configStore.Options.containerElement.innerHTML = gridContent;
        // Have to bind Scroll Handler After DOM has been created
        const scrollHandler = new ScrollHandler<T>(this.configStore, this.gridTemplateService);
        scrollHandler.RegisterDomHandler();
        this.handleChain.push({
            handler: scrollHandler,
            name: HandlerNames.Scroll,
        });
    }

    public getManageColumsHtml = (): string => {
        return this.gridTemplateService.GetManageColumnsHtml();
    }

    private getInitialRowCount = (): number => {
        return 25;
    }

    private InitHandlers = (): void => {
        const parentElement = jQuery(this.configStore.Options.containerElement);
        this.handleChain = [];
        this.handleChain.push({
            handler: new DetailsRowHandler<T>(parentElement),
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
        const toggleHandler = new ToggleColumnHandler(this.configStore, parentElement);
        let container = parentElement;
        if (this.configStore.Options.manageColSettingsContainer !== undefined) {
            container = jQuery(this.configStore.Options.manageColSettingsContainer);
        }
        this.handleChain.push({
            handler: new ColSettingsHandler<T>(container, toggleHandler),
            name: HandlerNames.ColSettings,
        });
        this.handleChain.push({
            handler: new SelectEventHandler<T>(this.configStore, parentElement, this.gridTemplateService),
            name: HandlerNames.ColSettings,
        });
        this.handleChain.forEach((value: IHandlerChain<T>): void => {
            value.handler.RegisterDomHandler();
        });
        jQuery(window).resize(() => {
            this.handleChain.forEach((value: IHandlerChain<T>): void => {
                value.handler.onResize();
            });
        });
        jQuery(document).click((event) => {
            this.handleChain.forEach((value: IHandlerChain<T>): void => {
                value.handler.onDocumentClick(event);
            });
            event.stopPropagation();
        });
    }
}
