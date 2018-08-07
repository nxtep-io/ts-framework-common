import Logger from '../logger';
import BaseServer from '../BaseServer';
import { ComponentDescription } from './ComponentDescription';
export declare enum ComponentType {
    MIDDLEWARE = "middleware",
    DATABASE = "database",
    SERVICE = "service",
    GROUP = "group",
    JOB = "job"
}
export interface ComponentOptions {
    name?: string;
    logger?: Logger;
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
    onMount<T extends BaseServer>(server: T): void;
    /**
     * Handles pre initialization routines.
     */
    onInit<T extends BaseServer>(server: T): Promise<void>;
    /**
     * Handles post unmount routines.
     */
    onUnmount<T extends BaseServer>(server: T): void;
    /**
     * Handles post initialization routines.
     */
    onReady?<T extends BaseServer>(server: T): Promise<void>;
}
