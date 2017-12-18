import { GetDefaultIndexCounter, IIndexCounter } from "./IndexCounter";
import { ScrollDirection } from "./ScrollDirection";

export class Virtualizer {
    private currentIndexCounter: IIndexCounter;
    private lastScrollPosition: number;
    private length: number;
    private chunkSize: number;
    private scrollContainerHeight: number;
    private tableHeight: number;

    constructor() {
        this.currentIndexCounter = GetDefaultIndexCounter();
        this.lastScrollPosition = 0;
        this.chunkSize = 5;
    }

    public GetIndexCounterForScroll = (scrollTop: number): IIndexCounter => {
        let newCounter: IIndexCounter = GetDefaultIndexCounter();
        newCounter.direction = this.GetScrollDirection(scrollTop);
        switch (newCounter.direction) {
            // Calculate Index Counters for Down Movement
            case ScrollDirection.Down:
                if (this.currentIndexCounter.lastIndex >= this.length - 1) {
                    newCounter.endReached = true;
                    const diff = (scrollTop + this.ScrollContainerHeight) - (this.TableHeight * 0.8 );
                    if (diff > 0) {
                        newCounter.renderingRequired = true;
                        newCounter = this.PopulateIndexCounterForDown(newCounter);
                    }
                } else {
                    newCounter.endReached = false;
                }
                break;
            case ScrollDirection.Up:
                // Calculate Index Counters for Up Movement
                if (this.currentIndexCounter.firstIndex > 0) {
                    newCounter.endReached = true;
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
        return newCounter;
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
}
