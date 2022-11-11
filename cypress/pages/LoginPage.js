class LoginPage {
  elements = {
    usernameTextBox: () => cy.get("#mat-input-0"),
    passwordTextBox: () => cy.get("#mat-input-1"),
    loginButton: () => cy.get(".mat-focus-indicator"),
  };

  loginAdmin = (username, password) => {
    cy.get("#mat-input-0")
      .should("be.visible")
      .and("have.class", "mat-input-element");
    this.elements.usernameTextBox().type(username);
    cy.get("#mat-input-1")
      .should("be.visible")
      .and("have.class", "mat-input-element");
    this.elements.passwordTextBox().type(password);
    cy.contains(".mat-focus-indicator", "LOGIN");
    this.elements.loginButton().click();
    cy.get("app-map-tab").should("be.visible");
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
