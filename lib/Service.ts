import Logger from './logger';
import { Component, ComponentDescription, ComponentOptions } from 'Component';
import { Server } from './Server';

export interface ServiceOptions extends ComponentOptions {
  logger?: Logger;
}

export interface ServiceDescription extends ComponentDescription {

}

export default abstract class Service implements Component {
  constructor(protected options: ServiceOptions) {
  }
  public abstract onMount(server: Server): Promise<void>;
  public abstract onUnmount(server: Server): Promise<void>;
  public abstract describe(): ServiceDescription;
}
