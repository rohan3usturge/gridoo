export interface IEventHandler<T> {
    RegisterDomHandler(): void;
    onResize(): void;
    onDocumentClick(event): void;
}
