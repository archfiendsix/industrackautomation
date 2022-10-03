class InvoiceOverviewPage {

    elements = {
        statusLabel: () => cy.get('.topheader span.status'),
    }

    checkInvoiceStatus = (statusToCheck) => {
        this.elements.statusLabel().contains(statusToCheck)
    }
}

module.exports = new InvoiceOverviewPage();