import * as Sentry from '@sentry/node';
import * as Transport from 'winston-transport';
export interface SentryTransportOptions extends Sentry.NodeOptions {
    dsn: string;
    patchGlobal?: boolean;
    level?: string;
    install?: boolean;
    client?: Sentry.NodeClient;
    levelsMap?: any;
    tags?: any;
    extra?: any;
}
export default class SentryTransport extends Transport {
    client: Sentry.NodeClient;
    options: SentryTransportOptions;
    constructor(options: SentryTransportOptions);
    /**
     * @param {{}} info
     * @param {string} info.level
     * @param {Error|string} info.message
     * @param {Function} done
     */
    log(info: any, done: any): Promise<any>;
}
