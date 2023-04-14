
const base = require('@playwright/test')
const {loginModule} = require('../pageCommands/loginPageCommand')
// const {loginPage} = require('../PageMethod/loginPageMethod')
// const {homePage} = require('../PageMethod/homePage')
const {homeModule}  = require('../pageCommands/homePageCommand')


exports.test = base.test.extend({
    login: async({page},use)=> {
        const login = new loginModule(page)
        await use(login)
    },
    home: async ({page},use)=> {
        const home = new homeModule(page)
        await use(home)
    }
})

