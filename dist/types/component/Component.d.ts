import { LoggerInstance } from 'nano-errors';
import { BaseServer } from '../BaseServer';
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
    logger?: LoggerInstance;
}
export interface Component {
    type: ComponentType;
    logger?: LoggerInstance;
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
