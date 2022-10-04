const AddCustomerPage = require("./AddCustomerPage")

class CustomerPage {

    /*
cy.get('button[data-target="#modalAddNewCustomer"]').click()
    */
    elements = {
        searchBox: {
            input: () => cy.get('.topsearchbox input[name="searchText"]'),
            searchIcon: () => cy.get('.singlesearchbox button[title="Search"]'),
        },
        validateAddress: () => cy.get('a').contains('Validate address'),

        addNewButton: () => cy.get('button[data-target="#modalAddNewCustomer"]'),
        moreActionsDropdown: {
            button: () => cy.get('app-customers-list .btn-group.actions'),
            addNewCustomer: () => cy.get('app-customers-list .btn-group.actions button+.dropdown-menu li a').contains('Add New Customer'),
            manageCustomerGroups: () => cy.get('app-customers-list .btn-group.actions button+.dropdown-menu li a').contains('Manage Customer Groups'),
            showInactiveCustomers: () => cy.get('app-customers-list .btn-group.actions button+.dropdown-menu li a').contains('Show Inactive Customers'),
            showActiveCustomers: () => cy.get('app-customers-list .btn-group.actions button+.dropdown-menu li a').contains('Show Active Customers'),
            manageCustomerGroups: () => cy.get('app-customers-list .btn-group.actions button+.dropdown-menu li a').contains('Manage Customer Groups'),
        },

        manageCustomerGroupsModal: {
            addNewButton: () => cy.get('app-address-group button').contains('Add New'),
            groupNameCell: () => cy.get('app-address-group table tbody tr td'),
            filterTexbox: () => cy.get('app-address-group label[for="search"]+input'),
            edit: () => cy.get('.dropdown-menu a').contains('Edit').first()
        },
        addEditAddressGroupModal: {
            groupNameTextbox: () => cy.get('app-address-group input#txtGroupName'),
            filterTexbox: () => cy.get('app-address-group label[for="search"]+input'),
            saveButton: () => cy.get('app-address-group .modal-footer button').contains('Save'),
            companyNameCell: () => cy.get('app-edit-address-group table tbody tr'),
            rowCheckbox: () => cy.get('app-address-group table tbody tr'),
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
            tagscell: () => cy.get('.mat-table tbody tr td.mat-column-tags'),
            tagsRow: () => cy.get('.mat-table tbody tr td'),

            paginationDropdown: () => cy.get('.mat-paginator-page-size-label+mat-form-field'),
            paginationDropdownOptions: () => cy.get('.mat-select-panel-wrap .mat-select-panel mat-option')
        },
        notesTable: {
            notesCell: () => cy.get('app-address-book-notes table tbody tr td').eq(2)
        },
        customerOverview: {
            addNewButton: () => cy.get('app-service-locations button').contains('Add New'),
            editContactButton: () => cy.get('button[data-target="#modalCustomerEdit"]'),
            estimatesTab: {
                button: () => cy.get('.tabs-container.customerdetail li a').contains('Estimates'),
                addNewButton: () => cy.get('.wrapper.wrapper-content button').contains('Add New')
            },
            notesTab: {
                button: () => cy.get('a[href="#tab-7"]'),
                AddOfficeNotesButton: () => cy.get('button').contains('Add Office Notes ')
            },
            equipmentTab: {
                button:()=> cy.get('a[data-toggle="tab"]').contains('Equipment'),
                addNewEquipmentButton: () => cy.get('button').contains('Add New Equipment')
            }
        },
        addNewEquipmentModal: {
            upuodFromInventoryTextbox:  ()=> cy.get('app-equipment-edit-form input[name="selectInventory"]'),
            loadButton:  ()=> cy.get('app-equipment-edit-form button').contains('Load').last(),
            saveButton: ()=> cy.get('app-equipment-edit-form button').contains('Save').last(),
            
        },

        addNewNoteModal: {
            noteTextTextarea: () => cy.get('app-note-edit-form textarea#note'),
            siteNoteCheckbox: () => cy.get('app-note-edit-form input#isSiteMap'),
            assignNoteToaServiceLocationField: () => cy.get('app-note-edit-form mat-select#serviceLocationId'),
            assignNoteToaServiceLocationFieldOption: () => cy.get('#serviceLocationId-panel mat-option'),
            saveButton: () => cy.get('app-note-edit-form button').contains('Save')
        },

        

        editCustomerModal: {
            makeInactiveButton: () => cy.get('app-customers-edit-form .modal-footer button').contains('Make Inactive'),
            makeActiveButton: () => cy.get('app-customers-edit-form .modal-footer button').contains('Make Active'),
            saveButton: () => cy.get('app-customers-edit-form .modal-footer button').contains('Save'),
            closeButton: () => cy.get('app-customers-edit-form .modal-footer button').contains('Close'),
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
        },

        validateAddressModal: {
            okButton: () => cy.get('validate-coordinates-modal button').contains('Ok')
        }

    }

