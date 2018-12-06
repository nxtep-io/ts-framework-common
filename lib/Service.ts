import Logger, { LoggerInstance } from './logger';
import BaseServer from './BaseServer';
import { Component, ComponentOptions, ComponentType } from './component/Component';
import { ComponentDescription } from './component';

export interface ServiceOptions extends ComponentOptions {
}

export interface ServiceDescription extends ComponentDescription {
}

export default abstract class Service implements Component {
  logger: LoggerInstance;
  type: ComponentType.SERVICE;

  constructor(public options: ServiceOptions) {
    this.options.name = options.name || this.constructor.name;
    this.logger = options.logger || Logger.getInstance();
  }

  public describe(): ServiceDescription {
    return { name: this.options.name }
  }

  public abstract onMount(server: BaseServer): void;

  public abstract onUnmount(server: BaseServer): void;

  public abstract async onInit(server: BaseServer): Promise<void>;

  public abstract async onReady(server: BaseServer): Promise<void>;
}
