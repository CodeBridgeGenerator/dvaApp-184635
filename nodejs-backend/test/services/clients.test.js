const assert = require("assert");
const app = require("../../src/app");

describe("clients service", () => {
  let thisService;
  let clientCreated;

  beforeEach(async () => {
    thisService = await app.service("clients");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (clients)");
  });

  describe("#create", () => {
    const options = {"name":"new value","address":"new value"};

    beforeEach(async () => {
      clientCreated = await thisService.create(options);
    });

    it("should create a new client", () => {
      assert.strictEqual(clientCreated.name, options.name);
assert.strictEqual(clientCreated.address, options.address);
    });
  });

  describe("#get", () => {
    it("should retrieve a client by ID", async () => {
      const retrieved = await thisService.get(clientCreated._id);
      assert.strictEqual(retrieved._id, clientCreated._id);
    });
  });

  describe("#update", () => {
    let clientUpdated;
    const options = {"name":"updated value","address":"updated value"};

    beforeEach(async () => {
      clientUpdated = await thisService.update(clientCreated._id, options);
    });

    it("should update an existing client ", async () => {
      assert.strictEqual(clientUpdated.name, options.name);
assert.strictEqual(clientUpdated.address, options.address);
    });
  });

  describe("#delete", () => {
  let clientDeleted;
    beforeEach(async () => {
      clientDeleted = await thisService.remove(clientCreated._id);
    });

    it("should delete a client", async () => {
      assert.strictEqual(clientDeleted._id, clientCreated._id);
    });
  });
});