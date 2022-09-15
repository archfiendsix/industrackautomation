class AddCustomerPage {


    elements = {
        saveButton: () => cy.get('app-customers-edit-form .modal-footer button').contains('Save'),
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
        addressValidityWarningModalConfirm: () => cy.get('.cdk-overlay-pane.warningModal .mat-dialog-actions .btn.btn-primary.mat-button.mat-button-base'),
        sameAsCompanyCheckbox: () => cy.get('input#billingAddressEquals'),
        billingStreetAddressTextbox: () => cy.get('input#billingStreetAddress'),
        billingCityTextbox: () => cy.get('input#billingCity'),
        billingStateProvinceTextbox: () => cy.get('input#billingStateProvince'),
        billingPostCodeTextBox: () => cy.get('input#billingPostCode'),
        validateAddress: () => cy.get('.form-group a').contains('Validate address'),
        latitudeField: () => cy.get('input#lat'),
        longitudeField: () => cy.get('input#lng'),
        validateAddressModal: {
            OKButton: () => cy.get('validate-coordinates-modal button').contains('Ok')
        },
        customerOverviewModal: {
            tagsField: () => cy.get('app-customers-overview .mat-chip-list-wrapper input[placeholder="Assign"]'),
            tagsFieldOption: () => cy.get('mat-option'),
            backButton:()=> cy.get('app-customers-overview a[routerlink="/crmTab/list"]').contains('Back')
        }
    }

    checkSaveButtonDisabled = () => {
        // this.elements.saveButton().should('be.disabled')
        this.elements.saveButton().then(el => {
            expect(el).to.be.disabled
        })
    }

    clickSaveButton = () => {
        this.elements.saveButton().click()
    }

    clickBillingAddressEquals = () => {
        this.elements.sameAsCompanyCheckbox().click()
    }

    checkEmailErrorMessage = (errorMessage) => {
        this.elements.emailErrror().should('be.visible').contains(errorMessage)
    }



    checkWarningDialog(body) {
        this.elements.warningModal().should('be.visible').contains(body)
    }

    fillData = (newCustomerInfo) => {
        const inputCustomerInfo = {
            customerNumber: newCustomerInfo.customerNumber || '0001',
            companyName: newCustomerInfo.companyName || 'Genius Game Inc.',
            firstName: newCustomerInfo.firstName || 'Francis',
            lastName: newCustomerInfo.lastName || 'White',
            companyWebsite: newCustomerInfo.companyWebsite || 'https://geniusgiant.com/',
            phone: newCustomerInfo.phone || '8317474895',
            email: newCustomerInfo.email || 'dina.schill@gmail.com',
            mobile: newCustomerInfo.mobile || '6692211141',
            locationName: newCustomerInfo.locationName || 'Genius Building',
            street: newCustomerInfo.street || 'Cemetery Street',
            unitNumber: newCustomerInfo.unitNumber || '4955',
            city: newCustomerInfo.city || 'Salinas',
            state: newCustomerInfo.state || 'CA',
            zip: newCustomerInfo.zip || '93901',
            country: newCustomerInfo.country || 'United States of America',


        }
        this.elements.customerNumberTextBox().type(inputCustomerInfo.customerNumber)
        this.elements.companyNameTextBox().type(inputCustomerInfo.companyName)
        this.elements.firstNameTextBox().type(inputCustomerInfo.firstName)
        this.elements.lastNameTextBox().type(inputCustomerInfo.lastName)
        this.elements.websiteAddressTextBox().type(inputCustomerInfo.companyWebsite)
        this.elements.phoneNumberTextBox().type(inputCustomerInfo.phone)
        this.elements.phoneNumberTextBox().type(inputCustomerInfo.phone)
        this.elements.emailAddressTextBox().type(inputCustomerInfo.email)
        this.elements.faxNumberTextBox().type(inputCustomerInfo.mobile)
        this.elements.locationNameTextBox().type(inputCustomerInfo.locationName)
        this.elements.streetAddressTextBox().type(inputCustomerInfo.street)
        this.elements.unitNumberTextBox().type(inputCustomerInfo.unitNumber)
        this.elements.cityTextBox().type(inputCustomerInfo.city)
        this.elements.stateTextBox().type(inputCustomerInfo.state)
        this.elements.postCodeTextBox().type(inputCustomerInfo.zip)
        this.elements.countryTextBox().type(inputCustomerInfo.country)
    }

    confirmValidityYes = () => {
        this.elements.addressValidityWarningModalConfirm().click()
    }
    clickValidateAddress = () => {
        this.elements.validateAddress().click()
    }

    validateAddress = () => {
        this.clickValidateAddress()
        this.elements.validateAddressModal.OKButton().click()
        this.checkLongitudeAndLatitude()
    }

    checkLongitudeAndLatitude = () => {
        this.elements.latitudeField().should('not.be', 'empty')
        this.elements.longitudeField().should('not.be', 'empty')
    }

    getCustomerNumber = () => {
        this.elements.customerNumberTextBox().then($el => {
            const cn = $el.text().toString()

        })
    }

    addTags = (tags) => {
        cy.wait(2500)
        tags.forEach(i => {
            this.elements.customerOverviewModal.tagsField().click()
            this.elements.customerOverviewModal.tagsFieldOption().contains(i).first().click()
        })
    }

    clickBackButton=()=> {
        this.elements.customerOverviewModal.backButton().click()
    }

}


module.exports = new AddCustomerPage();