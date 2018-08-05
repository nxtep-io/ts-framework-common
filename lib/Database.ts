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
   * Describes the database instance for the framework.
   */
  public describe() {
    return { name: this.options.name || 'Database' };
  }

  /**
   * Handles the database unmounting routines and disconnect.
   */
  public onUnmount() {
    this.disconnect();
  };

  /**
   * Handles the database initialization routine, connecting to remote server.
   */
  public async onInit() {
    await this.connect();
  }

  /**
   * Connects the current database.
   */
  public abstract connect(): Promise<DatabaseOptions>;

  /**
   * Disconnects the current database.
   */
  public abstract disconnect(): Promise<void>;

  /**
   * Mounts the database, registering the models and query builders.
   * 
   * @param server The base server instance.
   */
  public abstract onMount(server: BaseServer): void;

  /**
   * Handles server post-initialization, not so relevant for a Database component that will be already initialized.
   * 
   * @param server The base server instance.
   */
  public async onReady(server: BaseServer): Promise<void> {
  };
}
