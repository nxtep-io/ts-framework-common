import Logger from './logger';
import BaseServer from './BaseServer';
import { Component, ComponentDescription, ComponentOptions, ComponentType } from './component/Component';

export interface ServiceOptions extends ComponentOptions {
  logger?: Logger;
}

export interface ServiceDescription extends ComponentDescription {

}

export default abstract class Service implements Component {
  logger: Logger;
  type: ComponentType.SERVICE;

  constructor(public options: ServiceOptions) {
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
