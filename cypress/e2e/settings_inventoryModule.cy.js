/// <reference types="cypress" />

import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard"
import { InventoryListPage } from "../pages/settings/inventory";
import AddNewInventoryPage from "../pages/AddNewInventoryPage";
import { v4 as uuidv4 } from 'uuid';

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



  it('Successfully add an Inventory - Not using serial #s, None Taxable', () => {
    InventoryListPage.gotoAddNewInventory()
    const inventoryInfo = {
      name: 'Add Inventory - Taxable no SN',
      useSerialNumbers: false,
      nonTaxable: true

    }
    AddNewInventoryPage.fillData(inventoryInfo)
    AddNewInventoryPage.clickSaveButton()
    AddNewInventoryPage.checkSaveSuccess()
  })

  it('Successfully add an Inventory - Not using serial #s, Taxable', () => {
    InventoryListPage.gotoAddNewInventory()
    const inventoryInfo = {
      name: 'Add Inventory - Taxable no SN',
      useSerialNumbers: false,
      nonTaxable: false
    }
    AddNewInventoryPage.fillData(inventoryInfo)
    AddNewInventoryPage.clickSaveButton()
    AddNewInventoryPage.checkSaveSuccess()
  })

  it('(Negative) Save unsuccessful when you click save after leaving required fields blank', () => {
    InventoryListPage.gotoAddNewInventory()
    const inventoryInfo = {
      name: '',
    }
    AddNewInventoryPage.elements.nameTextBox().click().clear().type('{backspace}')
    AddNewInventoryPage.fillData(inventoryInfo)
    // AddNewInventoryPage.clickSaveButton()
    // AddNewInventoryPage.checkNameError()
  })

  it('Add an inventory that is set to non taxable - quantity on hand: 1, Reorder Point: 1', () => {
    InventoryListPage.gotoAddNewInventory()
    const inventoryInfo = {
      name: 'NonTaxable',
      nonTaxable: true
    }
    AddNewInventoryPage.fillData(inventoryInfo)
    AddNewInventoryPage.clickSaveButton()
  })

  it('Add an inventory that is set to non taxable - Use Serial #\'s and serial numbers by batch to increase quantity on hand', () => {
    InventoryListPage.gotoAddNewInventory()
    // it('test', () => {
    //     const uuid = () => Cypress._.random(0, 1e20)
    //     const id = uuid()
    // })

    // let randomId = () => {
    //   const uuid = () => Cypress._.random(0, 500)
    //   const id = uuid()
    //   return id.toString()
    // }
    const inventoryInfo = {
      sku: `SKU${uuidv4()}`,
      name: 'serialNumbers Added',
      nonTaxable: true,
      useSerialNumbers: true,
      serialNumbers: [`SN${uuidv4()}`, `SN${uuidv4()}`, `SN${uuidv4()}`]
    }
    AddNewInventoryPage.fillData(inventoryInfo)
    AddNewInventoryPage.clickSaveButton()
  })

  it('Add an inventory (taxable) - Use Serial #\'s and serial numbers by batch to increase quantity on hand', () => {
    InventoryListPage.gotoAddNewInventory()
    const inventoryInfo = {
      sku: `SKU${uuidv4()}`,
      name: 'Add Inventory - SN Used',
      useSerialNumbers: true,
      serialNumbers: [`SN${uuidv4()}`, `SN${uuidv4()}`, `SN${uuidv4()}`]
    }
    AddNewInventoryPage.fillData(inventoryInfo)
    AddNewInventoryPage.clickSaveButton()
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