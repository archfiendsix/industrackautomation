class TimesheetPage {
  /*
cy.get('button[data-target="#modalAddNewCustomer"]').click()
    */
  elements = {
    topSummary: {
      shiftTime: () =>
        cy.get(".topsummary .widgetbox:nth-child(1) .widget .text-right h2"),
      jobTime: () =>
        cy.get(".topsummary .widgetbox:nth-child(2) .widget .text-right h2"),
      breakTime: () =>
        cy.get(".topsummary .widgetbox:nth-child(3) .widget .text-right h2"),
    },
    filter: {
      dropdown: () => cy.get("crew-select .dropdown.dropdown-crew"),
      dropdownLabel: () =>
        cy.get("crew-select .dropdown.dropdown-crew .curlLabel"),
      clearFilterButton: () =>
        cy.get("crew-select+button").contains("Clear Filter"),
      filterSearchBox: () =>
        cy.get(
          "crew-select .dropdown.dropdown-crew .crewList .searchField input"
        ),
    },

    addTimesheetButton: () =>
      cy.get(".filterbox .curDate+.pull-right button.btn-primary.m-r-sm"),

    actionsDropdown: {
      button: () => cy.get("timesheet .btn-group.actions button"),
      approve: () =>
        cy
          .get("timesheet .btn-group.actions button+.dropdown-menu li a")
          .contains("Approve"),
      viewCompletedJobs: () =>
        cy
          .get("timesheet .btn-group.actions button+.dropdown-menu li a")
          .contains("View Completed Jobs"),
      viewEquipmentTime: () =>
        cy
          .get("timesheet .btn-group.actions button+.dropdown-menu li a")
          .contains("View Equipment time"),
    },

    timesheetTable: {
      idSort: () =>
        cy.get(
          '.mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for driverCode"]'
        ),
      idSortArrow: () =>
        cy.get(
          '.mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for driverCode"]+.mat-sort-header-arrow'
        ),
      idSortArrowHeader: () =>
        cy.get(
          ".mat-table.js-drivers-info-grid thead th.mat-column-driverCode"
        ),
      fieldEmployeesSort: () =>
        cy.get(
          '.mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for displayName"]'
        ),
      fieldEmployeesSortArrow: () =>
        cy.get(
          '.mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for displayName"]+.mat-sort-header-arrow'
        ),
      fieldEmployeesSortArrowHeader: () =>
        cy.get(".mat-table thead th.mat-column-displayName"),
      statusSort: () =>
        cy.get(
          '.mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for timeTypeID"]'
        ),
      statusSortArrow: () =>
        cy.get(
          '.mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for timeTypeID"]+.mat-sort-header-arrow'
        ),
      statusSortArrowHeader: () =>
        cy.get(
          ".mat-table.js-drivers-info-grid thead th.mat-column-timeTypeID"
        ),
      companySort: () =>
        cy.get(
          '.mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for company"]'
        ),
      companySortArrow: () =>
        cy.get(
          '.mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for company"]+.mat-sort-header-arrow'
        ),
      companySortArrowHeader: () =>
        cy.get(".mat-table.js-drivers-info-grid thead th.mat-column-company"),
      locationSort: () =>
        cy.get(
          '.mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for location"]'
        ),
      locationSortArrow: () =>
        cy.get(
          '.mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for location"]+.mat-sort-header-arrow'
        ),
      locationSortArrowHeader: () =>
        cy.get(".mat-table.js-drivers-info-grid thead th.mat-column-location"),
      progressSort: () =>
        cy.get(
          '.mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for progress"]'
        ),
      progressSortArrow: () =>
        cy.get(
          '.mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for progress"]+.mat-sort-header-arrow'
        ),
      progressSortArrowHeader: () =>
        cy.get(".mat-table.js-drivers-info-grid thead th.mat-column-progress"),
      recordConflictsSort: () =>
        cy.get(
          '.mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for hasCOnflicts"]'
        ),
      recordConflictsSortArrow: () =>
        cy.get(
          '.mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for hasCOnflicts"]+.mat-sort-header-arrow'
        ),
      recordConflictsSortArrowHeader: () =>
        cy.get(
          ".mat-table.js-drivers-info-grid thead th.mat-column-hasCOnflicts"
        ),
    },

    timesheetJobsTable: {
      selectAll: () =>
        cy.get("#timesheetJobListHolder .mat-table thead tr th mat-checkbox"),
      numberSort: () =>
        cy.get(
          '#timesheetJobListHolder .mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for driverCode"]'
        ),
      numberSortArrow: () =>
        cy.get(
          '#timesheetJobListHolder .mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for driverCode"]+.mat-sort-header-arrow'
        ),
      numberSortArrowHeader: () =>
        cy.get(
          "#timesheetJobListHolder .mat-table.js-drivers-info-grid thead th.mat-column-driverCode"
        ),
      jobNameSort: () =>
        cy.get(
          '#timesheetJobListHolder .mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for jobName"]'
        ),
      jobNameSortArrow: () =>
        cy.get(
          '#timesheetJobListHolder .mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for jobName"]+.mat-sort-header-arrow'
        ),
      jobNameSortArrowHeader: () =>
        cy.get(
          "#timesheetJobListHolder .mat-table.js-drivers-info-grid thead th.mat-column-jobName"
        ),
      customerSort: () =>
        cy.get(
          '#timesheetJobListHolder .mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for customer"]'
        ),
      customerSortArrow: () =>
        cy.get(
          '#timesheetJobListHolder .mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for customer"]+.mat-sort-header-arrow'
        ),
      customerSortArrowHeader: () =>
        cy.get(
          "#timesheetJobListHolder .mat-table.js-drivers-info-grid thead th.mat-column-customer"
        ),
      addressSort: () =>
        cy.get(
          '#timesheetJobListHolder .mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for address"]'
        ),
      addressSortArrow: () =>
        cy.get(
          '#timesheetJobListHolder .mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for address"]+.mat-sort-header-arrow'
        ),
      addressSortArrowHeader: () =>
        cy.get(
          "#timesheetJobListHolder .mat-table.js-drivers-info-grid thead th.mat-column-address"
        ),
      citySort: () =>
        cy.get(
          '#timesheetJobListHolder .mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for city"]'
        ),
      citySortArrow: () =>
        cy.get(
          '#timesheetJobListHolder .mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for city"]+.mat-sort-header-arrow'
        ),
      citySortArrowHeader: () =>
        cy.get(
          "#timesheetJobListHolder .mat-table.js-drivers-info-grid thead th.mat-column-city"
        ),
      createdSort: () =>
        cy.get(
          '#timesheetJobListHolder .mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for created"]'
        ),
      createdSortArrow: () =>
        cy.get(
          '#timesheetJobListHolder .mat-table.js-drivers-info-grid thead button[aria-label="Change sorting for created"]+.mat-sort-header-arrow'
        ),
      createdSortArrowHeader: () =>
        cy.get(
          "#timesheetJobListHolder .mat-table.js-drivers-info-grid thead th.mat-column-created"
        ),
    },

    timesheetRecordsModal: {
      filterSection: {
        endDateTextbox: () =>
          cy
            .get(
              'app-timesheet-overview app-date-time-picker input[placeholder="MM/DD/YYYY"]'
            )
            .eq(1),
      },
      fieldEmployeeDropdown: () => cy.get("mat-select.select-employee"),
      fieldEmployeeDropdownOptions: () =>
        cy.get(".mat-select-panel-wrap mat-option"),
      addNewTimesheetRecordButton: () =>
        cy
          .get("app-timesheet-overview button.btn.btn-w-m.btn-primary.m-r-sm")
          .contains("Add New"),
      deleteTimesheetRecordButton: () =>
        cy
          .get("app-timesheet-overview button.btn.btn-default")
          .contains("Delete"),
      timeSheetRecordsTable: {
        selectAll: () =>
          cy.get(
            "app-timesheet-overview table thead tr:first-child() th:first-child()"
          ),
      },
      deleteConfirmModal: {
        yesButton: () =>
          cy.get(".ModalSchedulerJobDetails button").contains("Yes"),
      },

      dropdownOptions: () => cy.get(".mat-select-panel-wrap mat-option"),
    },
    addTimesheetModal: {
      typeDropdownButton: () =>
        cy.get('app-timesheet-edit mat-select[formcontrolname="jobTypeId"]'),
      costCodeDropDownButton: () =>
        cy.get('app-timesheet-edit mat-select[formcontrolname="costCodeId"]'),
      jobDropdown: () =>
        cy.get("app-timesheet-edit app-dynamc-select.dynamicjobselect"),

      jobSearchTextbox: () =>
        cy.get(
          'app-timesheet-edit mat-form-field input[placeholder="start type to search"]'
        ),
      joblistItem: () => cy.get("app-scrollable-list .viewport-list-item"),

      customerNameTextbox: () =>
        cy.get('app-timesheet-edit input[formcontrolname="ab"]'),
      startDateTextbox: () =>
        cy
          .get(
            '.scheduleFixedSection app-date-time-picker input[formcontrolname="date"]'
          )
          .eq(0),
      startDateTimeTextbox: () =>
        cy
          .get(".scheduleFixedSection app-date-time-picker")
          .eq(0)
          .find("input:nth-child(2)"),
      endDateTextbox: () =>
        cy
          .get(".scheduleFixedSection app-date-time-picker")
          .eq(1)
          .find("input:first-child()"),
      endDateTimeTextbox: () =>
        cy
          .get(".scheduleFixedSection app-date-time-picker")
          .eq(1)
          .find("input:nth-child(2)"),
      duration: {
        hrs: () => cy.get('.form-group input[type="number"]').eq(0),
        min: () => cy.get('.form-group input[type="number"]').eq(1),
      },
      notesTextbox: () => cy.get("app-timesheet-edit textarea"),
      saveChangesButton: () =>
        cy
          .get("app-timesheet-edit button.btn.btn-info")
          .contains("Save Changes"),
    },
  };

  clickTimes = () => {
    this.elements.statusLabel().contains("Unpaid");
  };
  clickAddNewTimesheetButton = () => {
    this.elements.addTimesheetButton().click({ force: true });
  };

  setEndDateFilter = (endDate) => {
    this.elements.timesheetRecordsModal.filterSection
      .endDateTextbox()
      .clear()
      .type(endDate);
  };
  addNewTimesheet = (timesheetInfo) => {
    // cy.get('.col-lg-5.control-label').contains('Driver').invoke('hide')
    // cy.get('span.ng-tns-c139-38.ng-star-inserted').invoke('hide')

    timesheetInfo.customerName &&
      this.elements.addTimesheetModal
        .customerNameTextbox()
        .should("not.be.disabled")
        .clear()
        .type(`${timesheetInfo.customerName}{downArrow}{enter}`)
        .then(($el) => {
          cy.wrap($el).click().type("{downArrow}{enter}");
        });

    timesheetInfo.type &&
      this.elements.addTimesheetModal
        .typeDropdownButton()
        .scrollIntoView()
        .click()
        .then(() => {
          // this.elements.timesheetRecordsModal
          //   .dropdownOptions()
          //   .contains(timesheetInfo.type)
          //   .click();
          cy.get("mat-option").contains(timesheetInfo.type).first().click();
        });

    timesheetInfo.job &&
      this.elements.addTimesheetModal
        .jobDropdown()
        .scrollIntoView()
        .click()
        .then(() => {
          this.elements.addTimesheetModal
            .jobSearchTextbox()
            .type(timesheetInfo.job);
          this.elements.addTimesheetModal
            .joblistItem()
            .contains(timesheetInfo.job)
            .click();
        });

    if (timesheetInfo.time) {
      timesheetInfo.time.start.date &&
        this.elements.addTimesheetModal
          .startDateTextbox()
          // .invoke("css", "z-index", "9999999999999")
          .clear()
          .type(timesheetInfo.time.start.date);
      // timesheetInfo.time.end.date &&
      //   this.elements.addTimesheetModal
      //     .endDateTextbox()
      //     .clear()
      //     .type(timesheetInfo.time.start.date);
    }

    timesheetInfo.time.duration.hrs &&
      this.elements.addTimesheetModal.duration
        .hrs()
        .clear()
        .type(timesheetInfo.time.duration.hrs);
    timesheetInfo.time.duration.min &&
      this.elements.addTimesheetModal.duration
        .min()
        .clear()
        .type(timesheetInfo.time.duration.min);
    timesheetInfo.notes &&
      this.elements.addTimesheetModal
        .notesTextbox()
        .clear()
        .type(timesheetInfo.notes);
  };

  clickAddNewTimesheetForEmployee = () => {
    cy.get(".dropdown-menu.dropdown-reminders").invoke(
      "css",
      "display",
      "none"
    );
    this.elements.timesheetRecordsModal.addNewTimesheetRecordButton().click();
  };

  selectFieldEmployee = (employeeName) => {
    this.setEndDateFilter("1/1/2030");
    this.elements.timesheetRecordsModal.fieldEmployeeDropdown().click();
    this.elements.timesheetRecordsModal
      .fieldEmployeeDropdownOptions()
      .contains(employeeName)
      .click();
    // .find('option')
    // .contains(employeeName)
    // .as('selectOption')
    // .then(() => {
    //     cy.get('select')
    //         .select(`${this.selectOption.text()}`)
    // })
  };

  selectTimesheetType = (option) => {
    if (option) {
      this.elements.addTimesheetModal.typeDropdownButton().click();
      this.elements.timesheetRecordsModal
        .dropdownOptions()
        .contains(option)
        .click();
    } else {
      cy.type("{escape}");
    }
  };

  selectTimesheetCostCode = (option) => {
    if (option) {
      this.elements.addTimesheetModal
        .costCodeDropDownButton()
        .click({ force: true });
      this.elements.timesheetRecordsModal
        .dropdownOptions()
        .contains(option)
        .click();
    } else {
      cy.type("{escape}");
    }
  };

  saveAddTimeSheet = () => {
    cy.intercept(
      "https://onetrackwebapiprod.azurewebsites.net/api/Timesheets/Update"
    ).as("update");
    this.elements.addTimesheetModal.saveChangesButton().click({ force: true });

    // cy.log('@update')

    cy.wait("@update");
    cy.log("updated");
    // .then(el => {

    //     if(el.is(':disabled')) {
    //         return
    //     }
    //     else {
    //         cy.wrap(el).click()
    //     }

    // })
  };
}

module.exports = new TimesheetPage();
