/// <reference types="cypress" />

import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard"
import { InventoryListPage } from "../pages/settings/inventory";
import AddNewInventoryPage from "../pages/AddNewInventoryPage";

require('cypress-plugin-tab');

describe('Add Inventory', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  })

  beforeEach(() => {
    cy.viewport(1280, 768)
    cy.visit('/login')
    LoginPage.loginAdmin('andreiv@industrack.com', 'admin')
    cy.wait(4250)
    Dashboard.clickSettings()
    Dashboard.elements.settingsButton().click()
    Dashboard.preventNotificationCard()
    
  })



  // Basic adding of inventory
  // Taxable inventory
  // Cost at $1000
  // 1 Warehouse Quantity on Hand
  it('Successfully add an Inventory - Not using serial #s, Taxable', () => {
    InventoryListPage.gotoAddNewInventory()
    const inventoryInfo = {

    }
    AddNewInventoryPage.fillData(inventoryInfo)
    AddNewInventoryPage.clickSaveButton()
    AddNewInventoryPage.checkSaveSuccess()
  })

  it('Save unsuccessful when you click save after leaving required fields blank', () => {
    InventoryListPage.gotoAddNewInventory()
    const inventoryInfo = {
    }
    AddNewInventoryPage.elements.nameTextBox().click().clear().type('{backspace}')
    AddNewInventoryPage.fillData(inventoryInfo)
    AddNewInventoryPage.clickSaveButton()
    // AddNewInventoryPage.checkNameError()
  })

  it.only('Add an inventory that is set to non taxable - quantity on hand: 1, Reorder Point: 1', () => {
    InventoryListPage.gotoAddNewInventory()
    const inventoryInfo = {
      name: 'NonTaxable',
      nonTaxable: true
    }
    AddNewInventoryPage.fillData(inventoryInfo)
    AddNewInventoryPage.clickSaveButton()
    // AddNewInventoryPage.checkNameError()
  })

  it.only('Add an inventory that is set to non taxable - Use Serial #\'s and serial numbers by batch to increase quantity on hand', () => {
    InventoryListPage.gotoAddNewInventory()
    const inventoryInfo = {
      name: 'serialNumbers',
      nonTaxable: true,
      useSerialNumbers: true,
      serialNumbers: ['123','1234','12345']
    }
    AddNewInventoryPage.fillData(inventoryInfo)
    AddNewInventoryPage.clickSaveButton()
    // AddNewInventoryPage.checkNameError()
  })

  


  // it("Test get", () => {

  //   // cy.intercept('GET','https://onetrackwebapiprod.azurewebsites.net/api/AddressBooks/GetAddressBookById/1083040').as('getInfo')
  //   cy.intercept('https://onetrackwebapiprod.azurewebsites.net/api/AddressBooks/GetAddressBookById/1083040').as('getInfo')
  //   cy.log("haha")
  //   cy.visit('https://onetrack.industrack.com/crmTab/overview/1083040#eyJxdWVyeSI6eyJwYWdlU2l6ZSI6NTAsInNvcnRCeSI6ImNvbXBhbnlOYW1lIiwic29ydERpcmVjdGlvbiI6ImFzYyJ9LCJleHRyYSI6ZmFsc2V9')

  //   cy.wait(5000)
  //   // Dashboard.elements.customerTab().click()
  //   // cy.get('table tbody tr:first-child()').first().click({ force: true })
  //   cy.wait('@getInfo').should(response=> {
  //     cy.log(response.response.body.city)
  //   })
  // })


})