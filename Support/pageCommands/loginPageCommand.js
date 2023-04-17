const{loginPage} = require('../PageMethod/loginPageMethod')



    /**
     * Create a custom command/function for Login Page
     */

exports.loginModule    =    class loginModule {

    constructor(page){
        this.page              =               page
        this.login             =               new loginPage(this.page)

    }

    
    /**
     * call the home page function
     */

    async loginWithInvalidCredential() {
        await this.login.landingInToLoginPage()
        await this.login.loginInToApplicationWithInValidCredentials()
    }
    async loginWithValidCredential(username,password) {
        await this.login.landingInToLoginPage()
        await this.login.loginInToApplicationWithValidCredentials(username,password)
    }
    async loginContainerSnap() {
        await this.login.landingInToLoginPage(this.url)
        await this.login.loginPageImageCapture()
    }
}