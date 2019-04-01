import * as Sentry from '@sentry/node';
import * as Transport from 'winston-transport';
import { LogLevel } from '@sentry/core';
import { BaseError } from 'nano-errors';

const winstonLevelToSentryLevel = {
  silly: 'debug',
  verbose: 'debug',
  info: 'info',
  debug: 'debug',
  warn: 'warning',
  error: 'error'
};

export interface SentryTransportOptions extends Sentry.NodeOptions {
  dsn: string;
  patchGlobal?: boolean,
  level?: string;
  install?: boolean;
  client?: Sentry.NodeClient;
  levelsMap?: any;
  tags?: any;
  extra?: any;
}

export default class SentryTransport extends Transport {
  public client: Sentry.NodeClient;
  public options: SentryTransportOptions

  constructor(options: SentryTransportOptions) {
    super(options);

    this.options = {
      dsn: '',
      patchGlobal: false,
      install: false,
      tags: {},
      extra: {},
      ...options,
    };

    Sentry.init({ ...this.options });
  }

  /**
   * @param {{}} info
   * @param {string} info.level
   * @param {Error|string} info.message
   * @param {Function} done
   */
  async log(info, done) {
    if (this.silent) {
      return done(null, true);
    }
    
    // tslint:disable-next-line:prefer-const
    let { message, level, ...extra } = info;

    let eventId: string;
    const event: Sentry.SentryEvent = {
      extra,
      level: winstonLevelToSentryLevel[level],
    };

    if (info instanceof BaseError) {
      // Strip stack id information from message for better grouping in Sentry
      event.message = info.originalMessage.replace(/\(stackId:.+?\)/g, '');
      event.tags = event.tags || {};
      event.tags.stackId = info.stackId;
      event.extra.stack = info.stack;
      eventId = Sentry.captureEvent(event);
    } else if (info instanceof Error) {
      eventId = Sentry.captureException(info);
    } else {
      event.message = (message || '').replace(/\(stackId:.+?\)/g, '');;
      eventId = Sentry.captureEvent(event)
    }

    try {
      done(null, eventId);
    } catch (error) {
      done(error);
    }
  }
}
