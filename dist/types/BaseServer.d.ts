import * as Express from 'express';
import ComponentGroup, { ComponentGroupOptions } from './component/ComponentGroup';
export interface BaseServerOptions extends ComponentGroupOptions {
}
export declare abstract class BaseServer extends ComponentGroup {
    options: BaseServerOptions;
    app: Express.Application;
    constructor(options: BaseServerOptions);
    /**
     * Starts listening in configured port.
     */
    abstract listen(): Promise<BaseServerOptions>;
    /**
     * Closes the current server, if listening.
     */
    abstract close(): Promise<void>;
}
