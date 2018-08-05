import Logger from './logger';

export interface ComponentOptions {
  name?: string;
  logger?: Logger;
}

export interface ComponentDescription {
  name?: string;
  [key: string]: any;
}

export interface Component {
  constructor(options: ComponentOptions);
  describe(): ComponentDescription;
}
