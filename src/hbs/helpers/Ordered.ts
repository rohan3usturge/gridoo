import { GridOrderDirection } from "../../js/models/GridOrderDirection";
import { IColumn } from "../../js/models/IColumn";

const ordered = (column: IColumn, index: string): string => {
    const parsedInt = parseInt(index, 10) + 3;
    let ariaSortStr;
    let headerIconMk;
    const ariaHiddenStr = column.hidden ? " aria-hidden=\"true\"" : " aria-hidden=\"false\"";
    const tabIndex = column.sortable && !column.hidden ? 0 : -1;
    if (column.orderBy === GridOrderDirection.Asc) {
        headerIconMk = " <i class=\"gui gui-icon gui-icon-arrow-up\" aria-hidden=\"false\" ></i> " +
                        "<i class=\"gui gui-icon gui-icon-arrow-down gui-hidden\" aria-hidden=\"true\" ></i>";
        ariaSortStr = "aria-sort=\"ascending\"";
    } else if (column.orderBy === GridOrderDirection.Desc) {
        headerIconMk = "<i class=\"gui gui-icon gui-icon-arrow-up gui-hidden\" aria-hidden=\"true\" ></i> " +
                        "<i class=\"gui gui-icon gui-icon-arrow-down\" aria-hidden=\"false\" ></i>";
        ariaSortStr = "aria-sort=\"descending\"";
    } else {
        headerIconMk = "<i class=\"gui gui-icon gui-icon-arrow-up gui-hidden\" aria-hidden=\"true\" ></i> " +
                        "<i class=\"gui gui-icon gui-icon-arrow-down gui-hidden\" aria-hidden=\"true\" ></i>";
        ariaSortStr = "aria-sort=\"none\"";
    }
    return "<th role=\"columnheader\" aria-colindex=\"" + parsedInt
          + "\" tabindex=\"" + tabIndex + "\" class=\"gui cursor-pointer\" id=\"header-"
          + column.id  + "\""
          + " data-header-id=\"" + column.id + "\" "
          + ariaSortStr
          + ariaHiddenStr
          + " aria-label=\"" + column.name + "\" "
          + " title=\"" + column.name + "\" "
          + "  >"
          + " <span class=\"gui sub header m-r-5\">" + column.name + "</span>"
          + headerIconMk
          + " </th>";
};

export default ordered;
