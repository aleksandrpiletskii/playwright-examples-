const { test, expect } = require('@playwright/test');

test('Проверка press', async({page}) => {
    test.setTimeout(60000); // 60 seconds timeout
    await page.goto('http://uitestingplayground.com/textinput');
    const text = 'Abc';
    await page.locator('#newButtonName').fill(text + text + text);
    await page.locator('#updatingButton').click();
    await expect(page.locator('#updatingButton')).toHaveText('AbcAbcAbc');

});