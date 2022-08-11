class estimatesPage {
    elements = {
        addNewEstimateButton: () => cy.get('.search-form button.btn-primary.m-r-sm'),

        searchInput: () => cy.get('input.customersearchinput'),
        searchButton: () => cy.get('.ibox button[type="submit"]'),
        searchItem: () => cy.get('.ibox-content .customerList ul.list-group').first(),
        proceedButton: () => cy.get('button.btn.btn-primary').contains('Proceed'),
        partsSearch: () => cy.get('input[aria-label="Parts & services search"]'),
        actionsDropdown: () => cy.get('estimate-edit .btn-group.actions'),
        dropDownItems: () => cy.get('li a'),
        changeCustomerButton: () => cy.get('button#changeCustomerBtn'),
        tableRowEllipse: () => cy.get('.dataTable tbody tr td').last().get('.button'),
        statusLabel: () => cy.get('.form-inline span.status'),
        confirmYesButton: () => cy.get('.btn.btn-primary').contains('Yes'),
        addNewJobModalTitle: () => cy.get('app-job-edit-form h4.modal-title').contains('Add New Job'),
        estimatePreviewModalTitle: () => cy.get('app-report-preview-dialog h4'),
        savedNotification: () => cy.get('.sn-content.ng-star-inserted'),
        selectCustomerTextBox: () => cy.get('.customerselect input[name="search"]'),
        customerSearchItems: () => cy.get('.ibox-content .customerList b'),
        billToCustomerName: () => cy.get('._header-preview.topsummary .customerName a'),
        previewiFrame: {
            custName: () => cy.get('#contentHolder').its('0.contentDocument.body').then(cy.wrap).find('.customerInfo .custName')
        },
        addDiscountRowElement: () => cy.get('a[data-target="#modalAddDiscountPartLine"]'),

        addDiscountTotalElement: () => cy.get('a[data-target="#modalAddDiscount"]'),
        tableRows: () => cy.get('.dataTable tbody tr'),
        rowTotal: () => cy.get('.dataTable tbody tr td:nth-last-child(2) span'),
        invoiceSubTotal: () => cy.get('.table.invoice-total tbody tr:first-child() td:nth-child(2)'),

        sendToEmailModal: {
            recipientChipRemoveIcon: () => cy.get('mat-chip-list .mat-chip-remove '),
            recipientsInputBox: () => cy.get('#mat-chip-list-input-0'),
            sendEmailButton: () => cy.get('app-estimate-send-mail-dialog .mat-dialog-actions .btn.btn-info')
        },
        setDiscountValueInput: () => cy.get('input[name="setDiscountItem.discountValue"]'),
        setDiscountModalSaveButton: () => cy.get('#modalAddDiscountPartLine .btn.btn-primary'),
        setDiscountModalDropdown: () => cy.get('#modalAddDiscountPartLine select[name="setDiscountItemdiscountKind"]')

    }

    clickAddNew() {
        this.elements.addNewEstimateButton().click()
    }

    typeSearchInput(input) {
        this.elements.searchInput().type(input)
    }

    clickSearch() {
        this.elements.searchButton().click({ force: true })
    }
    selectCustomer() {
        this.elements.searchItem().click()
        this.elements.proceedButton().click()
    }

    inventorySearch(searchItem) {
        this.elements.partsSearch()
            .type(searchItem)
        cy.wait(2500)
        this.elements.partsSearch()
            .type('{downArrow}')
            .type('{enter}')
    }

    saveEstimate() {
        this.elements.actionsDropdown().first().click()
        this.elements.dropDownItems().contains('Save').click()
    }

    saveAndCloseEstimate() {
        this.elements.actionsDropdown().click()
        this.elements.dropDownItems().contains('Save and Close').click()
        // this.elements.tableRowEllipse().should('be.visible')

        // this.elements.dropDownSave().contains('Save and Close').click()
    }

    previewEstimate() {
        this.elements.actionsDropdown().click()
        this.elements.dropDownItems().contains('Preview').click()
    }

    sendToEmail() {
        this.elements.actionsDropdown().click()
        this.elements.dropDownItems().contains('Send to e-mail').click()
        this.elements.sendToEmailModal.recipientChipRemoveIcon().click()
        this.elements.sendToEmailModal.recipientsInputBox()
            .type('ace.simon.g@gmail.com')
            .type('{enter}')
        this.elements.sendToEmailModal.sendEmailButton().click()
    }

    convertToInvoice() {
        this.elements.actionsDropdown().click()
        this.elements.dropDownItems().contains('Convert to Invoice').click()
    }

    convertToJob() {
        this.elements.actionsDropdown().click()
        this.elements.dropDownItems().contains('Convert to job').click()
    }

    markAsWon() {
        this.elements.actionsDropdown().click()
        this.elements.dropDownItems().contains('Mark as Won').click()
    }

    checkEstimateStatus(value) {
        this.elements.statusLabel().contains(value)
    }

    markAslost() {
        this.elements.actionsDropdown().click()
        this.elements.dropDownItems().contains('Mark as Lost').click()
    }

    copyEstimate() {
        this.elements.actionsDropdown().click()
        this.elements.dropDownItems().contains('Copy').click()
    }

    deleteEstimate() {
        this.elements.actionsDropdown().click()
        this.elements.dropDownItems().contains('Delete').click()
    }

    changeCustomer(customerName) {
        this.elements.actionsDropdown().click()
        this.elements.dropDownItems().contains('Edit').click()
        this.elements.changeCustomerButton().click()
        this.elements.selectCustomerTextBox().type(customerName)
        this.elements.searchButton().click()
        cy.wait(3400)
        this.elements.customerSearchItems().contains(customerName).click()
        this.elements.proceedButton().click()
    }

    confirmYes() {
        this.elements.confirmYesButton().click()
    }

    checkAddNewJobModalTitle() {
        this.elements.addNewJobModalTitle()
    }

    checkConvertedToInvoiceSuccess = () => {
        this.elements.savedNotification().contains('Estimate has been successfully converted')
    }

    checkBillToCustomerName = (customerName) => {
        this.elements.billToCustomerName().contains(customerName)
    }

    checkEstimatePreview = () => {
        this.elements.estimatePreviewModalTitle().contains('Estimate Preview')
        cy.wait(3000)
        this.elements.previewiFrame.custName().should('be.visible')
        let verifyThis = {
            customername: 'Genius Game Inc.'
        }
        cy.wait(3000)
        this.elements.previewiFrame.custName().contains(verifyThis.customername)
    }

    calcGrandTotal = (subTotal, discount) => {
        let grandTotal = subTotal - discount;
        return grandTotal;
    }

    calcRowTotal = (price, discount) => {
        let rowTotal = price - discount;
        return rowTotal;
    }
    verifyGrandTotal = (calc, elementValue) => {
        return calc == elementValue
    }

    addDiscountInRow(min, max, discountKind) {


        this.elements.addDiscountRowElement().click()
        cy.wait(2000)
        if (discountKind === '$') {
            this.elements.setDiscountValueInput().clear().type(this.getRandomInt(min, max))
            this.elements.setDiscountModalDropdown().select('$')

        } else if (discountKind === '%') {
            this.elements.setDiscountValueInput().clear().type(this.getRandomInt(min, max))
            this.elements.setDiscountModalDropdown().select('%')

        }
        else {
            this.elements.setDiscountModalDropdown().select('$')
            this.elements.setDiscountValueInput().clear().type(this.getRandomInt(min, max))
        }


        this.elements.setDiscountModalSaveButton().click()

    }

    getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    checkRowsTotal = () => {
        // this.elements.tableRows().should('not.have.attr', 'class', 'editable').each(
        //     // should('not.have.class', 'editable').should('not.have.class', 'subtotal')
        //     $row => {
        //         const total = $row.find('td').eq(11).text().replace('$', '').replace(',', '').parseFloat
        //         // checkRowTotal=()=> {

        //         // }
        //         if (!$row.hasClass('editable')) {
        //             cy.log(total + total)
        //             expect()
        //         }
        //         else {
        //             return
        //         }
        //     }
        // )

        /*
        checkSum=(nameEl, priceEl, quantityEl, totalEl)=> {
            const name = nameEl.innerText
            const price = parseFloat(priceEl.innerText.replace('$',''))
            const quantity = parseInt(quantityEl.innerText)
            const total = parseFloat(totalEl.innerText.replace('$',''))
            expect(price * quantity, `total for ${name}`).to.equal(total)
        }

        cy.get('#sales tbody tr').each((row)=> {
            cy.wrap(row).find('td').spread(checkSum)
        })
        */
        // moveEl,skuEl,nameEl,
        function checkSum(moveEl, skuEl, nameEl, descEl, qtyEl, unitCostEl, profitEl, unitPriceEl, totalCostEl, priceEl, discountEl, totalEl) {
            // const name = nameEl.innerText

            const qty = parseInt(qtyEl.innerText)

            const unitCost = parseFloat(unitCostEl.innerText.replace('$','').replace(' ',''))
            const totalCost = parseFloat(totalCostEl.innerText.replace('$','').replace(' ',''))

            cy.log(qty)
            cy.log(unitCost)
            cy.log(totalCost)
            expect(qty*unitCost, `total for it`).to.equal(totalCost)

        }

        this.elements.tableRows().eq(1).each((row) => {
            cy.wrap(row).find('td').spread(checkSum)
        })



    }

    checkInvoiceSubtotal = () => {
        this.elements.rowTotal()
            .then($cells => {
                const totals = $cells.toArray()
                    .map(el => el.innerText)
                    .map(s => s.replace('$', ''))
                    .map(parseFloat)

                const sum = Cypress._.sum(totals).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')


                this.elements.invoiceSubTotal().contains(`$${sum}`).log(`Row total of $${sum} is equal to invoice subtotal element: ${this.elements.invoiceSubTotal()} `)
            })


    }

    // cy.get('table tbody yd:nth-child(4)')
    //     .then($cells => {
    //         const totals = $cells.toArray()
    //             .map(el.innerText)
    //             .map(s => s.replace('$', ''))
    //             .map(parseFloat)

    //         const sum = Cypress._.sum(totals)
    //         cy.log($sum)

    //         cy.get('$total').invoke('text')
    //             .then((s) => s.replace('$', ''))
    //             .invoke('find', s => s.startsWith('$'))
    //             .invoke('split', ' ')
    //             .then(parseFloat)
    //             .should('equal', sum)

    //         cy.contains('#total', '$' + sum) // Easier way
    //     })

    // contains('#total', '$' + sum)
}

module.exports = new estimatesPage()