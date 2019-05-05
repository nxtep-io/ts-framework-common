import { Logger } from "nano-errors";
import { Database, DatabaseOptions } from "../lib";

describe("lib.Database", () => {
  Logger.initialize();

  class TestDatabase extends Database {
    state = {
      mounted: 0,
      unmounted: 0,
      connected: 0,
      disconnected: 0
    };

    onMount() {
      this.state.mounted += 1;
    }
    onUnmount() {
      this.state.unmounted += 1;
      super.onUnmount();
    }
    entities() {
      return {};
    }
    isConnected() {
      return false;
    }
    async connect(): Promise<DatabaseOptions> {
      this.state.connected += 1;
      return this.options;
    }
    async disconnect(): Promise<void> {
      this.state.disconnected += 1;
    }
    async query(): Promise<any> {
      return undefined;
    }
  }

  it("should instantiate a TestService properly", async () => {
    expect.assertions(17);

    const db = new TestDatabase({});
    expect(db.describe()).toHaveProperty("name", "TestDatabase");

    expect(db.state.mounted).toBe(0);
    expect(db.state.unmounted).toBe(0);
    expect(db.state.connected).toBe(0);
    expect(db.state.disconnected).toBe(0);

    db.onMount();

    expect(db.state.mounted).toBe(1);
    expect(db.state.unmounted).toBe(0);
    expect(db.state.connected).toBe(0);
    expect(db.state.disconnected).toBe(0);

    await db.onInit();

    expect(db.state.mounted).toBe(1);
    expect(db.state.unmounted).toBe(0);
    expect(db.state.connected).toBe(1);
    expect(db.state.disconnected).toBe(0);

    db.onUnmount();

    expect(db.state.mounted).toBe(1);
    expect(db.state.unmounted).toBe(1);
    expect(db.state.connected).toBe(1);
    expect(db.state.disconnected).toBe(1);
  });
});
