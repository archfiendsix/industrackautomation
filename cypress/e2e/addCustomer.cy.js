import "../pages/loginPage"
import loginPage from "../pages/loginPage";
import dashboard from "../pages/dashboard"
import addcustomerPage from "../pages/addcustomerPage";

require('cypress-plugin-tab');

describe('Add Customer', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  })

  beforeEach(() => {

    cy.visit('/login')
    loginPage.loginAdmin('andreiv@industrack.com', 'admin')
    cy.wait(4250)
    dashboard.preventNotificationCard()
    dashboard.clickCustomerTab()
    dashboard.clickAddCustomerButton()

  })

  before(() => {
    cy.fixture('newCustomer').then(function (data) {
      this.data = data;
    })
  })


  it('Successfully create a customer', () => {



    addcustomerPage.elements.customerNumberTextBox().type('0001')
    addcustomerPage.elements.companyNameTextBox().type('Genius Game Inc.')
    addcustomerPage.elements.firstNameTextBox().type('Francis')
    addcustomerPage.elements.lastNameTextBox().type('White')
    addcustomerPage.elements.websiteAddressTextBox().type('https://geniusgiant.com/')
    addcustomerPage.elements.phoneNumberTextBox().type('8317474895')
    addcustomerPage.elements.emailAddressTextBox().type('dina.schill@gmail.com')
    addcustomerPage.elements.faxNumberTextBox().type('6692211141')
    addcustomerPage.elements.locationNameTextBox().type('Genius Building')
    addcustomerPage.elements.streetAddressTextBox().type('Cemetery Street')
    addcustomerPage.elements.unitNumberTextBox().type('4955')
    addcustomerPage.elements.cityTextBox().type('Salinas')
    addcustomerPage.elements.stateTextBox().type('CA')
    addcustomerPage.elements.postCodeTextBox().type('93901')
    addcustomerPage.elements.countryTextBox().type('United States of America')



    cy.wait(2500)
    addcustomerPage.elements.saveButton().should('not.be.disabled')



    addcustomerPage.elements.saveButton().click()
  })

  it('Should disable save if required fields are not filled', () => {

    addcustomerPage.fillData()


    addcustomerPage.elements.streetAddressTextBox().clear()
    addcustomerPage.elements.cityTextBox().clear()
    addcustomerPage.elements.stateTextBox().clear()
    addcustomerPage.elements.postCodeTextBox().clear()

    cy.wait(3000)
    addcustomerPage.elements.sameAsCompanyCheckbox().click()
    addcustomerPage.elements.saveButton().click({ force: true }).should('be.disabled')

    /* Check textboxes to be in red(invalid entries) */
    addcustomerPage.elements.streetAddressTextBox().should('have.class', 'ng-invalid')
    addcustomerPage.elements.cityTextBox().should('have.class', 'ng-invalid')
    addcustomerPage.elements.stateTextBox().should('have.class', 'ng-invalid')
    addcustomerPage.elements.postCodeTextBox().should('have.class', 'ng-invalid')
    // addcustomerPage.elements.billingStreetAddressTextbox().should('have.class', 'ng-invalid')
    // addcustomerPage.elements.billingCityTextbox().should('have.class', 'ng-invalid')
    // addcustomerPage.elements.billingStateProvinceTextbox().should('have.class', 'ng-invalid')
    // addcustomerPage.elements.billingPostCodeTextBox().should('have.class', 'ng-invalid')
  })

  it('Shows warning when saving unvalidated address', () => {



    addcustomerPage.elements.customerNumberTextBox().type('0001')
    addcustomerPage.elements.companyNameTextBox().type('Genius Game Inc.')
    addcustomerPage.elements.firstNameTextBox().type('Francis')
    addcustomerPage.elements.lastNameTextBox().type('White')
    addcustomerPage.elements.websiteAddressTextBox().type('https://geniusgiant.com/')
    addcustomerPage.elements.phoneNumberTextBox().type('8317474895')
    addcustomerPage.elements.emailAddressTextBox().type('dina.schill@gmail.com')
    addcustomerPage.elements.faxNumberTextBox().type('6692211141')
    addcustomerPage.elements.locationNameTextBox().type('Genius Building')
    addcustomerPage.elements.streetAddressTextBox().type('Cemetery Street')
    addcustomerPage.elements.unitNumberTextBox().type('4955')
    addcustomerPage.elements.cityTextBox().type('Salinas')
    addcustomerPage.elements.stateTextBox().type('CA')
    addcustomerPage.elements.postCodeTextBox().type('93901')
    addcustomerPage.elements.countryTextBox().type('United States of America')


    cy.wait(2500)
    addcustomerPage.elements.saveButton().should('not.be.disabled')

    addcustomerPage.elements.saveButton().click()

    addcustomerPage.checkWarningDialog('This address book doesn\'t have valid coordinates and may not be visible in the mobile app. Do you want to save without validating the address?')

  })


  it('Disable save if email is invalid', () => {
    addcustomerPage.elements.customerNumberTextBox().type('0001')
    addcustomerPage.elements.companyNameTextBox().type('Genius Game Inc.')
    addcustomerPage.elements.firstNameTextBox().type('Francis')
    addcustomerPage.elements.lastNameTextBox().type('White')
    addcustomerPage.elements.websiteAddressTextBox().type('https://geniusgiant.com/')
    addcustomerPage.elements.phoneNumberTextBox().type('8317474895')
    addcustomerPage.elements.emailAddressTextBox().clear().type('dina.schill@')
    addcustomerPage.elements.faxNumberTextBox().type('6692211141')
    addcustomerPage.elements.locationNameTextBox().type('Genius Building')
    addcustomerPage.elements.streetAddressTextBox().type('Cemetery Street')
    addcustomerPage.elements.unitNumberTextBox().type('4955')
    addcustomerPage.elements.cityTextBox().type('Salinas')
    addcustomerPage.elements.stateTextBox().type('CA')
    addcustomerPage.elements.postCodeTextBox().type('93901')
    addcustomerPage.elements.countryTextBox().type('United States of America')

    addcustomerPage.checkEmailErrorMessage('Incorrect email')
    addcustomerPage.clickSaveButton()
    addcustomerPage.checkSaveButtonDisabled()
  })


})