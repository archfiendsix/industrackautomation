import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import InvoicesPage, { saveInvoice } from "../pages/InvoicesPage";
import EstimatesPage from "../pages/EstimatesPage";
import InvoiceOverviewPage from "../pages/InvoiceOverviewPage";
import { v4 as uuidv4 } from 'uuid';
require('cypress-plugin-tab');

describe('Invoices Module', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
    })

    beforeEach(() => {
        cy.viewport(1280, 1024)
        cy.visit('/login')
        LoginPage.loginAdmin('andreiv@industrack.com', 'admin')
        cy.wait(4250)
        Dashboard.preventNotificationCard()
        cy.visit('/invoicesTab')
        Dashboard.preventNotificationCard()
        Dashboard.clickInvoicesTab()

    })

    /* Skipped because was asked to omit this script */
    it.skip('Add an invoice - 1 Inventory Item(Taxable with no Serial #) -  No Description - No Terms Selected - No Invoice Discount - No Tax', () => {
        const invoiceInfo = {
            customer: 'Ace Hardware',
            inventoriesToAdd: ['Add Inventory - Taxable no SN'],
            description: 'Test Description',
            tax: 'None',
            term: 'Not Selected'
        }
        InvoicesPage.addNewInvoice(invoiceInfo)
        InvoicesPage.addInvoiceDiscount('0')
        InvoicesPage.saveInvoice()
    })

    /* Skipped because was asked to omit this script */
    it.skip('Add an invoice - 1 Inventory Item(Taxable with no Serial #) -  No Description - 1 Term Selected - No Invoice Discount - No Tax', () => {
        const invoiceInfo = {
            customer: 'Ace Hardware',
            inventoriesToAdd: ['Add Inventory - Taxable no SN'],
            description: 'Test Description',
            tax: 'None',
            term: 'New Term'
        }
        InvoicesPage.addNewInvoice(invoiceInfo)
        InvoicesPage.addInvoiceDiscount('0')
        InvoicesPage.saveInvoice()
    })

    /* Skipped because was asked to omit this script */
    it.skip('Add an invoice - 1 Inventory Item(Taxable with no Serial #) -  No Description - No Term Selected - No Invoice Discount - 1 Tax Selected', () => {
        const invoiceInfo = {
            customer: 'Ace Hardware',
            inventoriesToAdd: ['Add Inventory - Taxable no SN'],
            description: 'Test Description',
            tax: 'New Tax',
            term: 'Not Selected'
        }
        InvoicesPage.addNewInvoice(invoiceInfo)
        InvoicesPage.addInvoiceDiscount('0')
        InvoicesPage.saveInvoice()
    })

    /* Skipped because was asked to omit this script */
    it.skip('Add an invoice - 1 Inventory Item(none Taxable with 1 Serial #) -  No Description - No Terms Selected - No Invoice Discount - No Tax', () => {
        const invoiceInfo = {
            customer: 'Ace Hardware',
            inventoriesToAdd: ['Add Inventory - SN used'],
            description: 'Test Description',
            tax: 'None',
            term: 'Not Selected'
        }
        InvoicesPage.addNewInvoice(invoiceInfo)
        InvoicesPage.selectOneSerialNumber()
        InvoicesPage.addInvoiceDiscount('0')
        InvoicesPage.saveInvoice()
        // cy.get('.topheader span').first().then($el=> {
        //     const status = $el.innerText
        //     expect(status).equal('Unpaid')
        // })


    })

    /* Skipped because it's not working yet */
    it.skip('Add an invoice - Receive partial payment', () => {
        const invoiceInfo = {
            customer: 'Ace Hardware',
            inventoriesToAdd: ['Add Inventory - Taxable no SN'],
            description: 'Test Description',
            tax: 'None',
            term: 'Not Selected'
        }
        InvoicesPage.addNewInvoice(invoiceInfo)
        InvoicesPage.addInvoiceDiscount('0')
        InvoicesPage.saveInvoice()

        //InvoicePage.gotoReceivePayment()
        // const paymentInfo = {
        //     paymentMethod: 'Cash',
        //     referenceNumber: '000000',
        //     payment: '1000'
        // }
        //InvoicePage.setPayment(paymentInfo)
        //InvoicePage.savePayment(paymentInfo)

    })


    it('Add Invoice and show the preview of the invoice', () => {
        const invoiceInfo = {
            customer: 'Ace Hardware',
            inventoriesToAdd: ['Add Inventory - Taxable no SN'],
            description: 'Test Description',
            tax: 'None',
            term: 'Not Selected'
        }
        InvoicesPage.addNewInvoice(invoiceInfo)
        InvoicesPage.addInvoiceDiscount('0')
        InvoicesPage.saveInvoice()
        InvoicesPage.previewInvoice()
        InvoicesPage.checkPreview()

    })

    it('Add invoice and save invoice as PDF', () => {
        const invoiceInfo = {
            customer: 'Ace Hardware',
            inventoriesToAdd: ['Add Inventory - Taxable no SN'],
            description: 'Test Description',
            tax: 'None',
            term: 'Not Selected'
        }
        InvoicesPage.addNewInvoice(invoiceInfo)
        InvoicesPage.addInvoiceDiscount('0')
        InvoicesPage.saveInvoice()
        InvoicesPage.previewInvoice()
        InvoicesPage.clickSaveAsPDFButton()
        InvoicesPage.checkSavedPDF()
    })

    it('Add invoice and save invoice as PDF', () => {
        const invoiceInfo = {
            customer: 'Ace Hardware',
            inventoriesToAdd: ['Add Inventory - Taxable no SN'],
            description: 'Test Description',
            tax: 'None',
            term: 'Not Selected'
        }
        InvoicesPage.addNewInvoice(invoiceInfo)
        InvoicesPage.addInvoiceDiscount('0')
        InvoicesPage.saveInvoice()
        InvoicesPage.sendToEmail()
    })

    /* Skipped because it still has error */
    it.skip('Add invoice with 1 NON-INVENTORY type, with description, with terms selected, with discount and with tax and save  the invoice with the correct total due', () => {
        const invoiceInfo = {
            customer: 'Ace Hardware',
            inventoriesToAdd: ['Add Inventory - Taxable no SN'],
            description: 'Test Description',
            tax: 'None',
            term: 'Not Selected'
        }
        InvoicesPage.addNewInvoice(invoiceInfo)
        InvoicesPage.addInvoiceDiscount('0')
        InvoicesPage.saveInvoice()
        InvoicesPage.sendToEmail()
    })

    it('1. Make sure that the correct info is shown in preview from invoice (estimate converted to invoice).', () => {
        Dashboard.clickEstimatesTab()
        Dashboard.preventNotificationCard()
        
        EstimatesPage.clickAddNew()
        cy.wait(4000)
        EstimatesPage.selectCustomer('01223-Add 2 service location to this customer')
        EstimatesPage.inventorySelect('Inventory Item 1')
        cy.wait(4000)
        EstimatesPage.inventorySelect('Gaming Chair')
        cy.wait(4000)
        EstimatesPage.inventorySelect('Add Inventory - Taxable no SN')
        const noteText = "This is a sample Note"
        EstimatesPage.addNote(noteText)
        EstimatesPage.addRandomInvoiceDiscount()
        EstimatesPage.addDiscountInRow(0, 30, '%', 3)
        EstimatesPage.saveEstimate()
        
        
        cy.wait(4000)
        EstimatesPage.convertToInvoice()
        cy.wait(3000)
        EstimatesPage.confirmYes()
        EstimatesPage.checkConvertedToInvoiceSuccess()
        cy.wait(1500)
        const taxInfo = {
            taxName: `${uuidv4().substring(0, 5)}-Tax`,
            taxValue: '3'
        }
        EstimatesPage.addInvoiceTax(taxInfo)
        InvoiceOverviewPage.checkInvoiceStatus()
    })


})