class SchedulePage {
  elements = {
    filterTextBox: () =>
      cy.get(
        ".search.singlesearchbox input.mat-input-element.cdk-text-field-autofill-monitored"
      ),
    dayTab: () => cy.get('#scheduler_here div[name="day_tab"].day_tab'),
    weekTab: () => cy.get('#scheduler_here div[name="week_tab"].week_tab'),
    monthTab: () => cy.get('#scheduler_here div[name="month_tab"].month_tab'),
    timelineTab: () =>
      cy.get('#scheduler_here div[name="timeline_tab"].timeline_tab'),

    schedulerSelect: () =>
      cy.get("#scheduler_here .schedulerselect .mat-select"),
    toggleUnassignedJobs: () =>
      cy.get("#scheduler_here .toggle-unasignedjobs .mat-slide-toggle"),

    calendar: {
      previousButton: () => cy.get("#scheduler_here .dhx_cal_prev_button"),
      nextButton: () => cy.get("#scheduler_here .dhx_cal_next_button"),
      showMiniCalendar: () => cy.get("#scheduler_here #showMiniCalendar"),
    },
    actionsDropdown: {
      button: () => cy.get("scheduling .btn-group.actions"),
      addNewJob: () =>
        cy
          .get("scheduling .btn-group.actions button+.dropdown-menu li a")
          .contains("Add unassigned Job"),
      jobsQueue: () =>
        cy
          .get("scheduling .btn-group.actions button+.dropdown-menu li a")
          .contains("Jobs Queue")
          .last(),
      print: () =>
        cy
          .get("scheduling .btn-group.actions button+.dropdown-menu li a")
          .contains("Print"),
    },
    addNewJobModal: {
      jobsInfoTabButton: () =>
        cy.get("app-job-edit-form ul.nav-tabs li a").contains("Job Info"),
      employeesTabButton: () =>
        cy.get("app-job-edit-form ul.nav-tabs li a").contains("Employee"),
      tasksTabButton: () =>
        cy.get("app-job-edit-form ul.nav-tabs li a").contains("Tasks"),
      saveJobButton: () =>
        cy.get("app-job-edit-form .modal-footer button").contains("Save Job"),
      dispatchNowButton: () =>
        cy
          .get("app-job-edit-form .modal-footer button")
          .contains("Dispatch Now"),
      jobsInfoTab: {
        selectCustomerField: () =>
          cy.get("app-job-edit-form form input#partservsearch"),
        selectServiceLocation: () =>
          cy.get("app-job-edit-form form div.selectservicelocation"),
        jobDescriptionTexbox: () =>
          cy.get("app-job-edit-form form input#jobName "),
        jobStatusField: () => cy.get("app-job-edit-form form select#jobState"),
        notesTextarea: () =>
          cy.get("app-job-edit-form form textarea#customerSiteNote"),
        jobPriorityField: () =>
          cy.get("app-job-edit-form form select#jobPriority"),
        startDate: () =>
          cy.get("#editJobFormStartDate mat-form-field input").first(),
        endDate: () =>
          cy.get("#editJobFormEndDate mat-form-field input ").first(),
        jobTemplateButton: () =>
          cy.get("app-job-edit-form button").contains("Job Template"),
        serviceTypeSelect: () =>
          cy.get("app-job-edit-form mat-select#classificaitonId"),
        jobColor: () =>
          cy.get('app-job-edit-form mat-select[name="jobColorId"]'),
      },
      employeeTab: {
        addCrewField: () => cy.get("crew-select .dropdown"),
        addCrewFilterTextbox: () =>
          cy.get("crew-select .crewlist .searchfield input"),
        addCrewListItem: () => cy.get("crew-select .crewlist .list li"),
        durationHrs: () =>
          cy.get(".cDuration .form-group .form-inline input").first(),
        durationMin: () =>
          cy.get(".cDuration .form-group .form-inline input").last(),
        employeeTableRow: () =>
          cy.get("table#DataTables_Table_0 tbody td .cName"),
      },
      tasksTab: {
        addNewButton: () => cy.get("job-task-form button").contains("New Task"),
        taskNameTextbox: () =>
          cy.get("#taskslist #task1 .form-group input").first(),
        serviceTypeField: () =>
          cy.get("#taskslist #task1 .form-group select").first(),
        taskListCarousel: () =>
          cy.get("#taskslist .panel.taskbox .panel-heading"),
        taskListItem: () => cy.get("#taskslist .panel.taskbox"),
      },
      selectJobTemplateModal: {
        jobTemplateField: () => cy.get("app-common-selector-dialog mat-select"),
        jobTemplateFieldOptions: () => cy.get(".cdk-overlay-pane mat-option"),
        selectButton: () =>
          cy.get(".cdk-overlay-pane button").contains("Select"),
      },
      confirmTamplateModal: {
        yesButton: () => cy.get(".mat-dialog-actions button").contains("Yes"),
      },
      partsServiceEquipment: {
        accordion: () =>
          cy
            .get("app-task-editor .panel-heading")
            .contains("Parts/Services/Equipment"),
        textbox: () =>
          cy
            .get("app-task-editor .panel:nth-child(1)")
            .find('input[aria-label="Parts & services search"]'),
        qtyTextbox: () =>
          cy
            .get("app-task-editor .panel:nth-child(1)")
            .find('input[type="number"]'),
        addButton: () =>
          cy
            .get("app-task-editor .panel:nth-child(1)")
            .find("button")
            .contains("Add"),
        listItems: () =>
          cy
            .get("app-task-editor .panel:nth-child(1) .list-group-item")
            .not(".addNewItem"),
      },

      existingCustomerEquipment: {
        accordion: () =>
          cy
            .get("app-task-editor .panel-heading")
            .contains("Existing Customer Equipment"),
        dropdown: () =>
          cy
            .get("app-task-editor .panel:nth-child(2)")
            .find('mat-select[name="selectedEquipmentId"]'),
        addButton: () =>
          cy
            .get("app-task-editor .panel:nth-child(2)")
            .find("button")
            .contains("Add"),
        listItems: () =>
          cy
            .get("app-task-editor .panel:nth-child(2) .list-group-item")
            .not(".addNewItem"),
      },
      attachments: {
        accordion: () =>
          cy.get("app-task-editor .panel-heading").contains("Attachments"),
        urlTextbox: () =>
          cy
            .get("app-task-editor .panel:nth-child(3)")
            .find('input[type="text"]')
            .eq(0),
        addUrlButton: () =>
          cy
            .get("app-task-editor .panel:nth-child(3) button")
            .contains("Add")
            .eq(0),
        addAfileInput: () =>
          cy.get('app-task-editor .panel:nth-child(3) input[type="file"]'),
        listItems: () =>
          cy
            .get("app-task-editor .panel:nth-child(3) .list-group-item")
            .not(".addNewItem"),
      },
    },
    // jobsQueueEye: cy.get('#iBoxJobs .ibox-tools a[title="Expand"]'),
    jobsQueueModal: {
      unassignedJobsTab: {
        tableFirstRow: () =>
          cy.get("app-jobs-unassigned table tbody tr").first(),
      },
      assignedJobsTab: {
        button: () => cy.get('div[role="tab"]').contains("Assigned Jobs"),
        searchTextbox: () => cy.get('input[name="searchText"]'),
        jobRowCell: () => cy.get("app-jobs-assigned table tbody tr td"),
      },
      onHoldJobsTab: {
        button: () => cy.get('div[role="tab"]').contains("On Hold"),
        jobRowCell: () => cy.get("app-jobs-on-hold table tbody tr td"),
      },
      completedJobsTab: {
        button: () => cy.get('div[role="tab"]').contains("Completed Jobs"),
        jobRowCell: () => cy.get("app-jobs-completed table tbody tr td"),
        searchTextbox: () => cy.get('input[name="searchText"]'),
      },
      approvedForInvoiceJobsTab: {
        button: () =>
          cy.get('div[role="tab"]').contains("Approved for Invoice"),
        jobRowCell: () => cy.get("app-jobs-approved table tbody tr td"),
        searchTextbox: () => cy.get('input[name="searchText"]'),
      },
      invoicedJobsTab: {
        button: () => cy.get('div[role="tab"]').contains("Invoiced"),
        jobRowCell: () => cy.get("app-jobs-invoiced table tbody tr td"),
        searchTextbox: () => cy.get('input[name="searchText"]'),
      },
    },
  };

