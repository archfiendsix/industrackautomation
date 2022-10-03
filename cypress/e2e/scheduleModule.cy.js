import LoginPage from "../pages/LoginPage"
import Dashboard from "../pages/Dashboard"
// import SchedulePage from "../pages/SchedulePage"
import SchedulePage from "../pages/SchedulePage"
import { v4 as uuidv4 } from 'uuid';

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


    it.only('Add default Job - Assert: customer details, service location - assert info after creation', () => {

        SchedulePage.gotoAddNewJob()
        let jobInformation = {
            selectCustomer: '01223',
            serviceLocation:'Mercer Street',
            jobDescription:`Description-${uuidv4().substring(0, 5)}`,
            jobStatus: 'Not Started',
            notes: `Note-${uuidv4().substring(0, 5)}`,
            serviceType: 'Maintenance',
            jobPriority: 'Low',
            jobColor: 'Maintenance'
        }
        SchedulePage.addNewJob(jobInformation)
        const address = {
            address: cy.get('.col-md-12').contains(jobInformation.serviceLocation)
        }
        jobInformation = {...jobInformation,...address}
        SchedulePage.saveJob()
        
        
        SchedulePage.gotoJobsQueue()
        SchedulePage.clickFirstUnassignedJob()
        
        
        SchedulePage.verifyCustomerInformation(jobInformation)
    })



})