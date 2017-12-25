declare module Gridoo
{
	import { IPaginationInput } from "../models/IPaginationInput";
	import { IGridOptions } from "./IGridOptions";
	export class Grid<T> {
	    private handleChain;
	    private gridTemplateService;
	    private configStore;
	    constructor(options: IGridOptions<T>);
	    bindData: (data: T[], paginationInput?: IPaginationInput) => void;
	    private getInitialRowCount;
	    private InitHandlers;
	}

	import { IGridOptions } from "../main/IGridOptions";
	export class ConfigStore<T> {
	    options: IGridOptions<T>;
	    private defaultGridOptions;
	    constructor(options: IGridOptions<T>);
	    Options: IGridOptions<T>;
	    SetHiddenOnConfig: (bool: boolean, columnId?: string) => void;
	    private extendOptions;
	}

	/// <reference types="jquery" />
	import { ConfigStore } from "../config/ConfigStore";
	export class ToggleColumnHandler<T> {
	    private configStore;
	    private parentElement;
	    constructor(configStore: ConfigStore<T>, element: JQuery);
	    showAllColumns: () => void;
	    showColumn: (columnId: string) => void;
	    hideColumn: (columnId: string) => void;
	    hideAllColumns: () => void;
	    private SetColWidth;
	}

	/// <reference types="jquery" />
	import { IEventHandler } from "./IEventHandler";
	import { ToggleColumnHandler } from "./ToggleColumnHandler";
	export class ColSettingsHandler<T> implements IEventHandler<T> {
	    private parentElement;
	    private toggleColumnHandler;
	    constructor(element: JQuery, toggleColumnHandler: ToggleColumnHandler<T>);
	    onResize(): void;
	    onDocumentClick(event: any): void;
	    RegisterDomHandler(): void;
	}

	/// <reference types="jquery" />
	import { ConfigStore } from "../config/ConfigStore";
	import { IEventHandler } from "./IEventHandler";
	export class FilterClickHandler<T> implements IEventHandler<T> {
	    private configStore;
	    private parentElement;
	    constructor(configStore: ConfigStore<T>, element: JQuery);
	    onResize(): void;
	    onDocumentClick(event: any): void;
	    RegisterDomHandler: () => void;
	}

	/// <reference types="jquery" />
	import { ConfigStore } from "../config/ConfigStore";
	import { IEventHandler } from "./IEventHandler";
	export class HeaderClickHandler<T> implements IEventHandler<T> {
	    private parentElement;
	    private configStore;
	    constructor(configStore: ConfigStore<T>, element: JQuery);
	    onResize(): void;
	    onDocumentClick(event: any): void;
	    RegisterDomHandler: () => void;
	}

	/// <reference types="jquery" />
	import { ConfigStore } from "../config/ConfigStore";
	import { IEventHandler } from "./IEventHandler";
	export class PageSearchHandler<T> implements IEventHandler<T> {
	    private configStore;
	    private parentElement;
	    constructor(configStore: ConfigStore<T>, element: JQuery);
	    onResize(): void;
	    onDocumentClick(): void;
	    RegisterDomHandler: () => void;
	}

	import { ConfigStore } from "../config/ConfigStore";
	import { GridTemplateService } from "./../services/GridTemplateService";
	import { IEventHandler } from "./IEventHandler";
	export class ScrollHandler<T> implements IEventHandler<T> {
	    private virtualizer;
	    private parentElement;
	    private gridTemplateService;
	    private rendering;
	    private configStore;
	    private leftOffset;
	    constructor(configStore: ConfigStore<T>, gridTemplateService: GridTemplateService<T>);
	    onResize(): void;
	    onDocumentClick(event: any): void;
	    RegisterDomHandler: () => void;
	    private readonly Virtualizer;
	}

	import { ConfigStore } from "../config/ConfigStore";
	export class GridTemplateService<T> {
	    private data;
	    private configStore;
	    private templateFunctionForGrid;
	    private templateFunctionForMainRow;
	    private templateFunctionForDetailsRow;
	    private templateFunctionForFooter;
	    private templateFunctionForManageCol;
	    constructor(configStore: ConfigStore<T>);
	    readonly DataLength: number;
	    GetFirstTemplate: (data: T[], firstIndex: number, lastIndex: number) => string;
	    GetRowsHtml: (firstIndex: number, lastIndex: number) => string;
	    private registerHandlerBarHelper;
	    private registerDisabledHelper;
	    private registerSelectedHelper;
	    private registerMathHelper;
	    private registerCheckedHelper;
	}

	import { IPagination } from "../models/IPagination";
	import { IPaginationInput } from "../models/IPaginationInput";
	export class Pager {
	    static paginationData: IPagination;
	    static CalculatePaginationData: (paginationInput: IPaginationInput) => void;
	    static readonly PaginationData: IPagination;
	}

	/// <reference types="jquery" />
	import { IEventHandler } from "./IEventHandler";
	export class DetailsRowHandler<T> implements IEventHandler<T> {
	    private parentElement;
	    constructor(element: JQuery);
	    onResize(): void;
	    onDocumentClick(event: any): void;
	    RegisterDomHandler: () => void;
	}

	export enum HandlerNames {
	    FilterAction = 0,
	    HeaderClick = 1,
	    Scroll = 2,
	    PageSearch = 3,
	    DetailsRow = 4,
	    ToggleColumn = 5,
	    ColSettings = 6,
	}

	import { HandlerNames } from "./HandlerNames";
	import { IEventHandler } from "./IEventHandler";
	export interface IHandlerChain<T> {
	    name: HandlerNames;
	    handler: IEventHandler<T>;
	}

	import { IColumn } from "./../models/IColumn";
	export class CommonUtil {
	    static GetColumnObject: (columnId: string, columns: IColumn[]) => IColumn;
	}

	export enum FilterActionType {
	    Add = "Add",
	    Minus = "Minus",
	}

	import { FilterActionType } from "./FilterActionType";
	export type IFilterClickDelegate = (column: string, value: any, actionType: FilterActionType) => void;

	import { IColumn } from "./../models/IColumn";
	import { IFilterClickDelegate } from "./../models/IFilterClickDelegate";
	import { IHeaderClickDelegate } from "./../models/IHeaderClickDelegate";
	import { IPageSearchClickDelegate } from "./../models/IPageSearchClickDelegate";
	import { IRenderHybridDelegate } from "./../models/IRenderHybridDelegate";
	export interface IGridOptions<T> {
	    columns: IColumn[];
	    hybridFunction: IRenderHybridDelegate<T>;
	    onClickHeader: IHeaderClickDelegate;
	    onClickFilter: IFilterClickDelegate;
	    containerElement: Element;
	    onPageSearch: IPageSearchClickDelegate;
	    chunkSize: 5;
	}

	export enum OrderDirection {
	    Asc = "Asc",
	    Desc = "Desc",
	}

	import { OrderDirection } from "./OrderDirection";
	export type IHeaderClickDelegate = (column: string, direction: OrderDirection) => void;

	export enum ScrollDirection {
	    Up = "Up",
	    Down = "Down",
	}

	import { IIndexCounter } from "./IndexCounter";
	import { ScrollDirection } from "./ScrollDirection";
	export interface IIndexCounter {
	    startIndex: number;
	    endIndex: number;
	    firstIndex: number;
	    lastIndex: number;
	    direction: ScrollDirection;
	    endReached: boolean;
	    renderingRequired: boolean;
	}
	export const GetDefaultIndexCounter: (rowCount: number, chunkSize: number) => IIndexCounter;

	import { IIndexCounter } from "./IndexCounter";
	export class Virtualizer {
	    private currentIndexCounter;
	    private lastScrollPosition;
	    private length;
	    private chunkSize;
	    private scrollContainerHeight;
	    private tableHeight;
	    private initialRowCount;
	    constructor(chunkSize: number, initialRowCount: number, length: number);
	    GetIndexCounterForScroll: (scrollTop: number) => IIndexCounter;
	    private Print;
	    private PopulateIndexCounterForDown;
	    private PopulateIndexCounterForUp;
	    private GetScrollDirection;
	    ScrollContainerHeight: number;
	    TableHeight: number;
	    InitialRowCount: number;
	}

}