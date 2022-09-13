import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import InvoicesPage, { saveInvoice } from "../pages/InvoicesPage";

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

    it('Add an invoice - 1 Inventory Item(Taxable with no Serial #) -  No Description - No Terms Selected - No Invoice Discount - No Tax', () => {
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


    it('Add an invoice - 1 Inventory Item(Taxable with no Serial #) -  No Description - 1 Term Selected - No Invoice Discount - No Tax', () => {
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

    it('Add an invoice - 1 Inventory Item(Taxable with no Serial #) -  No Description - No Term Selected - No Invoice Discount - 1 Tax Selected', () => {
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

    it('Add an invoice - 1 Inventory Item(none Taxable with 1 Serial #) -  No Description - No Terms Selected - No Invoice Discount - No Tax', () => {
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

    // it('Add an invoice - Receive partial payment', () => {
    //     const invoiceInfo = {
    //         customer: 'Ace Hardware',
    //         inventoriesToAdd: ['Add Inventory - Taxable no SN'],
    //         description: 'Test Description',
    //         tax: 'None',
    //         term: 'Not Selected'
    //     }
    //     InvoicesPage.addNewInvoice(invoiceInfo)
    //     InvoicesPage.addInvoiceDiscount('0')
    //     InvoicesPage.saveInvoice()

    //     //InvoicePage.gotoReceivePayment()
    //     // const paymentInfo = {
    //     //     paymentMethod: 'Cash',
    //     //     referenceNumber: '000000',
    //     //     payment: '1000'
    //     // }
    //     //InvoicePage.setPayment(paymentInfo)
    //     //InvoicePage.savePayment(paymentInfo)

    // })


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

    it.only('Add invoice and save invoice as PDF', () => {
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

    // it('Add invoice with 1 NON-INVENTORY type, with description, with terms selected, with discount and with tax and save  the invoice with the correct total due', () => {
    //     const invoiceInfo = {
    //         customer: 'Ace Hardware',
    //         inventoriesToAdd: ['Add Inventory - Taxable no SN'],
    //         description: 'Test Description',
    //         tax: 'None',
    //         term: 'Not Selected'
    //     }
    //     InvoicesPage.addNewInvoice(invoiceInfo)
    //     InvoicesPage.addInvoiceDiscount('0')
    //     InvoicesPage.saveInvoice()
    //     InvoicesPage.sendToEmail()
    // })


})