import * as Handlebars from "handlebars";
import * as GridDetailsRowTemplate from "../../hbs/grid-details-row.handlebars";
import * as GridFooter from "../../hbs/grid-footer.handlebars";
import * as GridMainRowTemplate from "../../hbs/grid-main-row.handlebars";
import * as ManageColumnTemplate from "../../hbs/grid-manage-columns.handlebars";
import * as GridTemplate from "../../hbs/grid.handlebars";
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
        this.configStore = configStore;
        this.templateFunctionForGrid = GridTemplate;
        this.templateFunctionForMainRow = GridMainRowTemplate;
        this.templateFunctionForDetailsRow = GridDetailsRowTemplate;
        this.templateFunctionForFooter = GridFooter;
        this.templateFunctionForManageCol = ManageColumnTemplate;
    }

    public get DataLength(): number {
        return this.data.length;
    }
    public GetFirstTemplate = (data: T[], firstIndex: number, lastIndex: number): string => {
        this.data = data;
        const mainRowArray = this.GetRowsHtml(firstIndex, lastIndex);
        return this.templateFunctionForGrid({
            columns: this.configStore.Options.columns,
            mainRowArray,
            paginationData: Pager.PaginationData,
        });
    }

    public GetRowsHtml = (firstIndex: number, lastIndex: number): any[] => {
        const mainRowArray: any[] = [];
        const length = this.configStore.Options.columns.length + 1;
        for (let i = firstIndex; i <= lastIndex; i++) {
            const row: T = this.data[i];
            const mainRowColArray: any[] = [];
            for (const col of this.configStore.Options.columns) {
                let columnValue = row[col.id];
                if (col.renderHybrid) {
                    columnValue = this.configStore.Options.hybridFunction(col, row);
                }
                mainRowColArray.push({
                    columnValue,
                    hidden: col.hidden,
                    actualValue: row[col.id],
                    columnName: col.name,
                    id: col.id,
                    filterable: col.filterable,
                });
            }
            mainRowArray.push({
                mainRowColArray,
                length: this.configStore.Options.columns.length,
            });
        }
        return mainRowArray;
    }
}
