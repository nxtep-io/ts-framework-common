import Logger from './logger';
import BaseServer from './BaseServer';
import { Component, ComponentDescription, ComponentOptions, ComponentType } from './component/Component';
export interface ServiceOptions extends ComponentOptions {
    logger?: Logger;
}
export interface ServiceDescription extends ComponentDescription {
}
export default abstract class Service implements Component {
    options: ServiceOptions;
    type: ComponentType.SERVICE;
    constructor(options: ServiceOptions);
    abstract describe(): ServiceDescription;
    abstract onMount(server: BaseServer): void;
    abstract onUnmount(server: BaseServer): void;
    abstract onInit(server: BaseServer): Promise<void>;
    abstract onReady(server: BaseServer): Promise<void>;
}
