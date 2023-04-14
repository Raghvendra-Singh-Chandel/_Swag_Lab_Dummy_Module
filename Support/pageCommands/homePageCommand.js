const{homePage}    = require('../PageMethod/homePage')
const {loginPage}  = require('../PageMethod/loginPageMethod')



exports.homeModule = class homeModule{

    constructor(page)
    {
        this.page = page
        this.home = new homePage(this.page)
        this.login = new loginPage(this.page)
    }

    async getproductInCart(){
        await this.home.getProductInCart()
        await this.home.getCartNotchNumber()
        await this.home.getProductInCartPane()
    }
}