import { LoggerInstance } from 'nano-errors';
import { BaseServer } from './BaseServer';
import { ComponentDescription } from './component';
import { Component, ComponentOptions, ComponentType } from './component/Component';
export interface DatabaseOptions extends ComponentOptions {
}
export interface DatabaseDescription extends ComponentDescription {
    status: 'connected' | 'disconnected';
}
export declare abstract class Database implements Component {
    options: DatabaseOptions;
    logger: LoggerInstance;
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
     * Executes a raw query in the database.
     */
    abstract query(rawQuery: string, ...args: any[]): Promise<any>;
    /**
     * Drops the current database schema.
     */
    drop(...args: any[]): Promise<any>;
    /**
     * Migrates the current database schema.
     */
    migrate(...args: any[]): Promise<any>;
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
