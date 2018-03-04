import { ConfigStore } from "../config/ConfigStore";
import { IColumn } from "./../models/IColumn";
import { CommonUtil } from "./../util/ColumnUtil";

enum ShowHide {
    Show,
    Hide,
    ShowAll,
    HideAll,
}

export class ToggleColumnHandler<T> {
    private configStore: ConfigStore<T>;
    private parentElement: JQuery;

    constructor(configStore: ConfigStore<T>, element: JQuery) {
        this.configStore = configStore;
        this.parentElement = element;
    }

    public showAllColumns = (): void => {
        jQuery(".table-header thead").fadeIn(200);
        jQuery(".mainTableBody").fadeIn(200);
        // this.SetColWidth(".table-header .headerColGroup col", ShowHide.ShowAll);
        // this.SetColWidth(".table-body .bodyColGroup col", ShowHide.ShowAll);
        this.configStore.SetHiddenOnConfig(false);
    }

    public showColumn = (columnId: string): void => {
        jQuery(".table-header thead #header-" + columnId).fadeIn(200);
        jQuery(".mainTableBody .body-" + columnId).fadeIn(200);
        // this.SetColWidth(".table-header .headerColGroup col", ShowHide.Show, columnId);
        // this.SetColWidth(".table-body .bodyColGroup col", ShowHide.Show, columnId);
        this.configStore.SetHiddenOnConfig(false, columnId);
    }

    public hideColumn = (columnId: string): void => {
        jQuery(".table-header thead #header-" + columnId).fadeOut(200);
        jQuery(".mainTableBody .body-" + columnId).fadeOut(200);
        // this.SetColWidth(".table-header .headerColGroup col", ShowHide.Hide, columnId);
        // this.SetColWidth(".table-body .bodyColGroup col", ShowHide.Hide , columnId);
        this.configStore.SetHiddenOnConfig(true, columnId);
    }

    public hideAllColumns = (): void => {
        jQuery(".table-header thead").fadeOut(200);
        jQuery(".mainTableBody").fadeOut(200);
        // this.SetColWidth(".table-header .headerColGroup col", ShowHide.HideAll);
        // this.SetColWidth(".table-body .bodyColGroup col", ShowHide.HideAll);
        this.configStore.SetHiddenOnConfig(true);
    }
    public applyColumnConfig = (columns: IColumn[]) => {
        for (const column of columns) {
            if (column.hidden) {
                this.hideColumn(column.id);
            } else {
                this.showColumn(column.id);
            }
        }
    }
    private SetColWidth = (selector: string, control: ShowHide, columnId?: string): void => {
        this.parentElement.find(selector).each((index, element): void | false => {
            let width = 0;
            const currentColElem = jQuery(element);
            const currentCol = currentColElem.attr("data-header-id");
            if (currentCol !== undefined) {
                let col: IColumn;
                if ([ShowHide.Show, ShowHide.Hide].indexOf(control) > -1 ) {
                    if (currentCol === columnId) {
                        if (control === ShowHide.Show) {
                            col = CommonUtil.GetColumnObject(currentCol, this.configStore.options.columns);
                            width = col.width;
                        }
                        currentColElem.width( width + "px");
                        return;
                    }
                }
                if ([ShowHide.ShowAll, ShowHide.HideAll].indexOf(control) > -1) {
                    if (control === ShowHide.ShowAll) {
                        col = CommonUtil.GetColumnObject(currentCol, this.configStore.options.columns);
                        width = col.width;
                    }
                    currentColElem.width( width + "px");
                }
            }
        });
    }
}
