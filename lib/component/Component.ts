import Logger from '../logger';
import BaseServer from '../BaseServer';

export enum ComponentType {
  MIDDLEWARE = 'middleware',
  DATABASE = 'database',
  SERVICE = 'service',
  GROUP = 'group',
  JOB = 'job',
}

export interface ComponentOptions {
  name?: string;
  logger?: Logger;
}

export interface ComponentDescription {
  name?: string;
  [key: string]: any;
}

export interface Component {
  type: ComponentType;
  options: ComponentOptions;

  /**
   * Describes current component.
   */
  describe(): ComponentDescription;

  /**
   * Handles post mount routines.
   */
  onMount(server: BaseServer): void;

  /**
   * Handles pre initialization routines.
   */
  onInit(server: BaseServer): Promise<void>;

  /**
   * Handles post unmount routines.
   */
  onUnmount(server: BaseServer): void;

  /**
   * Handles post initialization routines.
   */
  onReady?(server: BaseServer): Promise<void>;
}
