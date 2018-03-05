import { IGridOptions } from "../main/IGridOptions";
import { FilterActionType } from "../models/FilterActionType";
import { IColumn } from "../models/IColumn";
import { OrderDirection } from "../models/OrderDirection";

export class ConfigStore<T> {
    public options: IGridOptions<T>;
    private defaultGridOptions: IGridOptions<T> = {
        animationTime: 200,
        chunkSize: 5,
        columns: [],
        containerElement: null,
        manageColSettingsContainer: null,
        hybridFunction: (column: IColumn, row: T): string => {
            return "true";
        },
        keyColumn: "",
        onColSettingsChange: (colConfig: IColumn[]): void => {
            // No Code
        },
        onClickFilter: (column: string, value: any, actionType: FilterActionType): void => {
            // No code
        },
        onClickHeader: (column: string, direction: OrderDirection): void => {
            // No code
        },
        onPageSearch: (pageSize: number, pageIndex: number): void => {
            // No code
        },
        onSelect: (rows: T[]): void => {
            // No Code
        },
    };
    constructor(options: IGridOptions<T>) {
        this.extendOptions(options);
        if (options.containerElement === null) {
            throw new Error("Please Provide a valid container Element object");
        }
    }
    public set Options(options: IGridOptions<T>) {
        this.options = options;
    }
    public get Options(): IGridOptions<T> {
        return this.options;
    }
    public SetHiddenOnConfig = (bool: boolean, columnId?: string): void => {
        for (const col of this.Options.columns) {
            if (columnId === undefined) {
                col.hidden = bool;
            } else {
                if (col.id === columnId) {
                    col.hidden = bool;
                    break;
                }
            }
        }
    }
    private extendOptions = (inputOptions: IGridOptions<T>): IGridOptions<T> => {
        return this.options = jQuery.extend({}, this.defaultGridOptions, inputOptions);
    }
}
