import { Database, DatabaseDescription, DatabaseOptions } from "../lib";

describe("lib.Database", () => {
  class TestDatabase extends Database {
    async connect(): Promise<DatabaseOptions> {
      return this.options;
    }
    async disconnect(): Promise<void> {}
    describe(): DatabaseDescription {
      return {
        name: "TestDatabase"
      };
    }
    onMount() {}
    onUnmount() {}
    async onInit() {}
    async onReady() {}
  }

  it("should instantiate a TestService properly", async () => {
    const service = new TestDatabase({});
    expect(service).toHaveProperty("options");
    expect(service).toHaveProperty("logger");
    expect(service.describe()).toHaveProperty("name", "TestDatabase");
  });
});
