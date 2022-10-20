class AddCustomerPage {
  elements = {
    saveButton: () =>
      cy.get("app-customers-edit-form .modal-footer button").contains("Save"),
    customerNumberTextBox: () => cy.get("input#customerNumber"),
    companyNameTextBox: () => cy.get("input#companyName"),
    firstNameTextBox: () => cy.get("input#firstName"),
    lastNameTextBox: () => cy.get("input#lastName"),
    websiteAddressTextBox: () => cy.get("input#websiteAddress"),
    phoneNumberTextBox: () => cy.get("input#phoneNumber"),
    emailAddressTextBox: () => cy.get("input#emailAddress"),
    faxNumberTextBox: () => cy.get("input#faxNumber"),
    locationNameTextBox: () => cy.get("input#locationName"),
    streetAddressTextBox: () => cy.get("input#streetAddress"),
    unitNumberTextBox: () => cy.get("input#unitNumber"),
    cityTextBox: () => cy.get("input#city"),
    stateTextBox: () => cy.get("input#state"),
    postCodeTextBox: () => cy.get("input#postCode"),
    countryTextBox: () => cy.get("input#country"),
    emailErrror: () => cy.get("input#emailAddress+.alert"),
    warningModal: () =>
      cy.get(".cdk-overlay-pane.warningModal .mat-dialog-content p"),
    addressValidityWarningModalConfirm: () => cy.get("button").contains("Yes"),
    chooseFileButton: () => cy.get("input#inputDocument"),
    sameAsCompanyCheckbox: () => cy.get("input#billingAddressEquals"),
    billingStreetAddressTextbox: () => cy.get("input#billingStreetAddress"),
    billingCityTextbox: () => cy.get("input#billingCity"),
    billingStateProvinceTextbox: () => cy.get("input#billingStateProvince"),
    billingPostCodeTextBox: () => cy.get("input#billingPostCode"),
    validateAddress: () => cy.get(".form-group a").contains("Validate address"),
    latitudeField: () => cy.get("input#lat"),
    longitudeField: () => cy.get("input#lng"),
    validateAddressModal: {
      OKButton: () =>
        cy.get("validate-coordinates-modal button").contains("Ok"),
    },
    customerOverviewModal: {
      tagsField: () =>
        cy.get(
          'app-customers-overview .mat-chip-list-wrapper input[placeholder="Assign"]'
        ),
      tagsFieldOption: () => cy.get("mat-option"),
      backButton: () =>
        cy
          .get('app-customers-overview a[routerlink="/crmTab/list"]')
          .contains("Back"),
      equipmentTab: () =>
        cy
          .get("app-customers-overview .tabs-container a")
          .contains("Equipment"),
    },
  };
  checkSaveButtonDisabled = () => {
    // this.elements.saveButton().should('be.disabled')
    this.elements.saveButton().then((el) => {
      expect(el).to.be.disabled;
    });
  };

  clickSaveButton = () => {
    this.elements.saveButton().click();
  };

  clickBillingAddressEquals = () => {
    this.elements.sameAsCompanyCheckbox().click();
  };

  checkEmailErrorMessage = (errorMessage) => {
    this.elements.emailErrror().should("be.visible").contains(errorMessage);
  };

  checkWarningDialog(body) {
    this.elements.warningModal().should("be.visible").contains(body);
  }

  fillData = (newCustomerInfo) => {
    const inputCustomerInfo = {
      customerNumber: newCustomerInfo.customerNumber || "0001",
      companyName: newCustomerInfo.companyName || "Genius Game Inc.",
      firstName: newCustomerInfo.firstName || "Francis",
      lastName: newCustomerInfo.lastName || "White",
      companyWebsite:
        newCustomerInfo.companyWebsite || "https://geniusgiant.com/",
      phone: newCustomerInfo.phone || "8317474895",
      email: newCustomerInfo.email || "dina.schill@gmail.com",
      mobile: newCustomerInfo.mobile || "6692211141",
      locationName: newCustomerInfo.locationName || "Genius Building",
      street: newCustomerInfo.street || "Cemetery Street",
      unitNumber: newCustomerInfo.unitNumber || "4955",
      city: newCustomerInfo.city || "Salinas",
      state: newCustomerInfo.state || "CA",
      zip: newCustomerInfo.zip || "93901",
      country: newCustomerInfo.country || "United States of America",
      uploadDocument: newCustomerInfo.uploadDocument || "img.jpg",
      validateAddress: newCustomerInfo.validateAddress,
    };
    // cy.wait(1000);
    newCustomerInfo.customerNumber && this.elements
      .customerNumberTextBox()
      .clear()
      .type(inputCustomerInfo.customerNumber);
    // cy.wait(1000);
    this.elements
      .companyNameTextBox()
      .clear()
      .type(inputCustomerInfo.companyName);
    this.elements.firstNameTextBox().clear().type(inputCustomerInfo.firstName);
    this.elements.lastNameTextBox().clear().type(inputCustomerInfo.lastName);
    this.elements
      .websiteAddressTextBox()
      .clear()
      .type(inputCustomerInfo.companyWebsite);
    this.elements.phoneNumberTextBox().clear().type(inputCustomerInfo.phone);
    this.elements.phoneNumberTextBox().clear().type(inputCustomerInfo.phone);
    this.elements.emailAddressTextBox().clear().type(inputCustomerInfo.email);
    this.elements.faxNumberTextBox().clear().type(inputCustomerInfo.mobile);
    this.elements
      .locationNameTextBox()
      .clear()
      .type(inputCustomerInfo.locationName);
    this.elements.streetAddressTextBox().clear().type(inputCustomerInfo.street);
    this.elements
      .unitNumberTextBox()
      .clear()
      .type(inputCustomerInfo.unitNumber);
    this.elements.cityTextBox().clear().type(inputCustomerInfo.city);
    this.elements.stateTextBox().clear().type(inputCustomerInfo.state);
    this.elements.postCodeTextBox().clear().type(inputCustomerInfo.zip);
    this.elements.countryTextBox().clear().type(inputCustomerInfo.country);
    this.elements
      .chooseFileButton()
      .attachFile(inputCustomerInfo.uploadDocument);

    this.elements.validateAddress().click();
    inputCustomerInfo.validateAddress
      ? cy.get("button").contains("Ok").last().click()
      : cy.get("button").contains("Cancel").last().click();
  };

  confirmValidityYes = () => {
    this.elements.addressValidityWarningModalConfirm().click();
  };
  clickValidateAddress = () => {
    this.elements.validateAddress().click();
  };

  validateAddress = () => {
    this.clickValidateAddress();
    this.elements.validateAddressModal.OKButton().click();
    this.checkLongitudeAndLatitude();
  };

  checkLongitudeAndLatitude = () => {
    this.elements.latitudeField().should("not.be", "empty");
    this.elements.longitudeField().should("not.be", "empty");
  };

  getCustomerNumber = () => {
    this.elements.customerNumberTextBox().then(($el) => {
      const cn = $el.text().toString();
    });
  };

  addTags = (tags) => {
    cy.contains("Service Location").should("be.visible");
    tags.forEach((i) => {
      cy.intercept(
        "https://onetrackwebapiprod.azurewebsites.net/api/AddressBooks/SaveTag/**"
      ).as("SaveTag");

      this.elements.customerOverviewModal
        .tagsField()
        .last()
        .clear()
        .type(i)
        .then(() => {
          cy.get("mat-option").contains(i).first().click();
        });
      cy.wait("@SaveTag");
      // this.elements.customerOverviewModal.tagsFieldOption().contains(i).first().click()
    });
  };

  clickBackButton = () => {
    this.elements.customerOverviewModal.backButton().click();
  };
}

module.exports = new AddCustomerPage();
