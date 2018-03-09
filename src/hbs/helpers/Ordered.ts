import { GridOrderDirection } from "../../js/models/GridOrderDirection";

const ordered = (order: GridOrderDirection): string => {
    if (order === GridOrderDirection.Asc) {
        return "<i class=\"gui gui-icon gui-icon-arrow-up\" ></i> ";
    } else if (order === GridOrderDirection.Desc) {
        return "<i class=\"gui gui-icon gui-icon-arrow-down\" ></i> ";
    } else {
        return "<i class=\"gui gui-icon gui-icon-arrow-up gui-hidden\" aria-hidden=\"true\" ></i> " +
               "<i class=\"gui gui-icon gui-icon-arrow-down gui-hidden\" aria-hidden=\"true\" ></i>";
    }
};

export default ordered;
