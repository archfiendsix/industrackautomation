class SchedulePage {
    elements = {
        filterTextBox: () => cy.get('.search.singlesearchbox input.mat-input-element.cdk-text-field-autofill-monitored'),
        dayTab: () => cy.get('#scheduler_here div[name="day_tab"].day_tab'),
        weekTab: () => cy.get('#scheduler_here div[name="week_tab"].week_tab'),
        monthTab: () => cy.get('#scheduler_here div[name="month_tab"].month_tab'),
        timelineTab: () => cy.get('#scheduler_here div[name="timeline_tab"].timeline_tab'),

        schedulerSelect: () => cy.get('#scheduler_here .schedulerselect .mat-select'),
        toggleUnassignedJobs: () => cy.get('#scheduler_here .toggle-unasignedjobs .mat-slide-toggle'),

        calendar: {
            previousButton: () => cy.get('#scheduler_here .dhx_cal_prev_button'),
            nextButton: () => cy.get('#scheduler_here .dhx_cal_next_button'),
            showMiniCalendar: () => cy.get('#scheduler_here #showMiniCalendar'),
        },
        actionsDropdown: {
            button: () => cy.get('scheduling .btn-group.actions'),
            addNewJob: () => cy.get('scheduling .btn-group.actions button+.dropdown-menu li a').contains('Add new Job'),
            jobsQueue: () => cy.get('scheduling .btn-group.actions button+.dropdown-menu li a').contains('jobs Queue'),
            print: () => cy.get('scheduling .btn-group.actions button+.dropdown-menu li a').contains('Print'),
        },
        addNewJobModal: {
            jobsInfoTabButton: () => cy.get('app-job-edit-form ul.nav-tabs li a').contains('Job Info'),
            employeesTabButton: () => cy.get('app-job-edit-form ul.nav-tabs li a').contains('Employee'),
            tasksTabButton: () => cy.get('app-job-edit-form ul.nav-tabs li a').contains('Task'),
            saveJobButton: () => cy.get('app-job-edit-form .modal-footer button').contains('Save Job'),
            dispatchNowButton: () => cy.get('app-job-edit-form .modal-footer button').contains('Dispatch Now'),
            jobsInfoTab: {
                selectCustomerField: () => cy.get('app-job-edit-form form input#partservsearch'),
                jobDescriptionTexbox: () => cy.get('app-job-edit-form form input#jobName '),
                jobStatusField: () => cy.get('app-job-edit-form form select#jobState'),
                notesTextarea: () => cy.get('app-job-edit-form form textarea#customerSiteNote'),
                jobPriorityField: () => cy.get('app-job-edit-form form select#jobPriority'),
                startDate: () => cy.get('#editJobFormStartDate mat-form-field input').first(),
                endDate: () => cy.get('#editJobFormEndDate mat-form-field input ').first(),
                jobTemplateButton: ()=> cy.get('app-job-edit-form button').contains('Job Template')
            },
            employeeTab: {
                addCrewField: () => cy.get('crew-select .dropdown'),
                addCrewFilterTextbox: () => cy.get('crew-select .crewlist .searchfield input'),
                addCrewListItem: () => cy.get('crew-select .crewlist .list li'),
                durationHrs: () => cy.get('.cDuration .form-group .form-inline input').first(),
                durationMin: () => cy.get('.cDuration .form-group .form-inline input').last(),
            },
            tasksTab: {
                addNewButton: () => cy.get('job-task-form button').contains('New Task'),
                taskNameTextbox: () => cy.get('#taskslist #task1 .form-group input').first()
            },
            selectJobTemplateModal : {
                jobTemplateField: ()=> cy.get('app-common-selector-dialog mat-select'),
                jobTemplateFieldOptions: ()=> cy.get('.cdk-overlay-pane mat-option'),
                selectButton: ()=> cy.get('.cdk-overlay-pane button').contains('Select')
            },
            confirmTamplateModal: {
                yesButton: ()=>cy.get('.mat-dialog-actions button').contains('Yes')
            }
        }
        // jobsQueueEye: cy.get('#iBoxJobs .ibox-tools a[title="Expand"]'),
    }

    gotoAddNewJob = () => {
        this.elements.actionsDropdown.button().click()
        this.elements.actionsDropdown.addNewJob().click()
    }

    fillData = () => {
        this.elements.addNewJobModal.jobsInfoTab.selectCustomerField().click()
        this.elements.addNewJobModal.jobsInfoTab.selectCustomerField().type('Genius Giant')
        cy.wait(2000)
        this.elements.addNewJobModal.jobsInfoTab.selectCustomerField().type('{downArrow}{enter}')
        this.elements.addNewJobModal.jobsInfoTab.jobDescriptionTexbox().type('Test Description')
        this.elements.addNewJobModal.jobsInfoTab.jobStatusField().select('Started')
        this.elements.addNewJobModal.jobsInfoTab.notesTextarea().type('Test Note')
        this.elements.addNewJobModal.jobsInfoTab.jobPriorityField().select('High')
        this.elements.addNewJobModal.jobsInfoTab.startDate().type('09/01/2022')
        this.elements.addNewJobModal.jobsInfoTab.endDate().type('09/30/2022')
    }

    saveJob = () => {
        this.elements.addNewJobModal.saveJobButton().click()
    }

    dispatchJob = () => {
        this.elements.addNewJobModal.dispatchNowButton().click()
    }

    addJobEmployee = (employee) => {
        this.elements.addNewJobModal.employeesTabButton().click()
        this.elements.addNewJobModal.employeeTab.addCrewField().click()
        this.elements.addNewJobModal.employeeTab.addCrewFilterTextbox().type(employee.employeeName)
        this.elements.addNewJobModal.employeeTab.addCrewListItem().find('label').contains(employee.employeeName).click()
        this.elements.addNewJobModal.employeeTab.durationHrs().type(employee.duration.hrs)
        this.elements.addNewJobModal.employeeTab.durationMin().type(employee.duration.min)
        
    }

    addJobTemplate = (jobTemplateName)=> {
        this.elements.addNewJobModal.jobsInfoTab.jobTemplateButton().click()
        this.elements.addNewJobModal.selectJobTemplateModal.jobTemplateField().click()
        this.selectJobTemplateOption(jobTemplateName)
        this.elements.addNewJobModal.selectJobTemplateModal.selectButton().click()
        this.elements.addNewJobModal.confirmTamplateModal.yesButton().click()
    }

    selectJobTemplateOption = (jobTemplateName) => {
        this.elements.addNewJobModal.selectJobTemplateModal.jobTemplateFieldOptions().contains(jobTemplateName).click()
    }

    createNewTask = (task) => {
        task.taskName
        this.elements.addNewJobModal.tasksTab.addNewButton().click()
        this.elements.addNewJobModal.tasksTab.taskNameTextbox().type(task.taskName)
    }

   

    clickTasksTab = () => {
        this.elements.addNewJobModal.tasksTabButton().click()
    }

}


module.exports = new SchedulePage();