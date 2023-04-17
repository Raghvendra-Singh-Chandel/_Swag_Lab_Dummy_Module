
const {test} = require('../Support/Fixture/Page_Object_Fixture')

/**
 * Verify the login functionality with valid and Invalid credentials in Mobile View
 */

test.describe('Login functionality',()=> {

test('Perform login functionality in @mobileView',async({login})=> {
    
    await test.step('Verify the functionality of the Login Module with Invalid Credentials',async()=> {
    
    await login.loginWithInvalidCredential()
        
    })

    await test.step('Verify the functionality of the Login Module',async()=> {
        await login.loginWithValidCredential('problem_user','secret_sauce')
    })
})

/**
 * Verify the login container page image in Mobile View
 */

test('verify login image @mobileView',async({login})=> {
    await login.loginContainerSnap()

})

})

/**
 * Verify the login functionality with valid and Invalid credentials in Desktop View
 */

test.describe('Login functionality',()=> {

    test('Perform login functionality in @desktopView',async({login})=> {
        
        await test.step('Verify the functionality of the Login Module with Invalid Credentials',async()=> {
 
        await login.loginWithInvalidCredential()
            
        })
    
        await test.step('Verify the functionality of the Login Module with valid credentials',async()=> {
            await login.loginWithValidCredential('problem_user','secret_sauce')
        })
    })
    
    })

/**
 * Verify the login functionality with valid and Invalid credentials in Tab View
 */

test.describe('Login functionality',()=> {

    test('Perform login functionality in @tabView',async({login})=> {
            
            await test.step('Verify the functionality of the Login Module with Invalid Credentials',async()=> {
            
            await login.loginWithInvalidCredential()
                
            })
        
            await test.step('Verify the functionality of the Login Module with valid credentials',async()=> {
                await login.loginWithValidCredential('problem_user','secret_sauce')
            })
        })
        
        })    

    /**
     * Add product in to the cart and checkout
     */


// test.describe('order producr',()=> {

//     test.beforeEach('login to application',async({login})=> {
//         await login.loginWithValidCredential('problem_user','secret_sauce')
//     })

//     test('Perform end to end testing to create an order @desktopView',async({home})=> {
        
//         await home.getproductInCart()    
//     })


// })