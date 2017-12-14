import * as handlebars from "handlebars";
import * as $ from "jquery";
import * as gridDetailsRow from "../html/grid-details-row.html";
import * as gridMainRow from "../html/grid-main-row.html";
import * as gridHtml from "../html/grid.html";

export class Grid {

    private templateFunctionForGrid: any;
    private templateFunctionForMainRow: any;
    private templateFunctionForDetailsRow: any;

    constructor() {
        this.templateFunctionForGrid = handlebars.compile(gridHtml);
        this.templateFunctionForMainRow = handlebars.compile(gridMainRow);
        this.templateFunctionForDetailsRow = handlebars.compile(gridDetailsRow);
        handlebars.registerHelper("col", (width): string => {
            return '<col style="width : ' + width + 'px;"/>';
        });
    }

    private bindData = (data: any[], columns: any[]): string => {
        let tBodyContent: string = "";
        data.forEach((row: any) => {
            const detailsArray: any[] = [];
            const mainArray: any[] = [];
            columns.forEach((col: any) => {
                const columnValue = row[col.id];
                // if (col.renderHybridCellDefn) {
                //     columnValue = col.vxGridRederCellCallback();
                // }
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
            const detailRowStr = this.templateFunctionForDetailsRow(detailsArray);
            tBodyContent += detailRowStr;
        });
        return this.templateFunctionForGrid({columns, tBodyContent});
    }
}
