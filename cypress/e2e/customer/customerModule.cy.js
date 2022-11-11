import LoginPage from "../../pages/LoginPage";
import Dashboard from "../../pages/Dashboard";
import AddCustomerPage from "../../pages/AddCustomerPage";
import CustomerPage from "../../pages/CustomerPage";
import { v4 as uuidv4 } from "uuid";

require("cypress-plugin-tab");

describe("Add Customer", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    console.log(err);
    return false;
  });

  beforeEach(() => {
    cy.viewport(1560, 992);
    cy.visit("/login");
    cy.get("body").contains("Login to Account");
    LoginPage.loginAdmin(Cypress.env('login_username'), Cypress.env('login_password'));
    cy.get("body").contains("Customer");
    // Dashboard.preventNotificationCard()
    Dashboard.clickCustomerTab();
    // cy.visit('/crmTab/list')
    // cy.get("body").contains("Tags");
    CustomerPage.gotoAddCustomerModal();
  });

  before(() => {
    cy.fixture("newCustomer").then(function (data) {
      this.data = data;
    });
  });

  it("Successfully create a customer", () => {
    const rand = uuidv4().substring(0, 5);
    const customerInfo = {
      customerNumber: `CN-${rand}`,
      validateAddress: true,
    };
    AddCustomerPage.fillData(customerInfo);

    // cy.wait(2500)
    AddCustomerPage.elements.saveButton().should("not.be.disabled");

    AddCustomerPage.elements.saveButton().click();
  });

  it("Add Service Location to a newly created Customer - Tax Rate Added to Added Location", () => {
    const rand = uuidv4().substring(0, 5);
    const customerInfo = {
      customerNumber: `CN-${rand}`,
      companyName: "Add service location to this customer",
      validateAddress: true,
    };
    AddCustomerPage.fillData(customerInfo);
    AddCustomerPage.clickSaveButton();
    CustomerPage.clickAddNewServiceLocation();
    const serviceLocationInfo = {
      selectATaxRate: "New Tax",
    };
    CustomerPage.addNewServiceLocationModal.fillServiceLocationData(
      serviceLocationInfo
    );
    CustomerPage.addNewServiceLocationModal.clickSaveButton();
  });
});
