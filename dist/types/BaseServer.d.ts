import * as Express from 'express';
import ComponentGroup, { ComponentGroupOptions } from './component/ComponentGroup';
export interface BaseServerOptions extends ComponentGroupOptions {
}
export default abstract class BaseServer extends ComponentGroup {
    options: BaseServerOptions;
    app: Express.Application;
    constructor(options: BaseServerOptions);
    /**
     * Handles post-listening routines, such as startup jobs.
     */
    abstract onReady(): Promise<void>;
    /**
     * Starts listening in configured port.
     */
    abstract listen(): Promise<BaseServerOptions>;
    /**
     * Closes the current server, if listening.
     */
    abstract close(): Promise<void>;
}
