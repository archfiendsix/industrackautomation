import LoginPage from "../pages/LoginPage"
import Dashboard from "../pages/Dashboard"
// import SchedulePage from "../pages/SchedulePage"
import SchedulePage from "../pages/SchedulePage"

require('cypress-plugin-tab');

describe('Schedule Module', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
    })

    beforeEach(() => {
        cy.viewport(1280, 768)

        cy.visit('/login')
        LoginPage.loginAdmin('andreiv@industrack.com', 'admin')
        cy.wait(4250)
        Dashboard.preventNotificationCard()
        cy.visit('/schedulingTab')
        // Dashboard.clickScheduleTab()


    })

    before(() => {

    })


    it('Should be able to save a job (required fields filled)', () => {

        SchedulePage.gotoAddNewJob()
        SchedulePage.fillData()
        SchedulePage.saveJob()
    })

    it('Should be able to dispatch a job - with 1 employee added', () => {

        SchedulePage.gotoAddNewJob()
        const employee = {
            employeeName: 'Employee One',
            duration: {
                hrs: 0,
                min: 0,
            }
        }
        SchedulePage.addJobEmployee(employee)
        SchedulePage.elements.addNewJobModal.jobsInfoTabButton().click()
        SchedulePage.fillData()

        SchedulePage.dispatchJob()
    })

    it('Should be able to dispatch a job - with employee added - 0hrs 0mins duration', () => {

        SchedulePage.gotoAddNewJob()
        const employee = {
            employeeName: 'Employee One',
            duration: {
                hrs: 0,
                min: 0,
            }
        }
        SchedulePage.addJobEmployee(employee)
        SchedulePage.elements.addNewJobModal.jobsInfoTabButton().click()
        SchedulePage.fillData()

        SchedulePage.dispatchJob()
    })

    it('Should be able to dispatch a job - with employee added (with 8 hrs duration)', () => {

        SchedulePage.gotoAddNewJob()
        const employee = {
            employeeName: 'Employee One',
            duration: { hrs: 8, min: 0 }
        }
        SchedulePage.addJobEmployee(employee)
        SchedulePage.elements.addNewJobModal.jobsInfoTabButton().click()
        SchedulePage.fillData()

        SchedulePage.dispatchJob()
    })

    it('Should be able to dispatch a job - with Job Template added', () => {
        cy.log('Add template')
        Dashboard.gotoJobTemplates()
        SchedulePage.gotoAddNewJob()
        const employee = {
            employeeName: 'Employee One',
            duration: { hrs: 0, min: 0 }
        }
        SchedulePage.addJobEmployee(employee)
        SchedulePage.elements.addNewJobModal.jobsInfoTabButton().click()
        SchedulePage.fillData()

        const templateName = 'Snow blowing'

        SchedulePage.addJobTemplate(templateName)

        SchedulePage.dispatchJob()
    })

    it('Should be able to dispatch a job - with employee added - with Task added (Task Name only)', () => {

        SchedulePage.gotoAddNewJob()
        const employee = {
            employeeName: 'Employee One',
            duration: { hrs: 0, min: 0 }
        }
        SchedulePage.addJobEmployee(employee)
        SchedulePage.clickTasksTab()
        const task = { taskName: 'New Task' }
        SchedulePage.createNewTask(task)
        SchedulePage.elements.addNewJobModal.jobsInfoTabButton().click()
        SchedulePage.fillData()

        SchedulePage.dispatchJob()
    })

    // it('Should be able to save a job - with employee added - with Task added (Task Name + Newly created Service type)', () => {

    //     Dashboard.clickSettings()
    //     Dashboard.clickSchedulingTab()
    //     Dashboard.clickTaskTemplatesTab()
    // })
    // after(() => {

    //     Dashboard.clickScheduleTab()
    //     cy.get('.dhx_cal_event_line.test_sc_class').then($btn => {
    //         cy.log($btn.length)
    //         for (let i = 1; i <= $btn.length; i++) {
    //             cy.wait(2000)
    //             // cy.wrap($btn).should('have.class','dhx_cal_event_line')
    //             cy.get('.dhx_cal_event_line.test_sc_class').first().dblclick()
    //             cy.wait(2000)
    //             cy.get('.modal-footer button.btn-danger').contains('Delete job').click()
    //             cy.wait(2000)
    //             cy.get('button.btn-primary').contains('Confirm').click()
    //             cy.wait(2000)
    //             cy.get('[mat-dialog-content=""] > .warning > .ibox > .ibox-content > .text-center > :nth-child(2)').first().click()
    //             cy.wait(2000)
    //         }


    //         // cy.reload()
    //     })
    })



})