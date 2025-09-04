const { test, expect } = require('@playwright/test');
const { allure } = require('allure-playwright');

test('Проверка клика и заполнения поля', async({page}) => {
    test.setTimeout(60000); // 60 seconds timeout
    
    // Allure аннотации
    await allure.description('Тест проверяет возможность заполнения полей и клика по кнопке входа');
    await allure.severity('critical');
    await allure.epic('UI Tests');
    await allure.feature('Form Filling');
    await allure.story('Sample App Login');
    await allure.tag('ui', 'login', 'form');
    
    await allure.step('Открыть страницу Sample App', async () => {
        await page.goto('http://uitestingplayground.com/sampleapp');
    });

    await allure.step('Заполнить форму авторизации', async () => {
        const login = 'TestLogin';
        await page.locator('[name="UserName"]').fill(login);
        await page.locator('[name="Password"]').fill('pwd');
    });

    await allure.step('Нажать кнопку входа', async () => {
        await page.locator('text=Log In').click();
    });
});