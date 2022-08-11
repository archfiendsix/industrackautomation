class addCustomer {


    elements = {
        saveButton: () => cy.get('.form-horizontal > .modal-footer > .btn-primary'),
        customerNumberTextBox: () => cy.get('input#customerNumber'),
        companyNameTextBox: () => cy.get('input#companyName'),
        firstNameTextBox: () => cy.get('input#firstName'),
        lastNameTextBox: () => cy.get('input#lastName'),
        websiteAddressTextBox: () => cy.get('input#websiteAddress'),
        phoneNumberTextBox: () => cy.get('input#phoneNumber'),
        emailAddressTextBox: () => cy.get('input#emailAddress'),
        faxNumberTextBox: () => cy.get('input#faxNumber'),
        locationNameTextBox: () => cy.get('input#locationName'),
        streetAddressTextBox: () => cy.get('input#streetAddress'),
        unitNumberTextBox: () => cy.get('input#unitNumber'),
        cityTextBox: () => cy.get('input#city'),
        stateTextBox: () => cy.get('input#state'),
        postCodeTextBox: () => cy.get('input#postCode'),
        countryTextBox: () => cy.get('input#country'),
        emailErrror: () => cy.get('input#emailAddress+.alert'),
        warningModal: () => cy.get('.cdk-overlay-pane.warningModal .mat-dialog-content p'),
        addressValidityWarningModalConfirm:()=> cy.get('.cdk-overlay-pane.warningModal .mat-dialog-actions .btn.btn-primary.mat-button.mat-button-base'),
        sameAsCompanyCheckbox: ()=> cy.get('input#billingAddressEquals'),
        billingStreetAddressTextbox:()=> cy.get('input#billingStreetAddress'),
        billingCityTextbox:()=> cy.get('input#billingCity'),
        billingStateProvinceTextbox:()=> cy.get('input#billingStateProvince'),
        billingPostCodeTextBox:()=> cy.get('input#billingPostCode'),
    }

    checkSaveButtonDisabled = () => {
        this.elements.saveButton().should('be.disabled')
    }

    clickSaveButton = () => {
        this.elements.saveButton().click()
    }

    clickBillingAddressEquals=()=> {
        this.elements.sameAsCompanyCheckbox().click()
    }

    checkEmailErrorMessage = (errorMessage) => {
        this.elements.emailErrror().should('be.visible').contains(errorMessage)
    }



    checkWarningDialog(body) {
        this.elements.warningModal().should('be.visible').contains(body)
    }

    fillData = () => {
        this.elements.customerNumberTextBox().type('0001')
        this.elements.companyNameTextBox().type('Genius Game Inc.')
        this.elements.firstNameTextBox().type('Francis')
        this.elements.lastNameTextBox().type('White')
        this.elements.websiteAddressTextBox().type('https://geniusgiant.com/')
        this.elements.phoneNumberTextBox().type('8317474895')
        this.elements.emailAddressTextBox().type('dina.schill@gmail.com')
        this.elements.faxNumberTextBox().type('6692211141')
        this.elements.locationNameTextBox().type('Genius Building')
        this.elements.streetAddressTextBox().type('Cemetery Street')
        this.elements.unitNumberTextBox().type('4955')
        this.elements.cityTextBox().type('Salinas')
        this.elements.stateTextBox().type('CA')
        this.elements.postCodeTextBox().type('93901')
        this.elements.countryTextBox().type('United States of America')
    }

    confirmValidityYes=()=> {
        this.elements.addressValidityWarningModalConfirm().click()
    }

    
}


module.exports = new addCustomer();