class ReportsPage {

    
    elements = {
        revenue: {
            editGoals: ()=> cy.get('#dashboard-row-0 .w_Ti:first-child() .ibox-tools a').contains('Edit Goals'),
            chevron: ()=> cy.get('#dashboard-row-0 .w_Ti:first-child() .ibox-tools a:nth-child(2)'),
            closeButton: ()=> cy.get('#dashboard-row-0 .w_Ti:first-child() .ibox-tools a:last-child()').parent(),
        },
        invoices: {
            ytd: ()=> cy.get('#dashboard-row-0 .w_Ti:nth-child(2) .ibox-tools a').contains('YTD'),
            chevron: ()=> cy.get('#dashboard-row-0 .w_Ti:nth-child(2) .ibox-tools a:nth-child(2)'),
            closeButton: ()=> cy.get('#dashboard-row-0 .w_Ti:nth-child(2) .ibox-tools a:last-child()').parent(),
        },
        timeSheets: {
            select: ()=> cy.get('#dashboard-row-1 .w_Ti:nth-child(1) .ibox-tools select'),
            chevron: ()=> cy.get('#dashboard-row-1 .w_Ti:nth-child(1) .ibox-tools a:nth-child(2)'),
            closeButton: ()=> cy.get('#dashboard-row-1 .w_Ti:nth-child(1) .ibox-tools a:last-child()').parent(),
        },
        newCustomers: {
            select: ()=> cy.get('#dashboard-row-1 .w_Ti:nth-child(2) .ibox-tools select'),
            chevron: ()=> cy.get('#dashboard-row-1 .w_Ti:nth-child(2) .ibox-tools a:nth-child(2)'),
            closeButton: ()=> cy.get('#dashboard-row-1 .w_Ti:nth-child(2) .ibox-tools a:last-child()').parent(),
        },
        jobDashboard: {
            select: ()=> cy.get('#dashboard-row-2 .w_Ti:nth-child(1) .ibox-tools select'),
            chevron: ()=> cy.get('#dashboard-row-2 .w_Ti:nth-child(1) .ibox-tools a:nth-child(2)'),
            closeButton: ()=> cy.get('#dashboard-row-2 .w_Ti:nth-child(1) .ibox-tools a:last-child()').parent(),
        },
        estimatesConvertedToJobs: {
            select: ()=> cy.get('#dashboard-row-2 .w_Ti:nth-child(2) .ibox-tools select'),
            chevron: ()=> cy.get('#dashboard-row-2 .w_Ti:nth-child(2) .ibox-tools a:nth-child(2)'),
            closeButton: ()=> cy.get('#dashboard-row-2 .w_Ti:nth-child(2) .ibox-tools a:last-child()').parent(),
        },
        topFiveIdleVihicles: {
            select: ()=> cy.get('#dashboard-row-3 .w_Ti:nth-child(1) .ibox-tools select'),
            chevron: ()=> cy.get('#dashboard-row-3 .w_Ti:nth-child(1) .ibox-tools a:nth-child(2)'),
            closeButton: ()=> cy.get('#dashboard-row-3 .w_Ti:nth-child(1) .ibox-tools a:last-child()').parent(),
        },
        customerActivity: {
            select: ()=> cy.get('#dashboard-row-3 .w_Ti:nth-child(2) .ibox-tools select'),
            chevron: ()=> cy.get('#dashboard-row-3 .w_Ti:nth-child(2) .ibox-tools a:nth-child(2)'),
            closeButton: ()=> cy.get('#dashboard-row-3 .w_Ti:nth-child(2) .ibox-tools a:last-child()').parent(),
        },
        topFiveSpeedingVehicles: {
            select: ()=> cy.get('#dashboard-row-4 .w_Ti:nth-child(1) .ibox-tools select'),
            chevron: ()=> cy.get('#dashboard-row-4 .w_Ti:nth-child(1) .ibox-tools a:nth-child(2)'),
            closeButton: ()=> cy.get('#dashboard-row-4 .w_Ti:nth-child(1) .ibox-tools a:last-child()').parent(),
        },
        usernameTextBox: () => cy.get('#mat-input-0'),
        
    }

    loginAdmin = () => {
        
    }
}

module.exports = new ReportsPage();