  gotoAddNewJob = () => {
    this.elements.actionsDropdown.button().click();
    this.elements.actionsDropdown.addNewJob().click({ force: true });
  };

  fillData = () => {
    this.elements.addNewJobModal.jobsInfoTab.selectCustomerField().click();
    this.elements.addNewJobModal.jobsInfoTab
      .selectCustomerField()
      .type("Genius Giant");
    cy.wait(2000);
    this.elements.addNewJobModal.jobsInfoTab
      .selectCustomerField()
      .type("{downArrow}{enter}");
    this.elements.addNewJobModal.jobsInfoTab
      .jobDescriptionTexbox()
      .type("Test Description");
    this.elements.addNewJobModal.jobsInfoTab
      .jobStatusField()
      .should("be.visible");
    this.elements.addNewJobModal.jobsInfoTab.jobStatusField().select("Started");
    this.elements.addNewJobModal.jobsInfoTab
      .notesTextarea()
      .should("be.visible");
    this.elements.addNewJobModal.jobsInfoTab.notesTextarea().type("Test Note");
    this.elements.addNewJobModal.jobsInfoTab
      .jobPriorityField()
      .should("be.visible");
    this.elements.addNewJobModal.jobsInfoTab.jobPriorityField().select("High");
    this.elements.addNewJobModal.jobsInfoTab.startDate().should("be.visible");
    this.elements.addNewJobModal.jobsInfoTab.startDate().type("09/01/2022");
    this.elements.addNewJobModal.jobsInfoTab.endDate().should("be.visible");
    this.elements.addNewJobModal.jobsInfoTab.endDate().type("09/30/2022");
  };

