const inventoryPage = require('../pageobjects/inventoryPage');
const loginPage = require('../pageobjects/loginPage');

Given("User is logged into {string} as {string}", async function (url,role) {
    await browser.reloadSession()
    await browser.maximizeWindow();
    await loginPage.goto(url)
    switch(role){
        case "admin":
            await loginPage.login("standard_user", "secret_sauce")
            break
    }    
});

When('Sorts the inventory in {string} order of {string}', async (order,by) => {
    await inventoryPage.sortBy(by, order)
    await browser.pause(1000)
});

Then('First item should be {string}', async (item) => {
    console.log("THe item to be checked is " + item)
    expect(await inventoryPage.firstElementName()).toEqual(item)//"Sauce Labs Onesie")
})

When('Adds {string} to cart', async (item_selected) => {
    console.log("item to be added " + item_selected)
    console.log("item to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be addeditem to be added " + item_selected)
    let item = await inventoryPage.getItem(item_selected)//)
    await item.click();
    await inventoryPage.addToCart()
    await inventoryPage.navigateToCart()
})

Then('Total items in cart will be {int}', async (count) => {
    console.log("item count will be  " + count)
    console.log(`item count will be  count
    
    
but sadnas kaksdna d
    asdkjaskjjkasf
    asjjsf
    sdfjkkjsd
    asfjklsksfd
    sdgkslkgkgkl`)
    let itemCount = (await $$(".inventory_item_name")).length
    expect(itemCount).toBe(count, `Expected total inventory item to be 1 but got ${itemCount}`)
})