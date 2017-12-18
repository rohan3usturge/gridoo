import { HandlerNames } from "./HandlerNames";
import { IEventHandler } from "./IEventHandler";

export interface IHandlerChain<T> {
    name: HandlerNames;
    handler: IEventHandler<T>;
}
