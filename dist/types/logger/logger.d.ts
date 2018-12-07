import * as winston from 'winston';
import { ElasticsearchTransportOptions } from 'winston-elasticsearch';
import * as Transport from 'winston-transport';
import { SentryTransportOptions } from './Sentry';
export interface LoggerOptions extends winston.LoggerOptions {
    sentry?: SentryTransportOptions;
    elasticsearch?: ElasticsearchTransportOptions;
    transports?: Transport[];
}
export declare type LoggerInstance = winston.Logger;
export default class Logger {
    protected static instance: LoggerInstance;
    /**
     * The default transports thay will be enabled in the singleton.
     */
    static DEFAULT_TRANSPORTS: LoggerInstance['transports'];
    /**
     * Simple logger constructor is deprecated, use SimpleLogger.initialize() instead.
     *
     * @deprecated
     */
    private constructor();
    /**
     * Gets the singleton Logger instance, initializing it if needed.
     *
     * @param options The initialization options, for constructing if not available
     */
    static getInstance(options?: LoggerOptions): LoggerInstance;
    /**
     * Initialize a new logger instance using Winston factory.
     *
     * @param options The logger initialization options
     */
    static initialize(options?: LoggerOptions): LoggerInstance;
}
