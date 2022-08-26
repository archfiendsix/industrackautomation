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
    
    cy.visit('/login')
    LoginPage.loginAdmin('andreiv@industrack.com', 'admin')
    cy.wait(4250)
    Dashboard.clickSettings()
    Dashboard.elements.settingsButton().click()
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