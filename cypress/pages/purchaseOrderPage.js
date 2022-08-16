class PurchaseOrderPage {


    elements = {
        filterTextBox: () => cy.get('.ibox.filterbox input.mat-input-element.cdk-text-field-autofill-monitored'),

        addNewPurchaseOrder: () => cy.get('.top.m-t-sm button.btn-primary.m-r-sm').contains('Add New'),

        actionsDropdown: {
            button: () => cy.get('app-purchase-order-tab .btn-group.actions'),
            delete: () => cy.get('app-purchase-order-tab .btn-group.actions button+.dropdown-menu li a').contains('Delete'),

        },
    }

    checkSaveButtonDisabled = () => {

    }

}


module.exports = new PurchaseOrderPage();