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
}
