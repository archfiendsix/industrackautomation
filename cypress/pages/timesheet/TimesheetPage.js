class TimesheetPage {

    /*
cy.get('button[data-target="#modalAddNewCustomer"]').click()
    */
    elements = {
        topSummary: {
            shiftTime: () => cy.get('.topsummary .widgetbox:nth-child(1) .widget .text-right h2'),
            jobTime: () => cy.get('.topsummary .widgetbox:nth-child(2) .widget .text-right h2'),
            breakTime: () => cy.get('.topsummary .widgetbox:nth-child(3) .widget .text-right h2'),
        },
        filter: {
            dropdown: () => cy.get('crew-select .dropdown.dropdown-crew'),
            dropdownLabel: () => cy.get('crew-select .dropdown.dropdown-crew .curlLabel'),
            clearFilterButton: () => cy.get('crew-select+button').contains('Clear Filter'),
            filterSearchBox: () => cy.get('crew-select .dropdown.dropdown-crew .crewList .searchField input'),
        },

        addTimesheetButton: () => cy.get('.filterbox .curDate+.pull-right button.btn-primary.m-r-sm'),

        actionsDropdown: {
            button: () => cy.get('timesheet .btn-group.actions button'),
            approve: () => cy.get('timesheet .btn-group.actions button+.dropdown-menu li a').contains('Approve'),
            viewCompletedJobs: () => cy.get('timesheet .btn-group.actions button+.dropdown-menu li a').contains('View Completed Jobs'),
            viewEquipmentTime: () => cy.get('timesheet .btn-group.actions button+.dropdown-menu li a').contains('View Equipment time'),

        },

        timesheetTable: {
            idSort: () => cy.get('.mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for driverCode"]'),
            idSortArrow: () => cy.get('.mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for driverCode"]+.mat-sort-header-arrow'),
            idSortArrowHeader: () => cy.get('.mat-table.js-drivers-info-grid thead th.mat-column-driverCode'),
            fieldEmployeesSort: () => cy.get('.mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for displayName"]'),
            fieldEmployeesSortArrow: () => cy.get('.mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for displayName"]+.mat-sort-header-arrow'),
            fieldEmployeesSortArrowHeader: () => cy.get('.mat-table thead th.mat-column-displayName'),
            statusSort: () => cy.get('.mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for timeTypeID"]'),
            statusSortArrow: () => cy.get('.mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for timeTypeID"]+.mat-sort-header-arrow'),
            statusSortArrowHeader: () => cy.get('.mat-table.js-drivers-info-grid thead th.mat-column-timeTypeID'),
            companySort: () => cy.get('.mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for company"]'),
            companySortArrow: () => cy.get('.mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for company"]+.mat-sort-header-arrow'),
            companySortArrowHeader: () => cy.get('.mat-table.js-drivers-info-grid thead th.mat-column-company'),
            locationSort: () => cy.get('.mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for location"]'),
            locationSortArrow: () => cy.get('.mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for location"]+.mat-sort-header-arrow'),
            locationSortArrowHeader: () => cy.get('.mat-table.js-drivers-info-grid thead th.mat-column-location'),
            progressSort: () => cy.get('.mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for progress"]'),
            progressSortArrow: () => cy.get('.mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for progress"]+.mat-sort-header-arrow'),
            progressSortArrowHeader: () => cy.get('.mat-table.js-drivers-info-grid thead th.mat-column-progress'),
            recordConflictsSort: () => cy.get('.mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for hasCOnflicts"]'),
            recordConflictsSortArrow: () => cy.get('.mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for hasCOnflicts"]+.mat-sort-header-arrow'),
            recordConflictsSortArrowHeader: () => cy.get('.mat-table.js-drivers-info-grid thead th.mat-column-hasCOnflicts'),
        },

        timesheetJobsTable: {
            selectAll: () => cy.get('#timesheetJobListHolder .mat-table thead tr th mat-checkbox'),
            numberSort: () => cy.get('#timesheetJobListHolder .mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for driverCode"]'),
            numberSortArrow: () => cy.get('#timesheetJobListHolder .mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for driverCode"]+.mat-sort-header-arrow'),
            numberSortArrowHeader: () => cy.get('#timesheetJobListHolder .mat-table.js-drivers-info-grid thead th.mat-column-driverCode'),
            jobNameSort: () => cy.get('#timesheetJobListHolder .mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for jobName"]'),
            jobNameSortArrow: () => cy.get('#timesheetJobListHolder .mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for jobName"]+.mat-sort-header-arrow'),
            jobNameSortArrowHeader: () => cy.get('#timesheetJobListHolder .mat-table.js-drivers-info-grid thead th.mat-column-jobName'),
            customerSort: () => cy.get('#timesheetJobListHolder .mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for customer"]'),
            customerSortArrow: () => cy.get('#timesheetJobListHolder .mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for customer"]+.mat-sort-header-arrow'),
            customerSortArrowHeader: () => cy.get('#timesheetJobListHolder .mat-table.js-drivers-info-grid thead th.mat-column-customer'),
            addressSort: () => cy.get('#timesheetJobListHolder .mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for address"]'),
            addressSortArrow: () => cy.get('#timesheetJobListHolder .mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for address"]+.mat-sort-header-arrow'),
            addressSortArrowHeader: () => cy.get('#timesheetJobListHolder .mat-table.js-drivers-info-grid thead th.mat-column-address'),
            citySort: () => cy.get('#timesheetJobListHolder .mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for city"]'),
            citySortArrow: () => cy.get('#timesheetJobListHolder .mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for city"]+.mat-sort-header-arrow'),
            citySortArrowHeader: () => cy.get('#timesheetJobListHolder .mat-table.js-drivers-info-grid thead th.mat-column-city'),
            createdSort: () => cy.get('#timesheetJobListHolder .mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for created"]'),
            createdSortArrow: () => cy.get('#timesheetJobListHolder .mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for created"]+.mat-sort-header-arrow'),
            createdSortArrowHeader: () => cy.get('#timesheetJobListHolder .mat-table.js-drivers-info-grid thead th.mat-column-created'),
        },

        timesheetRecordsModal: {
            fieldEmployeeDropdown: () => cy.get('mat-select.select-employee'),
            fieldEmployeeDropdownOptions: () => cy.get('.mat-select-panel-wrap mat-option'),
            addNewTimesheetRecordButton: () => cy.get('app-timesheet-overview button.btn.btn-w-m.btn-primary.m-r-sm').contains('Add New'),
            addTimesheetModal: {
                typeDropdownButton: () => cy.get('app-timesheet-edit mat-select[formcontrolname="jobTypeId"]'),
                costCodeDropDownButton: () => cy.get('app-timesheet-edit mat-select[formcontrolname="costCodeId"]'),
                saveChangesButton: () => cy.get('app-timesheet-edit button.btn.btn-info').contains('Save Changes'),
            },
            dropdownOptions: () => cy.get('.mat-select-panel-wrap mat-option')
        }

    }

    clickTimes = () => {
        this.elements.statusLabel().contains('Unpaid')

    }

    addNewTimesheet = () => {
        this.elements.addTimesheetButton().click()
    }

    addNewTimesheetForEmployee = () => {

        this.elements.timesheetRecordsModal.addNewTimesheetRecordButton().click()
    }

    selectFieldEmployee = (employeeName) => {
        this.elements.timesheetRecordsModal.fieldEmployeeDropdown().click()
        this.elements.timesheetRecordsModal.fieldEmployeeDropdownOptions().contains(employeeName).click()
        // .find('option')
        // .contains(employeeName)
        // .as('selectOption')
        // .then(() => {
        //     cy.get('select')
        //         .select(`${this.selectOption.text()}`)
        // })

    }

    selectTimesheetType = (option) => {

        if (option) {
            this.elements.timesheetRecordsModal.addTimesheetModal.typeDropdownButton().click()
            this.elements.timesheetRecordsModal.dropdownOptions().contains(option).click()
        }
        else {
            cy.type('{escape}')
        }
    }

    selectTimesheetCostCode = (option) => {
        if (option) {
            this.elements.timesheetRecordsModal.addTimesheetModal.costCodeDropDownButton().click({ force: true })
            this.elements.timesheetRecordsModal.dropdownOptions().contains(option).click()
        }
        else {
            cy.type('{escape}')
        }
    }

    saveAddTimeSheet = () => {
        this.elements.timesheetRecordsModal.addTimesheetModal.saveChangesButton().click()
        

        cy.intercept('https://onetrackwebapiprod.azurewebsites.net/api/Timesheets/Update').as('update')
        // cy.log('@update')

        cy.wait('@update').should(response=> {
            cy.log(response)
          })
        // .then(el => {
            

        //     if(el.is(':disabled')) {
        //         return
        //     }
        //     else {
        //         cy.wrap(el).click()
        //     }

        // })
    }
}

module.exports = new TimesheetPage();