import { LoggerInstance } from './logger';
import BaseServer from './BaseServer';
import { Component, ComponentOptions, ComponentType } from './component/Component';
import { ComponentDescription } from './component';
export interface ServiceOptions extends ComponentOptions {
}
export interface ServiceDescription extends ComponentDescription {
}
export default abstract class Service implements Component {
    options: ServiceOptions;
    logger: LoggerInstance;
    type: ComponentType.SERVICE;
    constructor(options: ServiceOptions);
    describe(): ServiceDescription;
    abstract onMount(server: BaseServer): void;
    abstract onUnmount(server: BaseServer): void;
    abstract onInit(server: BaseServer): Promise<void>;
    abstract onReady(server: BaseServer): Promise<void>;
}
