class MobileAppPage {
    elements = {
        button: () => cy.get('input[formcontrolname="customerName"]'),

    }

    loginAdmin = () => {

    }
}

module.exports = new MobileAppPage();