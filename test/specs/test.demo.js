describe('Test Saucedemo', () => {
    it('Test 1 - login Successfully', async () => {
        await browser.url("https://www.saucedemo.com/")

        const usernameTextbox = await browser.$("#user-name")
        const passwordTextbox = await browser.$("#password")
        const loginButton = await browser.$('//input[@type="submit"]')
        const addCart = await browser.$('//button[@class="btn btn_primary btn_small btn_inventory "]')
       
        await usernameTextbox.addValue("standard_user")
        await passwordTextbox.addValue("secret_sauce")
        await loginButton.click()
        await addCart.click()
       
        // await browser.$("#user-name").addValue("Karel")
        // await browser.$("#password").addValue("password")
        
        await browser.pause(3000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(browser).toHaveTitle('Swag Labs')

        // await expect(browser).toHaveAttribute('https://www.saucedemo.com/cart.html')


        // assert.equal(await browser.getUrl(), 'https://www.saucedemo.com/inventory.html')
        
    });        
});