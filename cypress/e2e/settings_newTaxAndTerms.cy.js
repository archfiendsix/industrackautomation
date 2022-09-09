import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import { TaxAndTermsPage } from "../pages/settings/company_settings";

require('cypress-plugin-tab');

describe('New Tax and Terms Module', () => {
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
        Dashboard.gotoTaxAndTermsPage()

    })

    it('Basic Add new tax function', () => {
        TaxAndTermsPage.addNewTax()
        TaxAndTermsPage.fillAddNewTaxForm('New Tax', 3)
        TaxAndTermsPage.saveAddNewTaxForm()
    })

    it('Basic Add new term function', () => {
        TaxAndTermsPage.gotoTermsTab()
        TaxAndTermsPage.addNewTerm()
        TaxAndTermsPage.fillAddNewTermForm('New Term')
        TaxAndTermsPage.saveAddNewTermForm()
    })

    // it.only('test', () => {
    //     const uuid = () => Cypress._.random(0, 1e20)
    //     const id = uuid()
    // })




})