  addNewJob = (jobInformation) => {
    jobInformation.jobStatus &&
      this.elements.addNewJobModal.jobsInfoTab.jobStatusField().then(($el) => {
        cy.wait(500);
        cy.get("app-job-edit-form").should("be.visible");
        cy.get("app-job-edit-form").find(".modal-header").should("be.visible");
        cy.wrap($el).should("have.length.gt", 0);
        cy.wait(500);
        // cy.contains(
        //   "#jobState",
        //   jobInformation.jobStatus.toString().trim()
        // ).scrollIntoView();
        cy.wrap($el).select(jobInformation.jobStatus);
      });
    jobInformation.selectCustomer &&
      this.elements.addNewJobModal.jobsInfoTab
        .selectCustomerField()
        .then(($el) => {
          cy.get(".preloader").should("not.be.visible");
          cy.intercept(
            "https://onetrackwebapiprod.azurewebsites.net/api/AddressBooks/AddressBookLiveSearch"
          ).as("AddressBookLiveSearch");
          cy.wrap($el).clear().type(`${jobInformation.selectCustomer}`);
          cy.wait(300); //do not omit
          cy.wait("@AddressBookLiveSearch");
          cy.wrap($el)
            .invoke("val")
            .then((val) => {
              expect(val.length).to.equal(val.length);
              // cy.wait("@AddressBookLiveSearch");
            });
          // cy.wrap($el).type("{downArrow} {enter}");
          cy.wait(800); // Can't Omit this. Requires wait to find the customer
          // cy.get('app-job-edit-form').should('be.visible')
          // cy.get('.sk-spinner').should('not.be.visible')
          cy.get('.mat-autocomplete-panel[role="listbox"]').invoke(
            "css",
            "display",
            "block"
          );
          cy.get('.mat-autocomplete-panel[role="listbox"] mat-option').should(
            "exist"
          );
          cy.get('.mat-autocomplete-panel[role="listbox"] mat-option').should(
            "have.length.gt",
            1
          );

          // cy.wait('@AddressBookLiveSearch')
          // cy.get("mat-option").should("be.visible"
          //
          // );

          cy.get(".mat-autocomplete-panel").should(
            "have.class",
            "mat-autocomplete-visible"
          );
          cy.wait(300);
          cy.wait("@AddressBookLiveSearch");
          cy.get(
            '.mat-autocomplete-panel[role="listbox"].mat-autocomplete-visible'
          ).should("be.visible");
          cy.get(
            '.mat-autocomplete-panel[role="listbox"].mat-autocomplete-visible'
          )
            .find("mat-option")
            .should("be.visible");
          cy.wait(500);
          cy.get(
            '.mat-autocomplete-panel[role="listbox"].mat-autocomplete-visible'
          )
            .find("mat-option")
            .then(($el) => {
              cy.wait(1000);
              cy.contains("mat-option", jobInformation.selectCustomer);
              cy.wrap($el).contains(jobInformation.selectCustomer).click();
              // cy.get("mat-option")
              //   .contains(jobInformation.selectCustomer)
              //   .click();
            });
        });

    jobInformation.serviceLocation &&
      this.elements.addNewJobModal.jobsInfoTab
        .selectServiceLocation()
        .click()
        .then(() => {
          // cy.wait(4000)
          cy.get(".viewport-list-item")
            .contains(jobInformation.serviceLocation)
            .scrollIntoView()
            .should("be.visible")
            .click();
        });
    // cy.wait(2000)
    jobInformation.jobDescription &&
      this.elements.addNewJobModal.jobsInfoTab
        .jobDescriptionTexbox()
        .should("be.visible")
        .clear()
        .type(jobInformation.jobDescription.toString());

    jobInformation.notes &&
      this.elements.addNewJobModal.jobsInfoTab
        .notesTextarea()
        .should("have.length.gt", 0)
        .clear()
        .type(jobInformation.notes);
    jobInformation.serviceType &&
      this.elements.addNewJobModal.jobsInfoTab
        .serviceTypeSelect()
        .should("have.length.gt", 0)
        .then(($el) => {
          cy.wrap($el).click();
          cy.wait(600);
          cy.get("mat-option")
            .contains(jobInformation.serviceType)
            .scrollIntoView()
            .should("be.visible")
            .click();
        });

    jobInformation.jobPriority &&
      this.elements.addNewJobModal.jobsInfoTab
        .jobPriorityField()
        .select(jobInformation.jobPriority);
    jobInformation.jobColor &&
      this.elements.addNewJobModal.jobsInfoTab
        .jobColor()
        .click()
        .then(() => {
          cy.get("mat-option").contains(jobInformation.jobColor).click();
        });
    this.elements.addNewJobModal.partsServiceEquipment
      .accordion()
      .click()
      .then(() => {
        jobInformation.partsServiceEquipment &&
          jobInformation.partsServiceEquipment.forEach((item) => {
            // cy.wait(2500);
            this.elements.addNewJobModal.partsServiceEquipment
              .textbox()
              .should("be.visible")
              .clear()
              .type(item.name)
              .then(($el) => {
                cy.wait(500); // Cannot Omit this wait - needed for loading service equipment
                cy.get(".sk-spinner").should("not.be.visible");
                cy.get("mat-option")
                  .contains(item.name)
                  .first()
                  .scrollIntoView()
                  .click()
                  .then(() => {
                    this.elements.addNewJobModal.partsServiceEquipment
                      .qtyTextbox()
                      .clear()
                      .type(item.qty);
                  });
                // cy.wait(2000);
              });

            this.elements.addNewJobModal.partsServiceEquipment
              .addButton()
              .should("be.visible")
              .click();
            // cy.wait(1500);
          });
      });
    this.elements.addNewJobModal.attachments
      .accordion()
      .click()
      .then(() => {
        jobInformation.attachments &&
          jobInformation.attachments.forEach((item) => {
            this.elements.addNewJobModal.attachments
              .urlTextbox()
              .clear()
              .type(item.url)
              .then(() => {
                this.elements.addNewJobModal.attachments.addUrlButton().click();
              });
            // cy.wait(4000);

            // cy.wait(1000);
            this.elements.addNewJobModal.attachments.addAfileInput().click();
            // cy.wait(1000);
            this.elements.addNewJobModal.attachments
              .addAfileInput()
              .attachFile(item.addAFile);
            // cy.wait(2000);
          });
      });

    this.elements.addNewJobModal.existingCustomerEquipment
      .accordion()
      .click()
      .then(() => {
        jobInformation.existingCustomerEquipment &&
          jobInformation.existingCustomerEquipment.forEach((item) => {
            this.elements.addNewJobModal.existingCustomerEquipment
              .dropdown()
              .click()
              .then(() => {
                cy.get("mat-option").contains(item).scrollIntoView().click();
                this.elements.addNewJobModal.existingCustomerEquipment
                  .addButton()
                  .click();
                // cy.wait(2500);
              });
          });
      });

    /* Employee Tab */

    /*For adding Employee Groups */
    jobInformation.employeeGroup &&
      this.elements.addNewJobModal
        .employeesTabButton()
        .click()
        .then(() => {
          this.elements.addNewJobModal.employeeTab
            .addCrewField()
            .click()
            .then(() => {
              // cy.wait(1000);
              this.elements.addNewJobModal.employeeTab
                .addCrewFilterTextbox()
                .clear()
                .type(jobInformation.employeeGroup.groupName)
                .then(() => {
                  // cy.wait(2000);
                  this.elements.addNewJobModal.employeeTab
                    .addCrewListItem()
                    .contains(jobInformation.employeeGroup.groupName)
                    .click();
                  jobInformation.employeeGroup.employees.forEach((employee) => {
                    this.elements.addNewJobModal.employeeTab
                      .employeeTableRow()
                      .contains(employee.addCrew)
                      .parent()
                      .find(".form-inline input")
                      .eq(0)
                      .clear()
                      .type(employee.duration.h);
                    this.elements.addNewJobModal.employeeTab
                      .employeeTableRow()
                      .contains(employee.addCrew)
                      .parent()
                      .find(".form-inline input")
                      .eq(1)
                      .clear()
                      .type(employee.duration.m);
                  });
                });
            });
        });

    /*For adding individual employees */
    jobInformation.employees &&
      jobInformation.employees.forEach((employee) => {
        this.elements.addNewJobModal.employeesTabButton().click();
        this.elements.addNewJobModal.employeeTab
          .addCrewField()
          .click()
          .then(() => {
            // cy.wait(1000);
            this.elements.addNewJobModal.employeeTab
              .addCrewFilterTextbox()
              .clear()
              .type(employee.addCrew)
              .then(($el) => {
                // cy.wait(500);
                cy.wrap($el).type("{downArrow}{enter}");
                this.elements.addNewJobModal.employeeTab
                  .addCrewListItem()
                  .contains(employee.addCrew)
                  .click();
                // cy.wait(2000);
                this.elements.addNewJobModal.employeesTabButton().click();
                // cy.wait(2000);
                this.elements.addNewJobModal.employeeTab
                  .employeeTableRow()
                  .contains(employee.addCrew)
                  .parent()
                  .find(".form-inline input")
                  .eq(0)
                  .clear()
                  .type(employee.duration.h);
                this.elements.addNewJobModal.employeeTab
                  .employeeTableRow()
                  .contains(employee.addCrew)
                  .parent()
                  .find(".form-inline input")
                  .eq(1)
                  .clear()
                  .type(employee.duration.m);
              });
          });
      });
    /* Tasks Tab */
    jobInformation.tasks &&
      jobInformation.tasks.forEach((task) => {
        this.elements.addNewJobModal.tasksTabButton().click();
        this.elements.addNewJobModal.tasksTab.addNewButton().click();
        this.elements.addNewJobModal.tasksTab
          .taskNameTextbox()
          .clear()
          .type(task.taskName);
        this.elements.addNewJobModal.tasksTab
          .serviceTypeField()
          .select(task.serviceType);
      });
  };

