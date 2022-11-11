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
    cy.viewport(1250, 1024)
    // cy.intercept("**/api/**").as("api");
    cy.visit("/login");
    LoginPage.loginAdmin(Cypress.env('login_username'), Cypress.env('login_password'));
    cy.get("body").contains("Estimates");
    // cy.wait("@api");

    // Dashboard.preventNotificationCard();
  });

  // Script that creates 1 new customer, 1 new inventory, then creates an estimate that contains the new inventory and customer
  // New customer, with 1 service location, address is being validated, no tags, no discounts or taxes, no service agreements or subscriptions, no equipment, notes, geofences, reminders.
  

  it("Should change Customer", () => {
    Dashboard.clickEstimatesTab();
    EstimatesPage.clickAddNew();
    EstimatesPage.selectCustomer("Genius Giant Game Inc.");
    EstimatesPage.inventorySelect("Inventory Item 1");
    EstimatesPage.saveEstimate();
    EstimatesPage.changeCustomer("Change to this customer");
    EstimatesPage.saveEstimate();
    EstimatesPage.checkBillToCustomerName("Change to this customer");
  });

  /* Strangely doesnt work on local - Skipped because of error in iframe */
  it("Should proceed to Estimate preview", () => {
    Dashboard.clickEstimatesTab();
    // Dashboard.preventNotificationCard();
    EstimatesPage.clickAddNew();
    EstimatesPage.selectCustomer("Genius Giant Game Inc.");
    EstimatesPage.inventorySelect("Inventory Item 1");
    EstimatesPage.saveEstimate();
    EstimatesPage.previewEstimate();
    EstimatesPage.checkEstimatePreview(); /* Add more Preview verifications in this method */
  });

  // /* Skipped because of a changed flow */
  // it.skip("Should send estimate as email", () => {
  //   Dashboard.clickEstimatesTab();
  //   // Dashboard.preventNotificationCard();
  //   EstimatesPage.clickAddNew();
  //   cy.wait(4000);
  //   EstimatesPage.selectCustomer("Genius Giant Game Inc.");
  //   EstimatesPage.inventorySelect("Inventory Item 1");
  //   EstimatesPage.saveEstimate();
  //   cy.wait(4000);
  //   EstimatesPage.sendToEmail();
  // });

  /* Have to refine formulas */
  // it.skip("Should have correct Row total upon adding discount", () => {
  //   Dashboard.clickEstimatesTab();
  //   // Dashboard.preventNotificationCard();
  //   EstimatesPage.clickAddNew();
  //   cy.wait(4000);
  //   EstimatesPage.selectCustomer("Genius Giant Game Inc.");
  //   EstimatesPage.inventorySelect("Air Filter");
  //   cy.wait(4000);
  //   EstimatesPage.inventorySelect("Inventory Item 1");
  //   cy.wait(4000);
  //   EstimatesPage.inventorySelect("Gaming Chair");
  //   cy.wait(4000);

  //   EstimatesPage.addDiscountInRow(0, 30, "%", 3);
  //   EstimatesPage.checkInvoiceSubtotal();
  //   EstimatesPage.addDiscountInRow(0, 25, "$", 3);
  //   EstimatesPage.checkInvoiceSubtotal();
  //   EstimatesPage.saveEstimate();
  //   cy.wait(4000);

  //   EstimatesPage.checkRowsTotal();
  // });

  /* have to refine calculation */
  // it.skip("Should change input values and have correct calculations after save", () => {
  //   Dashboard.clickEstimatesTab();
  //   // cy.visit('/estimatesTab/list')
  //   // Dashboard.preventNotificationCard();
  //   EstimatesPage.clickAddNew();
  //   cy.wait(4000);
  //   EstimatesPage.selectCustomer("Genius Giant Game Inc.");
  //   EstimatesPage.inventorySelect("Air Filter");
  //   cy.wait(4000);
  //   EstimatesPage.inventorySelect("Inventory Item 1");
  //   cy.wait(4000);
  //   EstimatesPage.inventorySelect("Gaming Chair");
  //   cy.wait(4000);

  //   EstimatesPage.addDiscountInRow(0, 30, "%", 3);
  //   EstimatesPage.addDiscountInRow(0, 25, "$", 3);
  //   cy.wait(4000);

  //   EstimatesPage.changeTableValues();
  //   EstimatesPage.addRandomInvoiceDiscount();
  //   EstimatesPage.checkInvoiceTotal();
  //   EstimatesPage.saveEstimate();
  //   EstimatesPage.checkRowsTotal();
  // });

  it("Create estimate with notes and description added and check on preview.", () => {
    Dashboard.clickEstimatesTab()
    // cy.visit("/estimatesTab/list");
    EstimatesPage.clickAddNew();
    EstimatesPage.selectCustomer("Genius Giant Game Inc.");
    EstimatesPage.inventorySelect("Air Filter");

    const note = "This is a test note";
    EstimatesPage.addNote(note);
    EstimatesPage.previewEstimate();
    const customerInfoToCheck = {
      note: note,
    };
    EstimatesPage.checkEstimatePreviewValues(customerInfoToCheck); // Can't find element
  });

  it('Test estimate per line "hidden" function - 1 inventory added w/ hide price', () => {
    Dashboard.clickEstimatesTab();
    // cy.visit('/estimatesTab/list')
    // Dashboard.preventNotificationCard();
    EstimatesPage.clickAddNew();
    // cy.wait(4000);
    EstimatesPage.selectCustomer("Genius Giant Game Inc.");
    EstimatesPage.inventorySelect("Air Filter");
    // cy.wait(4000);

    const hiddenOrder = [true];
    EstimatesPage.setRowsToHiddenPrice(hiddenOrder);

    EstimatesPage.previewEstimate() // Can't find element
  });

  // Skipped, Causing run loop
  // it.skip('Test estimate per line "hidden" function - 1 inventory added w/ hide line', () => {
  //   Dashboard.clickEstimatesTab();
  //   // cy.visit('/estimatesTab/list')
  //   // Dashboard.preventNotificationCard();
  //   EstimatesPage.clickAddNew();
  //   cy.wait(4000);
  //   EstimatesPage.selectCustomer("Genius Giant Game Inc.");
  //   EstimatesPage.inventorySelect("Air Filter");
  //   cy.wait(4000);

  //   const hiddenOrder = [true];
  //   EstimatesPage.setRowsToHiddenLine(hiddenOrder);

  //   // EstimatesPage.previewEstimate() // Can't find element
  // });

  // Skipped, Causing run loop
  // it.skip('Test estimate per line "hidden" function - 3 inventory added w/ 1 visible, 1 hidden line, 1 hidden price', () => {
  //   Dashboard.clickEstimatesTab();
  //   // cy.visit('/estimatesTab/list')
  //   // Dashboard.preventNotificationCard();
  //   EstimatesPage.clickAddNew();
  //   cy.wait(4000);
  //   EstimatesPage.selectCustomer("Genius Giant Game Inc.");
  //   EstimatesPage.inventorySelect("Air Filter");
  //   cy.wait(4000);
  //   EstimatesPage.inventorySelect("Inventory Item 1");
  //   cy.wait(4000);
  //   EstimatesPage.inventorySelect("Gaming Chair");
  //   cy.wait(4000);

  //   const hiddenOrderPrice = [false, false, true];
  //   EstimatesPage.setRowsToHiddenPrice(hiddenOrderPrice);

  //   const hiddenOrderLine = [true, false, false];
  //   EstimatesPage.setRowsToHiddenLine(hiddenOrderLine);
  //   // EstimatesPage.previewEstimate() // Can't find element
  // });

  it("New Estimate - Arrange items - Check if items are applied/arranged correctly", () => {
    Dashboard.clickEstimatesTab();
    // cy.visit('/estimatesTab/list')
    // Dashboard.preventNotificationCard();
    EstimatesPage.clickAddNew();
    EstimatesPage.selectCustomer("Genius Giant Game Inc.");
    EstimatesPage.inventorySelect("Air Filter");
    EstimatesPage.inventorySelect("Inventory Item 1");
    EstimatesPage.inventorySelect("Gaming Chair");
    EstimatesPage.inventorySelect("Add Inventory - Taxable no SN");
  });
});
