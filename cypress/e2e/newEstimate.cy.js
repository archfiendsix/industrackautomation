import loginPage from "../pages/loginPage";
import dashboard from "../pages/dashboard"
import addcustomerPage from "../pages/addcustomerPage";
import settingsPage from "../pages/settingsPage";
import addNewInventoryPage from "../pages/addNewInventoryPage";
import estimatesPage from "../pages/estimatesPage";
import invoicePage from "../pages/invoicePage";

describe('New Estimate module', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
    })

    beforeEach(() => {

        cy.visit('/login')
        loginPage.loginAdmin('andreiv@industrack.com', 'admin')
        // cy.get('ul.dropdown-menu.dropdown-reminders').invoke('hide')
        cy.wait(4250)

        /* Prevent the notification card from interfering */
        dashboard.preventNotificationCard()

    })
    it('New customer, New Inventory, New Estimate e2e', () => {

        /*new customer */
        dashboard.clickCustomerTab()
        dashboard.clickAddCustomerButton()

        addcustomerPage.fillData()



        cy.wait(2500)
        addcustomerPage.elements.saveButton().should('not.be.disabled')
        addcustomerPage.elements.saveButton().click()

        addcustomerPage.confirmValidityYes()

        /*new inventory */


        cy.wait(3500)

        // dashboard.clickSettings()
        // dashboard.elements.settingsButton().click()
        settingsPage.gotoAddNewInventory()

        addNewInventoryPage.fillData()
        addNewInventoryPage.clickSaveButton()
        addNewInventoryPage.checkSaveSuccess()

        /*newEstimate*/
        dashboard.clickEstimatesTab()
        estimatesPage.clickAddNew()
        estimatesPage.typeSearchInput('Genius Giant Inc.')
        estimatesPage.clickSearch()
        cy.wait(4000)
        estimatesPage.selectCustomer()
        estimatesPage.inventorySearch('Inventory Item 1')
        estimatesPage.saveAndCloseEstimate()
    })


    // it('test', () => {
    //     /*newEstimate*/
    //     dashboard.clickEstimatesTab()
    //     estimatesPage.clickAddNew()
    //     estimatesPage.typeSearchInput('Genius Giant Inc.')
    //     estimatesPage.clickSearch()
    //     cy.wait(4000)
    //     estimatesPage.selectCustomer()
    //     estimatesPage.inventorySearch('Inventory Item 1')
    //     estimatesPage.saveAndCloseEstimate()
    // })

    it('Should have status Won', () => {

        dashboard.clickEstimatesTab()
        estimatesPage.clickAddNew()
        estimatesPage.typeSearchInput('Genius Giant Inc.')
        estimatesPage.clickSearch()
        cy.wait(4000)
        estimatesPage.selectCustomer()
        estimatesPage.inventorySearch('Inventory Item 1')
        estimatesPage.saveEstimate()
        cy.wait(3000)
        estimatesPage.markAsWon()
        cy.wait(3000)
        estimatesPage.confirmYes()
        estimatesPage.checkEstimateStatus('Won')
    })

    it('Should have status Lost', () => {

        dashboard.clickEstimatesTab()
        estimatesPage.clickAddNew()
        estimatesPage.typeSearchInput('Genius Giant Inc.')
        estimatesPage.clickSearch()
        cy.wait(4000)
        estimatesPage.selectCustomer()
        estimatesPage.inventorySearch('Inventory Item 1')
        estimatesPage.saveEstimate()
        cy.wait(3000)
        estimatesPage.markAslost()
        cy.wait(3000)
        estimatesPage.confirmYes()
        estimatesPage.checkEstimateStatus('Lost')
    })

    it('Should proceed to Add New Job Screen after converting to Job', () => {

        dashboard.clickEstimatesTab()
        estimatesPage.clickAddNew()
        estimatesPage.typeSearchInput('Genius Giant Game Inc.')
        estimatesPage.clickSearch()
        cy.wait(4000)
        estimatesPage.selectCustomer()
        estimatesPage.inventorySearch('Inventory Item 1')
        estimatesPage.saveEstimate()
        cy.wait(3000)
        estimatesPage.convertToJob()
        cy.wait(3000)
        estimatesPage.confirmYes()
        cy.wait(5500)
        estimatesPage.checkAddNewJobModalTitle()
    })

    it('Should successfully convert estimate to invoice', () => {

        dashboard.clickEstimatesTab()
        estimatesPage.clickAddNew()
        estimatesPage.typeSearchInput('Genius Giant Game Inc.')
        estimatesPage.clickSearch()
        cy.wait(4000)
        estimatesPage.selectCustomer()
        estimatesPage.inventorySearch('Inventory Item 1')
        estimatesPage.saveEstimate()
        cy.wait(3000)
        estimatesPage.convertToInvoice()
        cy.wait(3000)
        estimatesPage.confirmYes()
        estimatesPage.checkConvertedToInvoiceSuccess()
        cy.wait(1500)
        invoicePage.checkInvoiceStatus()
    })

    it('Should change Customer', () => {

        dashboard.clickEstimatesTab()
        estimatesPage.clickAddNew()
        estimatesPage.typeSearchInput('Genius Giant Game Inc.')
        estimatesPage.clickSearch()
        cy.wait(4000)
        estimatesPage.selectCustomer()
        estimatesPage.inventorySearch('Inventory Item 1')
        estimatesPage.saveEstimate()
        cy.wait(4000)
        estimatesPage.changeCustomer('Change to this customer')
        cy.wait(4000)
        estimatesPage.saveEstimate()
        cy.wait(2500)
        estimatesPage.checkBillToCustomerName('Change to this customer')

    })

    it('Should proceed to Estimate preview', () => {

        dashboard.clickEstimatesTab()
        estimatesPage.clickAddNew()
        estimatesPage.typeSearchInput('Genius Giant Game Inc.')
        estimatesPage.clickSearch()
        cy.wait(4000)
        estimatesPage.selectCustomer()
        estimatesPage.inventorySearch('Inventory Item 1')
        estimatesPage.saveEstimate()
        cy.wait(4000)
        estimatesPage.previewEstimate()
        estimatesPage.checkEstimatePreview() /* Add more Preview verifications in this method */


    })

    it('Should send estimate as email', () => {
        dashboard.clickEstimatesTab()
        estimatesPage.clickAddNew()
        estimatesPage.typeSearchInput('Genius Giant Game Inc.')
        estimatesPage.clickSearch()
        cy.wait(4000)
        estimatesPage.selectCustomer()
        estimatesPage.inventorySearch('Inventory Item 1')
        estimatesPage.saveEstimate()
        cy.wait(4000)
        estimatesPage.sendToEmail()
    })

    it('Should have correct Row total upon adding discount', () => {
        dashboard.clickEstimatesTab()
        estimatesPage.clickAddNew()
        estimatesPage.typeSearchInput('Genius Giant Game Inc.')
        estimatesPage.clickSearch()
        cy.wait(4000)
        estimatesPage.selectCustomer()
        estimatesPage.inventorySearch('Air Filter')
        cy.wait(4000)
        estimatesPage.inventorySearch('Inventory Item 1')
        cy.wait(4000)
        estimatesPage.inventorySearch('Gaming Chair')
        cy.wait(4000)

        estimatesPage.addDiscountInRow(0, 30, '%', 3)
        estimatesPage.checkInvoiceSubtotal()
        estimatesPage.addDiscountInRow(0, 25, '$', 3)
        estimatesPage.checkInvoiceSubtotal()
        estimatesPage.saveEstimate()
        cy.wait(4000)

        estimatesPage.checkRowsTotal()

    })

    it.only('Should change input values and have correct calculations after save', () => {
        dashboard.clickEstimatesTab()
        estimatesPage.clickAddNew()
        estimatesPage.typeSearchInput('Genius Giant Game Inc.')
        estimatesPage.clickSearch()
        cy.wait(4000)
        estimatesPage.selectCustomer()
        estimatesPage.inventorySearch('Air Filter')
        cy.wait(4000)
        estimatesPage.inventorySearch('Inventory Item 1')
        cy.wait(4000)
        estimatesPage.inventorySearch('Gaming Chair')
        cy.wait(4000)

        // estimatesPage.addDiscountInRow(0, 30, '%',3)
        // estimatesPage.addDiscountInRow(0, 25, '$',3)
        // cy.wait(4000)

        estimatesPage.changeTableValues()
        estimatesPage.addInvoiceDiscount()
        estimatesPage.saveEstimate()
        estimatesPage.checkRowsTotal()
        estimatesPage.checkInvoiceTotal()

    })

})