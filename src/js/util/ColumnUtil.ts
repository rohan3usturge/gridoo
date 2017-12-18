import { IColumn } from "./../models/IColumn";

export class CommonUtil {

    public static getColumnObject = (columnId: string, columns: IColumn[]): IColumn => {
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

    public static setColumnToActualWidth = (columnId: string, element: Element, columns?: IColumn[]): void => {
        const currentCol = jQuery(element).attr("data-header-id");
        const width = CommonUtil.getColumnObject(currentCol, columns).width;
        jQuery(element).width(width + "px");
    }
}
