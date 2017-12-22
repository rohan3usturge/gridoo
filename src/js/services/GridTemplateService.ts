import * as Handlebars from "handlebars";
import * as GridDetailsRowTemplate from "../../html/grid-details-row.html";
import * as GridFooter from "../../html/grid-footer.html";
import * as GridMainRowTemplate from "../../html/grid-main-row.html";
import * as GridTemplate from "../../html/grid.html";
import { IPaginationInput } from "../models/IPaginationInput";
import { Pager } from "../pagination/Pager";
import { IGridOptions } from "./../main/IGridOptions";
import { IColumn } from "./../models/IColumn";

export class GridTemplateService <T> {
    private data: T[];
    private options: IGridOptions<T>;
    private templateFunctionForGrid: any;
    private templateFunctionForMainRow: any;
    private templateFunctionForDetailsRow: any;
    private templateFunctionForFooter: any;

    constructor(options: IGridOptions<T>) {
        this.registerHandlerBarHelper();
        this.registerSelectedHelper();
        this.registerDisabledHelper();
        this.options = options;
        this.templateFunctionForGrid = Handlebars.compile(GridTemplate);
        this.templateFunctionForMainRow = Handlebars.compile(GridMainRowTemplate);
        this.templateFunctionForDetailsRow = Handlebars.compile(GridDetailsRowTemplate);
        this.templateFunctionForFooter = Handlebars.compile(GridFooter);
    }

    public GetFirstTemplate = (data: T[], firstIndex: number,
                               lastIndex: number, paginationInput?: IPaginationInput): string => {
        this.data = data;
        const tBodyContent = this.GetRowsHtml(firstIndex, lastIndex);
        const tableFooterContent = this.templateFunctionForFooter(Pager.GetPaginationData(paginationInput));
        return this.templateFunctionForGrid({columns: this.options.columns, tBodyContent, tableFooterContent});
    }

    public GetRowsHtml = (firstIndex: number, lastIndex: number): string => {
        let tBodyContent: string = "";
        const length = this.options.columns.length + 1;
        for (let i = firstIndex; i <= lastIndex; i++) {
            const row: T = this.data[i];
            const detailsArray: any[] = [];
            const mainArray: any[] = [];
            this.options.columns.forEach((col: IColumn) => {
                let columnValue = row[col.id];
                if (col.renderHybrid) {
                    columnValue = this.options.hybridFunction(col, row);
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

    private registerHandlerBarHelper = (): void => {
        Handlebars.registerHelper("col", (col): string => {
            const calcWidth: number = col.hidden ? 0 : col.width;
            const dataAttrId = 'data-header-id="' + col.id + '"';
            return '<col style="width : ' + calcWidth + 'px;"' + dataAttrId + " />";
        });
    }

    private registerDisabledHelper = (): void => {
        Handlebars.registerHelper("isDisabled", (bool: boolean): string => {
            return bool ? "disabled" : "";
        });
    }

    private registerSelectedHelper = (): void => {
        Handlebars.registerHelper("isSelected", (input: number, value: number): string => {
            return input === value ? "selected" : "";
        });
    }
}
