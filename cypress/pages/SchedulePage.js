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
    this.elements.actionsDropdown.addNewJob().click();
  };

  fillData = () => {
    this.elements.addNewJobModal.jobsInfoTab.selectCustomerField().click();
    this.elements.addNewJobModal.jobsInfoTab
      .selectCustomerField()
      .type("Genius Giant");
    // cy.wait(2000)
    this.elements.addNewJobModal.jobsInfoTab
      .selectCustomerField()
      .should("be.visible")
      .type("{downArrow}{enter}");
    this.elements.addNewJobModal.jobsInfoTab
      .jobDescriptionTexbox()
      .type("Test Description");
    this.elements.addNewJobModal.jobsInfoTab.jobStatusField().select("Started");
    this.elements.addNewJobModal.jobsInfoTab.notesTextarea().type("Test Note");
    this.elements.addNewJobModal.jobsInfoTab.jobPriorityField().select("High");
    this.elements.addNewJobModal.jobsInfoTab.startDate().type("09/01/2022");
    this.elements.addNewJobModal.jobsInfoTab.endDate().type("09/30/2022");
  };

  addNewJob = (jobInformation) => {
    jobInformation.selectCustomer &&
      this.elements.addNewJobModal.jobsInfoTab
        .selectCustomerField()
        .clear()
        .type(jobInformation.selectCustomer)
        .then(() => {
          // cy.wait(3000)
          cy.get("mat-option", { timeout: 10000 })
            .contains(jobInformation.selectCustomer)
            .click();
        });
    jobInformation.serviceLocation &&
      this.elements.addNewJobModal.jobsInfoTab
        .selectServiceLocation()
        .click()
        .then(() => {
          // cy.wait(4000)
          cy.get(".viewport-list-item")
            .contains(jobInformation.serviceLocation)
            .click();
        });
    // cy.wait(2000)
    jobInformation.jobDescription &&
      this.elements.addNewJobModal.jobsInfoTab
        .jobDescriptionTexbox()
        .should("be.visible")
        .clear()
        .type(jobInformation.jobDescription.toString());
    jobInformation.jobStatus &&
      this.elements.addNewJobModal.jobsInfoTab
        .jobStatusField()
        .should("be.visible")
        .select(jobInformation.jobStatus);
    jobInformation.notes &&
      this.elements.addNewJobModal.jobsInfoTab
        .notesTextarea()
        .should("be.visible")
        .clear()
        .type(jobInformation.notes);
    jobInformation.serviceType &&
      this.elements.addNewJobModal.jobsInfoTab
        .serviceTypeSelect()
        .should("be.visible")
        .click()
        .then(() => {
          cy.get("mat-option")
            .contains(jobInformation.serviceType)
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
            // cy.wait(2500)
            this.elements.addNewJobModal.partsServiceEquipment
              .textbox()
              .should("be.visible")
              .clear()
              .type(item.name)
              .then(() => {
                // cy.wait(3000)
                cy.get("mat-option")
                  .contains(item.name)
                  .first()
                  .should("be.visible")
                  .click()
                  .then(() => {
                    this.elements.addNewJobModal.partsServiceEquipment
                      .qtyTextbox()
                      .clear()
                      .type(item.qty);
                  });
                cy.wait(2000);
              });

            this.elements.addNewJobModal.partsServiceEquipment
              .addButton()
              .should("be.visible")
              .click();
            cy.wait(1500);
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
              .type(item.url);
            cy.wait(4000);
            this.elements.addNewJobModal.attachments.addUrlButton().click();
            cy.wait(1000);
            this.elements.addNewJobModal.attachments.addAfileInput().click();
            cy.wait(1000);
            this.elements.addNewJobModal.attachments
              .addAfileInput()
              .attachFile(item.addAFile);
            cy.wait(2000);
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
                cy.get("mat-option").contains(item).click();
                this.elements.addNewJobModal.existingCustomerEquipment
                  .addButton()
                  .click();
                cy.wait(2500);
              });
          });
      });

    /* Employee Tab */

    jobInformation.employees &&
      jobInformation.employees.forEach((employee) => {
        this.elements.addNewJobModal.employeesTabButton().click();
        this.elements.addNewJobModal.employeeTab
          .addCrewField()
          .click()
          .then(() => {
            cy.wait(1000);
            this.elements.addNewJobModal.employeeTab
              .addCrewFilterTextbox()
              .clear()
              .type(employee.addCrew)
              .then(() => {
                cy.wait(2000);
                this.elements.addNewJobModal.employeeTab
                  .addCrewListItem()
                  .contains(employee.addCrew)
                  .click();
                cy.wait(2000);
                this.elements.addNewJobModal.employeesTabButton().click();
                cy.wait(2000);
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
    // Check Job Description
    jobInformation.jobDescription &&
      this.elements.addNewJobModal.jobsInfoTab
        .jobDescriptionTexbox()
        .invoke("val")
        .then((text) => {
          expect(text, "Checking Job Description...").to.equal(
            jobInformation.jobDescription
          );
        });

    // Check Job Status
    jobInformation.jobStatus &&
      this.elements.addNewJobModal.jobsInfoTab
        .jobStatusField()
        .invoke("val")
        .then((val) => {
          // cy.log($el.text().toString())
          this.elements.addNewJobModal.jobsInfoTab
            .jobStatusField()
            .contains(jobInformation.jobStatus)
            .invoke("val")
            .then((value) => {
              // expect(val, 'Checking Job Status...').to.equal(value) //-> To fix this assertion
            });
        });

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
    cy.wait(2500);
    this.elements.actionsDropdown.button().click();
    this.elements.actionsDropdown.jobsQueue().click();
  };
  clickFirstUnassignedJob = () => {
    cy.wait(3500);
    this.elements.jobsQueueModal.unassignedJobsTab.tableFirstRow().dblclick();
  };

  gotoAssignedJobsTab = () => {
    this.elements.jobsQueueModal.assignedJobsTab.button().click();
  };

  gotoOnHoldJobsTab = () => {
    this.elements.jobsQueueModal.onHoldJobsTab.button().click();
  };

  gotoCompletedJobsTab = () => {
    this.elements.jobsQueueModal.completedJobsTab.button().click();
  };

  gotoApprovedForInvoiceTab = () => {
    this.elements.jobsQueueModal.approvedForInvoiceJobsTab.button().click();
  };

  gotoInvoicedTab = () => {
    this.elements.jobsQueueModal.invoicedJobsTab.button().click();
  };
  // searchJobAndClickOnJobRow

  searchUnasignedJobsTab = (jobDescription) => {
    cy.wait(15000); // Putting wait because the job doesn't appear immediately on the job list when created
    this.elements.jobsQueueModal.assignedJobsTab
      .searchTextbox()
      .clear()
      .type(jobDescription.slice(-5))
      .then(($el) => {
        cy.wrap($el).type("{enter}");
      });
    cy.wait(4000);
    this.elements.jobsQueueModal.searchUnasignedJobsTab
      .jobRowCell()
      .should("be.visible")
      .contains(jobDescription)
      .first()
      .parent()
      .dblclick();
  };

  searchAssignedJobsTab = (jobDescription) => {
    cy.wait(20000); // Putting wait because the job doesn't appear immediately on the job list when created
    this.elements.jobsQueueModal.assignedJobsTab
      .searchTextbox()
      .clear()
      .type(jobDescription.slice(-5))
      .then(($el) => {
        cy.wrap($el).type("{enter}");
      });
    cy.wait(5500);
    this.elements.jobsQueueModal.assignedJobsTab
      .jobRowCell()
      .contains(jobDescription)
      .first()
      // .should($el => {
      //     expect(Cypress.dom.isAttached($el), 'is attached').to.eq(true) // retry if false
      // })
      .parent()
      .dblclick();
  };

  searchOnHoldJobsTab = (jobDescription) => {
    // cy.wait(15000) // Putting wait because the job doesn't appear immediately on the job list when created
    this.elements.jobsQueueModal.assignedJobsTab
      .searchTextbox()
      .clear()
      .type(jobDescription.slice(-5))
      .then(($el) => {
        cy.wrap($el).type("{enter}");
      });
    cy.wait(5500);
    this.elements.jobsQueueModal.onHoldJobsTab
      .jobRowCell()
      .contains(jobDescription)
      .first()
      .parent()
      .dblclick();
  };

  searchCompletedJobsTab = (jobDescription) => {
    this.elements.jobsQueueModal.completedJobsTab
      .searchTextbox()
      .clear()
      .type(jobDescription.slice(-5))
      .then(($el) => {
        cy.wrap($el).type("{enter}");
      });
    cy.wait(5500);
    this.elements.jobsQueueModal.completedJobsTab
      .jobRowCell()
      .contains(jobDescription)
      .first()
      .parent()
      .find("button")
      .click()
      .then(() => {
        cy.wait(500);
        cy.get(".btn-group.actions .dropdown-menu a")
          .contains("View Job")
          .click();
      });
  };

  searchApproveCompletedJobTab = (jobDescription) => {
    this.elements.jobsQueueModal.completedJobsTab
      .searchTextbox()
      .clear()
      .type(jobDescription.slice(-5))
      .then(($el) => {
        cy.wrap($el).clear().type("{enter}");
      });
    cy.wait(5500);
    this.elements.jobsQueueModal.completedJobsTab
      .jobRowCell()
      .contains(jobDescription)
      .first()
      .parent()
      .find("button")
      .click()
      .then(() => {
        cy.wait(500);
        cy.get(".btn-group.actions .dropdown-menu a")
          .contains("Approve")
          .click();
      });
  };

  searchConvertToInvoiceJobTab = (jobDescription) => {
    this.elements.jobsQueueModal.approvedForInvoiceJobsTab
      .searchTextbox()
      .clear()
      .type(jobDescription.slice(-5))
      .then(($el) => {
        cy.wrap($el).clear().type("{enter}");
      });
    cy.wait(5500);
    this.elements.jobsQueueModal.approvedForInvoiceJobsTab
      .jobRowCell()
      .contains(jobDescription)
      .first()
      .parent()
      .find("button")
      .click()
      .then(() => {
        cy.wait(500);
        cy.get(".btn-group.actions .dropdown-menu a")
          .contains("Convert to Invoice")
          .click();
      });
  };

  searchViewJobReportValidate = (jobDescription) => {
    this.elements.jobsQueueModal.approvedForInvoiceJobsTab
      .searchTextbox()
      .clear()
      .type(jobDescription.slice(-5))
      .then(($el) => {
        cy.wrap($el).clear().type("{enter}");
      });
    cy.wait(5500);
    this.elements.jobsQueueModal.approvedForInvoiceJobsTab
      .jobRowCell()
      .contains(jobDescription)
      .first()
      .parent()
      .find("button")
      .click()
      .then(() => {
        cy.wait(500);
        cy.get(".btn-group.actions .dropdown-menu a")
          .contains("View Job Report")
          .click();
      });

    cy.log("Checking preview...");

    cy.get("app-report-preview-dialog button.close")
      .should("be.visible")
      .click();
  };
}

module.exports = new SchedulePage();
