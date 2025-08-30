const { test, expect } = require('@playwright/test');

test('get image caption', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/hovers');
    const figure = page.locator(".figure").nth(1);
    await figure.hover();
    await expect(figure.locator('.figcaption')).toBeVisible();
    await expect(figure.locator('.figcaption')).toContainText(/name: user2/i);
});
