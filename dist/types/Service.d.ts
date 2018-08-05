import Logger from './logger';
import BaseServer from './BaseServer';
import { Component, ComponentOptions, ComponentType } from './component/Component';
import { ComponentDescription } from './component';
export interface ServiceOptions extends ComponentOptions {
    name: string;
    logger?: Logger;
}
export interface ServiceDescription extends ComponentDescription {
    name: string;
}
export default abstract class Service implements Component {
    options: ServiceOptions;
    logger: Logger;
    type: ComponentType.SERVICE;
    constructor(options: ServiceOptions);
    describe(): ServiceDescription;
    abstract onMount(server: BaseServer): void;
    abstract onUnmount(server: BaseServer): void;
    abstract onInit(server: BaseServer): Promise<void>;
    abstract onReady(server: BaseServer): Promise<void>;
}
