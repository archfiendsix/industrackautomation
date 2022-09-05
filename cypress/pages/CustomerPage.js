class CustomerPage {

    /*
cy.get('button[data-target="#modalAddNewCustomer"]').click()
    */
    elements = {
        searchBox: {
            input: () => cy.get('.singlesearchbox input[name="searchText"]'),
            searchIcon: () => cy.get('.singlesearchbox button[title="Search"]'),
        },

        addNewButton: () => cy.get('button[data-target="#modalAddNewCustomer"]'),
        moreActionsDropdown: {
            button: () => cy.get('app-customers-list .btn-group.actions'),
            addNewCustomert: () => cy.get('app-customers-list .btn-group.actions button+.dropdown-menu li a').contains('Add New Customer'),
            manageCustomerGroups: () => cy.get('app-customers-list .btn-group.actions button+.dropdown-menu li a').contains('Manage Customer Groups'),
            showInactiveCustomers: () => cy.get('app-customers-list .btn-group.actions button+.dropdown-menu li a').contains('Show Inactive Customers'),
        },
        customerTable: {
            numberSort: () => cy.get('.mat-table thead button[aria-label="Change sorting for customerNumber"]'),
            numberSortArrow: () => cy.get('.mat-table thead button[aria-label="Change sorting for customerNumber"]+.mat-sort-header-arrow'),
            numberSortHeader: () => cy.get('.mat-table thead th.mat-column-customerNumber'),
            companySort: () => cy.get('.mat-table thead button[aria-label="Change sorting for companyName"]'),
            companySortArrow: () => cy.get('.mat-table thead button[aria-label="Change sorting for companyName"]+.mat-sort-header-arrow'),
            companySortHeader: () => cy.get('.mat-table thead th.mat-column-companyName'),
            firstNameSort: () => cy.get('.mat-table thead button[aria-label="Change sorting for firstName"]'),
            firstNameSortArrow: () => cy.get('.mat-table thead button[aria-label="Change sorting for firstName"]+.mat-sort-header-arrow'),
            firstNameSortHeader: () => cy.get('.mat-table thead th.mat-column-firstName'),
            lastNameSort: () => cy.get('.mat-table thead button[aria-label="Change sorting for lastName"]'),
            lastNameSortArrow: () => cy.get('.mat-table thead button[aria-label="Change sorting for lastName"]+.mat-sort-header-arrow'),
            lastNameSortHeader: () => cy.get('.mat-table thead th.mat-column-lastName'),

        }

    }

    clickAddCustomerButton = () => {
        this.elements.addNewButton().click()
    }

    searchCustomer = (text) => {
        this.elements.searchBox.input().type(text)
        this.elements.searchBox.searchIcon().click()
    }


    customerTable = {
        sortByNumber: (ascDesc) => {
            this.elements.customerTable.numberSort().click({ force: true })

            cy.log(ascDesc)

            this.elements.customerTable.numberSortHeader().invoke('attr', 'aria-sort').then(attr => {
                if (attr !== ascDesc) {
                    this.elements.customerTable.numberSort().click({ force: true }).log('Sort clicked again')
                }
            })

            this.elements.customerTable.numberSortHeader().should('have.attr', 'aria-sort', ascDesc)
        },

        sortByCompany: (ascDesc) => {
            this.elements.customerTable.companySort().click()

            cy.log(ascDesc)

            this.elements.customerTable.companySortHeader().invoke('attr', 'aria-sort').then(attr => {
                if (attr !== ascDesc) {
                    this.elements.customerTable.companySort().click({ force: true }).log('Sort clicked again')
                }
            })
            this.elements.customerTable.companySortHeader().should('have.attr', 'aria-sort', ascDesc)

        },
        sortByFirstName: (ascDesc) => {
            this.elements.customerTable.firstNameSort().click()
            cy.log(ascDesc)

            this.elements.customerTable.firstNameSortHeader().invoke('attr', 'aria-sort').then(attr => {
                if (attr !== ascDesc) {
                    this.elements.customerTable.firstNameSort().click({ force: true }).log('Sort clicked again')
                }
            })

            this.elements.customerTable.firstNameSortHeader().should('have.attr', 'aria-sort', ascDesc)
        },

        sortByLastName: (ascDesc) => {
            this.elements.customerTable.lastNameSort().click()
            cy.log(ascDesc)

            this.elements.customerTable.lastNameSortHeader().invoke('attr', 'aria-sort').then(attr => {
                if (attr !== ascDesc) {
                    this.elements.customerTable.lastNameSort().click({ force: true }).log('Sort clicked again')
                }
            })

            this.elements.customerTable.lastNameSortHeader().should('have.attr', 'aria-sort', ascDesc)
        }
    }


}

module.exports = new CustomerPage();