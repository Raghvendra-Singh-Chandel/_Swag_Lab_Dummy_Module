const {expect} = require('@playwright/test')
const { updateSnapshots } = require('../../playwright.config')

exports.loginPage  = class loginPage {

    constructor(page){
        this.page = page
        this.username = page.locator('#user-name')
        this.password = page.locator('#password')
        this.loginBtn = page.locator('.submit-button')
        this.error = page.locator('.error-message-container')
        this.loginContainerImage = page.locator('.form_column')
    }

    async landingInToLoginPage() {
        await this.page.goto('https://www.saucedemo.com/')
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

    async loginPageImageCapture() {
        const screenshot = await this.loginContainerImage.screenshot()
        expect(screenshot).toMatchSnapshot('loginImage.png',{maxDiffPixelRatio:'0.03'})
        updateSnapshots
        
        

    }

}