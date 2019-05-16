import { Logger, LoggerInstance } from 'nano-errors';
import { BaseServer } from '../BaseServer';
import { Component, ComponentOptions, ComponentType } from './Component';
import { ComponentDescription } from './ComponentDescription';

export interface ComponentGroupOptions extends ComponentOptions {
  children?: Component[];
}

export interface ComponentGroupDescription extends ComponentDescription {
  name: string;
  context: {
    [key: string]: Component;
  };
}

/**
 * A higher order component to handle a group of children.
 */
export default abstract class ComponentGroup implements Component {
  public children: Component[];
  public logger: LoggerInstance;
  public type: ComponentType.GROUP;

  constructor(public options: ComponentGroupOptions) {
    this.logger = options.logger || Logger.getInstance();
    this.children = options.children || [];
  }

  /**
   * Describes current component group.
   */
  public describe(): ComponentGroupDescription {
    const map = this.children
      .map((component: Component) => {
        const description = component.describe();
        return {
          [component.constructor.name]: component,
          ...(description.context || {})
        };
      })
      .reduce((aggr, next) => {
        return { ...aggr, ...next };
      }, {});

    return { name: this.options.name, context: map };
  }

  /**
   * Handles post mount routines.
   */
  public onMount(server: BaseServer): void {
    this.logger.info(`Mounting ${this.options.name} components`, this.children.map(c => c.describe().name));
    for (let i = 0; i < this.children.length; i += 1) {
      this.children[i].onMount(server);
    }
  }

  /**
   * Handles pre initialization routines.
   */
  public async onInit(server: BaseServer): Promise<void> {
    this.logger.info(`Initializing ${this.options.name} components`, this.children.map(c => c.describe().name));
    for (let i = 0; i < this.children.length; i += 1) {
      await this.children[i].onInit(server);
    }
  }

  /**
   * Handles post initialization routines.
   */
  public async onReady(server: BaseServer) {
    for (let i = 0; i < this.children.length; i += 1) {
      if (this.children[i].onReady) {
        await this.children[i].onReady(server);
      }
    }
  }

  /**
   * Handles post unmount routines.
   */
  public onUnmount(server: BaseServer): void {
    for (let i = 0; i < this.children.length; i += 1) {
      this.children[i].onUnmount(server);
    }
  }

  /**
   * Gets currently registered components.
   */
  public components(): Component[] {
    return this.children;
  }

  /**
   * Register a new component.
   */
  public component(component: Component) {
    return this.children.push(component);
  }
}
