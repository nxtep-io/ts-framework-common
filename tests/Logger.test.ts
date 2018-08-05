import { Logger } from "../lib";

describe("lib.logger", () => {
  beforeEach(() => {
    (Logger as any).instance = undefined;
  });

  it("should have instantiate a valid Logger", () => {
    const logger = new Logger();
    expect(logger).toHaveProperty("silly");
    expect(logger).toHaveProperty("info");
    expect(logger).toHaveProperty("debug");
    expect(logger).toHaveProperty("warn");
    expect(logger).toHaveProperty("error");
  });

  it("should have instantiate a valid Logger using singleton", () => {
    const logger = Logger.getInstance();
    expect(logger).toHaveProperty("silly");
    expect(logger).toHaveProperty("info");
    expect(logger).toHaveProperty("debug");
    expect(logger).toHaveProperty("warn");
    expect(logger).toHaveProperty("error");
  });

  it("should have instantiate a valid Logger with sentry info", () => {
    const logger = Logger.getInstance({
      sentry: { dsn: "https://test:test@example.com/1" }
    });

    // Ensure everything is ok in the singleton instance
    expect(Logger.getInstance()).toHaveProperty("transports");
    expect(Logger.getInstance().transports).toHaveProperty("console");
    expect(Logger.getInstance().transports).toHaveProperty("sentry");

    // Ensure a new instance can be created later
    const simpleLogger = Logger.getInstance({ transports: [] });
    expect(simpleLogger).toHaveProperty("transports");
    expect(simpleLogger.transports).not.toHaveProperty("console");
    expect(simpleLogger.transports).not.toHaveProperty("sentry");

    // Ensure the original singleton will remain
    expect(Logger.getInstance()).toHaveProperty("transports");
    expect(Logger.getInstance().transports).toHaveProperty("console");
    expect(Logger.getInstance().transports).toHaveProperty("sentry");
  });
});
