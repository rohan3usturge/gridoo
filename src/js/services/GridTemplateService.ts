import * as Handlebars from "handlebars";
import * as GridDetailsRowTemplate from "../../html/grid-details-row.html";
import * as GridFooter from "../../html/grid-footer.html";
import * as GridMainRowTemplate from "../../html/grid-main-row.html";
import * as ManageColumnTemplate from "../../html/grid-manage-columns.html";
import * as GridTemplate from "../../html/grid.html";
import { ConfigStore } from "../config/ConfigStore";
import { IPagination } from "../models/IPagination";
import { Pager } from "../pagination/Pager";
import { IColumn } from "./../models/IColumn";

export class GridTemplateService <T> {
    private data: T[];
    private configStore: ConfigStore<T>;
    private templateFunctionForGrid: any;
    private templateFunctionForMainRow: any;
    private templateFunctionForDetailsRow: any;
    private templateFunctionForFooter: any;
    private templateFunctionForManageCol: any;

    constructor(configStore: ConfigStore<T>) {
        this.registerHandlerBarHelper();
        this.registerSelectedHelper();
        this.registerDisabledHelper();
        this.registerMathHelper();
        this.registerCheckedHelper();
        this.configStore = configStore;
        this.templateFunctionForGrid = Handlebars.compile(GridTemplate);
        this.templateFunctionForMainRow = Handlebars.compile(GridMainRowTemplate);
        this.templateFunctionForDetailsRow = Handlebars.compile(GridDetailsRowTemplate);
        this.templateFunctionForFooter = Handlebars.compile(GridFooter);
        this.templateFunctionForManageCol = Handlebars.compile(ManageColumnTemplate);
    }

    public GetFirstTemplate = (data: T[], firstIndex: number, lastIndex: number): string => {
        this.data = data;
        const tBodyContent = this.GetRowsHtml(firstIndex, lastIndex);
        const manageColumnHtml = this.templateFunctionForManageCol(this.configStore.Options.columns);
        const tableFooterContent = this.templateFunctionForFooter({paginationData : Pager.PaginationData,
                                                                     manageColumnHtml});
        return this.templateFunctionForGrid({
            columns: this.configStore.Options.columns,
            tBodyContent, tableFooterContent,
        });
    }

    public GetRowsHtml = (firstIndex: number, lastIndex: number): string => {
        let tBodyContent: string = "";
        const length = this.configStore.Options.columns.length + 1;
        for (let i = firstIndex; i <= lastIndex; i++) {
            const row: T = this.data[i];
            const detailsArray: any[] = [];
            const mainArray: any[] = [];
            this.configStore.Options.columns.forEach((col: IColumn) => {
                let columnValue = row[col.id];
                if (col.renderHybrid) {
                    columnValue = this.configStore.Options.hybridFunction(col, row);
                }
                mainArray.push({columnValue, hidden: col.hidden});
                detailsArray.push({
                    actualValue: row[col.id],
                    columnName: col.name,
                    columnValue,
                    hidden: col.hidden,
                    id: col.id,
                    filterable: col.filterable,
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

    private registerMathHelper = (): void => {
        Handlebars.registerHelper("math", (lvalue: number, operator: string, rvalue: number, options): number => {
            return {
                "+": lvalue + rvalue,
                "-": lvalue - rvalue,
                "*": lvalue * rvalue,
                "/": lvalue / rvalue,
                "%": lvalue % rvalue,
            }[operator];
        });
    }

    private registerCheckedHelper = (): void => {
        Handlebars.registerHelper("isChecked", (bool: boolean): string => {
            return !bool ? "checked" : "";
        });
    }
}
