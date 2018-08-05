import { Component, ComponentOptions } from 'Component';
export interface DatabaseOptions extends ComponentOptions {
}
export interface Database extends Component {
    connect(): Promise<DatabaseOptions>;
    disconnect(): Promise<void>;
    isReady(): boolean;
}
