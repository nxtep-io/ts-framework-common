import Logger from './logger';
export interface DatabaseOptions {
    logger?: Logger;
}
/**
 * The common Database interface for the TS Framework. Using this interface,
 * the server will bind the Database startup to its own lifecycle.
 */
export interface Database {
    /**
     * Connects to the database.
     */
    connect(): Promise<DatabaseOptions>;
    /**
     * Disconnects from database.
     */
    disconnect(): Promise<void>;
    /**
     * Checks if the database is ready.
     */
    isReady(): boolean;
}
