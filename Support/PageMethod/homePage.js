const {expect}  = require('@playwright/test')

exports.homePage = class homePage {
    constructor(page){
        this.page=page
        this.addToCart = page.locator('.btn_primary')
        this.item = page.locator('.inventory_item_name').first()
        this.cartIcon = page.locator('.shopping_cart_container')
        this.cartCount = page.locator('.shopping_cart_badge')
        this.cartList = page.locator('.cart_list .inventory_item_name')

    }

    /**
     * Create a function for the every test step in Home Page
     */
    
    async getProductInCart() {
        await this.addToCart.nth(0).click()
        
    }
    async getCartNotchNumber() {
        await expect (this.cartCount).toHaveText('1')
    }
    async getProductInCartPane() {
        await this.cartIcon.click()
    }
}