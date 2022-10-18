import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import InvoicesPage, { saveInvoice } from "../pages/InvoicesPage";
import EstimatesPage from "../pages/EstimatesPage";
import InvoiceOverviewPage from "../pages/InvoiceOverviewPage";
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
    LoginPage.loginAdmin("andreiv@industrack.com", "admin");
    cy.wait(4250);
    Dashboard.preventNotificationCard();
    cy.visit("/invoicesTab");
    Dashboard.preventNotificationCard();
    Dashboard.clickInvoicesTab();
  });

  it("Add an invoice - Receive partial payment", () => {
    const invoiceInfo = {
      customer: "Ace Hardware",
      inventoriesToAdd: ["Add Inventory - Taxable no SN"],
      description: "Test Description",
      tax: "None",
      term: "Not Selected",
    };
    InvoicesPage.addNewInvoice(invoiceInfo);
    InvoicesPage.addInvoiceDiscount("0");
    InvoicesPage.saveInvoice();

    // Test out Payment
    let paymentDetails = {
      paymentMethod: "Cash",
      referenceNumber: `${uuidv4().substring(0, 5)}`,
      amountReceived: "500",
    };
    const perInvoicePayment = {
      invoices: [
        {
          payment: "500",
        },
      ],
    };
    paymentDetails = { ...paymentDetails, ...perInvoicePayment };
    InvoicesPage.receiveInvoicePayment(paymentDetails);
    cy.wait(2500);
    InvoiceOverviewPage.checkInvoiceStatus("Partially Paid");
  });

  it("Add Invoice and show the preview of the invoice", () => {
    const invoiceInfo = {
      customer: "Ace Hardware",
      inventoriesToAdd: ["Add Inventory - Taxable no SN"],
      description: "Test Description",
      tax: "None",
      term: "Not Selected",
      notesForCustomer: `Note - ${uuidv4().substring(0, 5)}`,
    };

    InvoicesPage.addNewInvoice(invoiceInfo);

    InvoicesPage.addInvoiceDiscount("0");
    InvoicesPage.saveInvoice();
    const overviewValues = {
      note: invoiceInfo.notesForCustomer,
      description:
        InvoicesPage.elements.addingNewInvoiceModal.descriptionTextbox(),
      invoiceNumber:
        InvoicesPage.elements.addingNewInvoiceModal.invoiceNumber(),
    };
    InvoicesPage.previewInvoice();

    InvoicesPage.checkPreview(overviewValues);
  });

  it("Add invoice and save invoice as PDF", () => {
    const invoiceInfo = {
      customer: "Ace Hardware",
      inventoriesToAdd: ["Add Inventory - Taxable no SN"],
      description: "Test Description",
      tax: "None",
      term: "Not Selected",
    };
    InvoicesPage.addNewInvoice(invoiceInfo);
    InvoicesPage.addInvoiceDiscount("0");
    InvoicesPage.saveInvoice();
    InvoicesPage.previewInvoice();
    InvoicesPage.clickSaveAsPDFButton();
    InvoicesPage.checkSavedPDF();
  });

  it("Add invoice with 1 NON-INVENTORY type, with description, with terms selected, with discount and with tax and save the invoice with the correct total due", () => {
    const invoiceInfo = {
      customer: "a1a58",
      inventoriesToAdd: ["Add Inventory - Taxable no SN"],
      description: "Test Description",
      tax: "1d695-Tax 3%",
      term: "Default Term",
    };
    InvoicesPage.addNewInvoice(invoiceInfo);
    InvoicesPage.addInvoiceDiscount("20");
    EstimatesPage.addDiscountInRow(0, 30, "%", 1);
    InvoicesPage.saveInvoice();
    // cy.wait(2500)
    // cy.reload()
    // EstimatesPage.checkRowsTotal()
    EstimatesPage.checkInvoiceTotal();
  });

  it("1. Make sure that the correct info is shown in preview from invoice (estimate converted to invoice).", () => {
    Dashboard.clickEstimatesTab();
    Dashboard.preventNotificationCard();

    EstimatesPage.clickAddNew();
    cy.wait(4000);
    EstimatesPage.selectCustomer("01223"); //01223-Add 2 service location to this customer
    EstimatesPage.inventorySelect("Inventory Item 1");
    cy.wait(4000);
    EstimatesPage.inventorySelect("Gaming Chair");
    cy.wait(4000);
    EstimatesPage.inventorySelect("Add Inventory - Taxable no SN");
    EstimatesPage.randomLineMove();
    const noteText = "This is a sample Note";
    EstimatesPage.addNote(noteText);
    EstimatesPage.addRandomInvoiceDiscount();
    EstimatesPage.addDiscountInRow(0, 30, "%", 3);
    EstimatesPage.saveEstimate();

    cy.wait(4000);
    EstimatesPage.convertToInvoice();
    cy.wait(3000);
    EstimatesPage.confirmYes();
    EstimatesPage.checkConvertedToInvoiceSuccess();
    cy.wait(1500);
    const taxInfo = {
      taxName: `${uuidv4().substring(0, 5)}-Tax`,
      taxValue: "3",
    };
    EstimatesPage.addInvoiceTax(taxInfo);
    InvoiceOverviewPage.checkInvoiceStatus("Unpaid");

    InvoicesPage.previewInvoice();
    const overviewValues = {
      note: noteText,
      description:
        InvoicesPage.elements.addingNewInvoiceModal.descriptionTextbox(),
      invoiceNumber:
        InvoicesPage.elements.addingNewInvoiceModal.invoiceNumber(),
    };
    InvoicesPage.checkPreview(overviewValues); // Checks for invoice preview values vs invoice overview
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
    const customerName = "White Petals";
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
    Dashboard.preventNotificationCard();

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
