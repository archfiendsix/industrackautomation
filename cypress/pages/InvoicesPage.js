class InvoicesPage {

    /*
cy.get('button[data-target="#modalAddNewCustomer"]').click()
    */
    elements = {
        topSummary: {
            paidAmount: () => cy.get('.topsummary .widgetbox:nth-child(1) .widget .text-right h2'),
            overdue: () => cy.get('.topsummary .widgetbox:nth-child(2) .widget .text-right h2'),
            openInvoices: () => cy.get('.topsummary .widgetbox:nth-child(3) .widget .text-right h2'),
        },
        searchBox: {
            input: () => cy.get('.singlesearchbox input[name="searchText"]'),
            searchIcon: () => cy.get('.singlesearchbox button[title="Search"]'),
        },
        fromToDates: {
            fromInput: () => cy.get('.form-group.datesbox label.control-label+mat-form-field input'),
            toInput: () => cy.get('.form-group.datesbox mat-form-field input').last(),
        },
        filterToggle: {
            all: () => cy.get('.form-group.datesbox+.btn-group mat-button-toggle-group mat-button-toggle button').contains('All'),
            unpaid: () => cy.get('.form-group.datesbox+.btn-group mat-button-toggle-group mat-button-toggle button').contains('Unpaid'),
            overdue: () => cy.get('.form-group.datesbox+.btn-group mat-button-toggle-group mat-button-toggle button').contains('Overdue'),
            paid: () => cy.get('.form-group.datesbox+.btn-group mat-button-toggle-group mat-button-toggle button').contains('Paid'),
        },
        addNewInvoiceButton: () => cy.get('.pull-right button').contains('Add New'),
        addingNewInvoiceModal: {
            searchField: () => cy.get('input.customersearchinput'),
            searchItem: () => cy.get('.ibox-content .customerList ul.list-group').first(),
            proceedButton: () => cy.get('button.btn.btn-primary').contains('Proceed'),
            descriptionTextbox: () => cy.get('input[name="invoiceDescription"]'),
            partsSearch: () => cy.get('.editable input[aria-label="Parts & services search"]'),
            termSelect: () => cy.get('select#invoiceTermId'),
            taxTextbox: () => cy.get('app-tax-selector input'),
            taxOption: () => cy.get('.mat-autocomplete-panel mat-option'),
            addInvoiceDiscountButton: () => cy.get('.invoice-total a'),
            invoiceNumber: () => cy.get('input[name="invoiceNumber"]'),
            billingAddress: () => cy.get('.customername+p'),
            actionsDropdown: {
                button: () => cy.get('button[data-toggle="dropdown"]').contains('Actions'),
                save: () => cy.get('button[data-toggle="dropdown"]+.dropdown-menu li a').first().contains('Save'),
                preview: () => cy.get('button[data-toggle="dropdown"]+.dropdown-menu li a').contains('Preview'),
                changeServiceLocation: () => cy.get('button[data-toggle="dropdown"]+.dropdown-menu li a').contains('Change Bill To Service Location'),
            }
        },
        actionsDropdown: {
            button: () => cy.get('.topheader button').contains('Actions'),
            viewPayments: () => cy.get('app-invoices-list .btn-group.actions button+.dropdown-menu li a').contains('View Payments'),
            sendToEmail: () => cy.get('app-invoices-list .btn-group.actions button+.dropdown-menu li a').contains('Send to E-Mail'),
            changeServiceLocation: () => cy.get('.topheader button+.dropdown-menu li a').contains('Change Service Location'),
            changeBillToServiceLocation: () => cy.get('.topheader button+.dropdown-menu li a').contains('Change Bill To Service Location'),
            changeCustomer: () => cy.get('.topheader button+.dropdown-menu li a').contains('Change Customer'),
        },
        changeServiceLocation: {
            serviceLocations: () => cy.get('app-customer-selector .list-group-item'),
            proceedButton: () => cy.get('app-customer-selector button').contains('Proceed'),
        },
        changeBillToServiceLocation: {
            serviceLocations: () => cy.get('app-customer-selector .list-group-item'),
            proceedButton: () => cy.get('app-customer-selector button').contains('Proceed'),
        },
        changeCustomer: {
            selectCustomerTextbox: () => cy.get('app-customer-selector input.customersearchinput'),
            customerListItems: () => cy.get('app-customer-selector .list-group-item'),
            proceedButton: () => cy.get('app-customer-selector button').contains('Proceed'),
        },
        // this.elements.changeServiceLocation.serviceLocations().contains(serviceLocation).click()
        // this.elements.changeServiceLocation.proceedButton().click()
        invoicesTable: {
            selectAll: () => cy.get('.mat-table thead tr th mat-checkbox'),
            dateSort: () => cy.get('.mat-table thead button[aria-label="Change sorting for date"]'),
            dateSortArrow: () => cy.get('.mat-table thead button[aria-label="Change sorting for date"]+.mat-sort-header-arrow'),
            dateSortArrowHeader: () => cy.get('.mat-table thead th.mat-column-date'),
            numberSort: () => cy.get('.mat-table thead button[aria-label="Change sorting for number"]'),
            numberSortArrow: () => cy.get('.mat-table thead button[aria-label="Change sorting for number"]+.mat-sort-header-arrow'),
            numberSortArrowHeader: () => cy.get('.mat-table thead th.mat-column-number'),
            companySort: () => cy.get('.mat-table thead button[aria-label="Change sorting for companyName"]'),
            companySortArrow: () => cy.get('.mat-table thead button[aria-label="Change sorting for companyName"]+.mat-sort-header-arrow'),
            companySortArrowHeader: () => cy.get('.mat-table thead th.mat-column-companyName'),
            duedateSort: () => cy.get('.mat-table thead button[aria-label="Change sorting for dueDate"]'),
            duedateSortArrow: () => cy.get('.mat-table thead button[aria-label="Change sorting for dueDate"]+.mat-sort-header-arrow'),
            duedateSortArrowHeader: () => cy.get('.mat-table thead th.mat-column-dueDate'),
            totalSort: () => cy.get('.mat-table thead button[aria-label="Change sorting for total"]'),
            totalSortArrow: () => cy.get('.mat-table thead button[aria-label="Change sorting for total"]+.mat-sort-header-arrow'),
            totalSortArrowHeader: () => cy.get('.mat-table thead th.mat-column-total'),
        },
        selectSerialNumberModal: {
            serialNumberSelect: () => cy.get('app-serial-number-select mat-select'),
            serialNumberOption: () => cy.get('.mat-select-1-panel mat-option'),
            saveButton: () => cy.get('.mat-dialog-actions button').contains('Save')
        },
        setDiscountModal: {
            valueTextbox: () => cy.get('#modalAddDiscount input[name="discountValue"]'),
            saveButton: () => cy.get('#modalAddDiscount button').contains('Save')
        },
        invoicePreviewModal: {
            header: () => cy.get('app-report-preview-dialog .mat-dialog-title h4'),
            saveAsPDFButton: () => cy.get('app-report-preview-dialog button').contains('Save As PDF').first(),
            closeButton: () => cy.get('app-report-preview-dialog button').contains('Close')

        },
        previewiFrame: {
            custName: () => cy.get('.iframe #contentHolder').its('0.contentDocument.body').then(cy.wrap).find('.custName'),
            note: () => cy.get('.iframe #contentHolder').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).find('#reportContent h3+p'),
            description: () => cy.get('.iframe #contentHolder').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).find('#reportContent .col-lg-4.col-md-4:nth-child(3) h3+span'),
            invoiceNumber: () => cy.get('.iframe #contentHolder').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).find('#reportContent .proposalInfo tr:first-child() td:last-child()'),
            customerInfo: () => cy.get('.iframe #contentHolder').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).find('.customerInfo')
        },
        emailInvoiceModal: {
            header: () => cy.get('app-invoice-send-mail-dialog .mat-dialog-title h4'),
            sendButton: () => cy.get('app-invoice-send-mail-dialog .mat-dialog-title buton').contains('Send'),
        }

    }

    addNewInvoice = (newInvoiceInfo) => {
        const inputInvoiceInfo = {
            customer: newInvoiceInfo.customer || 'Ace Hardware',
            description: newInvoiceInfo.description || 'Test Desc',
            term: newInvoiceInfo.term || 'Not Selected',
            inventoriesToAdd: newInvoiceInfo.inventoriesToAdd || ['Inventory Item 1'],
            tax: newInvoiceInfo.tax || 'None'
        }
        this.elements.addNewInvoiceButton().click()
        cy.wait(6000)
        this.elements.addingNewInvoiceModal.searchField().type(inputInvoiceInfo.customer)
        this.elements.addingNewInvoiceModal.searchItem().click()
        this.elements.addingNewInvoiceModal.proceedButton().click()
        newInvoiceInfo.description && this.elements.addingNewInvoiceModal.descriptionTextbox().type(inputInvoiceInfo.description)
        this.elements.addingNewInvoiceModal.termSelect().select(inputInvoiceInfo.term)
        this.elements.addingNewInvoiceModal.taxTextbox().dblclick({ force: true })
        this.elements.addingNewInvoiceModal.taxOption().first().contains(inputInvoiceInfo.tax).click()
        inputInvoiceInfo.inventoriesToAdd.forEach((item) => {
            this.elements.addingNewInvoiceModal.partsSearch().type(item.toString()).wait(2000).type('{downArrow}{enter}')
            cy.wait(2000)
        })


    }

    addInvoiceDiscount = (discountValue) => {
        this.elements.addingNewInvoiceModal.addInvoiceDiscountButton().click()
        this.elements.setDiscountModal.valueTextbox().clear().type(discountValue)
        this.elements.setDiscountModal.saveButton().click()
    }

    selectOneSerialNumber = () => {
        this.elements.selectSerialNumberModal.serialNumberSelect().type('{enter}')
        cy.wait(2000)
        this.elements.selectSerialNumberModal.saveButton().click()
    }

    saveInvoice = () => {
        cy.wait(4000)
        this.elements.addingNewInvoiceModal.actionsDropdown.button().click()
        this.elements.addingNewInvoiceModal.actionsDropdown.save().click()
    }

    previewInvoice = () => {
        cy.wait(4000)
        this.elements.addingNewInvoiceModal.actionsDropdown.button().click()
        cy.wait(2000)
        this.elements.addingNewInvoiceModal.actionsDropdown.preview().click({ force: true })
    }

    checkPreview = (whatToCheck) => {
        cy.wait(4000)

        // Check if the preview modal is displayed
        this.elements.invoicePreviewModal.header().then($el => {
            const header = $el.text().toString()
            expect(header).to.equal('Invoice Preview')
            cy.wait(4000)
        })

        // Check invoice note
        whatToCheck.note && this.elements.previewiFrame.note().then($el => {
            expect($el.text()).to.equal(whatToCheck.note.toString())
        })

        // Check Description
        whatToCheck.description && whatToCheck.description.invoke('val').then($el => {
            cy.log($el)
            this.elements.previewiFrame.description().invoke('text').then($el2 => {
                expect($el2.toString()).to.equal($el.toString())
            })
        })

        // Check invoice number
        whatToCheck.invoiceNumber && whatToCheck.invoiceNumber.invoke('val').then($el => {
            cy.log($el)
            this.elements.previewiFrame.invoiceNumber().invoke('text').then($el2 => {
                expect($el2.toString()).to.equal($el.toString())
            })
        })

        // whatToCheck.billingAddress && whatToCheck.billingAddress.invoke('text').then($el2 => {
        //     // this.elements.previewiFrame.customerInfo().invoke('text').then($el => {
        //         expect($el2).to.contain('Cemetery Street, 4955')
        //     // })
        // })
    }

    closePreview = () => {
        this.elements.invoicePreviewModal.closeButton().last().click()
    }

    clickSaveAsPDFButton = () => {
        this.elements.invoicePreviewModal.saveAsPDFButton().click()
    }
    checkSavedPDF = () => {
        this.elements.addingNewInvoiceModal.invoiceNumber().then($el => {
            const iNumber = $el.val().toString()
            cy.readFile(`cypress/downloads/Invoice_${iNumber}.pdf`)
        })
    }
    sendToEmail = () => {
        this.elements.actionsDropdown.sendToEmail().click()
        this.elements.emailInvoiceModal.header().then($el => {
            const header = $el.text().toString()
            expect(header).to.equal('Email Invoice')
            this.elements.emailInvoiceModal.sendButton().click()
        })
    }

    changeServiceLocation = (serviceLocation) => {
        cy.wait(4500)
        this.elements.actionsDropdown.button().last().click()
        cy.wait(4000)
        this.elements.actionsDropdown.changeServiceLocation().last().click()
        cy.wait(4000)
        this.elements.changeServiceLocation.serviceLocations().contains(serviceLocation).click()
        cy.wait(4000)
        this.elements.changeServiceLocation.proceedButton().last().click()
    }

    changeBillToServiceLocation = (serviceLocation) => {
        cy.wait(4000)
        this.elements.actionsDropdown.button().last().click()
        cy.wait(4000)
        this.elements.actionsDropdown.changeBillToServiceLocation().last().click()
        cy.wait(4000)
        this.elements.changeBillToServiceLocation.serviceLocations().contains(serviceLocation).last().click()
        cy.wait(4000)
        this.elements.changeBillToServiceLocation.proceedButton().last().click()
    }

    changeCustomer = (customerName) => {
        cy.wait(4000)
        this.elements.actionsDropdown.button().last().click()
        cy.wait(4000)
        this.elements.actionsDropdown.changeCustomer().last().click()
        cy.wait(4000)
        this.elements.changeCustomer.selectCustomerTextbox().last().type(`${customerName}{enter}`)
        cy.wait(4000)
        this.elements.changeCustomer.customerListItems().contains(customerName).last().click()
        cy.wait(4000)
        this.elements.changeCustomer.proceedButton().last().click()
    }

}

module.exports = new InvoicesPage();