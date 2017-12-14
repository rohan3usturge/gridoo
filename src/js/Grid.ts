import * as handlebars from "handlebars";
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
    }

    private bindData = (data: any[], columns: any[]): string => {
        const detailsArray: any[] = [];
        const mainArray: any[] = [];
        let tBodyContent: string = "";
        data.forEach((row: any) => {
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
        this.templateFunctionForGrid({columns, tBodyContent});
        return tBodyContent;
    }
}
