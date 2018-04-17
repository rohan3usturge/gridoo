import { GridOrderDirection } from "../models/GridOrderDirection";
import { IColumn } from "./../models/IColumn";

export class CommonUtil {

    public static GetColumnObject = (columnId: string, columns: IColumn[]): IColumn => {
        if (columnId == null || columns == null) {
            return null;
        }
        let retCol: IColumn;
        columns.forEach((col: IColumn) => {
            if (col.id === columnId) {
                retCol = col;
                return;
            }
        });
        return retCol;
    }
    public static SetOrder = (columnId: string, orderBy: GridOrderDirection, columns: IColumn[]): IColumn => {
        if (columnId == null || columns == null) {
            return null;
        }
        let retCol: IColumn;
        columns.forEach((col: IColumn) => {
            if (col.id === columnId) {
                col.orderBy = orderBy;
                retCol = col;
                return;
            }
        });
        return retCol;
    }
}
