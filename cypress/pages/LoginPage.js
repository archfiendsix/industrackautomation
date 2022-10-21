class LoginPage {
  elements = {
    usernameTextBox: () => cy.get("#mat-input-0"),
    passwordTextBox: () => cy.get("#mat-input-1"),
    loginButton: () => cy.get(".mat-focus-indicator"),
  };

  loginAdmin = (username, password) => {
    this.elements.usernameTextBox().type(username);
    this.elements.passwordTextBox().type(password);
    this.elements.loginButton().click();
    cy.get(".navbar-brand").should("be.visible");
    const navs = [
      "Map",
      "Customer",
      "Estimates",
      "Schedule",
      "Invoices",
      "Timesheet",
      "SnowTrack",
      "P.O",
      "Reports",
    ];
    navs.forEach((n) => {
      cy.get(".nav.navbar-nav").contains(n);
    });
  };
}

module.exports = new LoginPage();
