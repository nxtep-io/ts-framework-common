import { BaseServer, BaseServerOptions } from "../lib";

describe("lib.server.BaseServer", () => {
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
