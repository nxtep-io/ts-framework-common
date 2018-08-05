import Logger from './logger';
import { Component, ComponentOptions, ComponentDescription } from 'Component';
import { Server } from './Server';

export interface DatabaseOptions extends ComponentOptions {
}

export interface DatabaseDescription extends ComponentDescription {
}

export default abstract class Database implements Component {
  constructor(options: ComponentOptions) {
  }

  abstract describe(): DatabaseDescription;

  abstract connect(): Promise<DatabaseOptions>;

  abstract disconnect(): Promise<void>;

  abstract isReady(): boolean;

  abstract async onMount(server: Server): Promise<void>;

  abstract async onUnmount(server: Server): Promise<void>;
}
