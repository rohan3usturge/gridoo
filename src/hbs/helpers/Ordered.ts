import { OrderDirection } from "../../js/models/OrderDirection";

const ordered = (order: OrderDirection): string => {
    if (order === OrderDirection.Asc) {
        return "<i class=\"gui gui-icon gui-icon-arrow-up\" aria-hidden=\"true\" ></i> ";
    } else if (order === OrderDirection.Desc) {
        return "<i class=\"gui gui-icon gui-icon-arrow-down\" aria-hidden=\"true\" ></i> ";
    } else {
        return "<i class=\"gui gui-icon gui-icon-arrow-up gui-hidden\" aria-hidden=\"true\" ></i> " +
               "<i class=\"gui gui-icon gui-icon-arrow-down gui-hidden\" aria-hidden=\"true\" ></i>";
    }
};

export default ordered;
