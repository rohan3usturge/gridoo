export type ISelectDelegate<T> = (selectedRows: T[], checked: boolean, all?: boolean) => void;
