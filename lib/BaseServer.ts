import * as Express from 'express';
import ComponentGroup, { ComponentGroupOptions } from './component/ComponentGroup';

export interface BaseServerOptions extends ComponentGroupOptions {
}

export abstract class BaseServer extends ComponentGroup {
  app: Express.Application;

  constructor(public options: BaseServerOptions) {
    super(options);
    this.options.name = options.name || this.constructor.name;
  }

  /**
   * Starts listening in configured port.
   */
  abstract listen(): Promise<BaseServerOptions>;

  /**
   * Closes the current server, if listening.
   */
  abstract close(): Promise<void>;

}
