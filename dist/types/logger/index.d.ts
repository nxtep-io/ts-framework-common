import * as Raven from 'raven';
import * as winston from 'winston';
import * as Transport from 'winston-transport';
import { ElasticsearchTransportOptions } from 'winston-elasticsearch';
export interface SimpleLoggerOptions extends winston.LoggerOptions {
    sentry?: SentryTransportOptions;
    elasticsearch?: ElasticsearchTransportOptions;
    transports?: Transport[];
}
export interface SentryTransportOptions extends Raven.ConstructorOptions {
    dsn: string;
    level?: string;
    levelsMap?: any;
    install?: boolean;
    raven?: Raven.Client;
}
export default class SimpleLogger {
    protected static instance: winston.Logger;
    /**
     * The default transports thay will be enabled in the singleton.
     */
    static DEFAULT_TRANSPORTS: winston.Logger['transports'];
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
    static getInstance(options?: SimpleLoggerOptions): winston.Logger;
    /**
     * Initialize a new logger instance using Winston factory.
     *
     * @param options The logger initialization options
     */
    static initialize(options?: SimpleLoggerOptions): winston.Logger;
}
