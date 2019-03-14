import * as Handlebars from "handlebars";
import * as GridDetailsRowTemplate from "../../hbs/grid-details-row.hbs";
import * as GridFooter from "../../hbs/grid-footer.hbs";
import * as GridMainRowTemplate from "../../hbs/grid-main-row.hbs";
import * as ManageColumnTemplate from "../../hbs/grid-manage-columns.hbs";
import * as GridTemplate from "../../hbs/grid.hbs";
import { ConfigStore } from "../config/ConfigStore";
import { IPagination } from "../models/IPagination";
import { Pager } from "../pagination/Pager";
import { IColumn } from "./../models/IColumn";
interface IMainColRowArray {
    columnValue: string;
    type: string;
    hidden: boolean;
    actualValue: string;
    columnName: string;
    id: string;
    filterable: boolean;
}
export class GridTemplateService <T> {
    private data: T[];
    private selected: T[] = [];
    private configStore: ConfigStore<T>;
    private templateFunctionForGrid: any;
    private templateFunctionForMainRow: any;
    private templateFunctionForDetailsRow: any;
    private templateFunctionForFooter: any;
    private templateFunctionForManageCol: any;
    private currentIndex: number;

    constructor(configStore: ConfigStore<T>) {
        this.configStore = configStore;
        this.templateFunctionForGrid = GridTemplate;
        this.templateFunctionForMainRow = GridMainRowTemplate;
        this.templateFunctionForDetailsRow = GridDetailsRowTemplate;
        this.templateFunctionForFooter = GridFooter;
        this.templateFunctionForManageCol = ManageColumnTemplate;
    }
    public isAllSelected = () => {
        return this.selected.length !== 0 && this.selected.length === this.data.length;
    }
    public get Data(): T[] {
        return this.data;
    }
    public get Selected(): T[] {
        return this.selected;
    }
    public set CurrentIndex(index: number) {
        this.currentIndex = index;
    }
    public get DataLength(): number {
        return this.data.length;
    }
    // For First  Render - Update Header , Body, Pagination
    public GetFirstTemplate = (data: T[],
                               firstIndex: number,
                               lastIndex: number): string => {
        this.data = data;
        this.selected = [];
        const mainRowArray = this.GetRowsHtml(firstIndex, lastIndex);
        return this.templateFunctionForGrid({
            showCaption: this.configStore.Options.showCaption,
            summary: this.configStore.Options.summary,
            rowLength: this.data.length,
            columns: this.configStore.Options.columns,
            mainRowArray,
            paginationData: Pager.PaginationData,
            caption: this.configStore.Options.caption,
        });
    }
    // For Virtualizaton Render - Body
    public getTemplate = (firstIndex: number, lastIndex: number): string => {
        const mainRowArray = this.GetRowsHtml(firstIndex, lastIndex);
        return this.templateFunctionForMainRow({
            columns: this.configStore.Options.columns,
            mainRowArray,
            caption: this.configStore.Options.caption,
        });
    }
    // Update only one Row
    public getTemplateForOneRow = (row: T): string => {
        const emptyStr = this.configStore.Options.emptyValue;
        const mainRowColArray = this.getMainRow(row, emptyStr);
        const mainRowArray = [{
            isAllSelected: this.isAllSelected(),
            keyColumn: row[this.configStore.Options.keyColumn],
            mainRowColArray,
            length: this.configStore.Options.columns.length,
        }];
        return this.templateFunctionForMainRow({mainRowArray});
    }
    public GetManageColumnsHtml = (): string => {
        return this.templateFunctionForManageCol({columns: this.configStore.Options.columns});
    }

    public GetRowsHtml = (firstIndex: number, lastIndex: number): any[] => {
        const mainRowArray: any[] = [];
        const emptyStr = this.configStore.Options.emptyValue;
        for (let i = firstIndex; i <= lastIndex; i++) {
            const row: T = this.data[i];
            const mainRowColArray: IMainColRowArray[] = this.getMainRow(row, emptyStr);
            mainRowArray.push({
                rowIndex: i,
                isAllSelected: this.isAllSelected(),
                keyColumn: row[this.configStore.Options.keyColumn],
                mainRowColArray,
                length: this.configStore.Options.columns.length,
            });
        }
        return mainRowArray;
    }
    public selectRows = (rowId: string) => {
        const key = this.configStore.Options.keyColumn;
        const newSelected = [];
        let exists = false;
        for (const selected of this.selected) {
            if ( rowId === selected[key] ) {
                exists = true;
                break;
            }
        }
        if ( !exists ) {
            newSelected.push(rowId);
        }
        for (const toBeAdded of newSelected) {
            for (const oneRow of this.data) {
                if ( toBeAdded === oneRow[key] ) {
                    this.selected.push(oneRow);
                    break;
                }
            }
        }
    }
    public deSelectRows = (rowId: string) => {
        const newSelected = [];
        const key = this.configStore.Options.keyColumn;
        for (const selected of this.selected) {
            if ( rowId !== selected[key] ) {
                newSelected.push(selected);
            }
        }
        this.selected = newSelected;
    }
    public selectAll = () => {
        this.selected = this.data;
    }
    public deSelectAll = () => {
        this.selected = [];
    }
    public updateRows = (rows: T[]) => {
        const key = this.configStore.Options.keyColumn;
        if ( rows === undefined || !rows.length ) {
            return;
        }
        for (const row of rows) {
            for (let dataRow of this.data) {
                if (row[key] === dataRow[key] ) {
                    dataRow = row;
                    break;
                }
            }
        }
        for (const row of rows) {
            for (let dataRow of this.selected) {
                if (row[key] === dataRow[key] ) {
                    dataRow = row;
                    break;
                }
            }
        }
    }
    private getMainRow = (row: T, emptyStr: string): IMainColRowArray[] => {
        const mainRowColArray: any[] = [];
        for (const col of this.configStore.Options.columns) {
            let columnValue = row[col.id];
            let actualValue = row[col.id];
            if (col.renderHybrid) {
                columnValue = this.configStore.Options.hybridFunction(col, row);
                if ( col.isTitleHybrid ) {
                    actualValue = columnValue;
                }
            }
            if (emptyStr !== undefined && columnValue === emptyStr) {
                columnValue = "";
                actualValue = "";
            }
            mainRowColArray.push({
                columnValue,
                type: col.type,
                hidden: col.hidden,
                actualValue,
                columnName: col.name,
                id: col.id,
                filterable: col.filterable,
            });
        }
        return mainRowColArray;
    }
}
