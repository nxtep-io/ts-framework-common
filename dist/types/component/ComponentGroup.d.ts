import Logger from '../logger';
import BaseServer from '../BaseServer';
import { Component, ComponentDescription, ComponentType } from './Component';
export interface ComponentGroupOptions {
    name?: string;
    logger?: Logger;
}
export interface ComponentGroupDescription extends ComponentDescription {
    name: string;
    components: {
        [key: string]: string | ComponentDescription;
    };
}
/**
 * A higher order component to handle a group of children.
 */
export default abstract class ComponentGroup implements Component {
    options: ComponentGroupOptions;
    children: Component[];
    logger: Logger;
    type: ComponentType.GROUP;
    constructor(options: ComponentGroupOptions);
    /**
     * Describes current component group.
     */
    describe(): ComponentGroupDescription;
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
     * Gets currently registered components.
     */
    components(): Component[];
    /**
     * Register a new component.
     */
    component(component: Component): number;
}