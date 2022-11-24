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
      customerNumber: `CN${rand}`,
      validateAddress: true,
    };
    AddCustomerPage.fillData(customerInfo);

    // cy.wait(2500)
    AddCustomerPage.elements
      .saveButton()
      .should("not.be.disabled");

    AddCustomerPage.elements.saveButton().click();
  });

  it("Should disable save if required fields are not filled", () => {
    const customerInfo = {
      validateAddress: true,
    };
    AddCustomerPage.fillData(customerInfo);

    AddCustomerPage.elements.streetAddressTextBox().clear();
    AddCustomerPage.elements.cityTextBox().clear();
    AddCustomerPage.elements.stateTextBox().clear();
    AddCustomerPage.elements.postCodeTextBox().clear();

    // cy.wait(2500);
    AddCustomerPage.elements.sameAsCompanyCheckbox().click();
    AddCustomerPage.elements
      .saveButton()
      .click({ force: true })
      .should("be.disabled");

    /* Check textboxes to be in red(invalid entries) */
    AddCustomerPage.elements
      .streetAddressTextBox()
      .should("have.class", "ng-invalid");
    AddCustomerPage.elements.cityTextBox().should("have.class", "ng-invalid");
    AddCustomerPage.elements.stateTextBox().should("have.class", "ng-invalid");
    AddCustomerPage.elements
      .postCodeTextBox()
      .should("have.class", "ng-invalid");
  });




  it("Shows warning when saving unvalidated address", () => {
    const customerInfo = {
      validateAddress: false,
    };
    AddCustomerPage.fillData(customerInfo);

    AddCustomerPage.elements
      .saveButton()
      .should("not.be.disabled");

    AddCustomerPage.elements.saveButton().click();

    AddCustomerPage.checkWarningDialog(
      "This address book doesn't have valid coordinates and may not be visible in the mobile app. Do you want to save without validating the address?"
    );
  });

  it("Disable save if email is invalid", () => {
    const customerInfo = {
      email: "dina.schill@",
      validateAddress: true,
    };
    AddCustomerPage.fillData(customerInfo);

    AddCustomerPage.checkEmailErrorMessage("Incorrect email");
    // AddCustomerPage.clickSaveButton()
    AddCustomerPage.checkSaveButtonDisabled();
  });

  it("Add Service Location to a newly created Customer - Added Location has no selected tax rate", () => {
    const rand = uuidv4().substring(0, 5);
    const customerInfo = {
      customerNumber: `CN${rand}`,
      companyName: "Add service location to this customer",
      validateAddress: true,
    };
    AddCustomerPage.fillData(customerInfo);
    AddCustomerPage.clickSaveButton();
    // AddCustomerPage.confirmValidityYes()
    CustomerPage.clickAddNewServiceLocation();
    const serviceLocationInfo = {};
    CustomerPage.addNewServiceLocationModal.fillServiceLocationData(
      serviceLocationInfo
    );
    CustomerPage.addNewServiceLocationModal.clickSaveButton();
    // cy.wait(5000)
    // Dashboard.clickCustomerTab()
    // CustomerPage.searchCustomer(customerInfo.companyName) //--> Have to refine this script
  });

});
