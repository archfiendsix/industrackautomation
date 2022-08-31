class InvoiceOverviewPage {

    elements = {
        statusLabel: () => cy.get('.topheader span.status'),
    }

    checkInvoiceStatus = () => {
        this.elements.statusLabel().contains('Unpaid')
    }
}

module.exports = new InvoiceOverviewPage();