class AddNewInventoryPage {


    elements = {
        saveButton: () => cy.get('.form-horizontal > .modal-footer > .btn-primary'),
        nameTextBox: () => cy.get('input#name'),
        skuTextBox: () => cy.get('input#number'),
        vendorTextBox: () => cy.get('input[name="vendor"]'),
        nonTaxableCheckbox: () => cy.get('input#mat-checkbox-23-input'),
        salesPriceTextBox: () => cy.get('input#salesPrice'),
        salesDescriptionTextArea: () => cy.get('textarea#salesInfo'),
        costTextBox: () => cy.get('input#cost'),
        purchasingDescriptionTextArea: () => cy.get('textarea#purchasingInfo'),
        savedNotification: () => cy.get('.sn-content.ng-star-inserted'),
        nameErrorMessage: () => cy.get('input#name+.alert'),
        addInventoryModal: {
            saveButton: () => cy.get('.mat-dialog-actions .btn.btn-info'),
        }
    }

    clickSaveButton = () => {
        this.elements.addInventoryModal.saveButton().click()
    }

    checkSaveSuccess = () => {
        this.elements.savedNotification().contains('Part successfully created.')
    }
    checkNameError = () => {
        this.elements.nameTextBox().should('have.class', 'ng-invalid')
    }


   
    fillData = () => {
        this.elements.nameTextBox().type('Inventory Item 1')
        this.elements.skuTextBox().type('001')
        this.elements.vendorTextBox().type('Vendors Inc.')
        this.elements.salesPriceTextBox().type('1000')
        this.elements.salesDescriptionTextArea().type('This is a test sales description')
        this.elements.costTextBox().type('1000')
        this.elements.purchasingDescriptionTextArea().type('This is a test purchasing description')
    }
}


module.exports = new AddNewInventoryPage();