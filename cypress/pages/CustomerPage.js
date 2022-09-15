class CustomerPage {

    /*
cy.get('button[data-target="#modalAddNewCustomer"]').click()
    */
    elements = {
        searchBox: {
            input: () => cy.get('.topsearchbox input[name="searchText"]'),
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
            numberCell: () => cy.get('.mat-table tbody tr td:first-child()'),
            tagscell: () => cy.get('.mat-table tbody tr td:last-child()'),
            tagsRow: () => cy.get('.mat-table tbody tr td'),
            paginationDropdown: () => cy.get('.mat-paginator-page-size-label+mat-form-field'),
            paginationDropdownOptions: () => cy.get('.mat-select-panel-wrap .mat-select-panel mat-option')
        },
        customerOverview: {
            addNewButton: () => cy.get('app-service-locations button').contains('Add New'),
            estimatesTab: {
                button: () => cy.get('.tabs-container.customerdetail li a').contains('Estimates'),
                addNewButton: () => cy.get('.wrapper.wrapper-content button').contains('Add New')
            }
        },
        addNewServiceLocationModal: {
            firstNameTextBox: () => cy.get('input#firstName'),
            lastNameTextBox: () => cy.get('input#lastName'),
            websiteAddressTextBox: () => cy.get('input#websiteAddress'),
            phoneNumberTextBox: () => cy.get('input#phoneNumber'),
            emailAddressTextBox: () => cy.get('input#emailAddress'),
            faxNumberTextBox: () => cy.get('input#faxNumber'),
            locationNameTextBox: () => cy.get('input#locationName'),
            streetAddressTextBox: () => cy.get('input#streetAddress'),
            unitNumberTextBox: () => cy.get('input#unitNumber'),
            cityTextBox: () => cy.get('input#city'),
            stateTextBox: () => cy.get('input#stateProvince'),
            postCodeTextBox: () => cy.get('input#postCode'),
            countryTextBox: () => cy.get('input#country'),
            selectATaxRateField: () => cy.get('mat-select#taxRateID'),
            selectATaxRateFieldOption: () => cy.get('mat-option'),
            saveButton: () => cy.get('app-location-edit-form .modal-footer button').contains('Save')
        }

    }

    clickAddCustomerButton = () => {
        this.elements.addNewButton().click()
    }

    searchCustomer = (text) => {
        this.elements.searchBox.input().type(text)
        this.elements.searchBox.searchIcon().click()
    }

    clickAddNewServiceLocation = () => {
        this.elements.customerOverview.addNewButton().click()
    }

    gotoAddNewEstimate = () => {
        cy.wait(1000)
        this.elements.customerOverview.estimatesTab.button().click()
        cy.wait(5000)
        this.elements.customerOverview.estimatesTab.addNewButton().should('be.visible').click()
    }

    searchAndVerifyTags = (tags) => {
        // this.setItemsPerPage()
        tags.forEach(i => {
            cy.log(i)
            this.elements.searchBox.input().clear().type(i)
            this.elements.searchBox.searchIcon().click()
            var searchTrue = false
            this.elements.customerTable.tagscell().each(($el) => {
                if (cy.wrap($el).contains(i)) {
                    searchTrue = true
                }
                else {
                    searchTrue = searchTrue
                }
                cy.log(searchTrue)
            })
        })

    }

    setItemsPerPage = () => {
        this.elements.customerTable.paginationDropdown().first().click()
        this.elements.customerTable.paginationDropdownOptions().contains('100')
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



    addNewServiceLocationModal = {
        fillServiceLocationData: (newCustomerInfo) => {
            const inputCustomerInfo = {
                firstName: newCustomerInfo.firstName || 'Francis',
                lastName: newCustomerInfo.lastName || 'White',
                phone: newCustomerInfo.phone || '8317474895',
                email: newCustomerInfo.email || 'dina.schill@gmail.com',
                locationName: newCustomerInfo.locationName || 'Genius Building',
                street: newCustomerInfo.street || 'Cemetery Street',
                unitNumber: newCustomerInfo.unitNumber || '4955',
                city: newCustomerInfo.city || 'Salinas',
                state: newCustomerInfo.state || 'CA',
                zip: newCustomerInfo.zip || '93901',
                country: newCustomerInfo.country || 'United States of America',
                selectATaxRate: newCustomerInfo.selectATaxRate || 'Not Selected'
            }
            this.elements.addNewServiceLocationModal.firstNameTextBox().type(inputCustomerInfo.firstName)
            this.elements.addNewServiceLocationModal.lastNameTextBox().type(inputCustomerInfo.lastName)
            this.elements.addNewServiceLocationModal.phoneNumberTextBox().type(inputCustomerInfo.phone)
            this.elements.addNewServiceLocationModal.phoneNumberTextBox().type(inputCustomerInfo.phone)
            this.elements.addNewServiceLocationModal.emailAddressTextBox().type(inputCustomerInfo.email)
            this.elements.addNewServiceLocationModal.locationNameTextBox().type(inputCustomerInfo.locationName)
            this.elements.addNewServiceLocationModal.streetAddressTextBox().type(inputCustomerInfo.street)
            this.elements.addNewServiceLocationModal.unitNumberTextBox().type(inputCustomerInfo.unitNumber)
            this.elements.addNewServiceLocationModal.cityTextBox().type(inputCustomerInfo.city)
            this.elements.addNewServiceLocationModal.stateTextBox().type(inputCustomerInfo.state)
            this.elements.addNewServiceLocationModal.postCodeTextBox().type(inputCustomerInfo.zip)
            this.elements.addNewServiceLocationModal.countryTextBox().type(inputCustomerInfo.country)
            this.elements.addNewServiceLocationModal.selectATaxRateField().click()
            this.elements.addNewServiceLocationModal.selectATaxRateFieldOption().contains(inputCustomerInfo.selectATaxRate).first().click()
        },
        clickSaveButton: () => {
            this.elements.addNewServiceLocationModal.saveButton().click()
        }
    }

}

module.exports = new CustomerPage();