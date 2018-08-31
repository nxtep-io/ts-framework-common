import { BaseError } from '../lib';

describe('lib.BaseError', () => {
  it('should generate a simple base error', async () => {
    const error = new BaseError('A unit test error', { sample: true });
    expect(error.message).toMatch(/unit test error/ig);
    expect(error.stack).toBeDefined();

    const obj = error.toJSON();
    expect(obj.stack).toBeDefined();
    expect(obj.message).toMatch(/unit test error/ig);

    const json = error.toJSON(true);
    expect(JSON.parse(json).message).toMatch(/unit test error/ig);
  });
});
