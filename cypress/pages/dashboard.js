class dashboard {

    /*
cy.get('button[data-target="#modalAddNewCustomer"]').click()
    */
    elements = {
        customerTab: () => cy.get('.navbar-nav > :nth-child(2) > a[href="/crmTab"]'),
        addCustomerButton: () => cy.get('button[data-target="#modalAddNewCustomer"]'),
        settingsButton: () => cy.get('a[href="/settingsTab"]'),
        estimatesTab: () => cy.get('.nav.navbar-nav a[href="/estimatesTab"]')
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
}

module.exports = new dashboard();