import Logger from './logger';
import BaseServer from './BaseServer';
import { Component, ComponentDescription, ComponentOptions, ComponentType } from './component/Component';

export interface ServiceOptions extends ComponentOptions {
  logger?: Logger;
}

export interface ServiceDescription extends ComponentDescription {

}

export default abstract class Service implements Component {
  type: ComponentType.SERVICE;

  constructor(public options: ServiceOptions) {
  }

  public abstract describe(): ServiceDescription;

  public abstract onMount(server: BaseServer): void;

  public abstract onUnmount(server: BaseServer): void;

  public abstract async onInit(server: BaseServer): Promise<void>;

  public abstract async onReady(server: BaseServer): Promise<void>;
}
