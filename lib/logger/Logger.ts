import * as winston from 'winston';
import * as Raven from 'raven';
import * as SentryTransport from 'winston-raven-sentry';

export interface SentryTransportOptions extends Raven.ConstructorOptions {
  dsn: string;
  level?: string;
  levelsMap?: any;
  install?: boolean;
  raven?: Raven.Client;
}

export interface SimpleLoggerOptions extends winston.LoggerOptions {
  sentry?: SentryTransportOptions;
  transports?: winston.TransportInstance[];
}

export default class SimpleLogger extends winston.Logger {
  protected static instance: SimpleLogger;

  static DEFAULT_TRANSPORTS: winston.TransportInstance[] = [
    new (winston.transports.Console)({
      // TODO: Get from default configuration layer
      level: process.env.LOG_LEVEL || 'silly',
      colorize: true,
    }),
  ];

  public constructor(options: SimpleLoggerOptions = {}) {
    // Prepare default console transport
    const opt = {
      transports: options.transports || SimpleLogger.DEFAULT_TRANSPORTS,
    };

    // Add sentry if available
    if (options.sentry || process.env.SENTRY_DNS) {
      opt.transports.push(new SentryTransport(options.sentry || {
        dsn: process.env.SENTRY_DNS,
      }));
    }

    super(opt);
  }

  public static getInstance(options?: SimpleLoggerOptions): winston.LoggerInstance {
    if (!this.instance || options !== undefined) {
      const logger = new SimpleLogger(options);

      if (!this.instance) {
        this.instance = logger;
      }
      return logger;
    }
    return this.instance;
  }
}
