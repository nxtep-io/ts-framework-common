import { Logger } from "nano-errors";
import { Job } from "../lib";

describe("lib.Job", () => {
  Logger.initialize();

  class TestJob extends Job {
    state = {
      mounted: 0,
      initialized: 0,
      unmounted: 0,
      runs: 0
    };

    public onMount(): void {
      this.state.mounted += 1;
    }
    public onUnmount(): void {
      this.state.unmounted += 1;
    }
    public async run() {
      this.state.runs += 1;
    }
    public async onInit(server): Promise<void> {
      this.state.initialized += 1;
      super.onInit(server);
    }
  }

  it("should instantiate a TestJob properly", async () => {
    const service = new TestJob({ name: "TestJob" });
    expect(service).toHaveProperty("options");
    expect(service).toHaveProperty("logger");
    expect(service.describe()).toHaveProperty("name", "TestJob");
  });

  it("should initialize a TestJob properly", async () => {
    expect.assertions(13);

    const job = new TestJob({ name: "Job" });
    expect(job.describe()).toHaveProperty("name", "Job");

    expect(job.state.mounted).toBe(0);
    expect(job.state.unmounted).toBe(0);
    expect(job.state.initialized).toBe(0);
    expect(job.state.runs).toBe(0);

    job.onMount();

    expect(job.state.mounted).toBe(1);
    expect(job.state.unmounted).toBe(0);
    expect(job.state.initialized).toBe(0);
    expect(job.state.runs).toBe(0);

    await job.onInit({});

    expect(job.state.mounted).toBe(1);
    expect(job.state.unmounted).toBe(0);
    expect(job.state.initialized).toBe(1);
    expect(job.state.runs).toBe(1);
  });
});
