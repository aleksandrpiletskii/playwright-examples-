const { test, expect } = require('@playwright/test');
const { allure } = require('allure-playwright');

test('Проверка press', async({page}) => {
    test.setTimeout(60000); // 60 seconds timeout
    
    // Allure аннотации
    await allure.description('Тест проверяет ввод текста в поле и обновление текста кнопки');
    await allure.severity('normal');
    await allure.epic('UI Tests');
    await allure.feature('Text Input');
    await allure.story('Button Text Update');
    await allure.tag('ui', 'input', 'text');
    
    await allure.step('Открыть страницу Text Input', async () => {
        await page.goto('http://uitestingplayground.com/textinput');
    });

    await allure.step('Ввести текст в поле', async () => {
        const text = 'Abc';
        await page.locator('#newButtonName').fill(text + text + text);
    });

    await allure.step('Нажать кнопку для обновления текста', async () => {
        await page.locator('#updatingButton').click();
    });

    await allure.step('Проверить, что текст кнопки обновлён', async () => {
        await expect(page.locator('#updatingButton')).toHaveText('AbcAbcAbc');
    });
});
