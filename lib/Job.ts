import BaseServer from './BaseServer';
import { Component, ComponentOptions, ComponentDescription, ComponentType } from './component/Component';

export interface JobOptions extends ComponentOptions {
}

export interface JobDescription extends ComponentDescription {
}

export default abstract class Job implements Component {
  type: ComponentType.JOB;

  constructor(public options: JobOptions) {
  }

  public onMount(server: BaseServer) {
    // Do nothing, is a startup only job.
  }

  public onUnmount(server: BaseServer) {
    // Do nothing, is a startup only job.
  }

  public async onInit(server: BaseServer) {
    return this.run(server);
  }

  public abstract describe(): JobDescription;

  public abstract async run(server: BaseServer): Promise<void>;
}
