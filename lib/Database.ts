import Logger from './logger';
import BaseServer from './BaseServer';
import { Component, ComponentOptions, ComponentDescription, ComponentType } from './component/Component';

export interface DatabaseOptions extends ComponentOptions {
}

export interface DatabaseDescription extends ComponentDescription {
}

export default abstract class Database implements Component {
  logger: Logger;
  type: ComponentType.DATABASE;

  constructor(public options: DatabaseOptions) {
    this.logger = options.logger || Logger.getInstance();
  }

  /**
   * Connects the current database.
   */
  abstract connect(): Promise<DatabaseOptions>;

  /**
   * Disconnects the current database.
   */
  abstract disconnect(): Promise<void>;

  abstract describe(): DatabaseDescription;

  abstract onMount(server: BaseServer): void;

  abstract onUnmount(server: BaseServer): void;

  abstract async onInit(server: BaseServer): Promise<void>;

  abstract async onReady(server: BaseServer): Promise<void>;
}
