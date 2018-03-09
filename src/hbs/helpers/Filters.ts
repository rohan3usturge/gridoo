const Filters = (filterable: boolean, type: string): string => {
    if ( !filterable || type === "Edm.DateTimeOffset") {
        return "";
    }
    return "<span class=\"gui m-l-5 rv-child gui-caption\" >" +
            "<i class=\"gui gui-icon gui-icon-add hover m-l-5 cursor-pointer addFilter\"></i>" +
            "<i class=\"gui gui-icon gui-icon-minus hover m-l-5 cursor-pointer removeFilter\"></i></span>";
};

export default Filters;
