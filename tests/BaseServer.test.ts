import { BaseServer, BaseServerOptions } from "../lib";
import { Logger } from "nano-errors";

describe("lib.server.BaseServer", () => {
  Logger.initialize();

  class TestServer extends BaseServer {
    async onReady(): Promise<void> {}

    async listen(): Promise<BaseServerOptions> {
      return this.options;
    }

    async close(): Promise<void> {}
  }

  it("should instantiate a BaseServer properly", async () => {
    const server = new TestServer({});
    expect(server).toHaveProperty("options");
    expect(server).toHaveProperty("logger");
  });
});
