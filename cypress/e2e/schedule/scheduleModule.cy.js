import LoginPage from "../../pages/LoginPage";
import Dashboard from "../../pages/Dashboard";
// import SchedulePage from "../pages/SchedulePage"
import SchedulePage from "../../pages/SchedulePage";
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

  it("Add default Job - Assert: customer details, service location - assert info after creation", () => {
    SchedulePage.gotoAddNewJob();
    let jobInformation = {
      selectCustomer: "01223",
      serviceLocation: "Mercer Street",
      jobDescription: `Job-${uuidv4().substring(0, 5)}`,
      jobStatus: "Not Started",
      notes: `Note-${uuidv4().substring(0, 5)}`,
      serviceType: "Maintenance",
      jobPriority: "Low",
      jobColor: "Maintenance",
    };
    SchedulePage.addNewJob(jobInformation);
    const address = {
      address: cy.get(".col-md-12").contains(jobInformation.serviceLocation),
    };
    jobInformation = { ...jobInformation, ...address };
    SchedulePage.saveJob();

    SchedulePage.gotoJobsQueue();
    SchedulePage.clickFirstUnassignedJob();

    SchedulePage.verifyCustomerInformation(jobInformation);
  });

  it("Add default Job - Customer with 1 equipment - Add an inventory - Add attachments - Assert: customer details, service location - assert info after creation", () => {
    SchedulePage.gotoAddNewJob();
    let jobInformation = {
      selectCustomer: "Customer Eqp-f1439",
      jobDescription: `Job-${uuidv4().substring(0, 5)}`,
      jobStatus: "Not Started",
      notes: `Note-${uuidv4().substring(0, 5)}`,
      serviceType: "Maintenance",
      jobPriority: "Low",
      jobColor: "Maintenance",
      partsServiceEquipment: [
        {
          name: "Add Inventory - Taxable no SN",
          qty: "1",
        },
      ],
      existingCustomerEquiipment: "Cement Nail GUN (Equipment)",
      attachments: [
        {
          url: "https://cloudinary.hbs.edu/hbsit/image/upload/s--Fm3oHP0m--/f_auto,c_fill,h_375,w_750,/v20200101/79015AB87FD6D3284472876E1ACC3428.jpg",
          addAFile: "doc.doc",
        },
      ],
    };
    SchedulePage.addNewJob(jobInformation);

    SchedulePage.saveJob();

    SchedulePage.gotoJobsQueue();
    SchedulePage.clickFirstUnassignedJob();

    SchedulePage.verifyCustomerInformation(jobInformation);
  });

  it("Add default Job - Customer with 1 equipment - Add a service - Add attachments - Assert: customer details, service location - assert info after creation", () => {
    SchedulePage.gotoAddNewJob();
    let jobInformation = {
      selectCustomer: "Customer Eqp-f1439",
      jobDescription: `Job-${uuidv4().substring(0, 5)}`,
      jobStatus: "Not Started",
      notes: `Note-${uuidv4().substring(0, 5)}`,
      serviceType: "Maintenance",
      jobPriority: "Low",
      jobColor: "Maintenance",
      partsServiceEquipment: [
        {
          name: "0e835-Service",
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
    };
    SchedulePage.addNewJob(jobInformation);

    SchedulePage.saveJob();

    SchedulePage.gotoJobsQueue();
    SchedulePage.clickFirstUnassignedJob();

    SchedulePage.verifyCustomerInformation(jobInformation);
  });

  it("Add default Job - Customer with 1 equipment - Add an Assembly - Add attachments - Assert: customer details, service location - assert info after creation", () => {
    SchedulePage.gotoAddNewJob();
    let jobInformation = {
      selectCustomer: "Customer Eqp-f1439",
      jobDescription: `Job-${uuidv4().substring(0, 5)}`,
      jobStatus: "Not Started",
      notes: `Note-${uuidv4().substring(0, 5)}`,
      serviceType: "Maintenance",
      jobPriority: "Low",
      jobColor: "Maintenance",
      partsServiceEquipment: [
        {
          name: "Assembly-",
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
    };
    SchedulePage.addNewJob(jobInformation);

    SchedulePage.saveJob();

    SchedulePage.gotoJobsQueue();
    SchedulePage.clickFirstUnassignedJob();

    SchedulePage.verifyCustomerInformation(jobInformation);
  });

  it("Add default Job - Customer with 1 equipment - Add an Equipment - Add attachments - Assert: customer details, service location - assert info after creation", () => {
    SchedulePage.gotoAddNewJob();
    let jobInformation = {
      selectCustomer: "Customer Eqp-f1439",
      jobDescription: `Job-${uuidv4().substring(0, 5)}`,
      jobStatus: "Not Started",
      notes: `Note-${uuidv4().substring(0, 5)}`,
      serviceType: "Maintenance",
      jobPriority: "Low",
      jobColor: "Maintenance",
      partsServiceEquipment: [
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
    };
    SchedulePage.addNewJob(jobInformation);

    SchedulePage.saveJob();

    SchedulePage.gotoJobsQueue();
    SchedulePage.clickFirstUnassignedJob();

    SchedulePage.verifyCustomerInformation(jobInformation);
  });

  

});
