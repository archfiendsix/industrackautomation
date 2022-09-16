class EstimatesPage {
    elements = {
        addNewEstimateButton: () => cy.get('.search-form button.btn-primary.m-r-sm'),

        searchInput: () => cy.get('input.customersearchinput'),
        searchButton: () => cy.get('.ibox button[type="submit"]'),
        searchItem: () => cy.get('.ibox-content .customerList ul.list-group').first(),
        proceedButton: () => cy.get('button.btn.btn-primary').contains('Proceed'),
        partsSearch: () => cy.get('.editable input[aria-label="Parts & services search"]'),
        actionsDropdown: () => cy.get('estimate-edit .btn-group.actions'),
        dropDownItems: () => cy.get('li a'),
        changeCustomerButton: () => cy.get('button#changeCustomerBtn'),
        tableRowEllipse: () => cy.get('.dataTable tbody tr td:last-child() button'),
        tableRowEllipseItem: () => cy.get('button[aria-expanded="false"]+.dropdown-menu li a'),
        statusLabel: () => cy.get('.form-inline span.status'),
        confirmYesButton: () => cy.get('.btn.btn-primary').contains('Yes'),
        addNewJobModalTitle: () => cy.get('app-job-edit-form h4.modal-title').contains('Add New Job'),
        estimatePreviewModalTitle: () => cy.get('app-report-preview-dialog h4'),
        savedNotification: () => cy.get('.sn-content.ng-star-inserted'),
        selectCustomerTextBox: () => cy.get('.customerselect input[name="search"]'),
        customerSearchItems: () => cy.get('.ibox-content .customerList b'),
        billToCustomerName: () => cy.get('._header-preview.topsummary .customerName a'),
        previewiFrame: {
            custName: () => cy.get('.iframe #contentHolder').its('0.contentDocument.body').then(cy.wrap).find('#reportContent .customerInfo .custName'),
            note: () => cy.get('.iframe #contentHolder').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).find('#reportContent h3+p'),
        },
        addDiscountRowElement: () => cy.get('a[data-target="#modalAddDiscountPartLine"]'),

        addInvoiceDiscountButton: () => cy.get('a[data-target="#modalAddDiscount"]'),
        tableRows: () => cy.get('.dataTable tbody tr.gradeA.odd.ng-star-inserted'),
        rowTotal: () => cy.get('.dataTable tbody tr td:nth-last-child(2) span'),
        invoiceSubTotal: () => cy.get('.table.invoice-total tbody tr:first-child() td:nth-child(2)'),
        invoiceDiscount: () => cy.get('.table.invoice-total tr:nth-child(2) td:nth-child(2) a'),
        invoiceTaxPercent: () => cy.get('.table.invoice-total tr:nth-child(3) td:nth-child(1) span:nth-child(2)'),
        invoiceTax: () => cy.get('.table.invoice-total tr:nth-child(3) td:nth-child(2)'),
        invoiceTotal: () => cy.get('.table.invoice-total tr.total td:nth-child(2)'),
        invoiceTotals: () => cy.get('.table.invoice-total tbody tr:first-child() td:nth-child(2), .table.invoice-total tr.total td:nth-child(2)'),
        sendToEmailModal: {
            recipientChipRemoveIcon: () => cy.get('mat-chip-list .mat-chip-remove '),
            recipientsInputBox: () => cy.get('#mat-chip-list-input-0'),
            sendEmailButton: () => cy.get('app-estimate-send-mail-dialog .mat-dialog-actions .btn.btn-info')
        },
        setDiscountValueInput: () => cy.get('input[name="setDiscountItem.discountValue"]'),
        setDiscountModalSaveButton: () => cy.get('#modalAddDiscountPartLine .btn.btn-primary'),
        setDiscountModalDropdown: () => cy.get('#modalAddDiscountPartLine select[name="setDiscountItemdiscountKind"]'),
        setInvoiceDiscountValueInput: () => cy.get('input[name="discountValue"]'),
        setInvoiceDiscountModalDropdown: () => cy.get('select[name="discountKind"]'),
        setInvoiceDiscountModalSaveButton: () => cy.get('#modalAddDiscount .btn.btn-primary'),
        notesForCustomerField: () => cy.get('textarea[name="notes"]')
    }

    clickAddNew = () => {
        this.elements.addNewEstimateButton().click()
    }

    typeSearchInput(input) {
        this.elements.searchInput().type(input)
    }

    clickSearch() {
        this.elements.searchButton().click({ force: true })
    }
    selectCustomer(customer_name) {
        this.typeSearchInput(customer_name)
        this.clickSearch()
        this.elements.searchItem().click()
        this.elements.proceedButton().click()
    }

    inventorySelect(searchItem) {
        this.elements.partsSearch()
            .last()
            .type(searchItem)
        cy.wait(2500)
        this.elements.partsSearch()
            .last()
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
        this.elements.actionsDropdown().first().click()
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
        this.elements.dropDownItems()
            .contains('Edit')
            .click()
        this.elements.changeCustomerButton().click()
        this.elements.selectCustomerTextBox().type(customerName)
        this.elements.searchButton().click()
        cy.wait(3400)
        this.elements.customerSearchItems()
            .contains(customerName)
            .click()
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
        cy.wait(4500)
        this.elements.previewiFrame.custName().should('be.visible')
        let verifyThis = {
            customername: 'Genius Game Inc.'
        }
        cy.wait(3000)
        this.elements.previewiFrame.custName().contains(verifyThis.customername)
    }

    setRowsToHiddenPrice = (hiddenOrder) => {
        hiddenOrder.forEach((i, index) => {


            this.elements.tableRowEllipse().eq(index).click().then($el => {
                cy.log(`value:${i} index: ${index}`)
                cy.wait(1800)
                if (i == true) {
                    this.elements.tableRowEllipseItem().contains('Hide price').last().click({force:true})
                }
                else {
                    this.elements.tableRowEllipse().eq(index).click()
                }
            })
        })


    }

    setRowsToHiddenLine = (hiddenOrder) => {
        hiddenOrder.forEach((i, index) => {


            this.elements.tableRowEllipse().eq(index).click().then($el => {
                cy.log(`value:${i} index: ${index}`)
                cy.wait(1800)
                if (i == true) {

                    this.elements.tableRowEllipseItem().contains('Hide line').last().click({force:true})
                }
                else {
                    this.elements.tableRowEllipse().eq(index).click()
                }
            })

        })

    }

    checkEstimatePreviewValues = (customerInfo) => {
        // this.elements.previewiFrame.note().should('have.value', customerInfo.note.toString())
        cy.frameLoaded('#contentHolder')
        cy.iframe('#contentHolder').find('p')
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

    addDiscountInRow(min, max, discountKind, numberOfRows) {

        for (let i = 1; i <= numberOfRows; i++) {
            const randomRow = this.getRandomInt(0, numberOfRows)
            this.elements.addDiscountRowElement().eq(randomRow).click()
            cy.wait(2000)
            if (discountKind === '$') {
                this.elements.setDiscountValueInput().clear().type(this.getRandomInt(min, max).toString())
                this.elements.setDiscountModalDropdown().select('$')

            } else if (discountKind === '%') {
                this.elements.setDiscountValueInput().clear().type(this.getRandomInt(min, max).toString())
                this.elements.setDiscountModalDropdown().select('%')

            }
            else {
                this.elements.setDiscountModalDropdown().select('$')
                this.elements.setDiscountValueInput().clear().type(this.getRandomInt(min, max).toString())
            }

            this.elements.setDiscountModalSaveButton().click()

        }

    }

    getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    changeTableValues = () => {


        function changeInput(nameEl, descEl, qtyEl, unitCostEl, profitEl, unitPriceEl) {
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
            }
            const description = descEl
            const randomQuantity = getRandomInt(0, 10).toString()
            const randomUnitCost = getRandomInt(0, 1000).toString()
            const randomProfit = getRandomInt(0, 5).toString()
            cy.wrap(description).clear().type('TEST Description Change')
            cy.wrap(qtyEl).clear().type(randomQuantity)
            cy.wrap(unitCostEl).clear().type(randomUnitCost)
            cy.wrap(profitEl).clear().type(randomProfit)
        }

        this.elements.tableRows().not('.editable').each((row) => {
            cy.wrap(row).find('input, textarea').spread(changeInput)
        })



    }

    checkRowsTotal = () => {


        function checkCalc(moveEl, skuEl, nameEl, descEl, qtyEl, unitCostEl, profitEl, unitPriceEl, totalCostEl, priceEl, discountEl, totalEl) {
            function currencyRoundOff(num) {
                return (Math.round(num * 100) / 100).toFixed(2)
            }
            const qty = parseInt(qtyEl.innerText)
            const item = skuEl.innerText + " - " + nameEl.innerText
            const unitCost = parseFloat(unitCostEl.innerText.replace('$', '').replace(' ', ''))
            const totalCost = parseFloat(totalCostEl.innerText.replace('$', '').replace(' ', ''))
            const price = parseFloat(priceEl.innerText.replace('$', '').replace(' ', ''))
            let discount = parseFloat(discountEl.innerText.replace('$', '').replace(' ', ''))
            const total = parseFloat(totalEl.innerText.replace('$', '').replace(' ', ''))
            const profit = parseFloat(profitEl.innerText.replace('%', '').replace(' ', ''))
            const profitPercent = profit / 100
            const unitPrice = parseFloat(unitPriceEl.innerText.replace('$', '').replace(' ', ''))

            if (isNaN(discount)) {
                discount = 0
            }
            else {
                discount = discount
            }

            const calcTotalCost = currencyRoundOff(qty * unitCost)
            const calcPrice = currencyRoundOff(qty * unitPrice)
            const calcUnitPrice = currencyRoundOff(unitCost * profitPercent + unitCost)
            const calcTotal = currencyRoundOff(price - discount)
            expect(calcTotalCost, `${item}: Quantity(${qty}) * Unit Cost($${unitCost})`).to.equal(currencyRoundOff(totalCost))
            expect(calcPrice, `${item}: Quantity(${qty}) * Unit Cost($${unitPrice})`).to.equal(currencyRoundOff(price))
            expect(calcUnitPrice, `${item}: Unit Cost($${unitCost}) + Profit(${profitPercent})`).to.equal(currencyRoundOff(unitPrice))
            expect(calcTotal, `${item}: Price($${price}) - Discount($${discount}) = Total($${total})`).to.equal(currencyRoundOff(total))

        }

        this.elements.tableRows().each((row) => {
            cy.wrap(row).find('td').spread(checkCalc)
        })



    }

    addRandomInvoiceDiscount = () => {
        const randomDiscount = this.getRandomInt(1, 10)
        this.elements.addInvoiceDiscountButton().click()
        this.elements.setInvoiceDiscountValueInput().type(randomDiscount.toString())
        this.elements.setInvoiceDiscountModalDropdown().select('%')
        this.elements.setInvoiceDiscountModalSaveButton().click()
    }



    checkInvoiceSubtotal = () => {
        this.elements.rowTotal()
            .then($cells => {
                const totals = $cells.toArray()
                    .map(el => el.innerText)
                    .map(s => s.replace('$', ''))
                    .map(parseFloat)

                const sum = Cypress._.sum(totals).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

                // const subTotal = this.elements.invoiceSubTotal().innerText.toString().replace('$', '').replace(' ', '')
                const subTotal = parseFloat(this.elements.invoiceSubTotal().toString().replace('$', ''))

                this.elements.invoiceSubTotal().contains(`$${sum}`).log(`Row total of $${sum} is equal to invoice subtotal element: ${subTotal} `)
            })


    }

    addNote = (note) => {
        this.elements.notesForCustomerField().type(`${note}{home}`)

    }

    checkInvoiceTotal = () => {
        var subTotal = 0
        var discount = 0
        var taxPercent = 0
        var total = 0
        this.elements.invoiceSubTotal()
            .then($el => {
                subTotal = parseFloat($el.text().replace('$', '').replace(',', ''))
                cy.log(subTotal.toString())
                cy.log(typeof subTotal)
                // return subTotal
            })
        this.elements.invoiceDiscount()
            .then($el => {
                discount = parseFloat($el.text().replace('$', '').replace(',', ''))
                if (isNaN(discount)) {
                    discount = 0
                }
                cy.log(discount.toString())
                cy.log(typeof discount)
                // return discount
            })
        this.elements.invoiceTotal()
            .then($el => {
                total = parseFloat($el.text().replace('$', '').replace(',', ''))
                cy.log(total.toString())
                cy.log(typeof total)
                // return total
                const calcTotal = subTotal - discount
                cy.log(typeof calcTotal)
                cy.log(calcTotal.toString())
                expect(subTotal - discount, `Invoice Subtotal($${calcTotal}) less invoice discount($${discount})`).to.equal(total)
            })

        // this.elements.invoiceTaxPercent()
        //     .then($el => {
        //         taxPercent = parseFloat($el.text().replace('$', '').replace(',', ''))
        //         const calcTax = subTotal * subTotal
        //         expect(subTotal - discount, `Invoice grand total($${calcTotal}) less invoice discount($${discount})`).to.equal(total)
        //     })


        // // const invoiceSubTotal = parseFloat(this.elements.invoiceSubTotal().toString().replace('$', ''))
        // this.elements.invoiceSubTotal().then(el=> {
        //     const invoiceSubTotal = parseFloat(el.innerText.replace('$', '').replace(' ', ''))
        //     cy.log(invoiceSubTotal)
        // })


        // let invoiceDiscount = parseFloat(this.elements.invoiceDiscount().toString().replace('$', ''))
        // cy.log(invoiceDiscount)
        // const invoiceTotal = parseFloat(this.elements.invoiceTotal().toString().replace('$', ''))
        // if (isNaN(invoiceDiscount)) {
        //     invoiceDiscount = 0
        // }
        // else {
        //     invoiceDiscount = invoiceDiscount
        // }
        // cy.log(invoiceTotal)
        // // expect(invoiceSubTotal.parseFloat - invoiceDiscount.parseFloat).to.equal(invoiceTotal)
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

module.exports = new EstimatesPage()