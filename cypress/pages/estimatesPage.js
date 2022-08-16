class estimatesPage {
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

        addInvoiceDiscountButton: () => cy.get('a[data-target="#modalAddDiscount"]'),
        tableRows: () => cy.get('.dataTable tbody tr.gradeA.odd.ng-star-inserted'),
        rowTotal: () => cy.get('.dataTable tbody tr td:nth-last-child(2) span'),
        invoiceSubTotal: () => cy.get('.table.invoice-total tbody tr:first-child() td:nth-child(2)'),
        invoiceDiscount: () => cy.get('.table.invoice-total tr:nth-child(2) td:nth-child(2) a'),
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

    addDiscountInRow(min, max, discountKind, numberOfRows) {

        for (let i = 1; i <= numberOfRows; i++) {
            const randomRow = this.getRandomInt(0, numberOfRows)
            this.elements.addDiscountRowElement().eq(randomRow).click()
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
            const randomQuantity = getRandomInt(0, 10)
            const randomUnitCost = getRandomInt(0, 1000)
            const randomProfit = getRandomInt(0, 5)
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


        function checkCalc(moveEl, skuEl, nameEl, descEl, qtyEl, unitCostEl, profitEl, unitPriceEl, totalCostEl, priceEl, discountEl, totalEl) {
            // const name = nameEl.innerText
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
            expect(qty * unitCost, `${item}: Total cost calculation`).to.equal(totalCost)
            if (isNaN(discount)) {
                discount = 0
            }
            else {
                discount = discount
            }

<<<<<<< HEAD
            expect(qty * unitCost, `${item}: Quantity(${qty}) * Unit Cost($${unitCost})`).to.equal(totalCost)
            expect(qty * unitPrice, `${item}: Quantity(${qty}) * Unit Cost($${unitPrice})`).to.equal(price)
            expect(unitCost * profitPercent + unitCost, `${item}: Unit Cost($${unitCost}) + Profit(${profitPercent})`).to.equal(unitPrice)
            expect(price - discount, `${item}: Price($${price}) - Discount($${discount}) = Total($${total})`).to.equal(total)
            expect(price - discount, `${item}: Price($${price}) - Discount($${discount}) = Total($${total})`).to.equal(total)
            expect(unitCost * profitPercent + unitCost, `${item}: Unit Cost(${unitCost}) + Profit(${profitPercent})`).to.equal(unitPrice)
=======
            const calcTotalCost = currencyRoundOff(qty * unitCost)
            const calcPrice = currencyRoundOff(qty * unitPrice)
            const calcUnitPrice = currencyRoundOff(unitCost * profitPercent + unitCost)
            const calcTotal = currencyRoundOff(price - discount)
            expect(calcTotalCost, `${item}: Quantity(${qty}) * Unit Cost($${unitCost})`).to.equal(currencyRoundOff(totalCost))
            expect(calcPrice, `${item}: Quantity(${qty}) * Unit Cost($${unitPrice})`).to.equal(currencyRoundOff(price))
            expect(calcUnitPrice, `${item}: Unit Cost($${unitCost}) + Profit(${profitPercent})`).to.equal(currencyRoundOff(unitPrice))
            expect(calcTotal, `${item}: Price($${price}) - Discount($${discount}) = Total($${total})`).to.equal(currencyRoundOff(total))

>>>>>>> 126567e (Fixed Calculations)
        }

        this.elements.tableRows().each((row) => {
            cy.wrap(row).find('td').spread(checkCalc)
        })



    }

    addInvoiceDiscount = () => {
        const randomDiscount = this.getRandomInt(1, 10)
        this.elements.addInvoiceDiscountButton().click()
        this.elements.setInvoiceDiscountValueInput().type(randomDiscount)
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

                constSub = this.elements.invoiceSubTotal().innerText.toString().replace('$', '').replace(' ', '')

                this.elements.invoiceSubTotal().contains(`$${sum}`).log(`Row total of $${sum} is equal to invoice subtotal element: ${subTotal} `)
            })


    }

    checkInvoiceTotal = () => {
        var subTotal = 0
        var discount = 0
        var total = 0
        this.elements.invoiceSubTotal()
            .then($el => {
                subTotal = parseFloat($el.text().replace('$', '').replace(',', ''))
                cy.log(subTotal)
                cy.log(typeof subTotal)
                // return subTotal
            })
        this.elements.invoiceDiscount()
            .then($el => {
                discount = parseFloat($el.text().replace('$', '').replace(',', ''))
                if (isNaN(discount)) {
                    discount = 0
                }
                cy.log(discount)
                cy.log(typeof discount)
                // return discount
            })
        this.elements.invoiceTotal()
            .then($el => {
                total = parseFloat($el.text().replace('$', '').replace(',', ''))

                cy.log(total)
                cy.log(typeof total)
                // return total
                const calcTotal = subTotal - discount
                cy.log(typeof calcTotal)
                cy.log(calcTotal)
                expect(subTotal - discount, `Invoice Subtotal($${calcTotal}) less invoice discount($${discount})`).to.equal(total)
            })


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

module.exports = new estimatesPage()