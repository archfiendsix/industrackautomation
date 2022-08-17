import LoginPage from "../pages/loginPage";
import Dashboard from "../pages/dashboard"
import AddCustomerPage from "../pages/addCustomerPage";
import SettingsPage from "../pages/settingsPage";
import AddNewInventoryPage from "../pages/addNewInventoryPage";
import EstimatesPage from "../pages/estimatesPage";
import InvoiceOverviewPage from "../pages/invoiceOverviewPage";

describe('New Estimate module', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
    })

    beforeEach(() => {

        cy.visit('/login')
        LoginPage.loginAdmin('andreiv@industrack.com', 'admin')
        // cy.get('ul.dropdown-menu.dropdown-reminders').invoke('hide')
        cy.wait(4250)

        /* Prevent the notification card from interfering */
        Dashboard.preventNotificationCard()

    })
    it('New customer, New Inventory, New Estimate e2e', () => {

        /*new customer */
        Dashboard.clickCustomerTab()
        Dashboard.clickAddCustomerButton()

        AddCustomerPage.fillData()



        cy.wait(2500)
        AddCustomerPage.elements.saveButton().should('not.be.disabled')
        AddCustomerPage.elements.saveButton().click()

        AddCustomerPage.confirmValidityYes()

        /*new inventory */


        cy.wait(3500)

        // Dashboard.clickSettings()
        // Dashboard.elements.settingsButton().click()
        SettingsPage.gotoAddNewInventory()

        AddNewInventoryPage.fillData()
        AddNewInventoryPage.clickSaveButton()
        AddNewInventoryPage.checkSaveSuccess()

        /*newEstimate*/
        Dashboard.clickEstimatesTab()
        EstimatesPage.clickAddNew()
        EstimatesPage.typeSearchInput('Genius Giant Inc.')
        EstimatesPage.clickSearch()
        cy.wait(4000)
        EstimatesPage.selectCustomer()
        EstimatesPage.inventorySearch('Inventory Item 1')
        EstimatesPage.saveAndCloseEstimate()
    })


    // it('test', () => {
    //     /*newEstimate*/
    //     Dashboard.clickEstimatesTab()
    //     EstimatesPage.clickAddNew()
    //     EstimatesPage.typeSearchInput('Genius Giant Inc.')
    //     EstimatesPage.clickSearch()
    //     cy.wait(4000)
    //     EstimatesPage.selectCustomer()
    //     EstimatesPage.inventorySearch('Inventory Item 1')
    //     EstimatesPage.saveAndCloseEstimate()
    // })

    it('Should have status Won', () => {

        Dashboard.clickEstimatesTab()
        EstimatesPage.clickAddNew()
        EstimatesPage.typeSearchInput('Genius Giant Inc.')
        EstimatesPage.clickSearch()
        cy.wait(4000)
        EstimatesPage.selectCustomer()
        EstimatesPage.inventorySearch('Inventory Item 1')
        EstimatesPage.saveEstimate()
        cy.wait(3000)
        EstimatesPage.markAsWon()
        cy.wait(3000)
        EstimatesPage.confirmYes()
        EstimatesPage.checkEstimateStatus('Won')
    })

    it('Should have status Lost', () => {

        Dashboard.clickEstimatesTab()
        EstimatesPage.clickAddNew()
        EstimatesPage.typeSearchInput('Genius Giant Inc.')
        EstimatesPage.clickSearch()
        cy.wait(4000)
        EstimatesPage.selectCustomer()
        EstimatesPage.inventorySearch('Inventory Item 1')
        EstimatesPage.saveEstimate()
        cy.wait(3000)
        EstimatesPage.markAslost()
        cy.wait(3000)
        EstimatesPage.confirmYes()
        EstimatesPage.checkEstimateStatus('Lost')
    })

    it('Should proceed to Add New Job Screen after converting to Job', () => {

        Dashboard.clickEstimatesTab()
        EstimatesPage.clickAddNew()
        EstimatesPage.typeSearchInput('Genius Giant Game Inc.')
        EstimatesPage.clickSearch()
        cy.wait(4000)
        EstimatesPage.selectCustomer()
        EstimatesPage.inventorySearch('Inventory Item 1')
        EstimatesPage.saveEstimate()
        cy.wait(3000)
        EstimatesPage.convertToJob()
        cy.wait(3000)
        EstimatesPage.confirmYes()
        cy.wait(5500)
        EstimatesPage.checkAddNewJobModalTitle()
    })

    it('Should successfully convert estimate to invoice', () => {

        Dashboard.clickEstimatesTab()
        EstimatesPage.clickAddNew()
        EstimatesPage.typeSearchInput('Genius Giant Game Inc.')
        EstimatesPage.clickSearch()
        cy.wait(4000)
        EstimatesPage.selectCustomer()
        EstimatesPage.inventorySearch('Inventory Item 1')
        EstimatesPage.saveEstimate()
        cy.wait(3000)
        EstimatesPage.convertToInvoice()
        cy.wait(3000)
        EstimatesPage.confirmYes()
        EstimatesPage.checkConvertedToInvoiceSuccess()
        cy.wait(1500)
        InvoiceOverviewPage.checkInvoiceStatus()
    })

    it('Should change Customer', () => {

        Dashboard.clickEstimatesTab()
        EstimatesPage.clickAddNew()
        EstimatesPage.typeSearchInput('Genius Giant Game Inc.')
        EstimatesPage.clickSearch()
        cy.wait(4000)
        EstimatesPage.selectCustomer()
        EstimatesPage.inventorySearch('Inventory Item 1')
        EstimatesPage.saveEstimate()
        cy.wait(4000)
        EstimatesPage.changeCustomer('Change to this customer')
        cy.wait(4000)
        EstimatesPage.saveEstimate()
        cy.wait(2500)
        EstimatesPage.checkBillToCustomerName('Change to this customer')

    })

    it('Should proceed to Estimate preview', () => {

        Dashboard.clickEstimatesTab()
        EstimatesPage.clickAddNew()
        EstimatesPage.typeSearchInput('Genius Giant Game Inc.')
        EstimatesPage.clickSearch()
        cy.wait(4000)
        EstimatesPage.selectCustomer()
        EstimatesPage.inventorySearch('Inventory Item 1')
        EstimatesPage.saveEstimate()
        cy.wait(4000)
        EstimatesPage.previewEstimate()
        EstimatesPage.checkEstimatePreview() /* Add more Preview verifications in this method */


    })

    it('Should send estimate as email', () => {
        Dashboard.clickEstimatesTab()
        EstimatesPage.clickAddNew()
        EstimatesPage.typeSearchInput('Genius Giant Game Inc.')
        EstimatesPage.clickSearch()
        cy.wait(4000)
        EstimatesPage.selectCustomer()
        EstimatesPage.inventorySearch('Inventory Item 1')
        EstimatesPage.saveEstimate()
        cy.wait(4000)
        EstimatesPage.sendToEmail()
    })

    it('Should have correct Row total upon adding discount', () => {
        Dashboard.clickEstimatesTab()
        EstimatesPage.clickAddNew()
        EstimatesPage.typeSearchInput('Genius Giant Game Inc.')
        EstimatesPage.clickSearch()
        cy.wait(4000)
        EstimatesPage.selectCustomer()
        EstimatesPage.inventorySearch('Air Filter')
        cy.wait(4000)
        EstimatesPage.inventorySearch('Inventory Item 1')
        cy.wait(4000)
        EstimatesPage.inventorySearch('Gaming Chair')
        cy.wait(4000)

        EstimatesPage.addDiscountInRow(0, 30, '%', 3)
        EstimatesPage.checkInvoiceSubtotal()
        EstimatesPage.addDiscountInRow(0, 25, '$', 3)
        EstimatesPage.checkInvoiceSubtotal()
        EstimatesPage.saveEstimate()
        cy.wait(4000)

        EstimatesPage.checkRowsTotal()

    })

    it.only('Should change input values and have correct calculations after save', () => {
        Dashboard.clickEstimatesTab()
        EstimatesPage.clickAddNew()
        EstimatesPage.typeSearchInput('Genius Giant Game Inc.')
        EstimatesPage.clickSearch()
        cy.wait(4000)
        EstimatesPage.selectCustomer()
        EstimatesPage.inventorySearch('Air Filter')
        cy.wait(4000)
        EstimatesPage.inventorySearch('Inventory Item 1')
        cy.wait(4000)
        EstimatesPage.inventorySearch('Gaming Chair')
        cy.wait(4000)

        EstimatesPage.addDiscountInRow(0, 30, '%',3)
        EstimatesPage.addDiscountInRow(0, 25, '$',3)
        cy.wait(4000)

        EstimatesPage.changeTableValues()
        EstimatesPage.addInvoiceDiscount()
        EstimatesPage.checkInvoiceTotal()
        EstimatesPage.saveEstimate()
        EstimatesPage.checkRowsTotal()
        

    })

})