    addEquipment = (equipmentInformation) => {
        this.elements.customerOverview.equipmentTab.button().click()
        this.elements.customerOverview.equipmentTab.addNewEquipmentButton().click()
        equipmentInformation.upuodFromInventory && this.elements.addNewEquipmentModal.upuodFromInventoryTextbox().clear().type(equipmentInformation.upuodFromInventory).then(()=> {
            cy.get('mat-option').contains(equipmentInformation.upuodFromInventory).first().click()
        })
        cy.wait(3000)
        this.elements.addNewEquipmentModal.loadButton().click()
        this.elements.addNewEquipmentModal.saveButton().click()
    }

    clickAddCustomerButton = () => {
        this.elements.addNewButton().click()
    }

    // searchCustomer = (text) => {
    //     this.elements.searchBox.input().clear().type(text)
    //     this.elements.searchBox.searchIcon().click()
    // }

    clickAddNewServiceLocation = () => {
        this.elements.customerOverview.addNewButton().click()
    }

    gotoAddNewEstimate = () => {
        cy.wait(1000)
        this.elements.customerOverview.estimatesTab.button().click()
        cy.wait(5000)
        this.elements.customerOverview.estimatesTab.addNewButton().should('be.visible').click()
    }

    gotoManageCustomerGroups = () => {
        this.elements.moreActionsDropdown.button().click()
        this.elements.moreActionsDropdown.manageCustomerGroups().click()
        this.elements.manageCustomerGroupsModal.addNewButton().click()
    }

    gotoNotesTab = () => {
        this.elements.customerOverview.notesTab.button().click()
    }

    clickAddOfficeNotesButton = () => {
        this.elements.customerOverview.notesTab.AddOfficeNotesButton().click()
    }

    addAddressGroup = (addressGroupInfo) => {
        this.elements.addEditAddressGroupModal.groupNameTextbox().clear().type(addressGroupInfo.groupName)
        cy.wait(1500)
        this.elements.addEditAddressGroupModal.filterTexbox().last().clear().type(addressGroupInfo.companyName)
        cy.wait(1000)
        this.elements.addEditAddressGroupModal.companyNameCell().contains(addressGroupInfo.companyName).parent().find('input[type="checkbox"]').click()
        this.elements.addEditAddressGroupModal.saveButton().click()
    }

    filterGroupTable = (groupName) => {
        this.elements.manageCustomerGroupsModal.filterTexbox().first().clear().type(groupName).type('{enter}')

    }

    searchAndEditGroup = (groupName) => {
        this.elements.manageCustomerGroupsModal.groupNameCell().contains(groupName).parent().find('.btn-group.actions button').click()
        this.elements.manageCustomerGroupsModal.edit().click()
    }

    searchAndVerifyTags = (tags, customerNumber) => {
        // this.setItemsPerPage()
        tags.forEach(i => {
            cy.log(i)
            const custNumber = customerNumber.toString()
            this.elements.searchBox.input().clear().type(i)
            this.elements.searchBox.searchIcon().click()
            var searchTrue = false
            this.elements.customerTable.tagscell().contains(i.toString()).parent().find('td').eq(0).contains(custNumber)
        })

    }

    setItemsPerPage = () => {
        this.elements.customerTable.paginationDropdown().first().click()
        this.elements.customerTable.paginationDropdownOptions().contains('100')
    }

    makeNewCustomerInactive = () => {
        this.elements.customerOverview.editContactButton().click()
        this.elements.editCustomerModal.makeInactiveButton().should('be.visible').click()
        cy.get('dialog-overview-modal button').contains('Yes').click()
        this.elements.editCustomerModal.closeButton().click()

    }

    uploadAnotherAttachment = (filename) => {
        this.elements.customerOverview.editContactButton().click()
        AddCustomerPage.elements.chooseFileButton().last().attachFile(filename)
        AddCustomerPage.elements.chooseFileButton().last().click()
        this.elements.editCustomerModal.saveButton().click()
    }

