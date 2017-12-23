import { GetDefaultIndexCounter, IIndexCounter } from "./IndexCounter";
import { ScrollDirection } from "./ScrollDirection";

export class Virtualizer {
    private currentIndexCounter: IIndexCounter;
    private lastScrollPosition: number;
    private length: number;
    private chunkSize: number;
    private scrollContainerHeight: number;
    private tableHeight: number;
    private initialRowCount: number;

    constructor(chunkSize: number, initialRowCount: number, length: number) {
        this.lastScrollPosition = 0;
        this.length = length;
        this.chunkSize = chunkSize;
        this.initialRowCount = initialRowCount;
        this.currentIndexCounter = GetDefaultIndexCounter(initialRowCount, chunkSize);
    }

    public GetIndexCounterForScroll = (scrollTop: number): IIndexCounter => {
        let newCounter: IIndexCounter = GetDefaultIndexCounter(this.chunkSize, this.initialRowCount);
        newCounter.direction = this.GetScrollDirection(scrollTop);
        switch (newCounter.direction) {
            // Calculate Index Counters for Down Movement
            case ScrollDirection.Down:
                if (this.currentIndexCounter.lastIndex >= this.length - 1) {
                    newCounter.endReached = true;
                } else {
                    newCounter.endReached = false;
                    const diff = (scrollTop + this.ScrollContainerHeight) - (this.TableHeight * 0.8 );
                    if (diff > 0) {
                        newCounter.renderingRequired = true;
                        newCounter = this.PopulateIndexCounterForDown(newCounter);
                    }
                }
                break;
            case ScrollDirection.Up:
                // Calculate Index Counters for Up Movement
                if (this.currentIndexCounter.firstIndex <= 0) {
                    newCounter.endReached = true;
                } else {
                    newCounter.endReached = false;
                    const diff = scrollTop - (this.TableHeight - this.ScrollContainerHeight) * 0.1;
                    if (diff < 0) {
                        newCounter.renderingRequired = true;
                        newCounter = this.PopulateIndexCounterForUp(newCounter);
                    }
                }
                break;
        }
        if (newCounter.renderingRequired) {
            this.currentIndexCounter = newCounter;
        }
        this.lastScrollPosition = scrollTop;
        // this.Print(newCounter, this.currentIndexCounter);
        return newCounter;
    }

    private Print = (newCounter: IIndexCounter, currentIndexCounter: IIndexCounter): void => {
        console.log(" ******************************************************************* ");
        console.log(" Scroll Position - " + this.lastScrollPosition);
        console.log(" Length  - " + this.length);
        console.log(" ------------  CURRENT ---------- ");
        Object.keys(currentIndexCounter).forEach((val, index) => {
            console.log(val + " - " + currentIndexCounter[val]);
        });
        console.log(" ------------  NEW ---------- ");
        Object.keys(newCounter).forEach((val, index) => {
            console.log(val + " - " + newCounter[val]);
        });
        console.log(" ******************************************************************* ");
    }

    private PopulateIndexCounterForDown = (counter: IIndexCounter): IIndexCounter => {
        counter.startIndex = this.currentIndexCounter.lastIndex + 1;
        counter.endIndex   = this.currentIndexCounter.lastIndex + this.chunkSize > this.length - 1 ?
                                this.length - 1 :
                                this.currentIndexCounter.lastIndex + this.chunkSize;
        counter.firstIndex = this.currentIndexCounter.firstIndex + this.chunkSize;
        counter.lastIndex  = counter.endIndex;
        return counter;
    }

    private PopulateIndexCounterForUp = (counter: IIndexCounter): IIndexCounter => {
        counter.startIndex = this.currentIndexCounter.firstIndex - this.chunkSize < 0 ?
                             0 :
                             this.currentIndexCounter.firstIndex - this.chunkSize;
        counter.endIndex = this.currentIndexCounter.firstIndex - 1;
        counter.firstIndex = counter.startIndex;
        counter.lastIndex = this.currentIndexCounter.lastIndex - this.chunkSize;
        return counter;
    }

    private GetScrollDirection = (scrollTop: number): ScrollDirection => {
        if (this.lastScrollPosition < scrollTop) {
            return ScrollDirection.Down;
        }
        return ScrollDirection.Up;
    }
    public set ScrollContainerHeight(height: number) {
        this.scrollContainerHeight = height;
    }

    public get ScrollContainerHeight() {
        return this.scrollContainerHeight;
    }
    public set TableHeight(height: number) {
        this.tableHeight = height;
    }

    public get TableHeight() {
        return this.tableHeight;
    }
    public set InitialRowCount(rowCount: number) {
        this.initialRowCount = rowCount;
    }

    public get InitialRowCount() {
        return this.initialRowCount;
    }
}
