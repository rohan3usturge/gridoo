declare module Gridoo
{
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

	import { IPaginationInput } from "../models/IPaginationInput";
	import { IGridOptions } from "./IGridOptions";
	export class Grid<T> {
	    private handleChain;
	    private gridTemplateService;
	    private configStore;
	    constructor(options: IGridOptions<T>);
	    showLoader: () => void;
	    hideLoader: () => void;
	    bindData: (data: T[], paginationInput?: IPaginationInput) => void;
	    private getInitialRowCount;
	    private InitHandlers;
	}

}