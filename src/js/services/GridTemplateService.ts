import * as Handlebars from "handlebars";
import * as GridDetailsRowTemplate from "../../hbs/grid-details-row.hbs";
import * as GridDetailsRowTableTemplate from "../../hbs/grid-details-table-row.hbs";
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
export class GridTemplateService<T> {
    private data: T[];
    private selected: T[] = [];
    private configStore: ConfigStore<T>;
    private templateFunctionForGrid: any;
    private templateFunctionForMainRow: any;
    private templateFunctionForDetailsRow: any;
    private templateFunctionForDetailsTableRow: any;
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
        this.templateFunctionForDetailsTableRow = GridDetailsRowTableTemplate;
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
    public GetFirstTemplate = (
        data: T[],
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
            isAlternateExpanded: this.configStore.Options.isAlternateExpanded,
        });
    }
    // For Virtualizaton Render - Body
    public getTemplate = (firstIndex: number, lastIndex: number): string => {
        const mainRowArray = this.GetRowsHtml(firstIndex, lastIndex);
        return this.templateFunctionForMainRow({
            columns: this.configStore.Options.columns,
            mainRowArray,
            caption: this.configStore.Options.caption,
            isAlternateExpanded: this.configStore.Options.isAlternateExpanded,
            isCustomExpansion: this.configStore.Options.isCustomExpansion,
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
            isAlternateExpanded: this.configStore.Options.isAlternateExpanded,
            isCustomExpansion: this.configStore.Options.isCustomExpansion,
        }];
        return this.templateFunctionForMainRow({ mainRowArray });
    }
    public GetManageColumnsHtml = (): string => {
        return this.templateFunctionForManageCol({ columns: this.configStore.Options.columns });
    }

    public GetRowsHtml = (firstIndex: number, lastIndex: number): any[] => {
        const mainRowArray: any[] = [];
        const emptyStr = this.configStore.Options.emptyValue;
        for (let i = firstIndex; i <= lastIndex; i++) {
            const row: T = this.data[i];
            const mainRowColArray: IMainColRowArray[] = this.getMainRow(row, emptyStr);
            let expandedRowColArray: any[] = null;
            let customExpansion: any = "";
            if (this.configStore.options.isAlternateExpanded) {
                expandedRowColArray = this.getExpansionRow(
                    row,
                    row[this.configStore.Options.expansionFieldName],
                    emptyStr);
            }
            if (this.configStore.Options.isCustomExpansion) {
                customExpansion = this.getCustomExpansionRow(row);
            }
            mainRowArray.push({
                rowIndex: i,
                isAllSelected: this.isAllSelected(),
                keyColumn: row[this.configStore.Options.keyColumn],
                mainRowColArray,
                length: this.configStore.Options.columns.length,
                isAlternateExpanded: this.configStore.Options.isAlternateExpanded,
                expandedRowColArray,
                isCustomExpansion: this.configStore.Options.isCustomExpansion,
                customExpansion,
            });
        }
        return mainRowArray;
    }
    public selectRows = (rowId: string, allExpandedSelected: boolean = true) => {
        const key = this.configStore.Options.keyColumn;
        const newSelected = [];
        let exists = false;
        for (const selected of this.selected) {
            if (rowId === selected[key]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            newSelected.push(rowId);
        }
        for (const toBeAdded of newSelected) {
            for (const oneRow of this.data) {
                if (toBeAdded === oneRow[key]) {
                    if (allExpandedSelected && this.configStore.Options.isAlternateExpanded) {
                        for (const expandedRow of oneRow[this.configStore.Options.expansionFieldName]) {
                            expandedRow.isSelected = true;
                        }
                    }
                    this.selected.push(oneRow);
                    break;
                }
            }
        }
    }
    public selectChildRows = (rowId: string) => {
        const key = this.configStore.options.keyColumn;
        const row = this.selected.filter((s: any) => s[key] === rowId);
        let index = 0;
        if (row && row.length > 0) {
            row[0][this.configStore.options.expansionFieldName].forEach((r: any) => {
                r.isSelected = true;
                const element = $("#details-row-" + rowId);
                $(".select-details-checkbox", element).prop("checked", true);
                index += 1;
            });
        }
    }
    public selectExpandedRow = (rowId: string) => {
        const split = rowId.split("-expansion-row-");
        const key = this.configStore.options.keyColumn;
        const expandedRowIndex = split[1];
        const row = this.selected.filter((s: any) => s[key] === split[0]);
        const dataRow = this.data.filter((s: any) => s[key] === split[0]);
        if (row && row.length > 0) {
            row[0][this.configStore.options.expansionFieldName][expandedRowIndex].isSelected = true;
            this.selectRows(
                split[0],
                false);
            if (row[0][this.configStore.options.expansionFieldName].every((a: any) => a.isSelected)) {
                const element = $("#" + split[0] + "-checkbox");
                element.prop("checked", true);
            }
        } else if (dataRow && dataRow.length > 0) {
            dataRow[0][this.configStore.options.expansionFieldName][expandedRowIndex].isSelected = true;
            this.selectRows(
                split[0],
                false);
            if (dataRow[0][this.configStore.options.expansionFieldName].every((a: any) => a.isSelected)) {
                const element = $("#" + split[0] + "-checkbox");
                element.prop("checked", true);
            }
        }
    }
    public deSelectRows = (rowId: string, expansionRowIndex: string = null) => {
        const newSelected = [];
        const key = this.configStore.Options.keyColumn;
        for (const selected of this.selected) {
            if (this.configStore.Options.isAlternateExpanded) {
                if (expansionRowIndex) {
                    if (rowId === selected[key]) {
                        if (
                            selected[this.configStore.options.expansionFieldName].some(
                                (a: any) => a.isSelected)) {
                            selected[this.configStore.options.expansionFieldName]
                            [expansionRowIndex].isSelected = false;
                            newSelected.push(selected);
                        }

                        const element = $("#" + rowId + "-checkbox");
                        element.prop("checked", false);
                    }
                }
            }
            if (rowId !== selected[key]) {
                newSelected.push(selected);
            }
        }
        this.selected = newSelected;
    }

    public deSelectChildRows = (rowId: string) => {
        const key = this.configStore.options.keyColumn;
        const row = this.selected.filter((s: any) => s[key] === rowId);
        let index = 0;
        if (row && row.length > 0) {
            row[0][this.configStore.options.expansionFieldName].forEach((r: any) => {
                r.isSelected = false;
                const element = $("#details-row-" + rowId);
                $(".select-details-checkbox", element).prop("checked", false);
                index += 1;
            });
        }
    }
    public deSelectExpandedRow = (rowId: string) => {
        const split = rowId.split("-expansion-row-");
        const key = this.configStore.options.keyColumn;
        const expandedRowIndex = split[1];
        const row = this.selected.filter((s: any) => s[key] === split[0]);
        if (row && row.length > 0) {
            row[0][this.configStore.options.expansionFieldName][expandedRowIndex].isSelected = false;
            this.deSelectRows(
                split[0],
                expandedRowIndex);
        }
    }

    public selectAll = () => {
        if (this.configStore.Options.isAlternateExpanded) {
            this.data.forEach((a: any) => a[this.configStore.options.expansionFieldName].forEach((element: any) => {
                element.isSelected = true;
                this.selectChildRows(a[this.configStore.Options.keyColumn]);
            }));
        }
        this.selected = this.data;
    }
    public deSelectAll = () => {
        if (this.configStore.Options.isAlternateExpanded) {
            this.data.forEach((a: any) => a[this.configStore.options.expansionFieldName].forEach((element: any) => {
                element.isSelected = false;
                this.deSelectChildRows(a[this.configStore.Options.keyColumn]);
            }));
        }
        this.selected = [];
    }
    public updateRows = (rows: T[]) => {
        const key = this.configStore.Options.keyColumn;
        if (rows === undefined || !rows.length) {
            return;
        }
        for (const row of rows) {
            for (let dataRow of this.data) {
                if (row[key] === dataRow[key]) {
                    dataRow = row;
                    break;
                }
            }
        }
        for (const row of rows) {
            for (let dataRow of this.selected) {
                if (row[key] === dataRow[key]) {
                    dataRow = row;
                    break;
                }
            }
        }
    }

    private getMainRow = (row: T, emptyStr: string): IMainColRowArray[] => {
        const expandedRowColArray: any[] = [];
        for (const col of this.configStore.Options.columns) {
            let columnValue = row[col.id];
            let actualValue = row[col.id];
            if (col.renderHybrid) {
                columnValue = this.configStore.Options.hybridFunction(col, row);
                if (col.isTitleHybrid) {
                    actualValue = columnValue;
                }
            }
            if (emptyStr !== undefined && columnValue === emptyStr) {
                columnValue = "";
                actualValue = "";
            }
            expandedRowColArray.push({
                columnValue,
                type: col.type,
                hidden: col.hidden,
                actualValue,
                columnName: col.name,
                id: col.id,
                filterable: col.filterable,
            });
        }

        return expandedRowColArray;
    }

    private getCustomExpansionRow = (row: T): string => {
        return this.configStore.Options.renderHybridExpansion(row);
    }

    private getExpansionRow = (mainRow: any, row: T[], emptyStr: string): IMainColRowArray[][] => {
        const mainRowColArray: any[] = [];
        if (row) {
            for (let i = 0; i < row.length; i++) {
                mainRowColArray.push({
                    colArray: [],
                    isSelected: false,
                    rowId: mainRow[this.configStore.Options.keyColumn],
                });
                for (const col of this.configStore.Options.columns) {
                    if (row[i].hasOwnProperty(col.id)) {
                        let columnValue = row[i][col.id];
                        let actualValue = row[i][col.id];
                        if (col.renderHybrid) {
                            columnValue = this.configStore.Options.hybridFunction(col, row[i]);
                            if (col.isTitleHybrid) {
                                actualValue = columnValue;
                            }
                        }
                        if (emptyStr !== undefined && columnValue === emptyStr) {
                            columnValue = "";
                            actualValue = "";
                        }

                        mainRowColArray[i].colArray.push({
                            columnValue,
                            type: col.type,
                            hidden: col.hidden,
                            actualValue,
                            columnName: col.name,
                            id: col.id,
                            filterable: col.filterable,
                        });
                    }
                }
            }
        }

        return mainRowColArray;
    }
}