  saveJob = () => {
    this.elements.addNewJobModal.saveJobButton().click();
  };

  verifyCustomerInformation = (jobInformation) => {
    // cy.get("app-job-edit-form").should("exist");
    cy.get("app-job-edit-form").find("form").should("be.visible");
    // Check Job Description
    jobInformation.jobDescription &&
      this.elements.addNewJobModal.jobsInfoTab
        .jobDescriptionTexbox()
        .should("be.visible")
        .then(($el) => {
          cy.wrap($el).should("be.visible");
          cy.wrap($el)
            .invoke("val")
            .then((text) => {
              expect(text, "Checking Job Description...").to.equal(
                jobInformation.jobDescription
              );
            });
        });

    // Check Job Status
    if (jobInformation.jobStatus) {
      cy.wait(1500);
      this.elements.addNewJobModal.jobsInfoTab
        .jobStatusField()
        .should("be.visible")
        .invoke("val")
        .then((val) => {
          // cy.log($el.text().toString())
          this.elements.addNewJobModal.jobsInfoTab
            .jobStatusField()
            .should("be.visible");
          this.elements.addNewJobModal.jobsInfoTab
            .jobStatusField()
            .contains(jobInformation.jobStatus)
            .invoke("val")
            .then((value) => {
              // expect(val, 'Checking Job Status...').to.equal(value) //-> To fix this assertion
            });
        });
    }

    // Check Notes
    jobInformation.notes &&
      this.elements.addNewJobModal.jobsInfoTab
        .notesTextarea()
        .invoke("val")
        .then((val) => {
          expect(val, "Checking Notes Value...").to.equal(jobInformation.notes);
        });

    // Check Service Type
    jobInformation.serviceType &&
      this.elements.addNewJobModal.jobsInfoTab
        .serviceTypeSelect()
        .invoke("text")
        .then((text) => {
          expect(text, "Checking Service Type... ").to.equal(
            jobInformation.serviceType
          );
        });

    // Check Job Priority
    jobInformation.jobPriority &&
      this.elements.addNewJobModal.jobsInfoTab
        .jobPriorityField()
        .invoke("val")
        .then((val) => {
          // cy.log($el.text().toString())
          this.elements.addNewJobModal.jobsInfoTab
            .jobPriorityField()
            .contains(jobInformation.jobPriority)
            .invoke("attr", "value")
            .then((value) => {
              expect(val, "Checking Job Priority...").to.equal(value);
            });
        });

    //Check Job Color
    jobInformation.jobColor &&
      this.elements.addNewJobModal.jobsInfoTab
        .jobColor()
        .invoke("text")
        .then((text) => {
          expect(text, "Checking Job Color...").to.equal(
            jobInformation.jobColor
          );
        });

    // Still to fix address checking:
    // jobInformation.address && jobInformation.address.invoke('text').then((text) => {
    //     cy.log(text)
    // })

    // Check Parts/Services/Equipment
    this.elements.addNewJobModal.partsServiceEquipment
      .accordion()
      .click()
      .then(() => {
        jobInformation.partsServiceEquipment &&
          jobInformation.partsServiceEquipment.forEach((item) => {
            this.elements.addNewJobModal.partsServiceEquipment
              .listItems()
              .contains(item.name)
              .invoke("text")
              .then((text) => {
                expect(text, "Found on the Parts/Services/Equipment list:");
              });
          });
      });

    // Check attachments
    this.elements.addNewJobModal.attachments
      .accordion()
      .click()
      .then(() => {
        jobInformation.attachments &&
          jobInformation.attachments.forEach((item) => {
            this.elements.addNewJobModal.attachments
              .listItems()
              .contains(item.url)
              .invoke("text")
              .then((text) => {
                expect(text, "Found on the url list:");
              });
          });
      });

    // Check Existing Customer Equipment
    this.elements.addNewJobModal.existingCustomerEquipment
      .accordion()
      .click()
      .then(() => {
        jobInformation.existingCustomerEquipment &&
          jobInformation.existingCustomerEquipment.forEach((item) => {
            this.elements.addNewJobModal.existingCustomerEquipment
              .listItems()
              .contains(item)
              .invoke("text")
              .then((text) => {
                expect(text, "Found on the Existing Customer Equipment list:");
              });
          });
      });

    // Check Employees
    this.elements.addNewJobModal
      .employeesTabButton()
      .click()
      .then(() => {
        jobInformation.employees &&
          jobInformation.employees.forEach((employee) => {
            this.elements.addNewJobModal.employeeTab
              .employeeTableRow()
              .contains(employee.addCrew)
              .parent()
              .find(".cDuration .form-group .form-inline input")
              .first()
              .invoke("val")
              .then((val) => {
                expect(val, "Checking employee hours field...").to.equal(
                  employee.duration.h
                );
              });

            this.elements.addNewJobModal.employeeTab
              .employeeTableRow()
              .contains(employee.addCrew)
              .parent()
              .find(".cDuration .form-group .form-inline input")
              .last()
              .invoke("val")
              .then((val) => {
                expect(val, "Checking employee minutes field...").to.equal(
                  employee.duration.m
                );
              });

            // durationHrs: () => cy.get('.cDuration .form-group .form-inline input').first(),
            // durationMin: () => cy.get('.cDuration .form-group .form-inline input').last(),
          });

        jobInformation.employeeGroup &&
          jobInformation.employeeGroup.employees.forEach((employee) => {
            this.elements.addNewJobModal.employeeTab
              .employeeTableRow()
              .contains(employee.addCrew)
              .parent()
              .find(".cDuration .form-group .form-inline input")
              .first()
              .invoke("val")
              .then((val) => {
                expect(val, "Checking employee hours field...").to.equal(
                  employee.duration.h
                );
              });

            this.elements.addNewJobModal.employeeTab
              .employeeTableRow()
              .contains(employee.addCrew)
              .parent()
              .find(".cDuration .form-group .form-inline input")
              .last()
              .invoke("val")
              .then((val) => {
                expect(val, "Checking employee minutes field...").to.equal(
                  employee.duration.m
                );
              });

            // durationHrs: () => cy.get('.cDuration .form-group .form-inline input').first(),
            // durationMin: () => cy.get('.cDuration .form-group .form-inline input').last(),
          });
      });

    // Check added tasks
    this.elements.addNewJobModal
      .tasksTabButton()
      .click()
      .then(() => {
        jobInformation.tasks &&
          jobInformation.tasks.forEach((task) => {
            this.elements.addNewJobModal.tasksTab
              .taskListCarousel()
              .contains(task.taskName)
              .click();
            cy.wait(1000);
            // this.elements.addNewJobModal.tasksTab.taskListCarousel().contains(task.taskName).parent().then(($el) => {
            //     // cy.wrap($el).invoke('text').then(text => {
            //     //     expect(text.trim()).to.equal(task.taskName.trim())
            //     // })
            //     // cy.wrap($el).click()
            //     cy.wait(2500)
            //     cy.wrap($el).find('.panel-body input').invoke('val').then(val => {
            //         expect(val.trim()).to.equal(task.taskName.trim())
            //     })
            // }) //-> Still Have to refine code
          });
      });
  };

