class InvoiceOverviewPage {

    elements = {
        statusLabel: () => cy.get('.topheader span.status'),
    }

    checkInvoiceStatus = (statusToCheck) => {
        this.elements.statusLabel().contains(statusToCheck.toString())
    }
}

module.exports = new InvoiceOverviewPage();