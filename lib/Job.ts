import { Server } from './Server';
import { Component, ComponentOptions, ComponentDescription } from './Component';

export interface JobOptions extends ComponentOptions {
}

export interface JobDescription extends ComponentDescription {
}

export default abstract class Job implements Component {

  public async onMount(server: Server) {
    return this.run(server);
  }

  public async onUnmount(server: Server) {
    // Do nothing, is a startup only job.
  }

  public abstract describe(): JobDescription;

  public abstract async run(server: Server): Promise<void>;
}
