import BaseServer from './BaseServer';
import { Component, ComponentOptions, ComponentDescription, ComponentType } from './component/Component';
import { Logger } from './logger';
export interface JobOptions extends ComponentOptions {
}
export interface JobDescription extends ComponentDescription {
}
export default abstract class Job implements Component {
    options: JobOptions;
    logger: Logger;
    type: ComponentType.JOB;
    constructor(options: JobOptions);
    onMount(server: BaseServer): void;
    onUnmount(server: BaseServer): void;
    onInit(server: BaseServer): Promise<void>;
    describe(): JobDescription;
    abstract run(server: BaseServer): Promise<void>;
}
