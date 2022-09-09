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
            descriptionTextbox:()=> cy.get('input[name="invoiceDescription"]'),
            partsSearch: () => cy.get('.editable input[aria-label="Parts & services search"]'),
            termSelect: ()=> cy.get('select#invoiceTermId'),
            taxTextbox: ()=> cy.get('app-tax-selector input'),
            taxOption: ()=> cy.get('.mat-autocomplete-panel mat-option'),
            addInvoiceDiscountButton: ()=>cy.get('.invoice-total a'),
            actionsDropdown: {
                button: ()=> cy.get('button[data-toggle="dropdown"]').contains('Actions'),
                save:()=> cy.get('button[data-toggle="dropdown"]+.dropdown-menu li a').first().contains('Save'),
            }
        },
        actionsDropdown: {
            button: () => cy.get('app-invoices-list .btn-group.actions button'),
            viewPayments: () => cy.get('app-invoices-list .btn-group.actions button+.dropdown-menu li a').contains('View Payments'),
        },

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
            serialNumberSelect: ()=> cy.get('app-serial-number-select mat-select'),
            serialNumberOption: ()=> cy.get('.mat-select-1-panel mat-option'),
            saveButton: ()=> cy.get('.mat-dialog-actions button').contains('Save')
        },
        setDiscountModal: {
            valueTextbox: ()=> cy.get('#modalAddDiscount input[name="discountValue"]'),
            saveButton:()=> cy.get('#modalAddDiscount button').contains('Save')
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
        this.elements.addingNewInvoiceModal.taxTextbox().dblclick({force:true})
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

    selectOneSerialNumber=()=> {
        this.elements.selectSerialNumberModal.serialNumberSelect().type('{enter}')
        cy.wait(2000)
        this.elements.selectSerialNumberModal.saveButton().click()
    }

    saveInvoice=()=> {
        this.elements.addingNewInvoiceModal.actionsDropdown.button().click()
        this.elements.addingNewInvoiceModal.actionsDropdown.save().click()
    }

}

module.exports = new InvoicesPage();