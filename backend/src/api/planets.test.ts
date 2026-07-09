import assert from "node:assert/strict";
import { describe, test } from "node:test";
import request from "supertest";
import { app } from "../index.js";

describe("HTTP API", () => {
  test("GET / returns plain text", async () => {
    const res = await request(app).get("/").expect(200);
    assert.equal(res.text, "Server is running");
  });

  test("GET /api/planets returns JSON with expected shape", async () => {
    const res = await request(app).get("/api/planets").expect("Content-Type", /json/);

    assert.ok(res.status === 200 || res.status === 500, `unexpected status ${res.status}`);

    if (res.status === 500) {
      assert.equal(res.body?.message, "Database connection failed");
      return;
    }

    assert.ok(typeof res.body?.message === "string", "body.message should be a string");

    if (res.body.planets === undefined) {
      assert.match(res.body.message, /empty/i);
      return;
    }

    assert.ok(Array.isArray(res.body.planets), "planets should be an array");
    assert.equal(typeof res.body.count, "number");
    assert.ok(res.body.count <= 5, "route uses take: 5");
    assert.ok(res.body.count === res.body.planets.length);

    for (const p of res.body.planets) {
      assert.ok(typeof p.id === "string" && p.id.length > 0);
      assert.ok(typeof p.name === "string" && p.name.length > 0);

      if (p.trait !== null) {
        assert.ok(typeof p.trait.atmosphere === "object");
        assert.equal(typeof p.trait.atmosphere.canRetain, "boolean");
        assert.equal(typeof p.trait.atmosphere.hasSpectroscopyData, "boolean");
        assert.ok(
          ["None", "Low", "Medium", "High"].includes(p.trait.atmosphere.atmosphereConfidence),
        );
      }
    }
  });
});
