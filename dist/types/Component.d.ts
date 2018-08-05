import Logger from './logger';
import { Server } from './Server';
export interface ComponentOptions {
    name?: string;
    logger?: Logger;
}
export interface ComponentDescription {
    name?: string;
    [key: string]: any;
}
export interface Component {
    /**
     * Describes current component.
     */
    describe(): ComponentDescription;
    /**
     * Handles post mount routines.
     */
    onMount(server: Server): Promise<void>;
    /**
     * Handles post unmount routines.
     */
    onUnmount(server: Server): Promise<void>;
}
