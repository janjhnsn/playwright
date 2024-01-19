import { test, expect } from "@playwright/test";
import { rootSelector as root } from "../../test/core";

// Render function - do I get what is expected
test("Button default renders correctly", async ({ page }) => {
  await page.goto("iframe.html?viewMode=story&id=button--button-default");
  await expect(page.locator(`${root} button`)).toBeVisible();
});

// Content function - does the value match what is expected
test("Button has correct value", async ({ page }) => {
  await page.goto("iframe.html?viewMode=story&id=button--button-value-x");
  await expect(page.locator(`${root} button`)).toHaveText("X");
});

// Content function - does the value match what is expected
test("Button has correct name attribute", async ({ page }) => {
  await page.goto("iframe.html?viewMode=story&id=button--button-name-y");
  await expect(page.locator(`${root} button`)).toHaveAttribute("name", "Y");
});

// Content function - does the value match what is expected
test("Button has correct value and name attribute", async ({ page }) => {
  await page.goto("iframe.html?viewMode=story&id=button--button-name-value-z");
  await expect(page.locator(`${root} button`)).toHaveText("Z");
  await expect(page.locator(`${root} button`)).toHaveAttribute("name", "Z");
});

// Functional function - does it alert when clicked
test("Button when clicked has a dialog with correct output", async ({ page }) => {
  await page.goto("iframe.html?viewMode=story&id=button--button-click-alert");
  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toEqual('You clicked on me!')
    await dialog.accept();
  }
  );
  await page.locator(`${root} button`).click();
});

// Snapshot comparison function - does it look like the image, first run saves the image
test("Button default has correct screenshot", async ({ page }) => {
  await page.goto("iframe.html?viewMode=story&id=button--button-default");
  await expect(page.locator(`${root} button`)).toHaveScreenshot();
});