    checkAddCompanyOnAddressGroupTable = (addressGroupInfo) => {
        this.elements.addEditAddressGroupModal.companyNameCell().first().should('contain', addressGroupInfo.companyName)
    }
    makeNewCustomerActive = () => {
        this.elements.customerOverview.editContactButton().click()
        this.elements.editCustomerModal.makeActiveButton().should('be.visible').click()
        cy.get('dialog-overview-modal button').contains('Yes').click()
        this.elements.editCustomerModal.closeButton().click()

    }

    searchCustomer = (text) => {
        this.elements.searchBox.input().clear().type(`${text}{enter}`)
    }

    confirmUnsearchability = (item) => {
        this.elements.customerTable.numberCell().each($el => {
            cy.wrap($el).should('not.contain', item.toString())
        })
    }

    confirmSearchability = (item) => {
        this.elements.customerTable.numberCell().each($el => {
            cy.wrap($el).should('contain', item.toString())
        })
    }

    searchAndClickCustomer = (customerNumber) => {
        this.elements.customerTable.numberCell().should('contain', customerNumber).parent().click()

    }


    showInactiveCustomers = () => {
        this.elements.moreActionsDropdown.button().click()
        this.elements.moreActionsDropdown.showInactiveCustomers().click()
    }
    showActiveCustomers = () => {
        this.elements.moreActionsDropdown.button().click()
        this.elements.moreActionsDropdown.showActiveCustomers().click()
    }

    makeCustomerActive = (customerNumber) => {
        // this.elements.searchBox.input().clear().type(customerNumber)
        this.elements.customerTable.numberCell().should('contain', customerNumber).first().parent().click()
        this.makeNewCustomerActive()
    }

    validateAddress = () => {
        this.elements.validateAddress().click()
        cy.wait(4000)
        this.elements.validateAddressModal.okButton().click({ force: true })
    }

    checkAssignedNotes = (asssignedNotesInfo) => {
        asssignedNotesInfo.forEach((i) => {
            i.assignNoteToAServiceLocation && this.elements.notesTable.notesCell().should('contain', 'Site Note')
            cy.wait(1000)
            this.elements.notesTable.notesCell().should('contain', i.noteText).parent().find('td').eq(1).then($el => {

                cy.wrap($el).contains(i.street.toString())

            })

        })
    }

    fillOfficeNoteForm = (officeNoteInfo) => {
        cy.wait(1000)
        this.elements.addNewNoteModal.noteTextTextarea().clear().type(officeNoteInfo.noteText)
        cy.wait(1000)
        officeNoteInfo.siteNote && this.elements.addNewNoteModal.siteNoteCheckbox().check()
        this.elements.addNewNoteModal.assignNoteToaServiceLocationField().click()
        this.elements.addNewNoteModal.assignNoteToaServiceLocationFieldOption().eq(officeNoteInfo.assignNoteToAServiceLocation).click()
        this.elements.addNewNoteModal.saveButton().click()

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
            this.elements.addNewServiceLocationModal.firstNameTextBox().clear().type(inputCustomerInfo.firstName)
            this.elements.addNewServiceLocationModal.lastNameTextBox().clear().type(inputCustomerInfo.lastName)
            this.elements.addNewServiceLocationModal.phoneNumberTextBox().clear().type(inputCustomerInfo.phone)
            this.elements.addNewServiceLocationModal.phoneNumberTextBox().clear().type(inputCustomerInfo.phone)
            this.elements.addNewServiceLocationModal.emailAddressTextBox().clear().type(inputCustomerInfo.email)
            this.elements.addNewServiceLocationModal.locationNameTextBox().clear().type(inputCustomerInfo.locationName)
            this.elements.addNewServiceLocationModal.streetAddressTextBox().clear().type(inputCustomerInfo.street)
            this.elements.addNewServiceLocationModal.unitNumberTextBox().clear().type(inputCustomerInfo.unitNumber)
            this.elements.addNewServiceLocationModal.cityTextBox().clear().type(inputCustomerInfo.city)
            this.elements.addNewServiceLocationModal.stateTextBox().clear().type(inputCustomerInfo.state)
            this.elements.addNewServiceLocationModal.postCodeTextBox().clear().type(inputCustomerInfo.zip)
            this.elements.addNewServiceLocationModal.countryTextBox().clear().type(inputCustomerInfo.country)
            this.elements.addNewServiceLocationModal.selectATaxRateField().click()
            this.elements.addNewServiceLocationModal.selectATaxRateFieldOption().contains(inputCustomerInfo.selectATaxRate).first().click()
        },
        clickSaveButton: () => {
            this.elements.addNewServiceLocationModal.saveButton().click()
        }
    }

}

module.exports = new CustomerPage();