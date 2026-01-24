class DashboardPage{

    #header;
    #icon;
    #logouLink;
    constructor(page)
    {
        this.page=page;
        this.#header=page.locator("//h6[normalize-space()='Dashboard']");
        this.#icon=page.locator("i.oxd-userdropdown-icon");
        this.#logouLink=page.locator("//li//a[text()='Logout']");
    }


    async getHeading()
    {
        return await this.#header.innerText();
    }
    async doLogout()
    {
        await this.#icon.click();
        await this.#logouLink.click();
        return this.page.title();
    }
}
export {DashboardPage}