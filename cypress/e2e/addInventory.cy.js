import "../pages/loginPage"
import loginPage from "../pages/loginPage";
import dashboard from "../pages/dashboard"
import settingsPage from "../pages/settingsPage";
import addNewInventoryPage from "../pages/addNewInventoryPage";

require('cypress-plugin-tab');

describe('Add Inventory', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  })

  beforeEach(() => {

    cy.visit('/login')
    loginPage.loginAdmin('andreiv@industrack.com', 'admin')
    cy.wait(4250)
    // dashboard.clickSettings()
    // dashboard.elements.settingsButton().click()
    settingsPage.gotoAddNewInventory()
  })
  


  it('Successfully add an Inventory', () => {

    addNewInventoryPage.fillData()
    addNewInventoryPage.clickSaveButton()
    addNewInventoryPage.checkSaveSuccess()
  })

  it('Save unsuccessful when you click save after leaving required fields blank', () => {

    addNewInventoryPage.fillData()
    addNewInventoryPage.elements.nameTextBox().clear()
    addNewInventoryPage.clickSaveButton()
    addNewInventoryPage.checkNameError()
  })



})