import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import { TaxAndTermsPage } from "../pages/settings/company_settings";

require('cypress-plugin-tab');

describe('Add Customer', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
    })

    beforeEach(() => {

        cy.visit('/login')
        LoginPage.loginAdmin('andreiv@industrack.com', 'admin')
        cy.wait(4250)
        Dashboard.preventNotificationCard()
        Dashboard.gotoTaxAndTermsPage()

    })

    it.only('Basic saving function', () => {
        TaxAndTermsPage.addNewTax()
        TaxAndTermsPage.fillAddNewTaxForm('New Tax',3)
        TaxAndTermsPage.saveAddNewTaxForm()
    })




})