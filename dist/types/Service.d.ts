import Logger from './logger';
import { Component, ComponentDescription, ComponentOptions } from 'Component';
import { Server } from './Server';
export interface ServiceOptions extends ComponentOptions {
    logger?: Logger;
}
export interface ServiceDescription extends ComponentDescription {
}
export default abstract class Service implements Component {
    protected options: ServiceOptions;
    constructor(options: ServiceOptions);
    abstract onMount(server: Server): Promise<void>;
    abstract onUnmount(server: Server): Promise<void>;
    abstract describe(): ServiceDescription;
}
