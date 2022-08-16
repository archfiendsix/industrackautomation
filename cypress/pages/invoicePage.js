class InvoicePage {

    /*
cy.get('button[data-target="#modalAddNewCustomer"]').click()
    */
    elements = {
        statusLabel: () => cy.get('.topheader span.status'),
    }

    checkInvoiceStatus = () => {
        this.elements.statusLabel().contains('Unpaid')
    }
}

module.exports = new InvoicePage();