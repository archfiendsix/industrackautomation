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
            Print: () => cy.get('scheduling .btn-group.actions button+.dropdown-menu li a').contains('Print'),
        },
        jobsQueueEye: cy.get('#iBoxJobs .ibox-tools a[title="Expand"]'),
    }

    checkSaveButtonDisabled = () => {

    }

}


module.exports = new SchedulePage();