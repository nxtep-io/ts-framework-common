import Logger from './logger';
import { Component } from 'Component';

export interface ServiceOptions {
  logger?: Logger;
}

export interface Service extends Component {
  initialize(): Promise<void>;
  isReady(): boolean;
}
