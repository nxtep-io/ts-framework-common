import { LoggerInstance } from 'nano-errors';
import { BaseServer } from './BaseServer';
import { ComponentDescription } from './component';
import { Component, ComponentOptions, ComponentType } from './component/Component';
export interface ServiceOptions extends ComponentOptions {
}
export interface ServiceDescription extends ComponentDescription {
}
export declare abstract class Service implements Component {
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