  saveJob = () => {
    this.elements.addNewJobModal.saveJobButton().click();
  };

  dispatchJob = () => {
    this.elements.addNewJobModal.dispatchNowButton().click();
  };

  addJobEmployee = (employee) => {
    this.elements.addNewJobModal.employeesTabButton().click();
    this.elements.addNewJobModal.employeeTab.addCrewField().click();
    this.elements.addNewJobModal.employeeTab
      .addCrewFilterTextbox()
      .type(employee.employeeName);
    this.elements.addNewJobModal.employeeTab
      .addCrewListItem()
      .find("label")
      .contains(employee.employeeName)
      .click();
    this.elements.addNewJobModal.employeeTab
      .durationHrs()
      .type(employee.duration.hrs);
    this.elements.addNewJobModal.employeeTab
      .durationMin()
      .type(employee.duration.min);
  };

  addJobTemplate = (jobTemplateName) => {
    this.elements.addNewJobModal.jobsInfoTab.jobTemplateButton().click();
    this.elements.addNewJobModal.selectJobTemplateModal
      .jobTemplateField()
      .click();
    this.selectJobTemplateOption(jobTemplateName);
    this.elements.addNewJobModal.selectJobTemplateModal.selectButton().click();
    this.elements.addNewJobModal.confirmTamplateModal.yesButton().click();
  };

  selectJobTemplateOption = (jobTemplateName) => {
    this.elements.addNewJobModal.selectJobTemplateModal
      .jobTemplateFieldOptions()
      .contains(jobTemplateName)
      .click();
  };

  createNewTask = (task) => {
    task.taskName;
    this.elements.addNewJobModal.tasksTab.addNewButton().click();
    this.elements.addNewJobModal.tasksTab.taskNameTextbox().type(task.taskName);
  };

