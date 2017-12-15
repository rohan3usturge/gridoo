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
        onClickFilter : (column: IColumn, value: any, actionType: FilterActionType): void => {

        },
        // tslint:disable-next-line:no-empty
        onClickHeader : (column: IColumn, direction: OrderDirection): void => {

        },
    };

    constructor(options: IGridOptions<T>) {
        this.extendedOptions = this.extendOptions(options);
        this.templateFunctionForGrid = handlebars.compile(gridHtml);
        this.templateFunctionForMainRow = handlebars.compile(gridMainRow);
        this.templateFunctionForDetailsRow = handlebars.compile(gridDetailsRow);
        this.registerHandlerBarHelper();
    }

    private extendOptions = (inputOptions: IGridOptions<T>): IGridOptions<T> => {
        return this.extendedOptions = jQuery.extend({}, this.defaultGridOptions, inputOptions);
    }

    private registerHandlerBarHelper = (): void => {
        handlebars.registerHelper("col", (width): string => {
            return '<col style="width : ' + width + 'px;"/>';
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
        });

        jQuery(".table-body").scroll((event) => {
            const tBodyObj = event.target;
            jQuery(".table-header").offset(
                {
                    left: -1 * tBodyObj.scrollLeft,
                    top: 0,
                },
            );
        });
    }

    private bindData = (data: T[], columns: any[]): void => {
        let tBodyContent: string = "";
        const length = columns.length + 1;
        data.forEach((row: T) => {
            const detailsArray: any[] = [];
            const mainArray: any[] = [];
            columns.forEach((col: any) => {
                let columnValue = row[col.id];
                if (col.renderHybridCellDefn) {
                    columnValue = this.extendedOptions.hybridFunction(col, row);
                }
                mainArray.push({columnValue});
                detailsArray.push({
                    actualValue: row[col.id],
                    columnName: col.columnName,
                    columnValue,
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
}
