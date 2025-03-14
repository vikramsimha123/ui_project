const { test, expect } = require('@playwright/test');

test("open app & enter credentials ",async({page}) =>{

await page.goto("https://demowebshop.tricentis.com/login");
await expect(page).toHaveTitle('Demo Web Shop. Login');
await page.getByRole('link',{name:'Log in'}).click();
await page.locator('#Email').fill('tetfyu')
await page.locator('#Password').fill('vikram')
await page.locator('#RememberMe').check()
await page.getByRole('').press('Backspace')

await page.waitForTimeout(4000)

})