import "../pages/LoginPage"
import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/dashboard"
import SettingsPage from "../pages/settingsPage";
import AddNewInventoryPage from "../pages/addNewInventoryPage";

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
    SettingsPage.gotoAddNewInventory()
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