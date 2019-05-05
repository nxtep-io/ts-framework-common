import { Logger } from "nano-errors";
import { Component, ComponentGroup, ComponentType } from "../lib";

describe("lib.component.ComponentGroup", () => {
  Logger.initialize();

  class TestComponent implements Component {
    type = ComponentType.SERVICE;
    logger = Logger.initialize();
    options = { name: "Test" };
    state = {
      mounted: 0,
      initialized: 0,
      unmounted: 0,
      ready: 0
    };

    describe() {
      return { name: "Test" };
    }

    onMount() {
      this.state.mounted += 1;
    }

    onUnmount() {
      this.state.unmounted += 1;
    }

    async onReady() {
      this.state.ready += 1;
    }

    async onInit() {
      this.state.initialized += 1;
    }
  }

  class TestComponentGroup extends ComponentGroup {
    logger = Logger.initialize();
  }

  it("should instantiate a ComponentGroup properly", async () => {
    const server = new TestComponentGroup({ name: "TestGroup" });
    expect(server).toHaveProperty("options");
    expect(server).toHaveProperty("logger");
    expect(server).toHaveProperty("children");

    expect(server.children).toHaveLength(0);

    // Add sample component
    server.component(new TestComponent());

    expect(server.children).toHaveLength(1);
    expect(server.components()).toHaveLength(1);

    // Test group description
    const description = server.describe();
    expect(description).toHaveProperty("name", "TestGroup");
    expect(description.context).toHaveProperty("TestComponent");
  });

  describe("with components", async () => {
    let group;

    beforeEach(async () => {
      group = new TestComponentGroup({ children: [new TestComponent()] });
    });

    afterEach(async () => {
      group = null;
    });

    it("should mount all children properly", async () => {
      expect.assertions(group.components().length * 4 * 2);

      group.components().map(c => expect(c.state.mounted).toBe(0));
      group.components().map(c => expect(c.state.initialized).toBe(0));
      group.components().map(c => expect(c.state.unmounted).toBe(0));
      group.components().map(c => expect(c.state.ready).toBe(0));

      group.onMount();

      group.components().map(c => expect(c.state.mounted).toBe(1));
      group.components().map(c => expect(c.state.initialized).toBe(0));
      group.components().map(c => expect(c.state.unmounted).toBe(0));
      group.components().map(c => expect(c.state.ready).toBe(0));
    });

    it("should initialize all children properly", async () => {
      expect.assertions(group.components().length * 4 * 2);

      group.components().map(c => expect(c.state.mounted).toBe(0));
      group.components().map(c => expect(c.state.initialized).toBe(0));
      group.components().map(c => expect(c.state.unmounted).toBe(0));
      group.components().map(c => expect(c.state.ready).toBe(0));

      group.onInit();

      group.components().map(c => expect(c.state.mounted).toBe(0));
      group.components().map(c => expect(c.state.initialized).toBe(1));
      group.components().map(c => expect(c.state.unmounted).toBe(0));
      group.components().map(c => expect(c.state.ready).toBe(0));
    });

    it("should unmount all children properly", async () => {
      expect.assertions(group.components().length * 4 * 2);

      group.components().map(c => expect(c.state.mounted).toBe(0));
      group.components().map(c => expect(c.state.initialized).toBe(0));
      group.components().map(c => expect(c.state.unmounted).toBe(0));
      group.components().map(c => expect(c.state.ready).toBe(0));

      group.onUnmount();

      group.components().map(c => expect(c.state.mounted).toBe(0));
      group.components().map(c => expect(c.state.initialized).toBe(0));
      group.components().map(c => expect(c.state.unmounted).toBe(1));
      group.components().map(c => expect(c.state.ready).toBe(0));
    });

    it("should notify ready to all children properly", async () => {
      expect.assertions(group.components().length * 4 * 2);

      group.components().map(c => expect(c.state.mounted).toBe(0));
      group.components().map(c => expect(c.state.initialized).toBe(0));
      group.components().map(c => expect(c.state.unmounted).toBe(0));
      group.components().map(c => expect(c.state.ready).toBe(0));

      await group.onReady();

      group.components().map(c => expect(c.state.mounted).toBe(0));
      group.components().map(c => expect(c.state.initialized).toBe(0));
      group.components().map(c => expect(c.state.unmounted).toBe(0));
      group.components().map(c => expect(c.state.ready).toBe(1));
    });
  });
});
