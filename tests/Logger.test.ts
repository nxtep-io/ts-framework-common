import { Logger } from "../lib";

describe("lib.logger", () => {
  beforeEach(() => {
    (Logger as any).instance = undefined;
  });

  it("should throw if tried to be constructed", async () => {
    const SimpleLogger: any = Logger;
    expect(() => new SimpleLogger()).toThrow(/constructor is deprecated/gi);
  });

  it("should have instantiate a valid Logger using singleton", () => {
    const logger = Logger.getInstance();
    expect(logger).toHaveProperty("silly");
    expect(logger).toHaveProperty("info");
    expect(logger).toHaveProperty("debug");
    expect(logger).toHaveProperty("warn");
    expect(logger).toHaveProperty("error");
    logger.info("Sample test");
  });
});
