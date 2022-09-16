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
    cy.viewport(1560, 992)
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

    const rand = uuidv4().substring(0, 5)
    const customerInfo = {
      customerNumber: `CN-${rand}`,
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
    const rand = uuidv4().substring(0, 5)
    const customerInfo = {
      customerNumber: `CN-${rand}`,
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
    const rand = uuidv4().substring(0,5)
    const customerInfo = {
      customerNumber: `CN-${rand}`,
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
  it('Make customer inactive - Check unsearchability - Make Customer active again - Check searchability', () => {
    const cn = `CN-${uuidv4().substring(0, 5)}`
    const customerInfo = {
      customerNumber: cn,
      companyName: 'Make this Customer Inactive - then Active again',

    }
    AddCustomerPage.fillData(customerInfo)
    AddCustomerPage.clickSaveButton()
    AddCustomerPage.confirmValidityYes()
    CustomerPage.makeNewCustomerInactive()
    AddCustomerPage.clickBackButton()

    CustomerPage.searchCustomer(customerInfo.customerNumber)

    CustomerPage.confirmUnsearchability(customerInfo.customerNumber)
    CustomerPage.showInactiveCustomers()
    CustomerPage.makeCustomerActive(customerInfo.customerNumber)
    AddCustomerPage.clickBackButton()

    CustomerPage.searchCustomer(customerInfo.customerNumber)
    CustomerPage.showActiveCustomers()
    CustomerPage.searchAndClickCustomer(customerInfo.customerNumber)

  })


  it('Create customer - Create Group - Assign customer to group - Check customer inclusion to group ', () => {
    const rand = uuidv4().substring(0, 5)
    const cn = `${rand}-CN`
    const companyname = `${uuidv4().substring(0, 5)}-Add This Customer To A Group`
    const customerInfo = {
      customerNumber: cn,
      companyName: companyname,

    }
    AddCustomerPage.fillData(customerInfo)
    AddCustomerPage.clickSaveButton()
    AddCustomerPage.confirmValidityYes()

    AddCustomerPage.clickBackButton()
    CustomerPage.gotoManageCustomerGroups()
    const rand1 = uuidv4().substring(0, 5)
    const gn = `${rand1}-Group`
    const addressGroupInfo = {
      groupName: gn,
      customerNumber: customerInfo.customerNumber,
      companyName: customerInfo.companyName
    }
    CustomerPage.addAddressGroup(addressGroupInfo)
    // CustomerPage.gotoManageCustomerGroups()
    const groupNameSearch = addressGroupInfo.groupName
    CustomerPage.filterGroupTable(groupNameSearch)
    CustomerPage.searchAndEditGroup(groupNameSearch)
    CustomerPage.checkAddCompanyOnAddressGroupTable(addressGroupInfo)
  })

  it.only('Create new Customer - Add 2 service locations', () => {
    const rand = uuidv4().substring(0, 5)
    const customerInfo = {
      customerNumber: `Cust-${rand}`,
      companyName: `${uuidv4().substring(0, 5)}-Add 2 service location to this customer`
    }
    AddCustomerPage.fillData(customerInfo)
    AddCustomerPage.clickSaveButton()
    // AddCustomerPage.confirmValidityYes()
    CustomerPage.clickAddNewServiceLocation()
    const serviceLocationInfo = {
      firstName: 'Jennifer',
      lastName: 'McClure',
      phone: '3233245240',
      email: 'edgar1996@yahoo.com',
      locationName: 'Genius Building',
      street: 'Par Dr',
      unitNumber: '1926',
      city: 'Naples',
      state: 'FL',
      zip: '34120',
      country: 'United States of America',
      selectATaxRate: 'Not Selected'

    }
    CustomerPage.addNewServiceLocationModal.fillServiceLocationData(serviceLocationInfo)
    CustomerPage.addNewServiceLocationModal.clickSaveButton()


    CustomerPage.clickAddNewServiceLocation()
    const serviceLocationInfo2 = {
      firstName: 'Abdul',
      lastName: 'Dauphin',
      phone: '209988909',
      email: 'jarrell.pag@hotmail.com',
      locationName: 'Genius Building',
      street: 'Mercer Street',
      unitNumber: '2541',
      city: 'Jump River',
      state: 'WI',
      zip: '54434',
      country: 'United States of America',
      selectATaxRate: 'Not Selected'

    }
    CustomerPage.addNewServiceLocationModal.fillServiceLocationData(serviceLocationInfo2)
    CustomerPage.addNewServiceLocationModal.clickSaveButton()


    CustomerPage.gotoNotesTab()
    CustomerPage.clickAddOfficeNotesButton()
  })


  it('Create customer w/ attachment ', () => {
    const rand = uuidv4().substring(0, 5)
    const cn = `${rand}-CN`
    const companyname = `${uuidv4().substring(0, 5)}-Customer with Attachment`
    const customerInfo = {
      customerNumber: cn,
      companyName: companyname,
      uploadDocument: 'img.jpg'
    }
    AddCustomerPage.fillData(customerInfo)
    AddCustomerPage.clickSaveButton()
    // AddCustomerPage.confirmValidityYes()
    CustomerPage.uploadAnotherAttachment('doc.doc')
    CustomerPage.uploadAnotherAttachment('sitemap.xml')
    // AddCustomerPage.clickBackButton()
    
  })

})



