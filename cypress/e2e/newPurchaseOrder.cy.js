import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import { GeneralSettings } from '../pages/settings/company_settings';
import PurchaseOrderPage from "../pages/PurchaseOrderPage";

require('cypress-plugin-tab');

describe('New Purchase Order Module', () => {
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
        Dashboard.clickPurchaseOrderTab()

    })


    //Basic adding of new purchase order from 1 vendor
    it('Basic new purchase order', () => {
        PurchaseOrderPage.clickAddNewPurchaseOrder()
        PurchaseOrderPage.addPurchaseOrderModal.selectVendor('GG')
        PurchaseOrderPage.addPurchaseOrderModal.enterInvoiceNumber('1234567890')
        PurchaseOrderPage.addPurchaseOrderModal.enterJobNumber('123456789')
        PurchaseOrderPage.addPurchaseOrderModal.enterShippingAddress('Sample Shipping Address, 4400')
        PurchaseOrderPage.addPurchaseOrderModal.selectShipVia('UPS')
        PurchaseOrderPage.addPurchaseOrderModal.enterInventory()
        PurchaseOrderPage.addPurchaseOrderModal.savePurchaseOrder()
    })




})