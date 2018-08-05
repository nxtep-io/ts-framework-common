import Logger from './logger';
import BaseServer from './BaseServer';
import { Component, ComponentOptions, ComponentType } from './component/Component';
import { ComponentDescription } from './component';
export interface DatabaseOptions extends ComponentOptions {
    name?: string;
}
export interface DatabaseDescription extends ComponentDescription {
    name: string;
    status: 'connected' | 'disconnected';
    context: {
        [name: string]: any;
    };
}
export default abstract class Database implements Component {
    options: DatabaseOptions;
    logger: Logger;
    type: ComponentType.DATABASE;
    constructor(options: DatabaseOptions);
    /**
     * Describes the database instance for the framework.
     */
    describe(): {
        name: string;
        status: string;
        context: {
            [x: string]: any;
        };
    };
    /**
     * Handles the database unmounting routines and disconnect.
     */
    onUnmount(): void;
    /**
     * Handles the database initialization routine, connecting to remote server.
     */
    onInit(): Promise<void>;
    /**
     * Connects the current database.
     */
    abstract connect(): Promise<DatabaseOptions>;
    /**
     * Disconnects the current database.
     */
    abstract disconnect(): Promise<void>;
    /**
     * Checks if is currently connected  to database.
     */
    abstract isConnected(): boolean;
    /**
     * Gets a map of database entities and its unique names (such as table or collection names).
     */
    abstract entities(): {
        [name: string]: any;
    };
    /**
     * Mounts the database, registering the models and query builders.
     *
     * @param server The base server instance.
     */
    onMount(server: BaseServer): void;
    /**
     * Handles server post-initialization, not so relevant for a Database component that will be already initialized.
     *
     * @param server The base server instance.
     */
    onReady(server: BaseServer): Promise<void>;
}
