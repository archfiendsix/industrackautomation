import "../pages/LoginPage"
import LoginPage from "../pages/loginPage";
import Dashboard from "../pages/dashboard"
import AddCustomerPage from "../pages/addCustomerPage";
import CustomerPage from "../pages/customerPage";

require('cypress-plugin-tab');

describe('Add Customer', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  })

  beforeEach(() => {

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



    AddCustomerPage.elements.customerNumberTextBox().type('0001')
    AddCustomerPage.elements.companyNameTextBox().type('Genius Game Inc.')
    AddCustomerPage.elements.firstNameTextBox().type('Francis')
    AddCustomerPage.elements.lastNameTextBox().type('White')
    AddCustomerPage.elements.websiteAddressTextBox().type('https://geniusgiant.com/')
    AddCustomerPage.elements.phoneNumberTextBox().type('8317474895')
    AddCustomerPage.elements.emailAddressTextBox().type('dina.schill@gmail.com')
    AddCustomerPage.elements.faxNumberTextBox().type('6692211141')
    AddCustomerPage.elements.locationNameTextBox().type('Genius Building')
    AddCustomerPage.elements.streetAddressTextBox().type('Cemetery Street')
    AddCustomerPage.elements.unitNumberTextBox().type('4955')
    AddCustomerPage.elements.cityTextBox().type('Salinas')
    AddCustomerPage.elements.stateTextBox().type('CA')
    AddCustomerPage.elements.postCodeTextBox().type('93901')
    AddCustomerPage.elements.countryTextBox().type('United States of America')



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



    AddCustomerPage.elements.customerNumberTextBox().type('0001')
    AddCustomerPage.elements.companyNameTextBox().type('Genius Game Inc.')
    AddCustomerPage.elements.firstNameTextBox().type('Francis')
    AddCustomerPage.elements.lastNameTextBox().type('White')
    AddCustomerPage.elements.websiteAddressTextBox().type('https://geniusgiant.com/')
    AddCustomerPage.elements.phoneNumberTextBox().type('8317474895')
    AddCustomerPage.elements.emailAddressTextBox().type('dina.schill@gmail.com')
    AddCustomerPage.elements.faxNumberTextBox().type('6692211141')
    AddCustomerPage.elements.locationNameTextBox().type('Genius Building')
    AddCustomerPage.elements.streetAddressTextBox().type('Cemetery Street')
    AddCustomerPage.elements.unitNumberTextBox().type('4955')
    AddCustomerPage.elements.cityTextBox().type('Salinas')
    AddCustomerPage.elements.stateTextBox().type('CA')
    AddCustomerPage.elements.postCodeTextBox().type('93901')
    AddCustomerPage.elements.countryTextBox().type('United States of America')


    cy.wait(2500)
    AddCustomerPage.elements.saveButton().should('not.be.disabled')

    AddCustomerPage.elements.saveButton().click()

    AddCustomerPage.checkWarningDialog('This address book doesn\'t have valid coordinates and may not be visible in the mobile app. Do you want to save without validating the address?')

  })


  it('Disable save if email is invalid', () => {
    AddCustomerPage.elements.customerNumberTextBox().type('0001')
    AddCustomerPage.elements.companyNameTextBox().type('Genius Game Inc.')
    AddCustomerPage.elements.firstNameTextBox().type('Francis')
    AddCustomerPage.elements.lastNameTextBox().type('White')
    AddCustomerPage.elements.websiteAddressTextBox().type('https://geniusgiant.com/')
    AddCustomerPage.elements.phoneNumberTextBox().type('8317474895')
    AddCustomerPage.elements.emailAddressTextBox().clear().type('dina.schill@')
    AddCustomerPage.elements.faxNumberTextBox().type('6692211141')
    AddCustomerPage.elements.locationNameTextBox().type('Genius Building')
    AddCustomerPage.elements.streetAddressTextBox().type('Cemetery Street')
    AddCustomerPage.elements.unitNumberTextBox().type('4955')
    AddCustomerPage.elements.cityTextBox().type('Salinas')
    AddCustomerPage.elements.stateTextBox().type('CA')
    AddCustomerPage.elements.postCodeTextBox().type('93901')
    AddCustomerPage.elements.countryTextBox().type('United States of America')

    AddCustomerPage.checkEmailErrorMessage('Incorrect email')
    AddCustomerPage.clickSaveButton()
    AddCustomerPage.checkSaveButtonDisabled()
  })


})