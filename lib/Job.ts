import BaseServer from './BaseServer';
import { Component, ComponentOptions, ComponentDescription, ComponentType } from './component/Component';
import { Logger } from './logger';

export interface JobOptions extends ComponentOptions {
}

export interface JobDescription extends ComponentDescription {
}

export default abstract class Job implements Component {
  logger: Logger;
  type: ComponentType.JOB;

  constructor(public options: JobOptions) {
    this.logger = options.logger || Logger.getInstance();
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

  public describe(): JobDescription {
    return { name: this.options.name || 'Job' };
  }

  public abstract async run(server: BaseServer): Promise<void>;
}
