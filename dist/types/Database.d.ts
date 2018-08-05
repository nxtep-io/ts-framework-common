import Logger from './logger';
import BaseServer from './BaseServer';
import { Component, ComponentOptions, ComponentDescription, ComponentType } from './component/Component';
export interface DatabaseOptions extends ComponentOptions {
}
export interface DatabaseDescription extends ComponentDescription {
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
     * Mounts the database, registering the models and query builders.
     *
     * @param server The base server instance.
     */
    abstract onMount(server: BaseServer): void;
    /**
     * Handles server post-initialization, not so relevant for a Database component that will be already initialized.
     *
     * @param server The base server instance.
     */
    onReady(server: BaseServer): Promise<void>;
}
