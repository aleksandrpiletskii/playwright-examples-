const { test, expect } = require('@playwright/test');

test('Проверка заголовка', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  });

test('Отображается ссылка Get started', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Мой первый тест', async ({ page }) => {
    await console.log("Hello, Inzhenerka.Tech!");
});