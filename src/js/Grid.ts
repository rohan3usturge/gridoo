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
    private lastScrollPosition: number;
    private rowHeight: number;
    private data: T[];
    private rendering: boolean;
    private templateFunctionForGrid: any;
    private templateFunctionForMainRow: any;
    private templateFunctionForDetailsRow: any;
    private extendedOptions: IGridOptions<T>;
    private defaultGridOptions: IGridOptions<T> = {
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
        this.lastIndex = 20;
        const tBodyContent: string = this.getRowsHtml(0, 20);
        this.extendedOptions.containerElement.innerHTML = this.templateFunctionForGrid(
            {columns: this.extendedOptions.columns, tBodyContent},
        );
        this.rowHeight = jQuery(".table-body table tbody tr").outerHeight();
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
    // tslint:disable-next-line:no-empty
    private prependRows = () => {

    }
    // tslint:disable-next-line:no-empty
    private appendRows = () => {

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

        // jQuery(".tableBodyWrap div").scroll((event) => {
        //     if (this.rendering) {
        //         event.stopPropagation();
        //         return;
        //     }
        //     const scrollTop = event.target.scrollTop;
        //     const rows = Math.floor(scrollTop / 31.5);
        //     console.log("*********************");
        //     console.log(scrollTop);
        //     console.log(rows);
        //     if (rows >= 2) {
        //         console.log("***************** REPLACING *****************");
        //         this.rendering = true;
        //         if (this.lastScrollPosition < scrollTop) {
        //             console.log("Append");
        //             console.log(this.getRowsHtml(this.lastIndex, this.lastIndex + rows));
        //             // jQuery(".table-body table tbody")
        //             // .append(this.getRowsHtml(this.lastIndex, this.lastIndex + rows));
        //             // jQuery(".table-body table tbody tr").slice(0, rows).remove();
        //             this.firstIndex = this.firstIndex + rows;
        //             this.lastIndex = this.lastIndex + rows;
        //         } else {
        //             console.log("Prepend");
        //             console.log(this.getRowsHtml(this.firstIndex - rows, this.firstIndex));
        //             // jQuery(".table-body table tbody")
        //             // .prepend(this.getRowsHtml(this.firstIndex - rows, this.firstIndex));
        //             // jQuery(".table-body table tbody tr").slice(rows, -1).remove();
        //             this.firstIndex = this.firstIndex - rows;
        //             this.lastIndex = this.lastIndex - rows;
        //         }
        //     }
        //     this.lastScrollPosition = scrollTop;
        //     this.rendering = false;
        //     event.stopPropagation();
        // });

        jQuery(".table-body").scroll((event) => {
            const tBodyObj = event.target;
            jQuery(".table-header").offset(
                {
                    left: -1 * tBodyObj.scrollLeft,
                    top: 0,
                },
            );
            event.stopPropagation();
        });

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

}
