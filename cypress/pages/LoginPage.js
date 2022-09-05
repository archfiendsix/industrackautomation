class LoginPage {

    elements = {
        usernameTextBox: () => cy.get('#mat-input-0'),
        passwordTextBox: () => cy.get('#mat-input-1'),
        loginButton: () => cy.get('.mat-focus-indicator')
    }

    loginAdmin = (username, password) => {
        this.elements.usernameTextBox().type(username)
        this.elements.passwordTextBox().type(password)
        this.elements.loginButton().click()
    }
}

module.exports = new LoginPage();