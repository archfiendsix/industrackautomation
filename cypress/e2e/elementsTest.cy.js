import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import CustomerPage from "../pages/CustomerPage";
import { GeneralSettings } from '../pages/settings/company_settings';
import Maps from '../pages/map/MapPage'
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
        // Dashboard.clickCustomerTab()

    })

    //   before(() => {
    //     cy.fixture('newCustomer').then(function (data) {
    //       this.data = data;
    //     })
    //   })


    it('Test descending/ascending for customer page', () => {

        CustomerPage.customerTable.sortByNumber('ascending')
        cy.wait(4400)
        CustomerPage.customerTable.sortByLastName('descending')

    })


    it.only('Test descending/ascending for customer page', () => {
       Maps.elements.sortByDropdown().select('Sort by Status')

    })


})