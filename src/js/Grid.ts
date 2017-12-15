import * as handlebars from "handlebars";
import jQuery = require("jquery");
import * as gridDetailsRow from "../html/grid-details-row.html";
import * as gridMainRow from "../html/grid-main-row.html";
import * as gridHtml from "../html/grid.html";
import { IColumn } from "./Column";
import { FilterActionType } from "./FilterActionType";
import { IGridOptions } from "./IGridOptions";
import { OrderDirection } from "./OrderDirection";

export class Grid<T> {

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
        const width = this.getColumnObject(columnId).width;
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

    public bindData = (data: T[], columns: IColumn[]): void => {
        let tBodyContent: string = "";
        const length = columns.length + 1;
        data.forEach((row: T) => {
            const detailsArray: any[] = [];
            const mainArray: any[] = [];
            columns.forEach((col: IColumn) => {
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
        });
        this.extendedOptions.containerElement.innerHTML = this.templateFunctionForGrid({columns, tBodyContent});
        this.attachDetailsRowHandler();
    }

    private getColumnObject = (columnId: string): IColumn => {
        let retCol: IColumn;
        this.extendedOptions.columns.forEach((col: IColumn) => {
            if (col.id === columnId) {
                retCol = col;
                return;
            }
        });
        return retCol;
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
