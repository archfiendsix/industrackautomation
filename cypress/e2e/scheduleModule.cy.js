import LoginPage from "../pages/LoginPage"
import Dashboard from "../pages/Dashboard"
// import SchedulePage from "../pages/SchedulePage"
import SchedulePage from "../pages/SchedulePage"
import { v4 as uuidv4 } from 'uuid';

require('cypress-plugin-tab');

describe.only('Schedule Module', () => {
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


    it('Add default Job - Assert: customer details, service location - assert info after creation', () => {

        SchedulePage.gotoAddNewJob()
        let jobInformation = {
            selectCustomer: '01223',
            serviceLocation: 'Mercer Street',
            jobDescription: `Description-${uuidv4().substring(0, 5)}`,
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
        jobInformation = { ...jobInformation, ...address }
        SchedulePage.saveJob()


        SchedulePage.gotoJobsQueue()
        SchedulePage.clickFirstUnassignedJob()


        SchedulePage.verifyCustomerInformation(jobInformation)
    })

    it('Add default Job - Customer with 1 equipment - Add an inventory - Add attachments - Assert: customer details, service location - assert info after creation', () => {

        SchedulePage.gotoAddNewJob()
        let jobInformation = {
            selectCustomer: 'Customer Eqp-f1439',
            jobDescription: `Description-${uuidv4().substring(0, 5)}`,
            jobStatus: 'Not Started',
            notes: `Note-${uuidv4().substring(0, 5)}`,
            serviceType: 'Maintenance',
            jobPriority: 'Low',
            jobColor: 'Maintenance',
            partsServiceEquipment: [{
                name: 'Add Inventory - Taxable no SN',
                qty: '1'
            }],
            existingCustomerEquiipment: 'Cement Nail GUN (Equipment)',
            attachments: [
                {
                    url: 'https://cloudinary.hbs.edu/hbsit/image/upload/s--Fm3oHP0m--/f_auto,c_fill,h_375,w_750,/v20200101/79015AB87FD6D3284472876E1ACC3428.jpg',
                    addAFile: 'doc.doc'
                }
            ]
        }
        SchedulePage.addNewJob(jobInformation)

        SchedulePage.saveJob()


        SchedulePage.gotoJobsQueue()
        SchedulePage.clickFirstUnassignedJob()


        SchedulePage.verifyCustomerInformation(jobInformation)
    })


    it('Add default Job - Customer with 1 equipment - Add a service - Add attachments - Assert: customer details, service location - assert info after creation', () => {

        SchedulePage.gotoAddNewJob()
        let jobInformation = {
            selectCustomer: 'Customer Eqp-f1439',
            jobDescription: `Description-${uuidv4().substring(0, 5)}`,
            jobStatus: 'Not Started',
            notes: `Note-${uuidv4().substring(0, 5)}`,
            serviceType: 'Maintenance',
            jobPriority: 'Low',
            jobColor: 'Maintenance',
            partsServiceEquipment: [{
                name: '0e835-Service',
                qty: '1'
            }],
            existingCustomerEquipment: ['Cement Nail GUN (Equipment)'],
            attachments: [
                {
                    url: 'https://cloudinary.hbs.edu/hbsit/image/upload/s--Fm3oHP0m--/f_auto,c_fill,h_375,w_750,/v20200101/79015AB87FD6D3284472876E1ACC3428.jpg',
                    addAFile: 'doc.doc'
                }
            ]
        }
        SchedulePage.addNewJob(jobInformation)

        SchedulePage.saveJob()


        SchedulePage.gotoJobsQueue()
        SchedulePage.clickFirstUnassignedJob()


        SchedulePage.verifyCustomerInformation(jobInformation)
    })

    it('Add default Job - Customer with 1 equipment - Add an Assembly - Add attachments - Assert: customer details, service location - assert info after creation', () => {

        SchedulePage.gotoAddNewJob()
        let jobInformation = {
            selectCustomer: 'Customer Eqp-f1439',
            jobDescription: `Description-${uuidv4().substring(0, 5)}`,
            jobStatus: 'Not Started',
            notes: `Note-${uuidv4().substring(0, 5)}`,
            serviceType: 'Maintenance',
            jobPriority: 'Low',
            jobColor: 'Maintenance',
            partsServiceEquipment: [{
                name: 'Assembly-',
                qty: '1'
            }],
            existingCustomerEquipment: ['Cement Nail GUN (Equipment)'],
            attachments: [
                {
                    url: 'https://cloudinary.hbs.edu/hbsit/image/upload/s--Fm3oHP0m--/f_auto,c_fill,h_375,w_750,/v20200101/79015AB87FD6D3284472876E1ACC3428.jpg',
                    addAFile: 'doc.doc'
                }
            ]
        }
        SchedulePage.addNewJob(jobInformation)

        SchedulePage.saveJob()


        SchedulePage.gotoJobsQueue()
        SchedulePage.clickFirstUnassignedJob()


        SchedulePage.verifyCustomerInformation(jobInformation)
    })

    it('Add default Job - Customer with 1 equipment - Add an Equipment - Add attachments - Assert: customer details, service location - assert info after creation', () => {

        SchedulePage.gotoAddNewJob()
        let jobInformation = {
            selectCustomer: 'Customer Eqp-f1439',
            jobDescription: `Description-${uuidv4().substring(0, 5)}`,
            jobStatus: 'Not Started',
            notes: `Note-${uuidv4().substring(0, 5)}`,
            serviceType: 'Maintenance',
            jobPriority: 'Low',
            jobColor: 'Maintenance',
            partsServiceEquipment: [{
                name: 'Cement Nail GUN (Equipment)',
                qty: '1'
            }],
            existingCustomerEquipment: ['Cement Nail GUN (Equipment)'],
            attachments: [
                {
                    url: 'https://cloudinary.hbs.edu/hbsit/image/upload/s--Fm3oHP0m--/f_auto,c_fill,h_375,w_750,/v20200101/79015AB87FD6D3284472876E1ACC3428.jpg',
                    addAFile: 'doc.doc'
                }
            ]
        }
        SchedulePage.addNewJob(jobInformation)

        SchedulePage.saveJob()


        SchedulePage.gotoJobsQueue()
        SchedulePage.clickFirstUnassignedJob()


        SchedulePage.verifyCustomerInformation(jobInformation)
    })

    it('Add default Job - Customer with 2 equipment - Equipment - Add attachments - Assert: customer details, service location - assert info after creation', () => {

        SchedulePage.gotoAddNewJob()
        let jobInformation = {
            selectCustomer: 'Customer Eqp-f1439',
            jobDescription: `Description-${uuidv4().substring(0, 5)}`,
            jobStatus: 'Not Started',
            notes: `Note-${uuidv4().substring(0, 5)}`,
            serviceType: 'Maintenance',
            jobPriority: 'Low',
            jobColor: 'Maintenance',
            partsServiceEquipment: [{
                name: 'Cement Nail GUN (Equipment)',
                qty: '1'
            }],
            existingCustomerEquipment: ['Cement Nail GUN (Equipment)', 'Gaming Chair'],
            attachments: [
                {
                    url: 'https://cloudinary.hbs.edu/hbsit/image/upload/s--Fm3oHP0m--/f_auto,c_fill,h_375,w_750,/v20200101/79015AB87FD6D3284472876E1ACC3428.jpg',
                    addAFile: 'doc.doc'
                }
            ]
        }
        SchedulePage.addNewJob(jobInformation)

        SchedulePage.saveJob()


        SchedulePage.gotoJobsQueue()
        SchedulePage.clickFirstUnassignedJob()


        SchedulePage.verifyCustomerInformation(jobInformation)
    })

    it('Add default Job - Customer with 1 equipment - Add Inventory, Service, Assembly, Equipment  -Add attachments - Assert: customer details, service location - assert info after creation', () => {

        SchedulePage.gotoAddNewJob()
        let jobInformation = {
            selectCustomer: 'Customer Eqp-f1439',
            jobDescription: `Description-${uuidv4().substring(0, 5)}`,
            jobStatus: 'Started',
            notes: `Note-${uuidv4().substring(0, 5)}`,
            serviceType: 'Maintenance',
            jobPriority: 'Low',
            jobColor: 'Maintenance',
            partsServiceEquipment: [
                {
                    name: 'Add Inventory - Taxable no SN',
                    qty: '1'
                },
                {
                    name: '0e835-Service',
                    qty: '1'
                },
                {
                    name: 'Assembly-',
                    qty: '1'
                },
                {
                    name: 'Cement Nail GUN (Equipment)',
                    qty: '1'
                },
            ],
            existingCustomerEquipment: ['Cement Nail GUN (Equipment)'],
            attachments: [
                {
                    url: 'https://cloudinary.hbs.edu/hbsit/image/upload/s--Fm3oHP0m--/f_auto,c_fill,h_375,w_750,/v20200101/79015AB87FD6D3284472876E1ACC3428.jpg',
                    addAFile: 'doc.doc'
                }
            ],

        }
        SchedulePage.addNewJob(jobInformation)

        SchedulePage.saveJob()


        SchedulePage.gotoJobsQueue()
        SchedulePage.clickFirstUnassignedJob()


        SchedulePage.verifyCustomerInformation(jobInformation)
    })

    it('Add default Job - Customer with 1 equipment - Add an Equipment - Add 1 Employee -Add attachments - Assert: customer details, service location - assert info after creation', () => {

        SchedulePage.gotoAddNewJob()
        let jobInformation = {
            selectCustomer: 'Eqp-f1439',
            jobDescription: `Description-${uuidv4().substring(0, 5)}`,
            jobStatus: 'Started',
            notes: `Note-${uuidv4().substring(0, 5)}`,
            serviceType: 'Maintenance',
            jobPriority: 'Low',
            jobColor: 'Maintenance',
            partsServiceEquipment: [
                {
                    name: 'Add Inventory - Taxable no SN',
                    qty: '1'
                },
                {
                    name: '0e835-Service',
                    qty: '1'
                },
                {
                    name: 'Assembly-',
                    qty: '1'
                },
                {
                    name: 'Cement Nail GUN (Equipment)',
                    qty: '1'
                },
            ],
            existingCustomerEquipment: ['Cement Nail GUN (Equipment)'],
            attachments: [
                {
                    url: 'https://cloudinary.hbs.edu/hbsit/image/upload/s--Fm3oHP0m--/f_auto,c_fill,h_375,w_750,/v20200101/79015AB87FD6D3284472876E1ACC3428.jpg',
                    addAFile: 'doc.doc'
                }
            ],
            employee: [
                {
                    addCrew: 'Employee One',
                    duration: {
                        h: '8',
                        m: '0'
                    }
                },
            ]
        }
        SchedulePage.addNewJob(jobInformation)

        SchedulePage.saveJob()


        SchedulePage.gotoJobsQueue()
        SchedulePage.gotoAssignedJobsTab()
        SchedulePage.searchAssignedJobsTab(jobInformation.jobDescription)


        SchedulePage.verifyCustomerInformation(jobInformation)
    })

    it('Add default Job - Customer with 1 equipment - Add an Equipment - Add 1 Employee -Add attachments - Add a Task - Assert: customer details, service location - assert info after creation', () => {

        SchedulePage.gotoAddNewJob()
        let jobInformation = {
            selectCustomer: 'Eqp-f1439',
            jobDescription: `Description-${uuidv4().substring(0, 5)}`,
            jobStatus: 'Started',
            notes: `Note-${uuidv4().substring(0, 5)}`,
            serviceType: 'Maintenance',
            jobPriority: 'Low',
            jobColor: 'Maintenance',
            partsServiceEquipment: [
                {
                    name: 'Add Inventory - Taxable no SN',
                    qty: '1'
                },
                {
                    name: '0e835-Service',
                    qty: '1'
                },
                {
                    name: 'Assembly-',
                    qty: '1'
                },
                {
                    name: 'Cement Nail GUN (Equipment)',
                    qty: '1'
                },
            ],
            existingCustomerEquipment: ['Cement Nail GUN (Equipment)'],
            attachments: [
                {
                    url: 'https://cloudinary.hbs.edu/hbsit/image/upload/s--Fm3oHP0m--/f_auto,c_fill,h_375,w_750,/v20200101/79015AB87FD6D3284472876E1ACC3428.jpg',
                    addAFile: 'doc.doc'
                }
            ],
            employee: [
                {
                    addCrew: 'Employee One',
                    duration: {
                        h: '8',
                        m: '0'
                    }
                },
            ],
            tasks: [
                {
                    taskName: `Task - ${uuidv4().substring(0, 5)}`,
                    serviceType: 'Maintenance'
                }
            ]
        }
        SchedulePage.addNewJob(jobInformation)

        SchedulePage.saveJob()


        SchedulePage.gotoJobsQueue()
        SchedulePage.gotoAssignedJobsTab()
        SchedulePage.searchAssignedJobsTab(jobInformation.jobDescription)


        SchedulePage.verifyCustomerInformation(jobInformation)
    })

    it('Add default Job - Customer with 1 equipment - Add an Equipment - Add 1 Employee -Add attachments - Add a Task - Set Job as on hold - Assert: customer details, service location - assert info after creation', () => {

        SchedulePage.gotoAddNewJob()
        let jobInformation = {
            selectCustomer: 'Eqp-f1439',
            jobDescription: `Description-${uuidv4().substring(0, 5)}`,
            jobStatus: 'Started',
            notes: `Note-${uuidv4().substring(0, 5)}`,
            serviceType: 'Maintenance',
            jobPriority: 'Low',
            jobColor: 'Maintenance',
            partsServiceEquipment: [
                {
                    name: 'Add Inventory - Taxable no SN',
                    qty: '1'
                },
                {
                    name: '0e835-Service',
                    qty: '1'
                },
                {
                    name: 'Assembly-',
                    qty: '1'
                },
                {
                    name: 'Cement Nail GUN (Equipment)',
                    qty: '1'
                },
            ],
            existingCustomerEquipment: ['Cement Nail GUN (Equipment)'],
            attachments: [
                {
                    url: 'https://cloudinary.hbs.edu/hbsit/image/upload/s--Fm3oHP0m--/f_auto,c_fill,h_375,w_750,/v20200101/79015AB87FD6D3284472876E1ACC3428.jpg',
                    addAFile: 'doc.doc'
                }
            ],
            employee: [
                {
                    addCrew: 'Employee One',
                    duration: {
                        h: '8',
                        m: '0'
                    }
                },
            ],
            tasks: [
                {
                    taskName: `Task - ${uuidv4().substring(0, 5)}`,
                    serviceType: 'Maintenance'
                }
            ]
        }
        SchedulePage.addNewJob(jobInformation)

        SchedulePage.saveJob()


        SchedulePage.gotoJobsQueue()
        SchedulePage.gotoAssignedJobsTab()
        SchedulePage.searchAssignedJobsTab(jobInformation.jobDescription)

        let jobInformationEdit = {
            jobStatus: 'On hold'
        }
        SchedulePage.addNewJob(jobInformationEdit)
        SchedulePage.saveJob()

        SchedulePage.gotoOnHoldJobsTab()
        SchedulePage.searchOnHoldJobsTab(jobInformation.jobDescription)

        SchedulePage.verifyCustomerInformation({ ...jobInformation, ...jobInformationEdit })
    })

    it('Add default Job - Put on hold then resume - assert info', () => {

        SchedulePage.gotoAddNewJob()
        let jobInformation = {
            selectCustomer: 'Eqp-f1439',
            jobDescription: `Description-${uuidv4().substring(0, 5)}`,
            jobStatus: 'Started',
            notes: `Note-${uuidv4().substring(0, 5)}`,
            serviceType: 'Maintenance',
            jobPriority: 'Low',
            jobColor: 'Maintenance',
            partsServiceEquipment: [
                {
                    name: 'Add Inventory - Taxable no SN',
                    qty: '1'
                },
                {
                    name: '0e835-Service',
                    qty: '1'
                },
                {
                    name: 'Assembly-',
                    qty: '1'
                },
                {
                    name: 'Cement Nail GUN (Equipment)',
                    qty: '1'
                },
            ],
            existingCustomerEquipment: ['Cement Nail GUN (Equipment)'],
            attachments: [
                {
                    url: 'https://cloudinary.hbs.edu/hbsit/image/upload/s--Fm3oHP0m--/f_auto,c_fill,h_375,w_750,/v20200101/79015AB87FD6D3284472876E1ACC3428.jpg',
                    addAFile: 'doc.doc'
                }
            ],
            employee: [
                {
                    addCrew: 'Employee One',
                    duration: {
                        h: '8',
                        m: '0'
                    }
                },
            ],
            tasks: [
                {
                    taskName: `Task - ${uuidv4().substring(0, 5)}`,
                    serviceType: 'Maintenance'
                }
            ]
        }
        SchedulePage.addNewJob(jobInformation)

        SchedulePage.saveJob()


        SchedulePage.gotoJobsQueue()
        SchedulePage.gotoAssignedJobsTab()
        SchedulePage.searchAssignedJobsTab(jobInformation.jobDescription)

        let jobInformationEdit = {
            jobStatus: 'On hold'
        }
        SchedulePage.addNewJob(jobInformationEdit)
        SchedulePage.saveJob()

        SchedulePage.gotoOnHoldJobsTab()
        SchedulePage.searchOnHoldJobsTab(jobInformation.jobDescription)

        SchedulePage.verifyCustomerInformation({ ...jobInformation, ...jobInformationEdit })

        SchedulePage.saveJob()

        SchedulePage.gotoOnHoldJobsTab()
        SchedulePage.searchOnHoldJobsTab(jobInformation.jobDescription)

        jobInformationEdit = {
            jobStatus: 'Started'
        }

        SchedulePage.addNewJob(jobInformationEdit)
        SchedulePage.saveJob()

        SchedulePage.gotoJobsQueue()
        SchedulePage.gotoAssignedJobsTab()
        SchedulePage.searchAssignedJobsTab(jobInformation.jobDescription)

        SchedulePage.verifyCustomerInformation({ ...jobInformation, ...jobInformationEdit })

    })

    it.only('Add default Job - Start Job - Mark as completed- assert info', () => {

        SchedulePage.gotoAddNewJob()
        let jobInformation = {
            selectCustomer: 'Eqp-f1439',
            jobDescription: `Description-${uuidv4().substring(0, 5)}`,
            jobStatus: 'Started',
            notes: `Note-${uuidv4().substring(0, 5)}`,
            serviceType: 'Maintenance',
            jobPriority: 'Low',
            jobColor: 'Maintenance',
            partsServiceEquipment: [
                {
                    name: 'Add Inventory - Taxable no SN',
                    qty: '1'
                },
                {
                    name: '0e835-Service',
                    qty: '1'
                },
                {
                    name: 'Assembly-',
                    qty: '1'
                },
                {
                    name: 'Cement Nail GUN (Equipment)',
                    qty: '1'
                },
            ],
            existingCustomerEquipment: ['Cement Nail GUN (Equipment)'],
            attachments: [
                {
                    url: 'https://cloudinary.hbs.edu/hbsit/image/upload/s--Fm3oHP0m--/f_auto,c_fill,h_375,w_750,/v20200101/79015AB87FD6D3284472876E1ACC3428.jpg',
                    addAFile: 'doc.doc'
                }
            ],
            employee: [
                {
                    addCrew: 'Employee One',
                    duration: {
                        h: '8',
                        m: '0'
                    }
                },
            ],
            tasks: [
                {
                    taskName: `Task - ${uuidv4().substring(0, 5)}`,
                    serviceType: 'Maintenance'
                }
            ]
        }
        SchedulePage.addNewJob(jobInformation)

        SchedulePage.saveJob()


        SchedulePage.gotoJobsQueue()
        SchedulePage.gotoAssignedJobsTab()
        SchedulePage.searchAssignedJobsTab(jobInformation.jobDescription)

        let jobInformationEdit = {
            jobStatus: 'Complete'
        }
        SchedulePage.addNewJob(jobInformationEdit)
        SchedulePage.saveJob()

        SchedulePage.gotoCompletedJobsTab()
        SchedulePage.searchCompletedJobsTab(jobInformation.jobDescription)
        
        SchedulePage.verifyCustomerInformation({ ...jobInformation, ...jobInformationEdit })

        SchedulePage.saveJob()

        

    })



})