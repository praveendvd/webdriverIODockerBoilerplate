module.exports = {

    elements: {
        usernameField: "#user-name",
        passwordField: "#password",
        loginButton: "#login-button"    
    },

    goto: async function (url) {
        await browser.url(url)
    },

    login: async function (username, password) {
        await (await $(this.elements.usernameField)).setValue(username);
        await (await $(this.elements.passwordField)).setValue(password);
        await (await $(this.elements.loginButton)).click();
    }
    
}