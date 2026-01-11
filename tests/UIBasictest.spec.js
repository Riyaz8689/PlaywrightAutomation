const {test,expect} = require('@playwright/test');


test('Browser Context First Playwright Test', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    console.log(await page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
});

test('Page First Playwright Test', async({page})=>{
    await page.goto("https://www.google.com/");

    console.log(await page.title());
    await expect(page).toHaveTitle("Google");


}); 