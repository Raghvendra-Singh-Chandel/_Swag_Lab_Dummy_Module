const {expect} = require('@playwright/test')

exports.loginPage  = class loginPage {

    constructor(page){
        this.page = page
        this.url = 'https://www.saucedemo.com/'
        this.username = page.locator('#user-name')
        this.password = page.locator('#password')
        this.loginBtn = page.locator('.submit-button')
        this.error = page.locator('.error-message-container')
    }

    async landingInToLoginPage() {
        await this.page.goto(this.url)
    }

    async loginInToApplicationWithValidCredentials(username,password) {
        await this.username.type(username)
        await this.password.type(password)
        const loginButton = await this.loginBtn
        expect(loginButton).toBeEnabled
        await expect (loginButton).toHaveText('Login')
        await expect(loginButton).toHaveCSS('background-color','rgb(61, 220, 145)')
        await loginButton.click()
    }

    async loginInToApplicationWithInValidCredentials(){
        await this.username.type('TestQA')
        await this.password.type('Test')
        const loginButton = await this.loginBtn
        expect(loginButton).toBeEnabled
        await expect (loginButton).toHaveText('Login')
        await expect(loginButton).toHaveCSS('background-color','rgb(61, 220, 145)')
        await loginButton.click()
        await expect(this.error.locator('h3')).toHaveText('Epic sadface: Username and password do not match any user in this service')
        await expect(this.error).toHaveCSS('background-color','rgb(226, 35, 26)')
    
    }

}