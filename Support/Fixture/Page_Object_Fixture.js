
const base = require('@playwright/test')
const {loginPage} = require('../PageMethod/loginPageMethod')
const {homePage} = require('../PageMethod/homePage')



exports.test = base.test.extend({
    login: async({page},use)=> {
        const login = new loginPage(page)
        await use(login)
    },
    home: async ({page},use)=> {
        const home = new homePage(page)
        await use(home)
    }
})