const{loginPage} = require('../PageMethod/loginPageMethod')




exports.loginModule    =    class loginModule {

    constructor(page){
        this.page              =               page
        this.login             =               new loginPage(this.page)

    }

    async loginWithInvalidCredential() {
        await this.login.landingInToLoginPage()
        await this.login.loginInToApplicationWithInValidCredentials()
    }
    async loginWithValidCredential(username,password) {
        await this.login.landingInToLoginPage()
        await this.login.loginInToApplicationWithValidCredentials(username,password)
    }
}