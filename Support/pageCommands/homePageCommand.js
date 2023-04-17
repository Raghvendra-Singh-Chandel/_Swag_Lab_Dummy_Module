const{homePage}    = require('../PageMethod/homePage')
const {loginPage}  = require('../PageMethod/loginPageMethod')

/**
 * Create a custom command/function for Home Page 
 */

exports.homeModule = class homeModule{

    constructor(page)
    {
        this.page = page
        this.home = new homePage(this.page)
        this.login = new loginPage(this.page)
    }
/**
 * call the home page function
 */
    async getproductInCart(){
        await this.home.getProductInCart()
        await this.home.getCartNotchNumber()
        await this.home.getProductInCartPane()
    }
}