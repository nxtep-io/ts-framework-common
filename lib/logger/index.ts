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
  transports?: winston.Logger['transports'];
}

export default class SimpleLogger {
  protected static instance: winston.Logger;

  static DEFAULT_TRANSPORTS: winston.Logger['transports'] = [
    new winston.transports.Console({
      // TODO: Get from default configuration layer
      level: process.env.LOG_LEVEL || 'silly',
      format: winston.format.colorize(),
    }),
  ];

  private constructor() {}

  public static getInstance(options?: SimpleLoggerOptions): winston.Logger {
    if (options || !this.instance) {
      // Prepare default console transport
      const opt = {
        transports: options.transports || SimpleLogger.DEFAULT_TRANSPORTS,
      };

      // Add sentry if available
      if (options.sentry) {
        opt.transports.push(new SentryTransport(options.sentry));
      }

      if (!this.instance) {
        this.instance = winston.createLogger(opt);
      }
    }

    return this.instance;
  }
}
