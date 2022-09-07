import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard"
import AddCustomerPage from "../pages/AddCustomerPage";
import CustomerPage from "../pages/CustomerPage";

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
    Dashboard.clickCustomerTab()
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

    AddCustomerPage.fillData()


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
    // AddCustomerPage.elements.billingStreetAddressTextbox().should('have.class', 'ng-invalid')
    // AddCustomerPage.elements.billingCityTextbox().should('have.class', 'ng-invalid')
    // AddCustomerPage.elements.billingStateProvinceTextbox().should('have.class', 'ng-invalid')
    // AddCustomerPage.elements.billingPostCodeTextBox().should('have.class', 'ng-invalid')
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
      customerNumber: '192379182739812',
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
      customerNumber: '192379182739812',
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
    // cy.wait(5000)
    // Dashboard.clickCustomerTab()
    // CustomerPage.searchCustomer(customerInfo.companyName)
  })


})