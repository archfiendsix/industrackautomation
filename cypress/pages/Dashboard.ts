/// <reference types="cypress" />

class Dashboard {

    elements = {
        industrackBrand: () => cy.get('.navbar-header a.navbar-brand'),
        customerTab: () => cy.get('.navbar-nav > :nth-child(2) > a[href="/crmTab"]'),
        addCustomerButton: () => cy.get('button[data-target="#modalAddNewCustomer"]'),
        settingsButton: () => cy.get('a[href="/settingsTab"]'),
        estimatesTab: () => cy.get('.nav.navbar-nav a[href="/estimatesTab"]'),
        timesheetTab: () => cy.get('.nav.navbar-nav a[href="/timesheetTab"]'),
        purchaseOrderTab: () => cy.get('.nav.navbar-nav a[href="/purchaseOrderTab"]'),
        companySettings: () => cy.get('ul#side-menu li a').contains('Company Settings'),
        taxtAndTerms: () => cy.get('ul#side-menu li ul.nav-second-level li a').contains('Tax & Terms'),
        notification: {
            icon: () => cy.get('a[title="Reminders"]'),
            card: () => cy.get('ul.dropdown-menu.dropdown-reminders'),
        },
        user: {
            avatarButton: () => cy.get('.nav.navbar-top-links.navbar-right li:last-child() a'),
            profileEmail: () => cy.get('.nav.navbar-top-links.navbar-right li:last-child() .userinfobox a[title="Profile"]'),
            logOut: () => cy.get('.nav.navbar-top-links.navbar-right li:last-child() .userinfobox a[title="LogOut"]'),
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
    clickPurchaseOrderTab = () => {
        this.elements.purchaseOrderTab().click()
    }


    gotoTaxAndTermsPage = () => {
        this.clickSettings()
        this.elements.companySettings().click()
        this.elements.taxtAndTerms().click()

    }


    preventNotificationCard = () => {
        cy.wait(4000)
        cy.get("body").then($body => {
            // @ts-ignore
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