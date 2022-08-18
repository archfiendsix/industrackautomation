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

    cy.visit('/login')
    LoginPage.loginAdmin('andreiv@industrack.com', 'admin')
    cy.wait(4250)
    // Dashboard.clickSettings()
    // Dashboard.elements.settingsButton().click()
    Dashboard.preventNotificationCard()
    InventoryListPage.gotoAddNewInventory()
  })



  it('Successfully add an Inventory', () => {

    AddNewInventoryPage.fillData()
    AddNewInventoryPage.clickSaveButton()
    AddNewInventoryPage.checkSaveSuccess()
  })

  it('Save unsuccessful when you click save after leaving required fields blank', () => {

    AddNewInventoryPage.fillData()
    AddNewInventoryPage.elements.nameTextBox().clear()
    AddNewInventoryPage.clickSaveButton()
    AddNewInventoryPage.checkNameError()
  })



})