class PurchaseOrderPage {


    elements = {
        filterTextBox: () => cy.get('.ibox.filterbox input.mat-input-element.cdk-text-field-autofill-monitored'),

        addNewPurchaseOrder: () => cy.get('.top.m-t-sm button.btn-primary.m-r-sm').contains('Add New'),

        actionsDropdown: {
            button: () => cy.get('app-purchase-order-tab .btn-group.actions'),
            delete: () => cy.get('app-purchase-order-tab .btn-group.actions button+.dropdown-menu li a').contains('Delete'),

        },

        addPurchaseOrderModal: {
            selectVendorField: () => cy.get('purchase-order-edit-dialog input#mat-input-3'),
            jobNumberTextbox: () => cy.get('purchase-order-edit-dialog input#mat-input-9'),
            vendorInvoiceNumberTextBox: () => cy.get('purchase-order-edit-dialog input#vendorInvoiceNumber'),
            shippingAddressTextarea: () => cy.get('purchase-order-edit-dialog textarea#shippingAddress'),
            shipViaField: () => cy.get('purchase-order-edit-dialog mat-select#shipVia'),
            inventorySearchTextbox: () => cy.get('input[placeholder="Type to search"]'),
            dropDownOption: () => cy.get('mat-option'),
            saveButton: () => cy.get('purchase-order-edit-dialog .mat-dialog-actions button').contains('Save')

        }
    }

    deleteOp = () => {
        this.elements.actionsDropdown.button().click()
        this.elements.actionsDropdown.delete()
    }

    typeFilter = (text) => {
        this.elements.filterTextBox().type(text)
    }

    clickAddNewPurchaseOrder = () => {
        this.elements.addNewPurchaseOrder().click()
    }

    addPurchaseOrderModal = {
        selectVendor: (vendorName) => {
            this.elements.addPurchaseOrderModal.selectVendorField().click()
            this.elements.addPurchaseOrderModal.dropDownOption()
                .contains(vendorName)
                .click()
        },

        enterInvoiceNumber: (invoiceNumber) => {
            this.elements.addPurchaseOrderModal.vendorInvoiceNumberTextBox().type(invoiceNumber)
        },

        enterJobNumber: (jobNumber) => {
            this.elements.addPurchaseOrderModal.jobNumberTextbox().type(jobNumber)
        },

        enterShippingAddress: (shippingAddress) => {
            this.elements.addPurchaseOrderModal.shippingAddressTextarea().type(shippingAddress)
        },
        selectShipVia: (provider) => {
            this.elements.addPurchaseOrderModal.shipViaField().click()
            this.elements.addPurchaseOrderModal.dropDownOption().contains(provider).click()
        },

        enterInventory: () => {
            this.elements.addPurchaseOrderModal.inventorySearchTextbox().type('{downArrow} {enter}')
        },
        savePurchaseOrder: () => {
            this.elements.addPurchaseOrderModal.saveButton().click()
        }
    }




}


module.exports = new PurchaseOrderPage();