import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import InvoicesPage from "../pages/InvoicesPage";

require('cypress-plugin-tab');

describe('Invoices Module', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
    })

    beforeEach(() => {
        cy.viewport(1280, 768)
        cy.visit('/login')
        LoginPage.loginAdmin('andreiv@industrack.com', 'admin')
        cy.wait(4250)
        Dashboard.preventNotificationCard()
        Dashboard.clickInvoicesTab()

    })

    it('Add an invoice - 1 Inventory(Item(s) with no Serial #) -  No Description - No Terms Selected - No Discount - No Tax', () => {
        const invoiceInfo = {
            customer: 'Ace Hardware',
            inventoriesToAdd: ['Inventory Item 1'],
            description: 'Test Description',
            tax: 'None',
            term: 'Not Selected'
        }
        InvoicesPage.addNewInvoice(invoiceInfo)
    })

 




})