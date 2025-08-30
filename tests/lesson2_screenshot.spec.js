const { test, expect } = require('@playwright/test');

test('Проверка скриншотов', async({page}) => {
    await page.goto('http://uitestingplayground.com/sampleapp');

    await page.locator("body").screenshot({path: "site.png"});
    await page.locator(".container").first().screenshot({path: "container.png"});
});