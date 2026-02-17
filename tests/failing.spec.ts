import { test, expect } from "@playwright/test";

test("demo: intentionally failing test (set DEMO_FAIL=1 to run)", async () => {
  expect(1).toBe(2);
});
