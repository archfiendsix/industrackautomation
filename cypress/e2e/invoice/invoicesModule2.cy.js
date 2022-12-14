import LoginPage from "../../pages/LoginPage";
import Dashboard from "../../pages/Dashboard";
import InvoicesPage, { saveInvoice } from "../../pages/InvoicesPage";
import EstimatesPage from "../../pages/EstimatesPage";
import InvoiceOverviewPage from "../../pages/InvoiceOverviewPage";
import { v4 as uuidv4 } from "uuid";
require("cypress-plugin-tab");

describe("Invoices Module", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    console.log(err);
    return false;
  });

  beforeEach(() => {
    cy.viewport(1280, 1024);
    cy.visit("/login");
    LoginPage.loginAdmin(Cypress.env('login_username'), Cypress.env('login_password'));
    cy.get("body").contains("Invoices");
    // Dashboard.preventNotificationCard();
    Dashboard.clickInvoicesTab();
    // Dashboard.preventNotificationCard();
  });
  it("For unpaid invoices, test the following: Change invoice Bill to any service location, Change invoice to any service location - Then check Preview values", () => {
    const invoiceInfo = {
      customer: "01223",
      inventoriesToAdd: ["Add Inventory - Taxable no SN"],
      description: "Test Description",
      tax: "None",
      term: "Not Selected",
      notesForCustomer: `Note-${uuidv4().substring(0, 5)}`,
    };
    InvoicesPage.addNewInvoice(invoiceInfo);
    InvoicesPage.addInvoiceDiscount("0");

    InvoicesPage.saveInvoice();
    let overviewValues = {
      description:
        InvoicesPage.elements.addingNewInvoiceModal.descriptionTextbox(),
      invoiceNumber:
        InvoicesPage.elements.addingNewInvoiceModal.invoiceNumber(),
    };
    InvoicesPage.previewInvoice();
    InvoicesPage.checkPreview(overviewValues);
    InvoicesPage.closePreview();

    //Change Service Location
    cy.log("//Change Service Location");
    const serviceLocation = "Abdul Dauphin";
    InvoicesPage.changeServiceLocation(serviceLocation);

    //Change Bill to Service Location
    cy.log("//Change Bill to Service Location");
    const billtoserviceLocation = "Jennifer McClure";
    InvoicesPage.changeBillToServiceLocation(billtoserviceLocation);

    // InvoicesPage.saveInvoice()
    overviewValues = {
      description:
        InvoicesPage.elements.addingNewInvoiceModal.descriptionTextbox(),
      invoiceNumber:
        InvoicesPage.elements.addingNewInvoiceModal.invoiceNumber(),
    };
    InvoicesPage.previewInvoice();
    InvoicesPage.checkPreview(overviewValues);
    InvoicesPage.closePreview();
  });

  it("For unpaid invoices, test the following: Change invoice customer - Then Check Preview values", () => {
    const invoiceInfo = {
      customer: "01223",
      inventoriesToAdd: ["Add Inventory - Taxable no SN"],
      description: "Test Description",
      tax: "None",
      term: "Not Selected",
      notesForCustomer: `Note-${uuidv4().substring(0, 5)}`,
    };
    InvoicesPage.addNewInvoice(invoiceInfo);
    InvoicesPage.addInvoiceDiscount("0");

    InvoicesPage.saveInvoice();
    let overviewValues = {
      description:
        InvoicesPage.elements.addingNewInvoiceModal.descriptionTextbox(),
      invoiceNumber:
        InvoicesPage.elements.addingNewInvoiceModal.invoiceNumber(),
    };
    InvoicesPage.previewInvoice();
    InvoicesPage.checkPreview(overviewValues);
    InvoicesPage.closePreview();

    // Change Customer
    cy.log("// Change Customer");
    const customerName = "GG001";
    InvoicesPage.changeCustomer(customerName);

    overviewValues = {
      description:
        InvoicesPage.elements.addingNewInvoiceModal.descriptionTextbox(),
      invoiceNumber:
        InvoicesPage.elements.addingNewInvoiceModal.invoiceNumber(),
      customerName: customerName,
    };
    InvoicesPage.previewInvoice();
    InvoicesPage.checkPreview(overviewValues); //Improve the checking
    InvoicesPage.closePreview();
  });

  it("Generate overdue invoice then check - Test out payment.", () => {
    // Dashboard.preventNotificationCard();

    const invoiceInfo = {
      customer: "01223",
      inventoriesToAdd: ["Add Inventory - Taxable no SN"],
      description: "Test Description",
      tax: "None",
      term: "AutoOverdue",
    };
    InvoicesPage.addNewInvoice(invoiceInfo);
    InvoicesPage.saveInvoice();
    InvoiceOverviewPage.checkInvoiceStatus("Overdue");

    InvoicesPage.previewInvoice();
    const overviewValues = {
      description:
        InvoicesPage.elements.addingNewInvoiceModal.descriptionTextbox(),
      invoiceNumber:
        InvoicesPage.elements.addingNewInvoiceModal.invoiceNumber(),
      billToCustomerName:
        InvoicesPage.elements.addingNewInvoiceModal.billToCustomerName(),
      serviceLocationCustomerName:
        InvoicesPage.elements.addingNewInvoiceModal.serviceLocationCustomerName(),
    };
    InvoicesPage.checkPreview(overviewValues); // Checks for invoice preview values vs invoice overview
    InvoicesPage.closePreview();

    // Test out Payment
    const paymentDetails = {
      paymentMethod: "Cash",
      referenceNumber: `${uuidv4().substring(0, 5)}`,
      amountReceived: "1000",
    };
    InvoicesPage.receiveInvoicePayment(paymentDetails);

    InvoiceOverviewPage.checkInvoiceStatus("Overdue");
    // InvoiceOverviewPage.checkPayment()
  });

  // // Skipped due to email still not set/added to industrack account
  // it.skip("For Unpaid and Overdue invoices - Send reminder", () => {
  //   const invoiceInfo = {
  //     customer: "Ace Hardware",
  //     inventoriesToAdd: ["Add Inventory - Taxable no SN"],
  //     description: "Test Description",
  //     tax: "None",
  //     term: "AutoOverdue",
  //   };
  //   InvoicesPage.addNewInvoice(invoiceInfo);
  //   InvoicesPage.addInvoiceDiscount("0");
  //   InvoicesPage.saveInvoice();

  //   InvoicesPage.sendReminder();
  // });
});
