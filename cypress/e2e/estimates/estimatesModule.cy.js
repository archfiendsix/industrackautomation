import LoginPage from "../../pages/LoginPage";
import Dashboard from "../../pages/Dashboard"
import AddCustomerPage from "../../pages/AddCustomerPage";
import CustomerPage from "../../pages/CustomerPage";
import { InventoryListPage } from "../../pages/settings/inventory";
import AddNewInventoryPage from "../../pages/AddNewInventoryPage";
import EstimatesPage from "../../pages/EstimatesPage";
import InvoiceOverviewPage from "../../pages/InvoiceOverviewPage";
import { v4 as uuidv4 } from 'uuid';

describe('New Estimate module', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
    })

    beforeEach(() => {
        cy.viewport(1560, 992)
        cy.visit('/login')
        LoginPage.loginAdmin('andreiv@industrack.com', 'admin')
        // cy.get('ul.dropdown-menu.dropdown-reminders').invoke('hide')
        cy.wait(4250)

        /* Prevent the notification card from interfering */
        Dashboard.preventNotificationCard()
        Dashboard.preventNotificationCard()
        Dashboard.preventNotificationCard()
    })

    // Script that creates 1 new customer, 1 new inventory, then creates an estimate that contains the new inventory and customer
    // New customer, with 1 service location, address is being validated, no tags, no discounts or taxes, no service agreements or subscriptions, no equipment, notes, geofences, reminders. 
    it('New customer, New Inventory, New Estimate e2e', () => {

        /*new customer */
        Dashboard.clickCustomerTab()
        // cy.visit('/estimatesTab/list')
        Dashboard.clickAddCustomerButton()
        const customerInfo = {

        }
        AddCustomerPage.fillData(customerInfo)


        cy.wait(2500)
        AddCustomerPage.elements.saveButton().should('not.be.disabled')
        AddCustomerPage.elements.saveButton().click()

        AddCustomerPage.confirmValidityYes()

        /*new inventory */
        cy.wait(3500)


        InventoryListPage.gotoAddNewInventory()
        const inventoryInfo = {
            name: 'Add Inventory',
            useSerialNumbers: false,
            nonTaxable: true
        }
        AddNewInventoryPage.fillData(inventoryInfo)
        AddNewInventoryPage.clickSaveButton()
        AddNewInventoryPage.checkSaveSuccess()

        /*newEstimate*/
        Dashboard.clickEstimatesTab()

        Dashboard.preventNotificationCard()
        EstimatesPage.clickAddNew()
        cy.wait(4000)
        EstimatesPage.selectCustomer('Genius Giant Inc.')
        EstimatesPage.inventorySelect('Inventory Item 1')
        EstimatesPage.saveAndCloseEstimate()
    })


    it('Should have status Won', () => {

        Dashboard.clickEstimatesTab()
        Dashboard.preventNotificationCard()
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
        Dashboard.preventNotificationCard()
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
        Dashboard.preventNotificationCard()
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
        Dashboard.preventNotificationCard()
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
        Dashboard.preventNotificationCard()
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

    /* Skipped because of error in iframe */
    it.only('Should proceed to Estimate preview', () => {

        Dashboard.clickEstimatesTab()
        Dashboard.preventNotificationCard()
        EstimatesPage.clickAddNew()
        cy.wait(4000)
        EstimatesPage.selectCustomer('Genius Giant Game Inc.')
        EstimatesPage.inventorySelect('Inventory Item 1')
        EstimatesPage.saveEstimate()
        cy.wait(4000)
        EstimatesPage.previewEstimate()
        EstimatesPage.checkEstimatePreview() /* Add more Preview verifications in this method */


    })

    it('Should send estimate as email', () => {
        Dashboard.clickEstimatesTab()
        Dashboard.preventNotificationCard()
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
        Dashboard.preventNotificationCard()
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
        // cy.visit('/estimatesTab/list')
        Dashboard.preventNotificationCard()
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

    /* Skipped becaus ef error in reading iframe */
    it.skip('Create estimate with notes and description added and check on preview.', () => {
        // Dashboard.clickEstimatesTab()
        cy.visit('/estimatesTab/list')
        Dashboard.preventNotificationCard()
        EstimatesPage.clickAddNew()
        cy.wait(4000)
        EstimatesPage.selectCustomer('Genius Giant Game Inc.')
        EstimatesPage.inventorySelect('Air Filter')
        cy.wait(4000)

        const note = 'This is a test note'
        EstimatesPage.addNote(note)
        EstimatesPage.previewEstimate()
        const customerInfoToCheck = {
            note: note,
        }
        EstimatesPage.checkEstimatePreviewValues(customerInfoToCheck) // Can't find element
    })

    it('Test estimate per line "hidden" function - 1 inventory added w/ hide price', () => {
        Dashboard.clickEstimatesTab()
        // cy.visit('/estimatesTab/list')
        Dashboard.preventNotificationCard()
        EstimatesPage.clickAddNew()
        cy.wait(4000)
        EstimatesPage.selectCustomer('Genius Giant Game Inc.')
        EstimatesPage.inventorySelect('Air Filter')
        cy.wait(4000)

        const hiddenOrder = [true]
        EstimatesPage.setRowsToHiddenPrice(hiddenOrder)


        // EstimatesPage.previewEstimate() // Can't find element
    })

    it('Test estimate per line "hidden" function - 1 inventory added w/ hide line', () => {
        Dashboard.clickEstimatesTab()
        // cy.visit('/estimatesTab/list')
        Dashboard.preventNotificationCard()
        EstimatesPage.clickAddNew()
        cy.wait(4000)
        EstimatesPage.selectCustomer('Genius Giant Game Inc.')
        EstimatesPage.inventorySelect('Air Filter')
        cy.wait(4000)

        const hiddenOrder = [true]
        EstimatesPage.setRowsToHiddenLine(hiddenOrder)


        // EstimatesPage.previewEstimate() // Can't find element
    })

    it('Test estimate per line "hidden" function - 3 inventory added w/ 1 visible, 1 hidden line, 1 hidden price', () => {
        Dashboard.clickEstimatesTab()
        // cy.visit('/estimatesTab/list')
        Dashboard.preventNotificationCard()
        EstimatesPage.clickAddNew()
        cy.wait(4000)
        EstimatesPage.selectCustomer('Genius Giant Game Inc.')
        EstimatesPage.inventorySelect('Air Filter')
        cy.wait(4000)
        EstimatesPage.inventorySelect('Inventory Item 1')
        cy.wait(4000)
        EstimatesPage.inventorySelect('Gaming Chair')
        cy.wait(4000)

        const hiddenOrderPrice = [false, false, true]
        EstimatesPage.setRowsToHiddenPrice(hiddenOrderPrice)

        const hiddenOrderLine = [true, false, false]
        EstimatesPage.setRowsToHiddenLine(hiddenOrderLine)
        // EstimatesPage.previewEstimate() // Can't find element
    })


    it('New Estimate - Arrange items - Check if items are applied/arranged correctly', () => {
        Dashboard.clickEstimatesTab()
        // cy.visit('/estimatesTab/list')
        Dashboard.preventNotificationCard()
        EstimatesPage.clickAddNew()
        cy.wait(4000)
        EstimatesPage.selectCustomer('Genius Giant Game Inc.')
        EstimatesPage.inventorySelect('Air Filter')
        cy.wait(4000)
        EstimatesPage.inventorySelect('Inventory Item 1')
        cy.wait(4000)
        EstimatesPage.inventorySelect('Gaming Chair')
        cy.wait(4000)
        EstimatesPage.inventorySelect('Add Inventory - Taxable no SN')
        cy.wait(4000)

    })



})