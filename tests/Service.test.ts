import { Service, ServiceDescription } from "../lib";

describe("lib.Service", () => {
  class TestService extends Service {
    public describe(): ServiceDescription {
      return {
        ...super.describe(),
        name: "TestService"
      };
    }
    public onMount(): void {}
    public onUnmount(): void {}
    public async onInit(): Promise<void> {}
    public async onReady(): Promise<void> {}
  }

  it("should instantiate a TestService properly", async () => {
    const service = new TestService({ name: "TestService" });
    expect(service).toHaveProperty("options");
    expect(service).toHaveProperty("logger");
    expect(service.describe()).toHaveProperty("name", "TestService");
  });
});
