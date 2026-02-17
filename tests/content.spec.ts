import { test, expect } from "@playwright/test";

test("content: renders a simple app shell", async ({ page }) => {
  await page.setContent(`
    <main>
      <h1>Welcome</h1>
      <p data-testid="status">ok</p>
      <button id="cta">Continue</button> 
    </main>
  `);

  await expect(page.getByRole("heading", { name: "Welcome" })).toBeVisible();
  await expect(page.getByTestId("status")).toHaveText("ok");
  await expect(page.locator("#cta")).toBeEnabled();
});
