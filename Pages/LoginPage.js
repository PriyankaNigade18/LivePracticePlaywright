

class LoginPage
{
    //pageLocators

    #username;
    #password;
    #loginButton;
    #warnigMsg;

    //constructor
    constructor(page)
    {
        this.page=page;
        this.#username=page.getByPlaceholder("Username");
        this.#password=page.getByPlaceholder("Password");
        this.#loginButton=page.locator("//button[@type='submit']");
        this.#warnigMsg=page.locator("//p[text()='Invalid credentials']");

    }

    //3actions
    async getLoginPage()
    {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }

    async doLogin(un,psw)
    {
        await this.#username.fill(un);
        await this.#password.fill(psw);
        await this.#loginButton.click();
        
    }

    async getInvalidLoginMessage()
    {
        return await this.#warnigMsg.innerText();
    }




}


export{LoginPage}