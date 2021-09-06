module.exports = {

    elements: {
        sort: '[data-test="product_sort_container"]',
        addToCart: '[class="btn btn_primary btn_small btn_inventory"]',
        cart:"#shopping_cart_container",
        items:".inventory_item_name"
    },


    getItem: async function (item) {
        let elem = await $(`[alt="${item}"]`);
        return elem
    },

    addToCart: async function () {
        await (await $(this.elements.addToCart)).click();
    },

    firstElementName: async function () {
        return await (await $$(this.elements.items))[0].getText();
    },

    navigateToCart: async function () {
        await (await $(this.elements.cart)).click();
    },

    sortBy: async function (by, order) {
        switch (`${by}_${order}`) {
            case ("name_asc"):
                await (await $(this.elements.sort)).selectByIndex(0)
                break;
            case ("name_dsc"):
                await (await $(this.elements.sort)).selectByIndex(1)
                break;
            case ("price_asc"):
                await (await $(this.elements.sort)).selectByIndex(2)
                break;
            case ("price_dsc"):
                await (await $(this.elements.sort)).selectByIndex(3)
                break;
        }
    }
}