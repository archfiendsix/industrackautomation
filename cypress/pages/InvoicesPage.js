class InvoicesPage {

    /*
cy.get('button[data-target="#modalAddNewCustomer"]').click()
    */
    elements = {
        topSummary: {
            paidAmount: ()=> cy.get('.topsummary .widgetbox:nth-child(1) .widget .text-right h2'),
            overdue: ()=> cy.get('.topsummary .widgetbox:nth-child(2) .widget .text-right h2'),
            openInvoices: ()=> cy.get('.topsummary .widgetbox:nth-child(3) .widget .text-right h2'),
        },
        searchBox: {
            input: () => cy.get('.singlesearchbox input[name="searchText"]'),
            searchIcon: () => cy.get('.singlesearchbox button[title="Search"]'),
        },
        fromToDates: {
            fromInput: ()=> cy.get('.form-group.datesbox label.control-label+mat-form-field input'),
            toInput: ()=> cy.get('.form-group.datesbox mat-form-field input').last(),
        },
        filterToggle: {
            all:()=>cy.get('.form-group.datesbox+.btn-group mat-button-toggle-group mat-button-toggle button').contains('All'),
            unpaid:()=>cy.get('.form-group.datesbox+.btn-group mat-button-toggle-group mat-button-toggle button').contains('Unpaid'),
            overdue:()=>cy.get('.form-group.datesbox+.btn-group mat-button-toggle-group mat-button-toggle button').contains('Overdue'),
            paid:()=>cy.get('.form-group.datesbox+.btn-group mat-button-toggle-group mat-button-toggle button').contains('Paid'),
        },
        addNewInvoiceButton: () => cy.get('.top.m-t-sm button.btn-primary.m-r-sm').contains('Add New'),
        
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
        }
        
    }

    checkInvoiceStatus = () => {
        this.elements.statusLabel().contains('Unpaid')
    }
}

module.exports = new InvoicesPage();