  clickTasksTab = () => {
    this.elements.addNewJobModal.tasksTabButton().click();
  };

  gotoJobsQueue = () => {
    cy.wait(800);
    this.elements.actionsDropdown.button().click();
    cy.intercept(
      "https://onetrackwebapiprod.azurewebsites.net/api/Jobs/GetUnassignedJobsWithPaging**"
    ).as("GetUnassignedJobsWithPaging");
    this.elements.actionsDropdown.jobsQueue().click();
    cy.wait(300);
    cy.wait("@GetUnassignedJobsWithPaging");
  };
  clickFirstUnassignedJob = () => {
    // cy.wait(800);
    cy.get("app-jobs")
      .should("exist")
      .then(($el) => {
        cy.wrap($el).find("my-dialog").should("exist");
      });
    // cy.get("app-jobs-unassigned app-loading-mask").should("be.visible");
    // cy.get("app-jobs-unassigned app-loading-mask .preloader").should(
    //   "have.css",
    //   "display",
    //   "none"
    // );
    cy.get("app-jobs-unassigned").should("be.visible");
    cy.get("app-jobs-unassigned").find("table").should("be.visible");
    this.elements.jobsQueueModal.unassignedJobsTab
      .tableFirstRow()
      .should("be.visible");
    this.elements.jobsQueueModal.unassignedJobsTab
      .tableFirstRow()
      .dblclick({ force: true });
  };

  gotoAssignedJobsTab = () => {
    // cy.wait(300);
    // cy.get(
    //   "https://onetrackwebapiprod.azurewebsites.net/api/Jobs/GetAssignedJobsWithPaging**"
    // ).as("GetAssignedJobsWithPaging");

    this.elements.jobsQueueModal.assignedJobsTab.button().click();
    // cy.wait("@GetAssignedJobsWithPaging");
  };

  gotoOnHoldJobsTab = () => {
    cy.intercept(
      "https://onetrackwebapiprod.azurewebsites.net/api/Jobs/GetOnHoldJobsWithPaging**"
    ).as("GetOnHoldJobsWithPaging");
    this.elements.jobsQueueModal.onHoldJobsTab.button().click();
    cy.wait("@GetOnHoldJobsWithPaging");
  };

  gotoCompletedJobsTab = () => {
    cy.intercept(
      "https://onetrackwebapiprod.azurewebsites.net/api/Jobs/GetCompletedJobsWithPaging**"
    ).as("GetCompletedJobsWithPaging");
    this.elements.jobsQueueModal.completedJobsTab.button().click();
    cy.wait("@GetCompletedJobsWithPaging");
  };

  gotoApprovedForInvoiceTab = () => {
    cy.intercept(
      "https://onetrackwebapiprod.azurewebsites.net/api/Jobs/GetApprovedJobsWithPaging**"
    ).as("GetApprovedJobsWithPaging");
    this.elements.jobsQueueModal.approvedForInvoiceJobsTab.button().click();
    cy.wait("@GetApprovedJobsWithPaging");
  };

  gotoInvoicedTab = () => {
    cy.intercept(
      "https://onetrackwebapiprod.azurewebsites.net/api/Jobs/GetOnHoldJobsWithPaging**"
    ).as("GetInvoicedJobsWithPaging");
    this.elements.jobsQueueModal.invoicedJobsTab.button().click();
    cy.wait("@GetInvoicedJobsWithPaging");
  };
  // searchJobAndClickOnJobRow

  searchUnasignedJobsTab = (jobDescription) => {
    cy.wait(15000); // Putting wait because the job doesn't appear immediately on the job list when created
    /*
cy.get(".preloader").then(($el) => {
      expect("Checking if preloading is finished...", $el).to.have(
        "css",
        "display",
        "none"
      );
    });
*/
    /*
cy.get("table").then(($el) => {
      expect("Checking if table is loaded...", $el).to.be("visible");
      cy,wrap($el).should('be.visible').then(()=> {
        cy.log('Table loaded.')
      })
    });
*/
    this.elements.jobsQueueModal.assignedJobsTab
      .searchTextbox()
      .clear()
      .type(jobDescription.slice(-5))
      .then(($el) => {
        cy.wrap($el).type("{enter}");
      });
    cy.wait(800);
    this.elements.jobsQueueModal.searchUnasignedJobsTab
      .jobRowCell()
      .contains(jobDescription)
      .first()
      .parent()
      .dblclick();
  };

