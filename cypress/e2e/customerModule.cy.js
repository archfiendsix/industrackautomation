import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard"
import AddCustomerPage from "../pages/AddCustomerPage";
import CustomerPage from "../pages/CustomerPage";
import { v4 as uuidv4 } from 'uuid';

require('cypress-plugin-tab');

describe('Add Customer', () => {
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
    // Dashboard.clickCustomerTab()
    cy.visit('/crmTab/list')
    Dashboard.preventNotificationCard()
    CustomerPage.clickAddCustomerButton()

  })

  before(() => {
    cy.fixture('newCustomer').then(function (data) {
      this.data = data;
    })
  })


  it('Successfully create a customer', () => {



    const customerInfo = {
    }
    AddCustomerPage.fillData(customerInfo)



    cy.wait(2500)
    AddCustomerPage.elements.saveButton().should('not.be.disabled')



    AddCustomerPage.elements.saveButton().click()
  })

  it('Should disable save if required fields are not filled', () => {
    const customerInfo = {
    }
    AddCustomerPage.fillData(customerInfo)


    AddCustomerPage.elements.streetAddressTextBox().clear()
    AddCustomerPage.elements.cityTextBox().clear()
    AddCustomerPage.elements.stateTextBox().clear()
    AddCustomerPage.elements.postCodeTextBox().clear()

    cy.wait(3000)
    AddCustomerPage.elements.sameAsCompanyCheckbox().click()
    AddCustomerPage.elements.saveButton().click({ force: true }).should('be.disabled')

    /* Check textboxes to be in red(invalid entries) */
    AddCustomerPage.elements.streetAddressTextBox().should('have.class', 'ng-invalid')
    AddCustomerPage.elements.cityTextBox().should('have.class', 'ng-invalid')
    AddCustomerPage.elements.stateTextBox().should('have.class', 'ng-invalid')
    AddCustomerPage.elements.postCodeTextBox().should('have.class', 'ng-invalid')

  })

  it('Shows warning when saving unvalidated address', () => {



    const customerInfo = {
    }
    AddCustomerPage.fillData(customerInfo)


    cy.wait(2500)
    AddCustomerPage.elements.saveButton().should('not.be.disabled')

    AddCustomerPage.elements.saveButton().click()

    AddCustomerPage.checkWarningDialog('This address book doesn\'t have valid coordinates and may not be visible in the mobile app. Do you want to save without validating the address?')

  })


  it('Disable save if email is invalid', () => {

    const customerInfo = {
      email: 'dina.schill@'
    }
    AddCustomerPage.fillData(customerInfo)

    AddCustomerPage.checkEmailErrorMessage('Incorrect email')
    // AddCustomerPage.clickSaveButton()
    AddCustomerPage.checkSaveButtonDisabled()
  })

  it('Add Service Location to a newly created Customer - Added Location has no selected tax rate', () => {
    const customerInfo = {
      customerNumber: `CN-${uuidv4()}`,
      companyName: 'Add service location to this customer'
    }
    AddCustomerPage.fillData(customerInfo)
    AddCustomerPage.clickSaveButton()
    AddCustomerPage.confirmValidityYes()
    CustomerPage.clickAddNewServiceLocation()
    const serviceLocationInfo = {

    }
    CustomerPage.addNewServiceLocationModal.fillServiceLocationData(serviceLocationInfo)
    CustomerPage.addNewServiceLocationModal.clickSaveButton()
    // cy.wait(5000)
    // Dashboard.clickCustomerTab()
    // CustomerPage.searchCustomer(customerInfo.companyName)
  })

  it('Add Service Location to a newly created Customer - Tax Rate Added to Added Location', () => {
    const customerInfo = {
      customerNumber: `CN-${uuidv4()}`,
      companyName: 'Add service location to this customer',

    }
    AddCustomerPage.fillData(customerInfo)
    AddCustomerPage.clickSaveButton()
    AddCustomerPage.confirmValidityYes()
    CustomerPage.clickAddNewServiceLocation()
    const serviceLocationInfo = {
      selectATaxRate: 'New Tax'
    }
    CustomerPage.addNewServiceLocationModal.fillServiceLocationData(serviceLocationInfo)
    CustomerPage.addNewServiceLocationModal.clickSaveButton()

  })

  it('Test with one tag and verify that tags are assigned to customer', () => {
    Dashboard.preventNotificationCard()
    const customerInfo = {
      customerNumber: `CN-${uuidv4()}`,
      companyName: 'Add Tag to this customer',
    }
    AddCustomerPage.fillData(customerInfo)
    Dashboard.preventNotificationCard()
    AddCustomerPage.validateAddress()


    // AddCustomerPage.elements.customerNumberTextBox().then($el => {
    //   cn = $el.text().toString()
    // })
    // AddCustomerPage.elements.customerNumberTextBox().invoke('val').as('cn')

    AddCustomerPage.clickSaveButton()
    const tags = ['Tag 1', 'Tag 2', 'Tag 3']
    AddCustomerPage.addTags(tags)
    AddCustomerPage.clickBackButton()

    // CustomerPage.searchAndVerifyTags(tags) -> modify this


  })

  // it.only('Create estimate with notes and description added and check on preview.', () => { ==> modify this
  //   Dashboard.preventNotificationCard()
  //   const customerInfo = {
  //     customerNumber: `CN-${uuidv4()}`,
  //     companyName: 'Add Note to this customer and check',
  //   }
  //   AddCustomerPage.fillData(customerInfo)
  //   Dashboard.preventNotificationCard()
  //   AddCustomerPage.validateAddress()

  //   AddCustomerPage.clickSaveButton()

  //   // CustomerPage.searchAndVerifyTags(tags) -> modify this
  //   CustomerPage.gotoAddNewEstimate()

  // })


})