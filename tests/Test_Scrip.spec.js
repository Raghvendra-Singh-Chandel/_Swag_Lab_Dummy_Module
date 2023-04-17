
const {test} = require('../Support/Fixture/Page_Object_Fixture')


test.describe('Login functionality',()=> {

test('perform testing on Dummy_Module @mobileView',async({login})=> {
    
    await test.step('Verify the functionality of the Login Module with Invalid Credentials',async()=> {
    await login.loginContainerSnap()
    await login.loginWithInvalidCredential()
        
    })

    await test.step('Verify the functionality of the Login Module',async()=> {
        await login.loginWithValidCredential('problem_user','secret_sauce')
    })
})

})

test.describe('Login functionality',()=> {

    test('perform testing on Dummy_Module @desktopView',async({login})=> {
        
        await test.step('Verify the functionality of the Login Module with Invalid Credentials',async()=> {
 
        await login.loginWithInvalidCredential()
            
        })
    
        await test.step('Verify the functionality of the Login Module',async()=> {
            await login.loginWithValidCredential('problem_user','secret_sauce')
        })
    })
    
    })

test.describe('Login functionality',()=> {

    test('perform testing on Dummy_Module @tabView',async({login})=> {
            
            await test.step('Verify the functionality of the Login Module with Invalid Credentials',async()=> {
            
            await login.loginWithInvalidCredential()
                
            })
        
            await test.step('Verify the functionality of the Login Module',async()=> {
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