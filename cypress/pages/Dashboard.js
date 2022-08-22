class Dashboard {

    /*
cy.get('button[data-target="#modalAddNewCustomer"]').click()
    */
    elements = {
        industrackBrand: ()=> cy.get('.navbar-header a.navbar-brand'),
        customerTab: () => cy.get('.navbar-nav > :nth-child(2) > a[href="/crmTab"]'),
        addCustomerButton: () => cy.get('button[data-target="#modalAddNewCustomer"]'),
        settingsButton: () => cy.get('a[href="/settingsTab"]'),
        estimatesTab: () => cy.get('.nav.navbar-nav a[href="/estimatesTab"]'),
        timesheetTab: () => cy.get('.nav.navbar-nav a[href="/timesheetTab"]'),
        notification: {
            icon: () => cy.get('a[title="Reminders"]'),
            card: () => cy.get('ul.dropdown-menu.dropdown-reminders'),
        },
        user: {
            avatarButton: ()=> cy.get('.nav.navbar-top-links.navbar-right li:last-child() a'),
            profileEmail: ()=> cy.get('.nav.navbar-top-links.navbar-right li:last-child() .userinfobox a[title="Profile"]'),
            logOut: ()=> cy.get('.nav.navbar-top-links.navbar-right li:last-child() .userinfobox a[title="LogOut"]'),
        }
        

    }

    clickCustomerTab = () => {
        this.elements.customerTab().click()
    }

    clickAddCustomerButton = () => {
        this.elements.addCustomerButton().click()
    }

    clickSettings = () => {
        this.elements.settingsButton().click()
    }

    clickEstimatesTab = () => {
        this.elements.estimatesTab().click()
    }
    clickTimesheetTab = () => {
        this.elements.timesheetTab().click()
    }

    preventNotificationCard = () => {
        cy.wait(4000)
        cy.get("body").then($body => {
            
            if (this.elements.notification.card().first().length > 0) {
                this.elements.notification.card().then($el => {
                    if ($el.is(':visible')) {
                        this.elements.notification.icon().click({ force: true })
                    } else {
                        cy.log('Notification card not present')
                    }
                });
            } else {
                assert.isOk('everything', 'everything is OK');
            }
        });
    }
}

module.exports = new Dashboard();