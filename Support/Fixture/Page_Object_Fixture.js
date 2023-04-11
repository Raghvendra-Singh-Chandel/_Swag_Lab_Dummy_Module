
const base = require('@playwright/test')
const {loginPage} = require('../PageMethod/loginPageMethod')




exports.test = base.test.extend({
    login: async({page},use)=> {
        const login = new loginPage(page)
        await use(login)
    },
})