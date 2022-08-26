class TaxAndTermsPage {

    // cy.get('#mat-input-0').type('andreiv@industrack.com')
    // cy.get('#mat-input-1').type('admin')
    // cy.get('.mat-focus-indicator').click()
    elements = {
        actionsDropdown: {
            button: () => cy.get('app-tdt button').contains('Actions'),
            item:()=> cy.get('ul.dropdown-menu li a')
        },

        addNewTaxModal: {
            nameTextbox: ()=> cy.get('app-tax-edit-dialog input[formcontrolname="taxDescription"]'),
            taxTextbox: ()=> cy.get('app-tax-edit-dialog input[formcontrolname="taxSize"]'),
            saveButton: ()=> cy.get('app-tax-edit-dialog button').contains('Save')
        }

    }

    selectActionsDropdown=(itemName)=> {
        this.elements.actionsDropdown.item().contains(itemName.toString()).click()
    }

    addNewTax = () => {
        this.elements.actionsDropdown.button().click()
        this.selectActionsDropdown('Add New')
    }

    fillAddNewTaxForm = (name, tax)=> {
        this.elements.addNewTaxModal.nameTextbox().type(name.toString())
        this.elements.addNewTaxModal.taxTextbox().type(tax.toString())
    }

    saveAddNewTaxForm = () => {
        this.elements.addNewTaxModal.saveButton().click()
    }
}

module.exports = new TaxAndTermsPage();