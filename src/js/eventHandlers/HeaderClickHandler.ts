import { ConfigStore } from "../config/ConfigStore";
import { IGridOptions } from "../main/IGridOptions";
import { CommonUtil } from "../util/ColumnUtil";
import { GridOrderDirection } from "./../models/GridOrderDirection";
import {IHeaderClickDelegate} from "./../models/IHeaderClickDelegate";
import { IEventHandler } from "./IEventHandler";

export class HeaderClickHandler<T> implements IEventHandler<T> {
    private parentElement: JQuery;
    private configStore: ConfigStore<T>;
    constructor(configStore: ConfigStore<T>, element: JQuery) {
        this.configStore = configStore;
        this.parentElement = element;
    }

    public onResize(): void {
        // Nothing to Do.
    }

    public onDocumentClick(event): void {
        // Nothing to Do.
    }

    public RegisterDomHandler = (): void => {
        // Registering JQuery Event Handler if Header is Clicked.
        this.parentElement.on("click", ".table-header th", this.handleHeaderSort);
        this.parentElement.on("keyup", ".table-header th", this.handleHeaderSort);
        this.parentElement.on("focusin", ".table-header th", this.handleHeaderFocus);
    }
    private handleHeaderFocus = (event) => {
        // Handle focus
        const header = jQuery(event.target);
        const leftPostition = header.position().left;
        const headerWidth = header.width();
        const tableBody = this.parentElement.find(".table-body");
        const mainTableBody = this.parentElement.find(".mainTable");
        const visibleTbodyWidth = tableBody.width();
        const maxScroll = mainTableBody.width() - visibleTbodyWidth;
        const currentPosition = leftPostition + headerWidth * 2;
        let scrollLeftBy;
        if ( currentPosition > visibleTbodyWidth) {
            scrollLeftBy = leftPostition > maxScroll ? maxScroll : leftPostition;
        } else {
            scrollLeftBy = 0;
        }
        tableBody.scrollLeft(scrollLeftBy);
        event.stopPropagation();
    }
    private handleHeaderSort = (event) => {
        const code = event.keyCode || event.which;
        if ( event.type !== "click" && (event.type === "keyup" && code !== 13 && code !== 32) ) {
            return;
        }
        const element = jQuery(event.target).closest("th");
        const headerId = element.attr("data-header-id");
        const col = CommonUtil.GetColumnObject(headerId, this.configStore.Options.columns);
        if (col === undefined || col === null || !col.sortable ) {
            return;
        }
        const arrowIcons = element.find("i");
        const upArrowIcon = arrowIcons.first();
        const downArrowIcon = arrowIcons.last();
        let direction: GridOrderDirection;
        if (arrowIcons.is(":visible")) {
            if (upArrowIcon.is(":visible")) {
                direction = GridOrderDirection.Desc;
                upArrowIcon.hide();
                downArrowIcon.show();
            } else {
                direction = GridOrderDirection.Asc;
                downArrowIcon.hide();
                upArrowIcon.show();
            }
        } else {
            direction = GridOrderDirection.Asc;
            upArrowIcon.show();
        }
        element.attr("aria-sort", direction === GridOrderDirection.Desc ? "descending" : "ascending");
        CommonUtil.SetOrder(headerId, direction, this.configStore.Options.columns);
        this.configStore.Options.onClickHeader(headerId, direction);
        event.stopPropagation();
    }
}
