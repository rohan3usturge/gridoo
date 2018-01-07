const Column = (col): string => {
    const calcWidth: number = col.hidden ? 0 : col.width;
    const dataAttrId = 'data-header-id="' + col.id + '"';
    return '<col style="width : ' + calcWidth + 'px;"' + dataAttrId + " />";
};

export default Column;
