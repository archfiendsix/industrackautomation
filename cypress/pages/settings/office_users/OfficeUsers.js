class OfficeUsers {

    // cy.get('#mat-input-0').type('andreiv@industrack.com')
    // cy.get('#mat-input-1').type('admin')
    // cy.get('.mat-focus-indicator').click()
    elements = {
        button: () => cy.get('input[formcontrolname="customerName"]'),

    }

    loginAdmin = () => {

    }
}

module.exports = new OfficeUsers();