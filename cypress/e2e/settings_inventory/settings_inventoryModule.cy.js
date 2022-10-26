/// <reference types="cypress" />

import LoginPage from "../../pages/LoginPage";
import Dashboard from "../../pages/Dashboard"
import { InventoryListPage } from "../../pages/settings/inventory";
import AddNewInventoryPage from "../../pages/AddNewInventoryPage";
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

    Dashboard.clickSettings()
    Dashboard.elements.settingsButton().click()
    // Dashboard.preventNotificationCard()

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

  



})