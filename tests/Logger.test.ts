import { Logger } from '../lib';

describe('lib.Logger', () => {
  it('should get logger instance successfully', async () => {
    const logger = Logger.getInstance();

    expect(logger).toBeDefined();
    expect(logger).toHaveProperty('silly');
    expect(logger).toHaveProperty('info');
    expect(logger).toHaveProperty('debug');
    expect(logger).toHaveProperty('warn');
    expect(logger).toHaveProperty('error');
  });

  it('should initialize logger instance successfully', async () => {
    const logger = Logger.initialize();

    expect(logger).toBeDefined();
    expect(logger).toHaveProperty('silly');
    expect(logger).toHaveProperty('info');
    expect(logger).toHaveProperty('debug');
    expect(logger).toHaveProperty('warn');
    expect(logger).toHaveProperty('error');
  });

  it('should throw if tried to be constructed', async () => {
    const SimpleLogger: any = Logger;
    expect(() => new SimpleLogger()).toThrow(/constructor is deprecated/ig);
  });
});
