import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import CustomerPage from "../pages/CustomerPage";
import { GeneralSettings } from "../pages/settings/company_settings";
import TimesheetPage from "../pages/timesheet/TimesheetPage";
import { v4 as uuidv4 } from "uuid";
import { getRandomInt } from "../pages/EstimatesPage";
require("cypress-plugin-tab");

describe("Timesheet module", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    console.log(err);
    return false;
  });

  beforeEach(() => {
    cy.viewport(1366, 1250);
    cy.visit("/login");
    LoginPage.loginAdmin(Cypress.env('login_username'), Cypress.env('login_password'));
    //cy.wait(4250)
    // Dashboard.preventNotificationCard()
    // cy.visit('/timesheetTab')
    Dashboard.clickTimesheetTab();
    // Dashboard.preventNotificationCard()
  });

  // Add new Timesheet for 1 field employee, Shift timesheet type
  // No Cost Code, No vehicle, No job assigned, No Customer info, Time assigned is default

  it("Create an unassigned Jobs from timesheet module - Select Customer - Check if customer info was added", () => {
    TimesheetPage.clickAddNewTimesheetButton();
    TimesheetPage.selectFieldEmployee("Employee One");
    const timesheetInfo = {
      customerName: "Customer Eqpf1439",
      type: "Job",
      costCode: "123",
      vehicle: "Bumble Bee",
      time: {
        start: {
          date: `${getRandomInt(1, 12)}/${getRandomInt(1, 28)}/${getRandomInt(
            2023,
            2025
          )}`,
        },
        duration: {
          hrs: "8",
          min: "0",
        },
      },
    };
    TimesheetPage.clickAddNewTimesheetForEmployee();
    TimesheetPage.addNewTimesheet(timesheetInfo);

    TimesheetPage.saveAddTimeSheet();
  });

  it("Create a SHIFT timesheet records from selecting an employee", () => {
    // var newDate = new Date(date.setMonth(date.getMonth()+8));
    TimesheetPage.clickAddNewTimesheetButton();
    TimesheetPage.selectFieldEmployee("Employee One");

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    const timesheetInfo = {
      type: "Shift",
      costCode: "123",
      vehicle: "Bumble Bee",
      job: "GG test",
      time: {
        start: {
          date: `${getRandomInt(1, 12)}/${getRandomInt(1, 28)}/${getRandomInt(
            2023,
            2025
          )}`,
        },
        duration: {
          hrs: "8",
          min: "0",
        },
      },
      notes: `Note - ${uuidv4().substring(0, 5)}`,
    };
    TimesheetPage.clickAddNewTimesheetForEmployee();
    TimesheetPage.addNewTimesheet(timesheetInfo);

    TimesheetPage.saveAddTimeSheet();
  });

  it("Create a JOB timesheet records from selecting an employee", () => {
    // var newDate = new Date(date.setMonth(date.getMonth()+8));
    TimesheetPage.clickAddNewTimesheetButton();
    TimesheetPage.selectFieldEmployee("Employee One");

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    const timesheetInfo = {
      type: "Job",
      costCode: "123",
      vehicle: "Bumble Bee",
      job: "GG test",
      time: {
        start: {
          date: `${getRandomInt(1, 12)}/${getRandomInt(1, 28)}/${getRandomInt(
            2023,
            2025
          )}`,
        },
        duration: {
          hrs: "8",
          min: "0",
        },
      },
      notes: `Note - ${uuidv4().substring(0, 5)}`,
    };
    TimesheetPage.clickAddNewTimesheetForEmployee();
    TimesheetPage.addNewTimesheet(timesheetInfo);

    TimesheetPage.saveAddTimeSheet();
  });

  it("Create a BREAK timesheet records from selecting an employee", () => {
    // var newDate = new Date(date.setMonth(date.getMonth()+8));
    TimesheetPage.clickAddNewTimesheetButton();
    TimesheetPage.selectFieldEmployee("Employee One");

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    const timesheetInfo = {
      type: "Break",
      costCode: "123",
      vehicle: "Bumble Bee",
      job: "GG test",
      time: {
        start: {
          date: `${getRandomInt(1, 12)}/${getRandomInt(1, 28)}/${getRandomInt(
            2023,
            2025
          )}`,
        },
        duration: {
          hrs: "8",
          min: "0",
        },
      },
      notes: `Note - ${uuidv4().substring(0, 5)}`,
    };
    TimesheetPage.clickAddNewTimesheetForEmployee();
    TimesheetPage.addNewTimesheet(timesheetInfo);

    TimesheetPage.saveAddTimeSheet();
  });

  it("Create a TRAVEL timesheet records from selecting an employee", () => {
    // var newDate = new Date(date.setMonth(date.getMonth()+8));
    TimesheetPage.clickAddNewTimesheetButton();
    TimesheetPage.selectFieldEmployee("Employee One");

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    const timesheetInfo = {
      type: "Travel",
      costCode: "123",
      vehicle: "Bumble Bee",
      job: "GG test",
      time: {
        start: {
          date: `${getRandomInt(1, 12)}/${getRandomInt(1, 28)}/${getRandomInt(
            2023,
            2025
          )}`,
        },
        duration: {
          hrs: "8",
          min: "0",
        },
      },
      notes: `Note - ${uuidv4().substring(0, 5)}`,
    };
    TimesheetPage.clickAddNewTimesheetForEmployee();
    TimesheetPage.addNewTimesheet(timesheetInfo);

    TimesheetPage.saveAddTimeSheet();
  });

  //   after(() => {
  //     cy.visit('/login')
  //     LoginPage.loginAdmin('andreiv@industrack.com', 'admin')
  //     // cy.wait(4250)
  //     Dashboard.clickTimesheetTab();

  //     TimesheetPage.clickAddNewTimesheetButton();
  //     TimesheetPage.selectFieldEmployee("Employee One");

  //     TimesheetPage.elements.timesheetRecordsModal.timeSheetRecordsTable
  //       .selectAll()
  //       .click();
  //     TimesheetPage.elements.timesheetRecordsModal
  //       .deleteTimesheetRecordButton()
  //       .click();
  //     TimesheetPage.elements.timesheetRecordsModal.deleteConfirmModal
  //       .yesButton()
  //       .click();
  //   });
});
