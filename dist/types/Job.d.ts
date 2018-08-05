import { Server } from './Server';
import { Component, ComponentOptions, ComponentDescription } from './Component';
export interface JobOptions extends ComponentOptions {
}
export interface JobDescription extends ComponentDescription {
}
export default abstract class Job implements Component {
    onMount(server: Server): Promise<void>;
    onUnmount(server: Server): Promise<void>;
    abstract describe(): JobDescription;
    abstract run(server: Server): Promise<void>;
}
