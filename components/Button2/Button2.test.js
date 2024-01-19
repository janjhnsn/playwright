import { test, expect } from "@playwright/test";
import { rootSelector as root } from "../../test/core";

// Render function - do I get what is expected
test("Button default renders correctly", async ({ page }) => {
  await page.goto("iframe.html?viewMode=story&id=button2--button-default");
  await expect(page.locator(`${root} button`)).toBeVisible();
});

// Snapshot comparison function - does it look like the image, first run saves the image
test("Button default has correct screenshot", async ({ page }) => {
  await page.goto("iframe.html?viewMode=story&id=button2--button-default");
  await expect(page.locator(`${root} button`)).toHaveScreenshot();
});