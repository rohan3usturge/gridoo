import * as jQuery from "jquery";
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
    private extendedOptions: IGridOptions<T>;
    private toggleHandler: ToggleColumnHandler<T>;
    private paginationData: IPagination;
    private defaultGridOptions: IGridOptions<T> = {
        chunkSize: 5,
        columns: [],
        containerElement: null,
        hybridFunction: (column: IColumn, row: T): string => {
            return "true";
        },
        // tslint:disable-next-line:no-empty
        onClickFilter: (column: string, value: any, actionType: FilterActionType): void => {

        },
        // tslint:disable-next-line:no-empty
        onClickHeader: (column: string, direction: OrderDirection): void => {

        },
        // tslint:disable-next-line:no-empty
        onPageSearch: (pageSize: number, pageIndex: number): void => {

        },
    };

    constructor(options: IGridOptions<T>) {
        this.extendedOptions = this.extendOptions(options);
        this.gridTemplateService = new GridTemplateService(this.extendedOptions);
    }

    public bindData = (data: T[], paginationInput?: IPaginationInput): void => {
        const firstIndex = 0;
        const lastIndex = this.extendedOptions.chunkSize + this.getInitialRowCount();
        this.paginationData = Pager.GetPaginationData(paginationInput);
        const gridContent: string = this.gridTemplateService.GetFirstTemplate(data,
                                                                              firstIndex,
                                                                              lastIndex,
                                                                              this.paginationData);
        this.extendedOptions.containerElement.innerHTML = gridContent;
        this.InitHandlers();
    }

    public showAllColumns = (): void => {
        this.toggleHandler.showAllColumns();
    }

    public showColumn = (columnId: string): void => {
        this.toggleHandler.showColumn(columnId);
    }

    public hideColumn = (columnId: string): void => {
        this.toggleHandler.hideColumn(columnId);
    }

    public hideAllColumns = (): void => {
        this.toggleHandler.hideAllColumns();
    }

    private getInitialRowCount = (): number => {
        return 25;
    }

    private extendOptions = (inputOptions: IGridOptions<T>): IGridOptions<T> => {
        return this.extendedOptions = jQuery.extend({}, this.defaultGridOptions, inputOptions);
    }

    private InitHandlers = (): void => {
        const parentElement = jQuery(this.extendedOptions.containerElement);
        this.handleChain = [];
        this.handleChain.push({
            handler: new DetailsRowHandler<T>(parentElement),
            name: HandlerNames.DetailsRow,
        });
        this.handleChain.push({
            handler:  new FilterClickHandler<T>(this.extendedOptions.onClickFilter, parentElement),
            name: HandlerNames.FilterAction,
        });
        this.handleChain.push({
            handler: new HeaderClickHandler<T>(this.extendedOptions.onClickHeader, parentElement),
            name: HandlerNames.HeaderClick,
        });
        this.handleChain.push({
            handler: new ScrollHandler<T>(parentElement, this.gridTemplateService, this.extendedOptions.chunkSize),
            name: HandlerNames.Scroll,
        });
        this.handleChain.push({
            handler: new PageSearchHandler<T>(this.extendedOptions.onPageSearch, parentElement, this.paginationData),
            name: HandlerNames.PageSearch,
        });
        this.toggleHandler = new ToggleColumnHandler<T>(parentElement, this.extendedOptions.columns);
        this.handleChain.push({
            handler: this.toggleHandler,
            name: HandlerNames.ToggleColumn,
        });
        this.handleChain.forEach((value: IHandlerChain<T>): void => {
            value.handler.RegisterDomHandler();
        });
    }
}
