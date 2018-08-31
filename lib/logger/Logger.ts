import * as Raven from 'raven';
import * as winston from 'winston';
import * as Transport from 'winston-transport';
import * as SentryTransport from 'winston-raven-sentry';
import WinstonElasticsearch, { ElasticsearchTransportOptions } from 'winston-elasticsearch';

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

// Export the winston.Logger type so we don't need to install the winston types on dependants
export type LoggerInstance = winston.Logger;

export default class SimpleLogger {
  protected static instance: winston.Logger;

  /**
   * The default transports thay will be enabled in the singleton.
   */
  static DEFAULT_TRANSPORTS: winston.Logger['transports'] = [
    new winston.transports.Console({
      level: process.env.LOG_LEVEL || 'silly',
      format: winston.format.colorize(),
    }),
  ];

  /**
   * Simple logger constructor is deprecated, use SimpleLogger.initialize() instead.
   *
   * @deprecated
   */
  private constructor() {
    throw new Error('Simple logger constructor is deprecated, use SimpleLogger.initialize() instead');
  }

  /**
   * Gets the singleton Logger instance, initializing it if needed.
   *
   * @param options The initialization options, for constructing if not available
   */
  public static getInstance(options: SimpleLoggerOptions = {}): winston.Logger {
    if (!this.instance) {
      this.instance = this.initialize(options);
    }
    return this.instance;
  }

  /**
   * Initialize a new logger instance using Winston factory.
   *
   * @param options The logger initialization options
   */
  public static initialize(options: SimpleLoggerOptions = {}): winston.Logger {
    // Prepare default console transport
    const opt = {
      transports: options.transports || SimpleLogger.DEFAULT_TRANSPORTS,
    };

    // Add sentry if available
    if (options.sentry) {
      opt.transports.push(new SentryTransport(options.sentry));
    }

    // Add elasticsearch if available
    if (options.elasticsearch) {
      opt.transports.push(new WinstonElasticsearch(options.elasticsearch));
    }

    return winston.createLogger(opt);
  }
}