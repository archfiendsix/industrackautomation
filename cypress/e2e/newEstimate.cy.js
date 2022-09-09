import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard"
import AddCustomerPage from "../pages/AddCustomerPage";
import { InventoryListPage } from "../pages/settings/inventory";
import AddNewInventoryPage from "../pages/AddNewInventoryPage";
import EstimatesPage from "../pages/EstimatesPage";
import InvoiceOverviewPage from "../pages/InvoiceOverviewPage";

describe('New Estimate module', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
    })

    beforeEach(() => {
        cy.viewport(1280, 768)
        cy.visit('/login')
        LoginPage.loginAdmin('andreiv@industrack.com', 'admin')
        // cy.get('ul.dropdown-menu.dropdown-reminders').invoke('hide')
        cy.wait(4250)

        /* Prevent the notification card from interfering */
        Dashboard.preventNotificationCard()

    })

    // Script that creates 1 new customer, 1 new inventory, then creates an estimate that contains the new inventory and customer
    // New customer, with 1 service location, address is being validated, no tags, no discounts or taxes, no service agreements or subscriptions, no equipment, notes, geofences, reminders. 
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


        InventoryListPage.gotoAddNewInventory()

        AddNewInventoryPage.fillData()
        AddNewInventoryPage.clickSaveButton()
        AddNewInventoryPage.checkSaveSuccess()

        /*newEstimate*/
        Dashboard.clickEstimatesTab()
        EstimatesPage.clickAddNew()
        cy.wait(4000)
        EstimatesPage.selectCustomer('Genius Giant Inc.')
        EstimatesPage.inventorySelect('Inventory Item 1')
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
    //     EstimatesPage.inventorySelect('Inventory Item 1')
    //     EstimatesPage.saveAndCloseEstimate()
    // })

    it('Should have status Won', () => {

        Dashboard.clickEstimatesTab()
        EstimatesPage.clickAddNew()
        cy.wait(4000)
        EstimatesPage.selectCustomer('Genius Giant Inc.')
        EstimatesPage.inventorySelect('Inventory Item 1')
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
        cy.wait(4000)
        EstimatesPage.selectCustomer('Genius Giant Inc.')
        EstimatesPage.inventorySelect('Inventory Item 1')
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
        cy.wait(4000)
        EstimatesPage.selectCustomer('Genius Giant Game Inc.')
        EstimatesPage.inventorySelect('Inventory Item 1')
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
        cy.wait(4000)
        EstimatesPage.selectCustomer('Genius Giant Game Inc.')
        EstimatesPage.inventorySelect('Inventory Item 1')
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
        cy.wait(4000)
        EstimatesPage.selectCustomer('Genius Giant Game Inc.')
        EstimatesPage.inventorySelect('Inventory Item 1')
        EstimatesPage.saveEstimate()
        cy.wait(4000)
        EstimatesPage.changeCustomer('Change to this customer')
        cy.wait(4000)
        EstimatesPage.saveEstimate()
        cy.wait(2500)
        EstimatesPage.checkBillToCustomerName('Change to this customer')

    })

    // it('Should proceed to Estimate preview', () => {

    //     Dashboard.clickEstimatesTab()
    //     EstimatesPage.clickAddNew()
    //     cy.wait(4000)
    //     EstimatesPage.selectCustomer('Genius Giant Game Inc.')
    //     EstimatesPage.inventorySelect('Inventory Item 1')
    //     EstimatesPage.saveEstimate()
    //     cy.wait(4000)
    //     EstimatesPage.previewEstimate()
    //     EstimatesPage.checkEstimatePreview() /* Add more Preview verifications in this method */


    // })

    it('Should send estimate as email', () => {
        Dashboard.clickEstimatesTab()
        EstimatesPage.clickAddNew()
        cy.wait(4000)
        EstimatesPage.selectCustomer('Genius Giant Game Inc.')
        EstimatesPage.inventorySelect('Inventory Item 1')
        EstimatesPage.saveEstimate()
        cy.wait(4000)
        EstimatesPage.sendToEmail()
    })

    it('Should have correct Row total upon adding discount', () => {
        Dashboard.clickEstimatesTab()
        EstimatesPage.clickAddNew()
        cy.wait(4000)
        EstimatesPage.selectCustomer('Genius Giant Game Inc.')
        EstimatesPage.inventorySelect('Air Filter')
        cy.wait(4000)
        EstimatesPage.inventorySelect('Inventory Item 1')
        cy.wait(4000)
        EstimatesPage.inventorySelect('Gaming Chair')
        cy.wait(4000)

        EstimatesPage.addDiscountInRow(0, 30, '%', 3)
        EstimatesPage.checkInvoiceSubtotal()
        EstimatesPage.addDiscountInRow(0, 25, '$', 3)
        EstimatesPage.checkInvoiceSubtotal()
        EstimatesPage.saveEstimate()
        cy.wait(4000)

        EstimatesPage.checkRowsTotal()

    })

    it('Should change input values and have correct calculations after save', () => {
        Dashboard.clickEstimatesTab()
        EstimatesPage.clickAddNew()
        cy.wait(4000)
        EstimatesPage.selectCustomer('Genius Giant Game Inc.')
        EstimatesPage.inventorySelect('Air Filter')
        cy.wait(4000)
        EstimatesPage.inventorySelect('Inventory Item 1')
        cy.wait(4000)
        EstimatesPage.inventorySelect('Gaming Chair')
        cy.wait(4000)

        EstimatesPage.addDiscountInRow(0, 30, '%', 3)
        EstimatesPage.addDiscountInRow(0, 25, '$', 3)
        cy.wait(4000)

        EstimatesPage.changeTableValues()
        EstimatesPage.addRandomInvoiceDiscount()
        EstimatesPage.checkInvoiceTotal()
        EstimatesPage.saveEstimate()
        EstimatesPage.checkRowsTotal()


    })

})