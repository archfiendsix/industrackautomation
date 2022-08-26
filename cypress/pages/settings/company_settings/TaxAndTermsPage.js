class TaxAndTermsPage {

    // cy.get('#mat-input-0').type('andreiv@industrack.com')
    // cy.get('#mat-input-1').type('admin')
    // cy.get('.mat-focus-indicator').click()
    elements = {
        actionsDropdown: {
            button: () => cy.get('app-tdt button').contains('Actions'),
            item: () => cy.get('ul.dropdown-menu li a')
        },

        termsTabButton: () => cy.get('mat-tab-group mat-tab-header .mat-tab-list div[role="tab"]#mat-tab-label-1-1 .mat-tab-label-content').contains('Terms'),
        taxTab: {

            addNewTaxModal: {
                nameTextbox: () => cy.get('app-tax-edit-dialog input[formcontrolname="taxDescription"]'),
                taxTextbox: () => cy.get('app-tax-edit-dialog input[formcontrolname="taxSize"]'),
                saveButton: () => cy.get('app-tax-edit-dialog button').contains('Save')
            }
        },

        termsTab: {
            addNewTermModal: {
                nameTextbox: () => cy.get('app-term-edit-dialog input[formcontrolname="name"]'),
                saveButton: () => cy.get('app-term-edit-dialog button').contains('Save')
            }
        }

    }

    selectActionsDropdown = (itemName) => {
        this.elements.actionsDropdown.item().contains(itemName.toString()).click()
    }

    addNewTax = () => {
        this.elements.actionsDropdown.button().click()
        this.selectActionsDropdown('Add New')
    }

    addNewTerm = () => {
        this.elements.actionsDropdown.button().click()
        this.selectActionsDropdown('Add New')
    }

    fillAddNewTaxForm = (name, tax) => {
        this.elements.taxTab.addNewTaxModal.nameTextbox().type(name.toString())
        this.elements.taxTab.addNewTaxModal.taxTextbox().type(tax.toString())
    }

    fillAddNewTermForm = (name) => {
        this.elements.termsTab.addNewTermModal.nameTextbox().type(name.toString())
    }

    saveAddNewTaxForm = () => {
        this.elements.taxTab.addNewTaxModal.saveButton().click()
    }
    saveAddNewTermForm = () => {
        this.elements.termsTab.addNewTermModal.saveButton().click()
    }
    gotoTermsTab = () => {
        this.elements.termsTabButton().click()
    }

}

module.exports = new TaxAndTermsPage();