import LoginPage from "../../pages/LoginPage";
import Dashboard from "../../pages/Dashboard";
// import SchedulePage from "../pages/SchedulePage"
import SchedulePage from "../../pages/SchedulePage";
import InvoicesPage from "../../pages/InvoicesPage";
import { v4 as uuidv4 } from "uuid";

require("cypress-plugin-tab");

describe("Schedule Module", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    console.log(err);
    return false;
  });

  beforeEach(() => {
    cy.viewport(1280, 768);

    cy.visit("/login");
    LoginPage.loginAdmin("andreiv@industrack.com", "admin");
    cy.get("body").contains("Schedule");
    // cy.wait(4250);
    // Dashboard.preventNotificationCard();
    cy.visit("/schedulingTab");
    // Dashboard.clickScheduleTab()
  });

  before(() => {});

  it("Add default Job - Start Job - Hold Job - Resume - Mark as completed- Approve for invoice - Convert to Invoice - assert info", () => {
    SchedulePage.gotoAddNewJob();
    let jobInformation = {
      selectCustomer: "Eqp-f1439",
      jobDescription: `Job-${uuidv4().substring(0, 5)}`,
      jobStatus: "Started",
      notes: `Note-${uuidv4().substring(0, 5)}`,
      serviceType: "Maintenance",
      jobPriority: "Low",
      jobColor: "Maintenance",
      partsServiceEquipment: [
        {
          name: "Add Inventory - Taxable no SN",
          qty: "1",
        },
        {
          name: "0e835-Service",
          qty: "1",
        },
        {
          name: "Assembly-",
          qty: "1",
        },
        {
          name: "Cement Nail GUN (Equipment)",
          qty: "1",
        },
      ],
      existingCustomerEquipment: ["Cement Nail GUN (Equipment)"],
      attachments: [
        {
          url: "https://cloudinary.hbs.edu/hbsit/image/upload/s--Fm3oHP0m--/f_auto,c_fill,h_375,w_750,/v20200101/79015AB87FD6D3284472876E1ACC3428.jpg",
          addAFile: "doc.doc",
        },
      ],
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
          taskName: `Task - ${uuidv4().substring(0, 5)}`,
          serviceType: "Maintenance",
        },
      ],
    };
    SchedulePage.addNewJob(jobInformation);

    SchedulePage.saveJob();
    /*here*/
    SchedulePage.gotoJobsQueue();
    SchedulePage.gotoAssignedJobsTab();
    SchedulePage.searchAssignedJobsTab(jobInformation.jobDescription);

    let jobInformationEdit = {
      jobStatus: "On hold",
    };
    SchedulePage.addNewJob(jobInformationEdit);
    SchedulePage.saveJob();

    SchedulePage.gotoOnHoldJobsTab();
    SchedulePage.searchOnHoldJobsTab(jobInformation.jobDescription);

    SchedulePage.verifyCustomerInformation({
      ...jobInformation,
      ...jobInformationEdit,
    });

    SchedulePage.saveJob();

    SchedulePage.gotoOnHoldJobsTab();
    SchedulePage.searchOnHoldJobsTab(jobInformation.jobDescription);

    jobInformationEdit = {
      jobStatus: "Started",
    };

    SchedulePage.addNewJob(jobInformationEdit);
    SchedulePage.saveJob();

    SchedulePage.gotoAssignedJobsTab();
    SchedulePage.searchAssignedJobsTab(jobInformation.jobDescription);

    SchedulePage.verifyCustomerInformation({
      ...jobInformation,
      ...jobInformationEdit,
    });

    SchedulePage.saveJob();

    /* Approve for invoice - Convert to Invoice - assert info" */

    // For todays date;
    Date.prototype.today = function () {
      return (
        (this.getDate() < 10 ? "0" : "") +
        this.getDate() +
        "/" +
        (this.getMonth() + 1 < 10 ? "0" : "") +
        (this.getMonth() + 1) +
        "/" +
        this.getFullYear()
      );
    };

    // For the time now
    Date.prototype.timeNow = function () {
      return (
        (this.getHours() < 10 ? "0" : "") +
        this.getHours() +
        ":" +
        (this.getMinutes() < 10 ? "0" : "") +
        this.getMinutes() +
        ":" +
        (this.getSeconds() < 10 ? "0" : "") +
        this.getSeconds()
      );
    };

    var datetime = new Date().today() + " @ " + new Date().timeNow();
    SchedulePage.gotoAssignedJobsTab();
    jobInformationEdit = {
      jobStatus: "Complete",
      notes: `Completed at: ${datetime}`,
    };

    SchedulePage.searchAssignedJobsTab(jobInformation.jobDescription);
    SchedulePage.addNewJob(jobInformationEdit);
    SchedulePage.saveJob();

    SchedulePage.gotoCompletedJobsTab();
    SchedulePage.searchCompletedJobsTab(jobInformation.jobDescription);

    SchedulePage.verifyCustomerInformation({
      ...jobInformation,
      ...jobInformationEdit,
    });

    SchedulePage.saveJob();

    SchedulePage.searchApproveCompletedJobTab(jobInformation.jobDescription);

    SchedulePage.gotoApprovedForInvoiceTab();

    SchedulePage.searchViewJobReportValidate(jobInformation.jobDescription);

    SchedulePage.searchConvertToInvoiceJobTab(jobInformation.jobDescription);
  });

  it.only("Add default Job - Assign employee group - Start Job - Hold Job - Resume - Mark as completed- Approve for invoice - Convert to Invoice - assert info", () => {
    SchedulePage.gotoAddNewJob();
    let jobInformation = {
      selectCustomer: "Eqp-f1439",
      jobDescription: `Job-${uuidv4().substring(0, 5)}`,
      jobStatus: "Started",
      notes: `Note-${uuidv4().substring(0, 5)}`,
      serviceType: "Maintenance",
      jobPriority: "Low",
      jobColor: "Maintenance",
      partsServiceEquipment: [
        {
          name: "Add Inventory - Taxable no SN",
          qty: "1",
        },
        {
          name: "0e835-Service",
          qty: "1",
        },
        {
          name: "Assembly-",
          qty: "1",
        },
        {
          name: "Cement Nail GUN (Equipment)",
          qty: "1",
        },
      ],
      existingCustomerEquipment: ["Cement Nail GUN (Equipment)"],
      attachments: [
        {
          url: "https://cloudinary.hbs.edu/hbsit/image/upload/s--Fm3oHP0m--/f_auto,c_fill,h_375,w_750,/v20200101/79015AB87FD6D3284472876E1ACC3428.jpg",
          addAFile: "doc.doc",
        },
      ],
      employeeGroup: {
        groupName: 'Group of 2',
        employees: [
          {
            addCrew: "Raymon Howard",
            duration: {
              h: "8",
              m: "0",
            },
          },
          {
            addCrew: "Employee One",
            duration: {
              h: "8",
              m: "0",
            },
          },
        ],
      },
      tasks: [
        {
          taskName: `Task - ${uuidv4().substring(0, 5)}`,
          serviceType: "Maintenance",
        },
      ],
    };
    SchedulePage.addNewJob(jobInformation);

    SchedulePage.saveJob();
    /*here*/
    SchedulePage.gotoJobsQueue();
    SchedulePage.gotoAssignedJobsTab();
    SchedulePage.searchAssignedJobsTab(jobInformation.jobDescription);

    let jobInformationEdit = {
      jobStatus: "On hold",
    };
    SchedulePage.addNewJob(jobInformationEdit);
    SchedulePage.saveJob();

    SchedulePage.gotoOnHoldJobsTab();
    SchedulePage.searchOnHoldJobsTab(jobInformation.jobDescription);

    SchedulePage.verifyCustomerInformation({
      ...jobInformation,
      ...jobInformationEdit,
    });

    SchedulePage.saveJob();

    SchedulePage.gotoOnHoldJobsTab();
    SchedulePage.searchOnHoldJobsTab(jobInformation.jobDescription);

    jobInformationEdit = {
      jobStatus: "Started",
    };

    SchedulePage.addNewJob(jobInformationEdit);
    SchedulePage.saveJob();

    SchedulePage.gotoAssignedJobsTab();
    SchedulePage.searchAssignedJobsTab(jobInformation.jobDescription);

    SchedulePage.verifyCustomerInformation({
      ...jobInformation,
      ...jobInformationEdit,
    });

    SchedulePage.saveJob()

    /* Approve for invoice - Convert to Invoice - assert info" */

    // For todays date;
    Date.prototype.today = function () {
      return (
        (this.getDate() < 10 ? "0" : "") +
        this.getDate() +
        "/" +
        (this.getMonth() + 1 < 10 ? "0" : "") +
        (this.getMonth() + 1) +
        "/" +
        this.getFullYear()
      );
    };

    // For the time now
    Date.prototype.timeNow = function () {
      return (
        (this.getHours() < 10 ? "0" : "") +
        this.getHours() +
        ":" +
        (this.getMinutes() < 10 ? "0" : "") +
        this.getMinutes() +
        ":" +
        (this.getSeconds() < 10 ? "0" : "") +
        this.getSeconds()
      );
    };

    var datetime = new Date().today() + " @ " + new Date().timeNow();
    SchedulePage.gotoAssignedJobsTab();
    jobInformationEdit = {
      jobStatus: "Complete",
      notes: `Completed at: ${datetime}`,
    };

    SchedulePage.searchAssignedJobsTab(jobInformation.jobDescription)
    SchedulePage.addNewJob(jobInformationEdit);
    SchedulePage.saveJob();

    SchedulePage.gotoCompletedJobsTab();
    SchedulePage.searchCompletedJobsTab(jobInformation.jobDescription);

    SchedulePage.verifyCustomerInformation({
      ...jobInformation,
      ...jobInformationEdit,
    });

    SchedulePage.saveJob();

    SchedulePage.searchApproveCompletedJobTab(jobInformation.jobDescription);

    SchedulePage.gotoApprovedForInvoiceTab();

    SchedulePage.searchViewJobReportValidate(jobInformation.jobDescription);

    SchedulePage.searchConvertToInvoiceJobTab(jobInformation.jobDescription);


    InvoicesPage.previewInvoice()
  });
});
