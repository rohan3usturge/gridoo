import * as handlebars from "handlebars";
import jQuery = require("jquery");
import * as gridDetailsRow from "../html/grid-details-row.html";
import * as gridMainRow from "../html/grid-main-row.html";
import * as gridHtml from "../html/grid.html";
import { IColumn } from "./Column";
import { CommonUtil } from "./ColumnUtil";
import { FilterActionType } from "./FilterActionType";
import { IGridOptions } from "./IGridOptions";
import { OrderDirection } from "./OrderDirection";

export class Grid<T> {

    private firstIndex: number;
    private lastIndex: number;
    private chunkSize: number;
    private lastScrollPosition: number = 0;
    private data: T[];
    private rendering: boolean;
    private templateFunctionForGrid: any;
    private templateFunctionForMainRow: any;
    private templateFunctionForDetailsRow: any;
    private extendedOptions: IGridOptions<T>;
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
        this.templateFunctionForGrid = handlebars.compile(gridHtml);
        this.templateFunctionForMainRow = handlebars.compile(gridMainRow);
        this.templateFunctionForDetailsRow = handlebars.compile(gridDetailsRow);
        this.chunkSize = this.extendedOptions.chunkSize;
        this.registerHandlerBarHelper();
    }

    public showColumn = (columnId: string): void => {
        const width = CommonUtil.getColumnObject(columnId, this.extendedOptions.columns).width;
        jQuery(".table-header .headerColGroup col").each((index, element): void => {
            const currentCol = jQuery(element).attr("data-header-id");
            if (columnId === currentCol) {
                jQuery(element).width(width + "px");
                return;
            }
        });
        jQuery(".table-body .bodyColGroup col").each((index, element): void => {
            const currentCol = jQuery(element).attr("data-header-id");
            if (columnId === currentCol) {
                jQuery(element).width(width + "px");
                return;
            }
        });
    }

    public showAllColumns = (): void => {
        jQuery(".table-header .headerColGroup col").each((index, element): void => {
            const currentCol = jQuery(element).attr("data-header-id");
            if (typeof(currentCol) !== "undefined") {
                const width = CommonUtil.getColumnObject(currentCol, this.extendedOptions.columns).width;
                jQuery(element).width(width + "px");
            }
        });
        jQuery(".table-body .bodyColGroup col").each((index, element): void => {
            const currentCol = jQuery(element).attr("data-header-id");
            if (typeof(currentCol) !== "undefined") {
                const width = CommonUtil.getColumnObject(currentCol, this.extendedOptions.columns).width;
                jQuery(element).width(width + "px");
            }
        });
    }

    public hideColumn = (columnId: string): void => {
        jQuery(".table-header .headerColGroup col").each((index, element): void => {
            const currentCol = jQuery(element).attr("data-header-id");
            if (columnId === currentCol) {
                jQuery(element).width("0px");
                return;
            }
        });
        jQuery(".table-body .bodyColGroup col").each((index, element): void => {
            const currentCol = jQuery(element).attr("data-header-id");
            if (columnId === currentCol) {
                jQuery(element).width("0px");
                return;
            }
        });
    }

    public hideAllColumns = (): void => {
        jQuery(".table-header .headerColGroup col").each((index, element): void => {
            const currentCol = jQuery(element).attr("data-header-id");
            if (typeof(currentCol) !== "undefined") {
                jQuery(element).width("0px");
            }
        });
        jQuery(".table-body .bodyColGroup col").each((index, element): void => {
            const currentCol = jQuery(element).attr("data-header-id");
            if (typeof(currentCol) !== "undefined") {
                jQuery(element).width("0px");
            }
        });
    }

    public bindData = (data: T[]): void => {
        this.data = data;
        this.firstIndex = 0;
        this.lastIndex = this.chunkSize + this.getInitialRowCount();
        const tBodyContent: string = this.getRowsHtml(this.firstIndex, this.lastIndex);
        this.extendedOptions.containerElement.innerHTML = this.templateFunctionForGrid(
            {columns: this.extendedOptions.columns, tBodyContent},
        );
        this.attachDetailsRowHandler();
        this.registerOnScrollVirtualization();
        this.registerOnFilterClickHandler();
        this.registerOnHeaderClickHandler();
    }

    private getRowsHtml = (firstIndex: number, lastIndex: number): string => {
        let tBodyContent: string = "";
        const length = this.extendedOptions.columns.length + 1;
        for (let i = firstIndex; i <= lastIndex; i++) {
            const row: T = this.data[i];
            const detailsArray: any[] = [];
            const mainArray: any[] = [];
            this.extendedOptions.columns.forEach((col: IColumn) => {
                let columnValue = row[col.id];
                if (col.renderHybrid) {
                    columnValue = this.extendedOptions.hybridFunction(col, row);
                }
                mainArray.push({columnValue, hidden: col.hidden});
                detailsArray.push({
                    actualValue: row[col.id],
                    columnName: col.name,
                    columnValue,
                    hidden: col.hidden,
                    id: col.id,
                });
            });
            const mainRowStr = this.templateFunctionForMainRow(mainArray);
            tBodyContent += mainRowStr;
            const detailRowStr = this.templateFunctionForDetailsRow({length, detailsArray});
            tBodyContent += detailRowStr;
        }
        return tBodyContent;
    }

    private getInitialRowCount = (): number => {
        return 25;
    }

    private extendOptions = (inputOptions: IGridOptions<T>): IGridOptions<T> => {
        return this.extendedOptions = jQuery.extend({}, this.defaultGridOptions, inputOptions);
    }

    private registerHandlerBarHelper = (): void => {
        handlebars.registerHelper("col", (col): string => {
            const calcWidth: number = col.hidden ? 0 : col.width;
            const dataAttrId = 'data-header-id="' + col.id + '"';
            return '<col style="width : ' + calcWidth + 'px;"' + dataAttrId + " />";
        });
    }

    private registerOnScrollVirtualization = (): void => {
        jQuery(".table-body").scroll((event) => {
            const tBodyObj = jQuery(".table-body");
            jQuery(".table-header").offset(
                {
                    left: -1 * tBodyObj.scrollLeft(),
                    top: 0,
                },
            );
            const scrollTop = tBodyObj.scrollTop();
            const actualTableHeight = jQuery(".table-body .mainTable").height();
            const tbodyHeight =  tBodyObj.height();
            if (this.rendering) {
                event.stopPropagation();
                return;
            }
            event.preventDefault();
            document.body.scrollTop = 0;
            if (this.lastScrollPosition < scrollTop) {
                if (this.lastIndex < this.data.length - 1) {
                    const diff = (scrollTop + tbodyHeight) - (actualTableHeight * 0.8 );
                    if (diff > 0) {
                        this.rendering = true;
                        const startIndex = this.lastIndex + 1;
                        const endIndex = this.lastIndex + this.chunkSize > this.data.length - 1 ?
                                            this.data.length - 1 :
                                            this.lastIndex + this.chunkSize;
                        tBodyObj.find(".mainTable .mainTableBody")
                        .append(this.getRowsHtml(startIndex, endIndex));
                        tBodyObj.find(".mainTable .mainTableBody > tr")
                        .slice(0, this.chunkSize * 2).remove();
                        this.attachDetailsRowHandler();
                        this.registerOnFilterClickHandler();
                        this.firstIndex = this.firstIndex + this.chunkSize;
                        this.lastIndex = endIndex;
                        this.rendering = false;
                        // console.log("Appending Content - ", diff);
                        // console.log("Start Index - ", startIndex);
                        // console.log("End Index - ", endIndex);
                        // console.log("First Index - ", this.firstIndex);
                        // console.log("Last Index Index - ", this.lastIndex);
                        // console.log("******************");
                    }
                }
            } else {
                if (this.firstIndex > 0) {
                    const diff = scrollTop - (actualTableHeight - tbodyHeight) * 0.1;
                    if (diff < 0) {
                        this.rendering = true;
                        const startIndex = this.firstIndex - this.chunkSize < 0 ? 0 : this.firstIndex - this.chunkSize;
                        const endIndex = this.firstIndex - 1;
                        tBodyObj.find(".mainTable .mainTableBody")
                        .prepend(this.getRowsHtml(startIndex, endIndex));
                        tBodyObj.find(".mainTable .mainTableBody > tr")
                        .slice((this.chunkSize * -2)).remove();
                        this.attachDetailsRowHandler();
                        this.registerOnFilterClickHandler();
                        this.firstIndex = startIndex;
                        this.lastIndex = this.lastIndex - this.chunkSize;
                        this.rendering = false;
                        // console.log("Prepending Content- ", diff);
                        // console.log("Start Index - ", startIndex);
                        // console.log("End Index - ", endIndex);
                        // console.log("First Index - ", this.firstIndex);
                        // console.log("Last Index Index - ", this.lastIndex);
                        // console.log("******************");
                    }
                }
            }
            this.lastScrollPosition = scrollTop;
            event.stopPropagation();
        });
    }

    private registerOnFilterClickHandler = (): void => {
        jQuery(".table-body .detailsRow .detailsTable td i").click((event) => {
            const element = jQuery(event.target);
            const parentTd = element.parent();
            const key = parentTd.attr("data-filter-key");
            const value = parentTd.attr("data-filter-value");
            let filterAction: FilterActionType = FilterActionType.Add;
            if (element.hasClass("removeFilter")) {
                filterAction = FilterActionType.Minus;
            }
            this.extendedOptions.onClickFilter(key, value, filterAction);
            event.stopPropagation();
        });
    }

    private registerOnHeaderClickHandler = (): void => {
        jQuery(".table-header th").click((event) => {
            const element = jQuery(event.delegateTarget);
            const arrowIcons = element.find("i");
            const upArrowIcon = arrowIcons.first();
            const downArrowIcon = arrowIcons.next();
            const headerId = element.attr("data-header-id");
            let direction: OrderDirection;
            if (arrowIcons.is(":visible")) {
                if (upArrowIcon.is(":visible")) {
                    direction = OrderDirection.Desc;
                    upArrowIcon.hide();
                    downArrowIcon.show();
                } else {
                    direction = OrderDirection.Asc;
                    downArrowIcon.hide();
                    upArrowIcon.show();
                }
            } else {
                direction = OrderDirection.Asc;
                upArrowIcon.show();
            }
            this.extendedOptions.onClickHeader(headerId, direction);
            event.stopPropagation();
        });
    }

    private attachDetailsRowHandler = (): void => {
        const allArrows = jQuery(".expansionArrows i");
        allArrows.click((event) => {
            const detailsRow = jQuery(event.target).closest("tr").next();
            const currentIcon = jQuery(event.target).hide();
            const otherIcon = jQuery(event.target).siblings("i").show();
            if (jQuery(event.target).hasClass("expandDetailsRowIcon")) {
                detailsRow.show();
            } else {
                detailsRow.hide();
            }
            event.stopPropagation();
        });
    }

}
