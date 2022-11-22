import LoginPage from "../../pages/LoginPage";
import Dashboard from "../../pages/Dashboard";
import AddCustomerPage from "../../pages/AddCustomerPage";
import CustomerPage from "../../pages/CustomerPage";
import { InventoryListPage } from "../../pages/settings/inventory";
import AddNewInventoryPage from "../../pages/AddNewInventoryPage";
import EstimatesPage from "../../pages/EstimatesPage";
import InvoiceOverviewPage from "../../pages/InvoiceOverviewPage";
import { v4 as uuidv4 } from "uuid";
import InvoicesPage from "../../pages/InvoicesPage";

describe("New Estimate module", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    console.log(err);
    return false;
  });

  beforeEach(() => {
    cy.viewport(1250, 1024);
    // cy.intercept("**/api/**").as("api");
    cy.visit("/login");
    LoginPage.loginAdmin(Cypress.env('login_username'), Cypress.env('login_password'));
    cy.get("body").contains("Estimates");
    // cy.wait("@api");

    // Dashboard.preventNotificationCard();
  });
  context("test", () => {
    it("New customer, New Inventory, New Estimate e2e", () => {
      /*new customer */
      Dashboard.clickCustomerTab();
      Dashboard.clickAddCustomerButton();
      const customerInfo = {
        validateAddress: true,
      };
      cy.intercept("**/api/**").as("api");
      AddCustomerPage.fillData(customerInfo);
      cy.wait("@api");
      AddCustomerPage.elements.saveButton().should("not.be.disabled");
      AddCustomerPage.elements.saveButton().click();

      // AddCustomerPage.confirmValidityYes()

      /*new inventory */
      cy.wait("@api");

      InventoryListPage.gotoAddNewInventory();
      const inventoryInfo = {
        name: "Add Inventory",
        useSerialNumbers: false,
        nonTaxable: true,
      };
      AddNewInventoryPage.fillData(inventoryInfo);
      AddNewInventoryPage.clickSaveButton();
      AddNewInventoryPage.checkSaveSuccess();

      /*newEstimate*/
      Dashboard.clickEstimatesTab();
      EstimatesPage.clickAddNew();
      cy.wait("@api");
      EstimatesPage.selectCustomer("Genius Game Inc.");
      EstimatesPage.inventorySelect("Inventory Item 1");
      EstimatesPage.saveAndCloseEstimate();
    });

    it("Should have status Won", () => {
      cy.intercept("**/api/**").as("api");
      Dashboard.clickEstimatesTab();
      // Dashboard.preventNotificationCard();
      EstimatesPage.clickAddNew();
      cy.wait("@api");
      EstimatesPage.selectCustomer("Genius Game Inc.");
      EstimatesPage.inventorySelect("Inventory Item 1");
      EstimatesPage.saveEstimate();
      EstimatesPage.markAsWon();
      EstimatesPage.confirmYes();
      EstimatesPage.checkEstimateStatus("Won");
    });

    it("Should have status Lost", () => {
      cy.intercept("**/api/**").as("api");
      Dashboard.clickEstimatesTab();
      // Dashboard.preventNotificationCard();
      EstimatesPage.clickAddNew();
      cy.wait("@api");
      EstimatesPage.selectCustomer("Genius Game Inc.");
      EstimatesPage.inventorySelect("Inventory Item 1");

      EstimatesPage.saveEstimate();
      EstimatesPage.markAslost();
      // cy.wait(2500);
      EstimatesPage.confirmYes();
      EstimatesPage.checkEstimateStatus("Lost");
    });

    it("Should proceed to Add New Job Screen after converting to Job", () => {
      Dashboard.clickEstimatesTab();
      // Dashboard.preventNotificationCard();
      EstimatesPage.clickAddNew();
      EstimatesPage.selectCustomer("Genius Game Inc.");
      EstimatesPage.inventorySelect("Inventory Item 1");
      EstimatesPage.saveEstimate();
      EstimatesPage.convertToJob();
      EstimatesPage.confirmYes();
      EstimatesPage.checkAddNewJobModalTitle();
    });

    it("Should successfully convert estimate to invoice", () => {
      Dashboard.clickEstimatesTab();
      // Dashboard.preventNotificationCard();
      EstimatesPage.clickAddNew();
      EstimatesPage.selectCustomer("Genius Game Inc.");
      EstimatesPage.inventorySelect("Inventory Item 1");
      EstimatesPage.saveEstimate();
      EstimatesPage.convertToInvoice();
      EstimatesPage.confirmYes();
      EstimatesPage.checkConvertedToInvoiceSuccess();
      InvoiceOverviewPage.checkInvoiceStatus("Unpaid");
    });
  });
});
