/// <reference types="cypress" />

class Dashboard {
  elements = {
    industrackBrand: () => cy.get(".navbar-header a.navbar-brand"),
    customerTab: () =>
      cy.get('.navbar-nav > :nth-child(2) > a[href="/crmTab"]'),
    addCustomerButton: () =>
      cy.get('button[data-target="#modalAddNewCustomer"]'),
    settingsButton: () => cy.get('a[href="/settingsTab"]'),
    estimatesTab: () =>
      cy.get('.nav.navbar-nav a[href="/estimatesTab"]').first(),
    timesheetTab: () => cy.get('.nav.navbar-nav a[href="/timesheetTab"]'),
    scheduleTab: () => cy.get('.nav.navbar-nav a[href="/schedulingTab"]'),
    invoicesTab: () => cy.get('.nav.navbar-nav a[href="/invoicesTab"]'),
    purchaseOrderTab: () =>
      cy.get('.nav.navbar-nav a[href="/purchaseOrderTab"]'),
    companySettings: () =>
      cy.get("ul#side-menu li a").contains("Company Settings"),
    schedulingTab: () => cy.get("ul#side-menu li a").contains("Scheduling"),
    taxtAndTerms: () =>
      cy
        .get("ul#side-menu li ul.nav-second-level li a")
        .contains("Tax & Terms"),
    taskTemplates: () =>
      cy
        .get("ul#side-menu li ul.nav-second-level li a")
        .contains("Task Templates"),
    notification: {
      icon: () => cy.get('a[title="Reminders"]'),
      card: () =>
        cy.get('a[title="Reminders"]+ul.dropdown-menu.dropdown-reminders'),
    },
    user: {
      avatarButton: () =>
        cy.get(".nav.navbar-top-links.navbar-right li:last-child() a"),
      profileEmail: () =>
        cy.get(
          '.nav.navbar-top-links.navbar-right li:last-child() .userinfobox a[title="Profile"]'
        ),
      logOut: () =>
        cy.get(
          '.nav.navbar-top-links.navbar-right li:last-child() .userinfobox a[title="LogOut"]'
        ),
    },
  };

  checkLoadPage = () => {
    cy.intercept("https://m.stripe.com/**").as("page");
    cy.get("body").should("be.visible");
    cy.wait("@page");
  };

  clickCustomerTab = () => {
    this.checkLoadPage();
    this.elements.customerTab().click();
  };

  clickAddCustomerButton = () => {
    this.checkLoadPage();
    this.elements.addCustomerButton().click();
  };

  clickSettings = () => {
    // this.elements.settingsButton().first().click({ force: true })
    // this.elements.settingsButton().first().click({ force: true })
    this.checkLoadPage();
    cy.visit("/settingsTab");
    cy.wait(6000);
  };

  clickEstimatesTab = () => {
    this.checkLoadPage();
    this.elements.estimatesTab().should("be.visible").dblclick();
  };
  clickTimesheetTab = () => {
    this.checkLoadPage();
    this.elements.timesheetTab().should("be.visible").dblclick();
  };
  clickPurchaseOrderTab = () => {
    this.checkLoadPage();
    this.elements.purchaseOrderTab().should("be.visible").dblclick();
  };

  clickScheduleTab = () => {
    this.checkLoadPage();
    this.elements.scheduleTab().should("be.visible").dblclick();
  };

  clickSchedulingTab = () => {
    this.checkLoadPage();
    this.elements.schedulingTab().should("be.visible").dblclick();
  };

  clickInvoicesTab = () => {
    this.checkLoadPage();
    this.elements.invoicesTab().should("be.visible").dblclick();
  };
  clickTaskTemplatesTab = () => {
    this.checkLoadPage();
    this.elements.taskTemplates().should("be.visible").dblclick();
  };

  gotoTaxAndTermsPage = () => {
    this.checkLoadPage();
    // this.clickSettings()
    cy.visit("/settingsTab");
    this.elements.companySettings().click();
    this.elements.taxtAndTerms().click();
  };

  gotoJobTemplates = () => {
    this.checkLoadPage();
    this.clickSettings();
    this.elements.scheduleTab().dblclick();
  };

  preventNotificationCard = () => {
    // cy.wait(2000);
    cy.intercept(
      "https://onetrackwebapiprod.azurewebsites.net/api/Reminders/GetNumberOfReminders**"
    ).as("reminders");
    // cy.wait("@reminders");

    cy.wait("@reminders").then(($body) => {
      // @ts-ignore
      cy.get(".navbar-collapse").first().click("topRight");
      if (this.elements.notification.card().first().length > 0) {
        cy.get(".navbar-collapse").first().click("topRight");
        this.elements.notification.card().then(($el) => {
          if ($el.is(":visible")) {
            cy.get(".navbar-collapse").first().click("topRight");
          } else {
            cy.log("Notification card not present");
          }
        });
      } else {
        // assert.isOk('everything', 'everything is OK');
      }
    });
  };
}

module.exports = new Dashboard();