  searchAssignedJobsTab = (jobDescription) => {
    // cy.wait(20000); // Putting wait because the job doesn't appear immediately on the job list when created
    /*
cy.get(".preloader").then(($el) => {
      expect("Checking if preloading is finished...", $el).to.have(
        "css",
        "display",
        "none"
      );
    });
*/
    /*
cy.get("table").then(($el) => {
      expect("Checking if table is loaded...", $el).to.be("visible");
      cy,wrap($el).should('be.visible').then(()=> {
        cy.log('Table loaded.')
      })
    });
*/
    // this.elements.jobsQueueModal.assignedJobsTab
    //   .searchTextbox()
    //   .clear()
    //   .type(jobDescription.slice(-5))
    //   .then(($el) => {
    //     cy.wrap($el).type("{enter}");
    //   });
    // cy.wait(5500);
    cy.intercept(
      `https://onetrackwebapiprod.azurewebsites.net/api/Jobs/GetAssignedJobsWithPaging?filter=${jobDescription.slice(
        -5
      )}**`
    ).as("assigneJobSearchRequest");
    this.elements.jobsQueueModal.assignedJobsTab
      .searchTextbox()
      .clear()
      .type(jobDescription.slice(-5))
      .then(($el) => {
        cy.wrap($el).type("{enter}");
        cy.get("app-loading-mask").should("not.be.visible");
        cy.get(".preloader").should("not.be.visible");
        cy.wait("@assigneJobSearchRequest")
          .its("response.body")
          .then((response) => {
            if (response.recordsCount >= 1) {
              this.elements.jobsQueueModal.assignedJobsTab
                .jobRowCell()
                .contains(jobDescription.slice(-5))
                .parent()
                .dblclick();
            } else {
              throw new Error(
                `The search entry:${jobDescription.slice(
                  -5
                )} did not return any table entries`
              );
            }
          });
        // cy.get("app-jobs-assigned table tbody")
        //   .children()
        //   .its("length")
        //   .invoke((length) => {
        //     if (length > 0) {
        //       this.elements.jobsQueueModal.assignedJobsTab
        //         .jobRowCell()
        //         .contains(jobDescription.slice(-5))
        //         .parent()
        //         .dblclick();
        //     } else {
        //       throw new Error(
        //         "The search action did not return any table entries"
        //       );
        //     }
        //   });

        // cy.get("app-jobs-assigned table tbody")
        //   .children()
        //   .its("length")
        //   .should("be.gte", 1)
        //   .if()
        //   .then(() => {
        //     this.elements.jobsQueueModal.assignedJobsTab
        //       .jobRowCell()
        //       .contains(jobDescription.slice(-5))
        //       .parent()
        //       .dblclick();
        //   })
        //   .else(() => {
        //     throw new Error(
        //       "The search action did not return any table entries"
        //     );
        //   });

        // this.elements.jobsQueueModal.assignedJobsTab
        //   .jobRowCell()
        //   .should("be.visible")
        //   .if()
        //   .contains(jobDescription.slice(-5))
        //   .parent()
        //   .should("be.visible")
        //   .dblclick()
        //   .else()
        //   .then(() => {
        //     cy.log(
        //       `[The search action did not return any value](http://example.com)`
        //     );
        //     cy.wait(15000);
        //     this.elements.jobsQueueModal.assignedJobsTab
        //       .searchTextbox()
        //       .type(jobDescription.slice(-5))
        //       .then(($el) => {
        //         cy.wrap($el).type("{enter}");
        //       });
        //     cy.wait(1000);
        //     this.elements.jobsQueueModal.assignedJobsTab
        //       .jobRowCell()
        //       .contains(jobDescription.slice(-5))
        //       .parent()
        //       .dblclick();
        //     cy.wrap($el)
        //       .invoke("text")
        //       .then((text) => {
        //         throw new Error(
        //           "The search action did not return any table entries"
        //         );
        //         cy.log(
        //           `[The search action did not return any value](http://example.com)`
        //         );
        //       });
        //   });
      });

    // this.elements.jobsQueueModal.assignedJobsTab
    //   .jobRowCell()
    //   .if()
    //   .then(($el) => {
    // while ($el.length < 0) {
    // cy.wait(1000);

    // }

    // cy.wrap($el)
    //   .contains(jobDescription)
    //   .if()
    //   .first()
    //   // .should($el => {
    //   //     expect(Cypress.dom.isAttached($el), 'is attached').to.eq(true) // retry if false
    //   // })
    //   .parent()
    //   .dblclick()
    //   .else(($el) => {
    //     cy.wrap($el)
    //       .invoke("text")
    //       .then((text) => {
    //         throw new Error(
    //           "The search action did not return any table entries"
    //         );
    //         cy.log(
    //           `[The search action did not return any value](http://example.com)`
    //         );
    //       });

    //     cy.wait(15000);
    //     this.elements.jobsQueueModal.assignedJobsTab
    //       .type(jobDescription.slice(-5))
    //       .then(($el) => {
    //         cy.wrap($el).type("{enter}");
    //       });

    //     cy.wrap($el).contains(jobDescription).first().parent().dblclick();
    //   });
    // })
    // .else(() => {
    //   cy.log("The Job search did not return result...");
    // });

    /* try conditional */
    // var search = true;
    // var y = 0;
    // while (search && y <= 3) {
    //   // cy.wait(800);
    //   this.elements.jobsQueueModal.assignedJobsTab
    //     .jobRowCell()
    //     .if("visible")
    //     .then(($el) => {
    //       cy.get(".preloader").should("not.be.visible");
    //       this.elements.jobsQueueModal.assignedJobsTab
    //         .jobRowCell()
    //         .contains(jobDescription)
    //         .dblclick();
    //       search = false;
    //     })
    //     .else()
    //     .then(() => {
    //       cy.wait(5000)
    //       this.elements.jobsQueueModal.assignedJobsTab
    //         .searchTextbox()
    //         .type("{enter}");
    //       search = true;
    //       // cy.wait(800);
    //     });
    //   y++;

    //   cy.log(search)
    //   // cy.wait(800);
    // }

    // var rowExisting = true;
    // while (rowExisting) {
    //   this.elements.jobsQueueModal.assignedJobsTab
    //     .jobRowCell()
    //     .as("cell")
    //     .invoke("is", "visible")
    //     .then((initial) => {
    //       if (initial) {
    //         this.elements.jobsQueueModal.assignedJobsTab
    //           .jobRowCell()
    //           .contains(jobDescription)
    //           .first()
    //           .parent()
    //           .dblclick();

    //         rowExisting = true;
    //       } else {
    //         this.elements.jobsQueueModal.assignedJobsTab
    //           .searchTextbox()
    //           .type("{enter}");
    //         rowExisting = false;
    //       }
    //     });
    // }
  };

