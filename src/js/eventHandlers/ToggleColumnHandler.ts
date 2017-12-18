import { IColumn } from "./../models/IColumn";
import { CommonUtil } from "./../util/ColumnUtil";
import { IEventHandler } from "./IEventHandler";

enum ShowHide {
    Show,
    Hide,
    ShowAll,
    HideAll,
}

export class ToggleColumnHandler<T> implements IEventHandler<T> {
    private parentElement: JQuery;
    private columns: IColumn[];

    constructor(element: JQuery, columns: IColumn[]) {
        this.columns = columns;
        this.parentElement = element;
    }

    public RegisterDomHandler = (): void => {
        // Nothing to Do.
    }

    public showAllColumns = (): void => {
        this.SetColWidth(".table-header .headerColGroup col", ShowHide.ShowAll);
        this.SetColWidth(".table-body .bodyColGroup col", ShowHide.ShowAll);
    }

    public showColumn = (columnId: string): void => {
        this.SetColWidth(".table-header .headerColGroup col", ShowHide.Show, columnId);
        this.SetColWidth(".table-body .bodyColGroup col", ShowHide.Show, columnId);
    }

    public hideColumn = (columnId: string): void => {
        this.SetColWidth(".table-header .headerColGroup col", ShowHide.Hide, columnId);
        this.SetColWidth(".table-body .bodyColGroup col", ShowHide.Hide , columnId);
    }

    public hideAllColumns = (): void => {
        this.SetColWidth(".table-header .headerColGroup col", ShowHide.HideAll);
        this.SetColWidth(".table-body .bodyColGroup col", ShowHide.HideAll);
    }

    private SetColWidth = (selector: string, control: ShowHide, columnId?: string): void => {
        jQuery(selector).each((index, element): void | false => {
            let width = 0;
            const currentColElem = jQuery(element);
            const currentCol = currentColElem.attr("data-header-id");
            if (currentCol !== undefined) {
                let col: IColumn;
                if ([ShowHide.Show, ShowHide.Hide].indexOf(control) > -1 ) {
                    if (currentCol === columnId) {
                        if (control === ShowHide.Show) {
                            col = CommonUtil.getColumnObject(currentCol, this.columns);
                            width = col.width;
                        }
                        currentColElem.width( width + "px");
                        return;
                    }
                }
                if ([ShowHide.ShowAll, ShowHide.HideAll].indexOf(control) > -1) {
                    if (control === ShowHide.ShowAll) {
                        col = CommonUtil.getColumnObject(currentCol, this.columns);
                        width = col.width;
                    }
                    currentColElem.width( width + "px");
                }
            }
        });
    }
}
