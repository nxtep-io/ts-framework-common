import { BaseError, Logger, LoggerInstance } from 'nano-errors';
import { BaseServer } from './BaseServer';
import { ComponentDescription } from './component';
import { Component, ComponentOptions, ComponentType } from './component/Component';

export interface DatabaseOptions extends ComponentOptions {
}

export interface DatabaseDescription extends ComponentDescription {
  status: 'connected' | 'disconnected';
}

export abstract class Database implements Component {
  logger: LoggerInstance;
  type: ComponentType.DATABASE;

  constructor(public options: DatabaseOptions) {
    this.options.name = options.name || this.constructor.name;
    this.logger = options.logger || Logger.getInstance();
  }

  /**
   * Describes the database instance for the framework.
   */
  public describe() {
    return {
      name: this.options.name,
      status: this.isConnected() ? 'connected' : 'disconnected',
      context: { ...this.entities() }
    };
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
   * Checks if is currently connected  to database.
   */
  public abstract isConnected(): boolean;

  /**
   * Gets a map of database entities and its unique names (such as table or collection names).
   */
  public abstract entities(): { [name: string]: any };

  /**
   * Executes a raw query in the database.
   */
  public abstract query(rawQuery: string, ...args): Promise<any>;

  /**
   * Drops the current database schema.
   */
  public drop(...args): Promise<any> {
    throw new BaseError('Database has no support for schema drop');
  }

  /**
   * Migrates the current database schema.
   */
  public migrate(...args): Promise<any> {
    throw new BaseError('Database has no support for schema migration');
  }

  /**
   * Mounts the database, registering the models and query builders.
   * 
   * @param server The base server instance.
   */
  public onMount(server: BaseServer) {
  };

  /**
   * Handles server post-initialization, not so relevant for a Database component that will be already initialized.
   * 
   * @param server The base server instance.
   */
  public async onReady(server: BaseServer) {
  };
}
