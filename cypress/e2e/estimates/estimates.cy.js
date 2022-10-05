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
        cy.wait(4250)

        /* Prevent the notification card from interfering */
        Dashboard.preventNotificationCard()
        Dashboard.preventNotificationCard()
        Dashboard.preventNotificationCard()
    })

    it('Add Customer with one added Service Location - Add Inventory - Add Non-inventory - Add Service - Add Assembly - New Estimates w/ all items', () => {
        Dashboard.clickCustomerTab()
        // cy.visit('/crmTab/list')
        Dashboard.preventNotificationCard()
        // CustomerPage.clickAddCustomerButton()
        CustomerPage.gotoAddNewCustomer()
        // Add new Customer
        const rand = uuidv4().substring(0, 5)
        const customerInfo = {
            customerNumber: `Cust-${rand}`,
            companyName: `Company-${uuidv4().substring(0, 5)}`,
            street: 'Cemetery Street',
            validateAddress: true
        }
        AddCustomerPage.fillData(customerInfo)
        AddCustomerPage.clickSaveButton()
        
        //Add Service Location
        CustomerPage.clickAddNewServiceLocation()
        const serviceLocationInfo = {
            firstName: 'Jennifer',
            lastName: 'McClure',
            phone: '3233245240',
            email: 'edgar1996@yahoo.com',
            locationName: 'Genius Building',
            street: 'Par Dr',
            unitNumber: '1926',
            city: 'Naples',
            state: 'FL',
            zip: '34120',
            country: 'United States of America',
            selectATaxRate: 'Not Selected'

        }
        CustomerPage.addNewServiceLocationModal.fillServiceLocationData(serviceLocationInfo)
        CustomerPage.addNewServiceLocationModal.clickSaveButton()


        //Add Inventory
        // Dashboard.clickSettings()
        // Dashboard.elements.settingsButton().click()
        // InventoryListPage.gotoAddNewInventory()
        const inventoryInfo = {
            sku: `SKU-${uuidv4().substring(0, 5)}`,
            // sku: `SKU-${uuidv4().substring(0, 5)}`,
            name: `Inventory-`,
            // name: `Inventory-${uuidv4().substring(0, 5)}`,
            useSerialNumbers: false,
        }
        // AddNewInventoryPage.fillData(inventoryInfo)
        // AddNewInventoryPage.clickSaveButton()

        // Add Non Inventory
        // InventoryListPage.gotoAddNewNonInventoryModal()
        // let randName = uuidv4().substring(0, 5)
        let randSKU = uuidv4().substring(0, 5)
        const nonInventoryInfo = {
            name: `NonInventory-`,
            // name: `NonInventory-${randName}
            sku: `SKU-${randSKU}`,
            vendor: 'Genius Vendor',
            nonTaxable: false,
            salesPriceRate: '150',
            salesDescription: 'This is a test description',
            cost: '100',
            mainWarehouseQuantityOnHand: '1'
        }
        // InventoryListPage.addNewNonInventory(nonInventoryInfo)


        // Add new service
        // InventoryListPage.gotoAddNewServiceModal()
        // let serviceRandName = uuidv4().substring(0, 5)
        let serviceRandSKU = uuidv4().substring(0, 5)
        const serviceInfo = {
            name: `Service-`,
            // name: `Service-${serviceRandName}`,
            sku: `SKU-${serviceRandSKU}`,
            nonTaxable: false,
            salesPriceRate: '150',
            salesDescription: 'This is a test description - Service',
            cost: '200',
        }
        // InventoryListPage.addNewService(serviceInfo)

        // Add new Assembly
        // InventoryListPage.gotoAddNewAssemblyModal()
        // let assemblyRandName = uuidv4().substring(0, 5)
        let assemblyRandSKU = uuidv4().substring(0, 5)
        const assemblyInfo = {
            name: `Assembly-`,
            // name: `Assembly-${assemblyRandName}`,
            sku: `SKU-${assemblyRandSKU}`,
            nonTaxable: false,
            configurable: true,
            parts: [
                {
                    name: inventoryInfo.name,
                    qty: '1'
                },
                {
                    name: inventoryInfo.name,
                    qty: '1'
                }
            ],
            services: [
                {
                    name: serviceInfo.name,
                    qty: '1'
                }
            ],
            salesDescription: 'This is a test Assembly description',
        }
        // InventoryListPage.addNewAssembly(assemblyInfo)


        // Add New Estimate
        Dashboard.clickEstimatesTab()
        // cy.visit('/estimatesTab/list')
        Dashboard.preventNotificationCard()
        EstimatesPage.clickAddNew()
        EstimatesPage.selectCustomer(customerInfo.companyName)
        EstimatesPage.inventorySelect(inventoryInfo.name)
        cy.wait(4000)
        EstimatesPage.inventorySelect(nonInventoryInfo.name)
        cy.wait(4000)
        EstimatesPage.inventorySelect(serviceInfo.name)
        cy.wait(4000)
        EstimatesPage.inventorySelect(assemblyInfo.name)

        // Assign discounts on rows
        EstimatesPage.addDiscountInRow(0, 30, '%', 3)
        EstimatesPage.addDiscountInRow(0, 25, '$', 3)
        cy.wait(4000)

        // Add random discounts
        EstimatesPage.addRandomInvoiceDiscount()

        //Check invoice total
        EstimatesPage.checkInvoiceTotal()
        EstimatesPage.saveEstimate()

        //Check row totals
        EstimatesPage.checkRowsTotal()

    })


})