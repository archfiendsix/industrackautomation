class AddNewInventoryPage {


    elements = {
        saveButton: () => cy.get('.form-horizontal > .modal-footer > .btn-primary'),
        nameTextBox: () => cy.get('input#name'),
        skuTextBox: () => cy.get('input#number'),
        vendorTextBox: () => cy.get('input[name="vendor"]'),
        nonTaxableCheckbox: () => cy.get('mat-checkbox[name="nonTaxable"] label'),
        salesPriceTextBox: () => cy.get('input#salesPrice'),
        salesDescriptionTextArea: () => cy.get('textarea#salesInfo'),
        costTextBox: () => cy.get('input#cost'),
        purchasingDescriptionTextArea: () => cy.get('textarea#purchasingInfo'),
        quantityTextbox: () => cy.get('input#quantity'),
        minOrderQuantityTextbox: () => cy.get('input#minOrderQuantity'),
        useSerialNumbersCheckbox: () => cy.get('input[name="isSerial"]'),
        savedNotification: () => cy.get('.sn-content.ng-star-inserted'),
        nameErrorMessage: () => cy.get('input#name+.alert'),
        addInventoryModal: {
            enterSerialBatchButton: () => cy.get('.serialbatch button').contains('Enter New Serial Batch'),
            serialsTextarea: () => cy.get('textarea[formcontrolname="serialNumbers"]'),
            proceedButton: () => cy.get('button[type="submit"]').contains('proceed'),
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



    fillData = (newInventoryInfo) => {

        const inputInventoryInfo = {
            name: newInventoryInfo.name || 'Inventory Item 1',
            sku: newInventoryInfo.sku || '001',
            vendor: newInventoryInfo.vendor || 'Vendors Inc.',
            salesPriceRate: newInventoryInfo.salesPriceRate || '1000',
            salesDescription: newInventoryInfo.salesDescription || 'This is a test sales description',
            cost: newInventoryInfo.cost || '1000',
            purchaseDescription: newInventoryInfo.purchaseDescription || 'This is a test purchasing description',
            mainWarehouseQuantityOnHand: newInventoryInfo.mainWarehouseQuantityOnHand || "1",
            reorderPoint: newInventoryInfo.reorderPoint || "1",
            nonTaxable: newInventoryInfo.nonTaxable || false,
            useSerialNumbers: newInventoryInfo.useSerialNumbers || false,
            serialNumbers: newInventoryInfo.serialNumbers || ['123', '1234', '12345']
        }
        inputInventoryInfo.useSerialNumbers ? this.elements.useSerialNumbersCheckbox().click() : this.elements.useSerialNumbersCheckbox().dblclick()

        inputInventoryInfo.useSerialNumbers && this.elements.addInventoryModal.enterSerialBatchButton().click({ force: true })
        cy.wait(1000)
        this.elements.nameTextBox().clear().type(inputInventoryInfo.name)
        cy.wait(1000)
        this.elements.skuTextBox().clear().type(inputInventoryInfo.sku)
        cy.wait(1000)
        this.elements.vendorTextBox().clear().type(inputInventoryInfo.vendor)
        this.elements.salesPriceTextBox().clear().type(inputInventoryInfo.salesPriceRate)
        this.elements.salesDescriptionTextArea().clear().type(inputInventoryInfo.salesDescription)
        this.elements.costTextBox().clear().type(inputInventoryInfo.cost)
        this.elements.purchasingDescriptionTextArea().clear().type(inputInventoryInfo.purchaseDescription)
        this.elements.quantityTextbox().clear().type(inputInventoryInfo.mainWarehouseQuantityOnHand)
        this.elements.minOrderQuantityTextbox().clear().type(inputInventoryInfo.reorderPoint)
        inputInventoryInfo.nonTaxable ? this.elements.nonTaxableCheckbox().click() : this.elements.nonTaxableCheckbox().dblclick()

        
        inputInventoryInfo.useSerialNumbers ? this.elements.addInventoryModal.enterSerialBatchButton().click({ force: true }) : expect(inputInventoryInfo.useSerialNumbers).to.equal(false)
        if (inputInventoryInfo.useSerialNumbers) {
            inputInventoryInfo.serialNumbers.forEach((i) => {
                this.elements.addInventoryModal.serialsTextarea().type(i).type('{enter}')

            })
            this.elements.addInventoryModal.proceedButton().click()
        }

    }
}


module.exports = new AddNewInventoryPage();