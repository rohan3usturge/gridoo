const ariaHidden = (bool: boolean): string => {
    return bool ? "aria-hidden=\"true\"" : "aria-hidden=\"false\"";
};

export default ariaHidden;