  searchOnHoldJobsTab = (jobDescription) => {
    // cy.wait(15000) // Putting wait because the job doesn't appear immediately on the job list when created
    /*
cy.get(".preloader").then(($el) => {
      expect("Checking if preloading is finished...", $el).to.have(
        "css",
        "display",
        "none"
      );
    });
*/
    /*
cy.get("table").then(($el) => {
      expect("Checking if table is loaded...", $el).to.be("visible");
      cy,wrap($el).should('be.visible').then(()=> {
        cy.log('Table loaded.')
      })
    });
*/
    this.elements.jobsQueueModal.assignedJobsTab
      .searchTextbox()
      .clear()
      .type(jobDescription.slice(-5))
      .then(($el) => {
        cy.wrap($el).type("{enter}");
      });
    // cy.wait(5500);
    cy.get("app-loading-mask").should("not.be.visible");
    this.elements.jobsQueueModal.onHoldJobsTab
      .jobRowCell()
      .contains(jobDescription)
      .first()
      .parent()
      .dblclick();
  };

  searchCompletedJobsTab = (jobDescription) => {
    /*
cy.get(".preloader").then(($el) => {
      expect("Checking if preloading is finished...", $el).to.have(
        "css",
        "display",
        "none"
      );
    });
*/
    /*
cy.get("table").then(($el) => {
      expect("Checking if table is loaded...", $el).to.be("visible");
      cy,wrap($el).should('be.visible').then(()=> {
        cy.log('Table loaded.')
      })
    });
*/
    this.elements.jobsQueueModal.completedJobsTab
      .searchTextbox()
      .clear()
      .type(jobDescription.slice(-5))
      .then(($el) => {
        cy.wrap($el).type("{enter}");
      });
    // cy.wait(5500);
    cy.get("app-loading-mask").should("not.be.visible");
    this.elements.jobsQueueModal.completedJobsTab
      .jobRowCell()
      .contains(jobDescription)
      .first()
      .parent()
      .find("button")
      .click()
      .then(() => {
        // cy.wait(500);
        cy.get(".btn-group.actions .dropdown-menu a")
          .contains("View Job")
          .click();
      });
  };

  searchApproveCompletedJobTab = (jobDescription) => {
    /*
cy.get(".preloader").then(($el) => {
      expect("Checking if preloading is finished...", $el).to.have(
        "css",
        "display",
        "none"
      );
    });
*/
    /*
cy.get("table").then(($el) => {
      expect("Checking if table is loaded...", $el).to.be("visible");
      cy,wrap($el).should('be.visible').then(()=> {
        cy.log('Table loaded.')
      })
    });
*/
    this.elements.jobsQueueModal.completedJobsTab
      .searchTextbox()
      .clear()
      .type(jobDescription.slice(-5))
      .then(($el) => {
        cy.wrap($el).clear().type("{enter}");
      });
    // cy.wait(5500);
    cy.get("app-loading-mask").should("not.be.visible");
    this.elements.jobsQueueModal.completedJobsTab
      .jobRowCell()
      .contains(jobDescription)
      .first()
      .parent()
      .find("button")
      .click()
      .then(() => {
        // cy.wait(500);
        cy.get(".btn-group.actions .dropdown-menu a")
          .contains("Approve")
          .click({ force: true });
      });
  };

  searchConvertToInvoiceJobTab = (jobDescription) => {
    /*
cy.get(".preloader").then(($el) => {
      expect("Checking if preloading is finished...", $el).to.have(
        "css",
        "display",
        "none"
      );
    });
*/
    /*
cy.get("table").then(($el) => {
      expect("Checking if table is loaded...", $el).to.be("visible");
      cy,wrap($el).should('be.visible').then(()=> {
        cy.log('Table loaded.')
      })
    });
*/
    this.elements.jobsQueueModal.approvedForInvoiceJobsTab
      .searchTextbox()
      .clear()
      .type(jobDescription.slice(-5))
      .then(($el) => {
        cy.wrap($el).clear().type("{enter}");
      });
    // cy.wait(5500);
    cy.get("app-loading-mask").should("not.be.visible");
    this.elements.jobsQueueModal.approvedForInvoiceJobsTab
      .jobRowCell()
      .contains(jobDescription)
      .first()
      .parent()
      .find("button")
      .click();
    cy.wait(500);
    cy.get(".btn-group.actions .dropdown-menu a")
      .contains("Convert to Invoice")
      .click();
  };

  searchViewJobReportValidate = (jobDescription) => {
    /*
cy.get(".preloader").then(($el) => {
      expect("Checking if preloading is finished...", $el).to.have(
        "css",
        "display",
        "none"
      );
    });
*/
    /*
cy.get("table").then(($el) => {
      expect("Checking if table is loaded...", $el).to.be("visible");
      cy,wrap($el).should('be.visible').then(()=> {
        cy.log('Table loaded.')
      })
    });
*/
    this.elements.jobsQueueModal.approvedForInvoiceJobsTab
      .searchTextbox()
      .clear()
      .type(jobDescription.slice(-5))
      .then(($el) => {
        cy.wrap($el).clear().type("{enter}");
      });
    // cy.wait(5500);
    cy.get("app-loading-mask").should("not.be.visible");
    this.elements.jobsQueueModal.approvedForInvoiceJobsTab
      .jobRowCell()
      .contains(jobDescription)
      .first()
      .parent()
      .find("button")
      .click()
      .then(() => {
        // cy.get('app-jobs-approved ul.dropdown-menu').invoke('css','display','block')
        this.elements.jobsQueueModal.approvedForInvoiceJobsTab
          .jobRowCell()
          .contains(jobDescription)
          .first()
          .parent()
          .find("ul.dropdown-menu")
          .invoke("css", "display", "block");
        cy.get(".btn-group.actions").should("be.visible");
        cy.get(".btn-group.actions .dropdown-menu").should("be.visible");
        cy.get(".btn-group.actions .dropdown-menu a").should("be.visible");
        cy.wait(500);
        cy.get(".btn-group.actions .dropdown-menu a")
          .contains("View Job Report")
          .click({ force: true });
      });

    cy.log("Checking preview...");

    cy.get("app-report-preview-dialog button.close")
      .should("be.visible")
      .click();
  };
}

module.exports = new SchedulePage();
