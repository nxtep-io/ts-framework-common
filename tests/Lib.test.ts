import { Logger } from "../lib";

describe("Lib.logger", () => {
  it("should have instantiate a valid Logger", () => {
    const logger = Logger.getInstance();
    expect(logger).toHaveProperty("silly");
    expect(logger).toHaveProperty("info");
    expect(logger).toHaveProperty("debug");
    expect(logger).toHaveProperty("warn");
    expect(logger).toHaveProperty("error");
  });
});
