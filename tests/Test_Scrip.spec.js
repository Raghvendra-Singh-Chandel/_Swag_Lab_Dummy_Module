const {test} = require('../Support/Fixture/Page_Object_Fixture')

test('perform testing on Dummy_Module @mobileView',async({login})=> {
    await test.step('Verify the functionality of the Login Module with Invalid Credentials',async()=> {
        await login.landingInToLoginPage()
        await login.loginInToApplicationWithInValidCredentials()
    })

    await test.step('Verify the functionality of the Login Module',async()=> {
        await login.landingInToLoginPage()
        await login.loginInToApplicationWithValidCredentials('problem_user','secret_sauce')
    })
})

test('perform testing on Dummy_Module @tabView',async({login})=> {
    await test.step('Verify the functionality of the Login Module with Invalid Credentials',async()=> {
        await login.landingInToLoginPage()
        await login.loginInToApplicationWithInValidCredentials()
    })

    await test.step('Verify the functionality of the Login Module',async()=> {
        await login.landingInToLoginPage()
        await login.loginInToApplicationWithValidCredentials('problem_user','secret_sauce')
    })
})
test('perform testing on Dummy_Module @desktopView',async({login})=> {

    await test.step('Verify the functionality of the Login Module with Invalid Credentials',async()=> {
        await login.landingInToLoginPage()
        await login.loginInToApplicationWithInValidCredentials()
    })

    await test.step('Verify the functionality of the Login Module with valid credentials',async()=> {
        await login.landingInToLoginPage()
        await login.loginInToApplicationWithValidCredentials('problem_user','secret_sauce')
        
    })
    
})

test('Perform end to end testing to create an order @desktopView',async({login,home})=> {
    await test.step('Verify the functionality of the add to cart button',async()=> {
        await login.landingInToLoginPage()
        await login.loginInToApplicationWithValidCredentials('problem_user','secret_sauce')
        await home.getProductInCart()
        await home.getCartNotchNumber()
        await home.getProductInCartPane()
    })
})

