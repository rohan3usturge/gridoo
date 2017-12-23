import {IIndexCounter} from "./IndexCounter";
import {ScrollDirection} from "./ScrollDirection";
export interface IIndexCounter {
    startIndex: number;
    endIndex: number;
    firstIndex: number;
    lastIndex: number;
    direction: ScrollDirection;
    endReached: boolean;
    renderingRequired: boolean;
}

export const GetDefaultIndexCounter = (rowCount: number, chunkSize: number): IIndexCounter => {
    return {
        startIndex: rowCount - 1,
        endIndex: rowCount + chunkSize - 1,
        firstIndex: 0,
        lastIndex: rowCount - 1,
        direction: ScrollDirection.Down,
        endReached: false,
        renderingRequired: false,
    };
};
