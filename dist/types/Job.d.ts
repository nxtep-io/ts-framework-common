import BaseServer from './BaseServer';
import { Component, ComponentOptions, ComponentType } from './component/Component';
import { Logger } from './logger';
import { ComponentDescription } from './component';
export interface JobOptions extends ComponentOptions {
    name?: string;
}
export interface JobDescription extends ComponentDescription {
    name?: string;
}
export default abstract class Job implements Component {
    options: JobOptions;
    logger: Logger;
    type: ComponentType.JOB;
    constructor(options: JobOptions);
    onInit(server: BaseServer): Promise<void>;
    describe(): JobDescription;
    onMount(server: BaseServer): void;
    onUnmount(server: BaseServer): void;
    /**
     * Starts the job routines.
     *
     * @param server The server instance
     */
    abstract run(server: BaseServer): Promise<void>;
}
