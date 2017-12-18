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

export const GetDefaultIndexCounter = (): IIndexCounter => {
    return {
        startIndex: 0,
        endIndex: 0,
        firstIndex: 0,
        lastIndex: 0,
        direction: ScrollDirection.Down,
        endReached: false,
        renderingRequired: false,
    };
};
