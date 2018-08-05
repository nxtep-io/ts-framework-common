import * as Express from 'express';
import { Component } from './component/Component';
import ComponentGroup, { ComponentGroupOptions } from './component/ComponentGroup';

export interface BaseServerOptions extends ComponentGroupOptions {

}

export default abstract class BaseServer extends ComponentGroup {
  app: Express.Application;

  constructor(public options: BaseServerOptions) {
    super(options);
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
