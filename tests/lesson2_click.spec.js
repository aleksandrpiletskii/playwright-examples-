const { test, expect } = require('@playwright/test');
const { allure } = require('allure-playwright');

test('click test', async ({ page }) => {
    await allure.description('Тест проверяет клик по кнопке и изменение ее стиля');
    await allure.severity('normal');
    await allure.epic('UI Tests');
    await allure.feature('Button Click');
    await allure.story('Bad Button Click');
    await allure.tag('ui', 'click', 'button');
    
    await allure.step('Открыть страницу Click', async () => {
        await page.goto('http://uitestingplayground.com/click');
    });
    
    await allure.step('Кликнуть по кнопке', async () => {
        await page.locator("#badButton").click();
    });
    
    await allure.step('Проверить изменение класса кнопки', async () => {
        await expect(await page.locator("#badButton").getAttribute("class")).toMatch(/btn-success/);
    });
});

test('checkbox and radio', async({page}) => {
    await allure.description('Тест проверяет работу с checkbox и radio элементами');
    await allure.severity('normal');
    await allure.epic('UI Tests');
    await allure.feature('Form Elements');
    await allure.story('Checkbox and Radio');
    await allure.tag('ui', 'checkbox', 'radio');
    
    await allure.step('Открыть страницу с checkbox и radio', async () => {
        await page.goto('https://jqueryui.com/resources/demos/checkboxradio/default.html');
    });
    
    await allure.step('Отметить элементы', async () => {
        await page.locator("[for=radio-1]").click();
        await page.locator("[for=checkbox-4]").click();
        await page.locator("[for=checkbox-nested-3]").click();
        await page.locator("[for=checkbox-nested-4]").click();
    });

    await allure.step('Проверить состояние элементов', async () => {
        await expect(page.locator("[for=radio-1]")).toHaveClass(/ui-checkboxradio-checked/);
        await expect(page.locator("[for=checkbox-4]")).toHaveClass(/ui-checkboxradio-checked/);
        await expect(page.locator("[for=checkbox-nested-3]")).toHaveClass(/ui-checkboxradio-checked/);
        await expect(page.locator("[for=checkbox-nested-4]")).toHaveClass(/ui-checkboxradio-checked/);
    });
});
