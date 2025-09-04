const { test, expect } = require('@playwright/test');
const { allure } = require('allure-playwright');

test('checkboxes', async ({ page }) => {
    await allure.description('Тест проверяет работу с чекбоксами: установка и снятие отметок');
    await allure.severity('normal');
    await allure.epic('UI Tests');
    await allure.feature('Checkboxes');
    await allure.story('Checkbox Interaction');
    await allure.tag('ui', 'checkbox', 'form');
    
    await allure.step('Открыть страницу с чекбоксами', async () => {
        await page.goto('http://the-internet.herokuapp.com/checkboxes');
    });
    
    await allure.step('Найти чекбоксы на странице', async () => {
        const form = page.locator("#checkboxes input")
        const cb1 = form.nth(0);
        const cb2 = form.nth(1);
        
        await allure.step('Отметить первый чекбокс', async () => {
            await cb1.check();
        });
        
        await allure.step('Снять отметку со второго чекбокса', async () => {
            await cb2.uncheck();
        });
        
        await allure.step('Проверить состояние чекбоксов', async () => {
            await expect(cb1).toBeChecked();
            await expect(cb2).not.toBeChecked();
        });
    });
});
