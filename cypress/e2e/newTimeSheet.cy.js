import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import CustomerPage from "../pages/CustomerPage";
import { GeneralSettings } from '../pages/settings/company_settings';
import TimesheetPage from '../pages/timesheet/TimesheetPage';

require('cypress-plugin-tab');

describe('Add Customer', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
    })

    beforeEach(() => {

        cy.visit('/login')
        LoginPage.loginAdmin('andreiv@industrack.com', 'admin')
        cy.wait(4250)
        Dashboard.preventNotificationCard()
        Dashboard.clickTimesheetTab()

    })

    it.only('Basic saving function', () => {
        TimesheetPage.addNewTimesheet()
        TimesheetPage.selectFieldEmployee('Employee One')
        TimesheetPage.addNewTimesheetForEmployee()
        TimesheetPage.selectTimesheetType('Shift')
        TimesheetPage.selectTimesheetCostCode('011')
        TimesheetPage.saveAddTimeSheet()
    })

    after(() => {

        // cy.visit('/login')
        // LoginPage.loginAdmin('andreiv@industrack.com', 'admin')
        // cy.wait(4250)
        Dashboard.clickTimesheetTab()

        TimesheetPage.addNewTimesheet()
        TimesheetPage.selectFieldEmployee('Employee One')

        TimesheetPage.elements.timesheetRecordsModal.timeSheetRecordsTable.selectAll().click()
        TimesheetPage.elements.timesheetRecordsModal.deleteTimesheetRecordButton().click()
        TimesheetPage.elements.timesheetRecordsModal.deleteConfirmModal.yesButton().click()
    })


})