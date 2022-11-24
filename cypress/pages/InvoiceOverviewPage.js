class InvoiceOverviewPage {
  elements = {
    statusLabel: () => cy.get(".topheader span"), //changed from ".topheader span.status" because this element does not have .status class on preproduction environment
  };

  checkInvoiceStatus = (statusToCheck) => {
    cy.get(".preloader").should("not.be.visible");
    cy.get("app-invoices-overview").should("be.visible");
    this.elements.statusLabel().contains(statusToCheck.toString());
  };
}

module.exports = new InvoiceOverviewPage();
