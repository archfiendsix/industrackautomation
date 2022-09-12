import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import CustomerPage from "../pages/CustomerPage";
import { GeneralSettings } from '../pages/settings/company_settings';
import TimesheetPage from '../pages/timesheet/TimesheetPage';

require('cypress-plugin-tab');

describe('Timesheet module', () => {
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
        cy.visit('/timesheetTab')
        Dashboard.preventNotificationCard()
        // Dashboard.clickTimesheetTab()

    })

    // Add new Timesheet for 1 field employee, Shift timesheet type
    // No Cost Code, No vehicle, No job assigned, No Customer info, Time assigned is default

    it('Basic saving function', () => {
        TimesheetPage.addNewTimesheet()
        TimesheetPage.selectFieldEmployee('Employee One')
        TimesheetPage.addNewTimesheetForEmployee()
        TimesheetPage.selectTimesheetType('Shift')
        TimesheetPage.selectTimesheetCostCode('011')
        TimesheetPage.saveAddTimeSheet()
    })

    // after(() => {

    //     // cy.visit('/login')
    //     // LoginPage.loginAdmin('andreiv@industrack.com', 'admin')
    //     // cy.wait(4250)
    //     Dashboard.clickTimesheetTab()

    //     TimesheetPage.addNewTimesheet()
    //     TimesheetPage.selectFieldEmployee('Employee One')

    //     TimesheetPage.elements.timesheetRecordsModal.timeSheetRecordsTable.selectAll().click()
    //     TimesheetPage.elements.timesheetRecordsModal.deleteTimesheetRecordButton().click()
    //     TimesheetPage.elements.timesheetRecordsModal.deleteConfirmModal.yesButton().click()
    // })


})