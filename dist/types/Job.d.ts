import BaseServer from './BaseServer';
import { Component, ComponentOptions, ComponentType } from './component/Component';
import { LoggerInstance } from './logger';
import { ComponentDescription } from './component';
export interface JobOptions extends ComponentOptions {
}
export interface JobDescription extends ComponentDescription {
}
export default abstract class Job implements Component {
    options: JobOptions;
    logger: LoggerInstance;
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
