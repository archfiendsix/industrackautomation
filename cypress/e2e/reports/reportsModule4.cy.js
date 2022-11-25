import LoginPage from "../../pages/LoginPage";
import Dashboard from "../../pages/Dashboard";
import SchedulePage from "../../pages/SchedulePage";
import TimesheetPage from "../../pages/timesheet/TimesheetPage";
import ReportsPage from "../../pages/reports/ReportsPage";
import { v4 as uuidv4 } from "uuid";
import schedulePageValuesjobNumber from "../../fixtures/values";
import { getRandomInt } from "../../pages/EstimatesPage";
require("cypress-plugin-tab");

describe("Timesheet module", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    console.log(err);
    return false;
  });
  let jobNumber;
  beforeEach(() => {
    cy.viewport(1366, 1250);
    cy.visit("/login");
    LoginPage.loginAdmin(
      Cypress.env("login_username"),
      Cypress.env("login_password")
    );
    Dashboard.clickTimesheetTab()
    TimesheetPage.deleteTimesheetRecords()
    Dashboard.clickSchedulingTab();
  });

  // Add new Timesheet for 1 field employee, Shift timesheet type
  // No Cost Code, No vehicle, No job assigned, No Customer info, Time assigned is default

  
  it("Jobs by Tech Status : Started > validate the reports using the job number", function () {
    // Dashboard.clickSchedulingTab();
    /* Add Schedule */
    SchedulePage.gotoAddNewJob();
    let randJob = uuidv4().substring(0, 5);
    let jobInformation = {
      selectCustomer: "Eqpf1439",
      jobDescription: `Job${randJob}`,
      jobStatus: "Complete",
      notes: `Note-${uuidv4().substring(0, 5)}`,
      serviceType: "Maintenance",
      jobPriority: "Low",
      jobColor: "Maintenance",
      partsServiceEquipment: [
        {
          name: "Add Inventory - Taxable no SN",
          qty: "1",
        },
        // {
        //   name: "0e835-Service",
        //   qty: "1",
        // },
        // {
        //   name: "Assembly-",
        //   qty: "1",
        // },
        // {
        //   name: "Cement Nail GUN (Equipment)",
        //   qty: "1",
        // },
      ],
      existingCustomerEquipment: ["Cement Nail GUN (Equipment)"],
      //   attachments: [
      //     {
      //       url: "https://cloudinary.hbs.edu/hbsit/image/upload/s--Fm3oHP0m--/f_auto,c_fill,h_375,w_750,/v20200101/79015AB87FD6D3284472876E1ACC3428.jpg",
      //       addAFile: "doc.doc",
      //     },
      //   ],
      employees: [
        {
          addCrew: "Employee One",
          duration: {
            h: "8",
            m: "0",
          },
        },
      ],
      tasks: [
        {
          taskName: `Task${uuidv4().substring(0, 5)}`,
          serviceType: "Maintenance",
        },
      ],
    };
    SchedulePage.addNewJob(jobInformation);

    SchedulePage.saveJob();

    SchedulePage.gotoJobsQueue();
    // SchedulePage.gotoAssignedJobsTab();
    // SchedulePage.searchAssignedJobsTab(jobInformation.jobDescription);
    SchedulePage.gotoCompletedJobsTab();
    SchedulePage.searchCompletedJobsTab(jobInformation.jobDescription);
    // SchedulePage.getJobNumber();
    // cy.wait(1000);
    // cy.get("input#jobNumberIncrement")
    //   .should("be.visible")
    //   .and("have.class", "ng-untouched");
    // cy.get("input#jobNumberIncrement").last().invoke("val").as("jobNumber");
    // let jobNumber = SchedulePage.getJobNumber();
    cy.wait("@GetJob")
      .its("response.body")
      .then((response) => {
        cy.log(response.jobNumber);
        cy.wrap(response.jobNumber).as("jobNumber");
      });
    SchedulePage.saveJob();
    // cy.log("@jobNumber");
    // let x = cy.wrap("@jobNumber");
    // cy.log(this.jobNumber);
    /* End of add schedule */

    /* Add new timesheet */

    Dashboard.clickTimesheetTab();
    TimesheetPage.clickAddNewTimesheetButton();
    TimesheetPage.selectFieldEmployee("Employee One");
    const timesheetInfo = {
      // customerName: "Customer Eqpf1439",
      job: jobInformation.jobDescription,
      type: "Job",
      costCode: "123",
      vehicle: "Bumble Bee",
      time: {
        start: {
          date: `${getRandomInt(11, 12)}/${getRandomInt(15, 28)}/${getRandomInt(
            2022,
            2023
          )}`,
        },
        duration: {
          hrs: "1",
          min: "0",
        },
      },
    };
    TimesheetPage.clickAddNewTimesheetForEmployee();
    TimesheetPage.addNewTimesheet(timesheetInfo);

    TimesheetPage.saveAddTimeSheet();

    /* End of new Timesheet */

    Dashboard.clickReportsTab();
    ReportsPage.gotoJobsByStatus();
    ReportsPage.selectStatus("Started");
    ReportsPage.sortTableByJobNumber();
  });

  it("Jobs by Tech Status : Complete > validate the reports using the job number", function () {
    // Dashboard.clickSchedulingTab();
    /* Add Schedule */
    SchedulePage.gotoAddNewJob();
    let randJob = uuidv4().substring(0, 5);
    let jobInformation = {
      selectCustomer: "Eqpf1439",
      jobDescription: `Job${randJob}`,
      jobStatus: "Complete",
      notes: `Note-${uuidv4().substring(0, 5)}`,
      serviceType: "Maintenance",
      jobPriority: "Low",
      jobColor: "Maintenance",
      partsServiceEquipment: [
        {
          name: "Add Inventory - Taxable no SN",
          qty: "1",
        },
        // {
        //   name: "0e835-Service",
        //   qty: "1",
        // },
        // {
        //   name: "Assembly-",
        //   qty: "1",
        // },
        // {
        //   name: "Cement Nail GUN (Equipment)",
        //   qty: "1",
        // },
      ],
      existingCustomerEquipment: ["Cement Nail GUN (Equipment)"],
      //   attachments: [
      //     {
      //       url: "https://cloudinary.hbs.edu/hbsit/image/upload/s--Fm3oHP0m--/f_auto,c_fill,h_375,w_750,/v20200101/79015AB87FD6D3284472876E1ACC3428.jpg",
      //       addAFile: "doc.doc",
      //     },
      //   ],
      employees: [
        {
          addCrew: "Employee One",
          duration: {
            h: "8",
            m: "0",
          },
        },
      ],
      tasks: [
        {
          taskName: `Task${uuidv4().substring(0, 5)}`,
          serviceType: "Maintenance",
        },
      ],
    };
    SchedulePage.addNewJob(jobInformation);

    SchedulePage.saveJob();

    SchedulePage.gotoJobsQueue();
    // SchedulePage.gotoAssignedJobsTab();
    // SchedulePage.searchAssignedJobsTab(jobInformation.jobDescription);
    SchedulePage.gotoCompletedJobsTab();
    SchedulePage.searchCompletedJobsTab(jobInformation.jobDescription);
    // SchedulePage.getJobNumber();
    // cy.wait(1000);
    // cy.get("input#jobNumberIncrement")
    //   .should("be.visible")
    //   .and("have.class", "ng-untouched");
    // cy.get("input#jobNumberIncrement").last().invoke("val").as("jobNumber");
    // let jobNumber = SchedulePage.getJobNumber();
    cy.wait("@GetJob")
      .its("response.body")
      .then((response) => {
        cy.log(response.jobNumber);
        cy.wrap(response.jobNumber).as("jobNumber");
      });
    SchedulePage.saveJob();
    // cy.log("@jobNumber");
    // let x = cy.wrap("@jobNumber");
    // cy.log(this.jobNumber);
    /* End of add schedule */

    /* Add new timesheet */

    Dashboard.clickTimesheetTab();
    TimesheetPage.clickAddNewTimesheetButton();
    TimesheetPage.selectFieldEmployee("Employee One");
    const timesheetInfo = {
      // customerName: "Customer Eqpf1439",
      job: jobInformation.jobDescription,
      type: "Job",
      costCode: "123",
      vehicle: "Bumble Bee",
      time: {
        start: {
          date: `${getRandomInt(11, 12)}/${getRandomInt(15, 28)}/${getRandomInt(
            2022,
            2023
          )}`,
        },
        duration: {
          hrs: "1",
          min: "0",
        },
      },
    };
    TimesheetPage.clickAddNewTimesheetForEmployee();
    TimesheetPage.addNewTimesheet(timesheetInfo);

    TimesheetPage.saveAddTimeSheet();

    /* End of new Timesheet */

    Dashboard.clickReportsTab();
    ReportsPage.gotoJobsByStatus();
    ReportsPage.selectStatus("Complete");
    ReportsPage.sortTableByJobNumber();
  });
});
