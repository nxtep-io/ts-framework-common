import { BaseError } from "../lib";

describe("lib.error.BaseError", () => {
  it("should instantiate a BaseError properly", () => {
    const error = new BaseError("Test");

    expect(error.message).toMatch(/Test/);
    expect(error.message).toMatch(new RegExp(error.stackId));

    const jsonObj = error.toJSON();
    expect(typeof jsonObj).toBe(typeof {});

    const jsonStr = error.toJSON(true);
    expect(typeof jsonStr).toBe(typeof "string");
  });

  describe("without captureStackTrace", async () => {
    let captureStackTrace;

    beforeEach(async () => {
      captureStackTrace = Error.captureStackTrace;
      Error.captureStackTrace = null;
    });

    afterEach(async () => {
      Error.captureStackTrace = captureStackTrace;
      captureStackTrace = null;
    });

    it("should instantiate properly without captureStackTrace", () => {
      const error = new BaseError("Test", {
        test: true
      });

      expect(error).toHaveProperty("stack");
      expect(error).toHaveProperty("details", { test: true });
      expect(error.toObject()).toHaveProperty("details", { test: true });

      const jsonObj = error.toJSON();
      expect(typeof jsonObj).toBe(typeof {});

      const jsonStr = error.toJSON(true);
      expect(typeof jsonStr).toBe(typeof "string");
    });
  });
});
