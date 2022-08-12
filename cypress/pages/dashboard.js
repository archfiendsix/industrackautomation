class dashboard {

    /*
cy.get('button[data-target="#modalAddNewCustomer"]').click()
    */
    elements = {
        customerTab: () => cy.get('.navbar-nav > :nth-child(2) > a[href="/crmTab"]'),
        addCustomerButton: () => cy.get('button[data-target="#modalAddNewCustomer"]'),
        settingsButton: () => cy.get('a[href="/settingsTab"]'),
        estimatesTab: () => cy.get('.nav.navbar-nav a[href="/estimatesTab"]'),
        notificationCard: () => cy.get('ul.dropdown-menu.dropdown-reminders'),
        notificationReminderIcon: () => cy.get('a[title="Reminders"]')

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

    preventNotificationCard = () => {
        cy.wait(4000)
        cy.get("body").then($body => {
            if (this.elements.notificationCard().length > 0) {
                this.elements.notificationCard().then($el => {
                    if ($el.is(':visible')) {
                        this.elements.notificationReminderIcon().click()
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

module.exports = new dashboard();