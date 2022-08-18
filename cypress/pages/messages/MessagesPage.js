class MessagesPage {
    elements = {
        filterTextBox: () => cy.get('.ibox.filterbox .form-inline .form-group.search input'),
        fromToDates: {
            fromTextBox: () => cy.get('.ibox.filterbox .form-inline .form-group:nth-child(2) mat-form-field:nth-child(1) input'),
            fromDatePicker: () => cy.get('.ibox.filterbox .form-inline .form-group:nth-child(2) mat-form-field:nth-child(1) mat-datepicker'),
            toTextBox: () => cy.get('.ibox.filterbox .form-inline .form-group:nth-child(2) mat-form-field:nth-child(2) input'),
            toDatePicker: () => cy.get('.ibox.filterbox .form-inline .form-group:nth-child(2) mat-form-field:nth-child(2) mat-datepicker'),
        },
        clearFilterButton: () => cy.get('button.btn.clearFilter'),
        addNewMessageButton: () => cy.get('.top.m-t-sm button.btn-primary.m-r-sm').contains('Add New'),
        deleteMessageButton: () => cy.get('.top.m-t-sm button.btn-outlined.btn-sn').contains('Delete'),
        invoicesTable: {
            selectAll: () => cy.get('.mat-table thead tr th mat-checkbox'),
            dateSort: () => cy.get('.mat-table thead button[aria-label="Change sorting for date"]'),
            dateSortArrow: () => cy.get('.mat-table thead button[aria-label="Change sorting for date"]+.mat-sort-header-arrow'),
            dateSortArrowHeader: () => cy.get('.mat-table thead th.mat-column-date'),
            
        }
    }
}

module.exports = new MessagesPage();