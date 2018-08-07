import Logger from '../logger';
import BaseServer from '../BaseServer';
import { Component, ComponentType } from './Component';
import { ComponentDescription } from './ComponentDescription';
export interface ComponentGroupOptions {
    name?: string;
    logger?: Logger;
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
    options: ComponentGroupOptions;
    logger: Logger;
    children: Component[];
    type: ComponentType.GROUP;
    protected constructor(options: ComponentGroupOptions);
    /**
     * Describes current component group.
     */
    describe(): ComponentGroupDescription;
    /**
     * Handles post mount routines.
     */
    onMount<T extends BaseServer>(server: T): void;
    /**
     * Handles pre initialization routines.
     */
    onInit<T extends BaseServer>(server: T): Promise<void>;
    /**
     * Handles post initialization routines.
     */
    onReady<T extends BaseServer>(server: T): Promise<void>;
    /**
     * Handles post unmount routines.
     */
    onUnmount<T extends BaseServer>(server: T): void;
    /**
     * Gets currently registered components.
     */
    components(): Component[];
    /**
     * Register a new component.
     */
    component(component: Component): number;
}
