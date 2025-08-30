const { test, expect } = require('@playwright/test');

test('Проверка клика и заполнения поля', async({page}) => {
    test.setTimeout(60000); // 60 seconds timeout
    await page.goto('http://uitestingplayground.com/sampleapp');

    const login = 'TestLogin';
    await page.locator('[name="UserName"]').fill(login);
    await page.locator('[name="Password"]').fill('pwd');

    await page.locator('text=Log In').click();
});