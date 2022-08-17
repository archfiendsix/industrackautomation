import LoginPage from "../pages/loginPage";
import Dashboard from "../pages/dashboard";
import CustomerPage from "../pages/customerPage";

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
        Dashboard.clickCustomerTab()

    })

    //   before(() => {
    //     cy.fixture('newCustomer').then(function (data) {
    //       this.data = data;
    //     })
    //   })


    it.only('', () => {

        CustomerPage.customerTable.sortByNumber('ascending')
        cy.wait(4400)
        CustomerPage.customerTable.sortByLastName('descending')

    })



})