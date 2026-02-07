import { InventoryPage } from "./InventoryPage";

export class CartPage{

    #page;
    #productName;
    #removeButton;
    #continueShopping;
    #checkoutButton;
constructor(page)
{
    this.#page=page;
    this.#productName=page.locator(".inventory_item_name");
    this.#removeButton=page.locator("button[id*='remove']");
    this.#continueShopping=page.locator("button[id='continue-shopping']");
    this.#checkoutButton=page.locator("button[id='checkout']");
    
}

async getProductName()
{
    return await this.#productName;
}

async doRemoveProduct()
{
    await this.#removeButton.click();
}

async doContinueShopping()
{
    await this.#continueShopping.click();
    return new InventoryPage(page);
}

async doCheckout()
{
    await this.#checkoutButton.click();
    return new CheckoutPage(page);
}
}