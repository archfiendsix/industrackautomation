class EstimatesPage {
  elements = {
    addNewEstimateButton: () =>
      cy.get(".search-form button.btn-primary.m-r-sm"),

    searchInput: () => cy.get("input.customersearchinput"),
    searchButton: () => cy.get('.ibox button[type="submit"]'),
    searchItem: () =>
      cy.get(".ibox-content .customerList ul.list-group").first(),
    proceedButton: () => cy.get("button.btn.btn-primary").contains("Proceed"),
    descriptionTextArea: () =>
      cy.get('estimate-edit input[name="estimateDescription"]'),
    partsSearch: () =>
      cy.get('.editable input[aria-label="Parts & services search"]'),
    actionsDropdown: () => cy.get("estimate-edit button").contains("Actions"),
    dropDownItems: () => cy.get("li a"),
    changeCustomerButton: () => cy.get("button#changeCustomerBtn"),
    tableRowEllipse: () => cy.get(".dataTable tbody tr td:last-child() button"),
    tableRowEllipseItem: () => cy.get("button+.dropdown-menu li a"),
    statusLabel: () => cy.get(".form-inline span.status"),
    confirmYesButton: () => cy.get(".btn.btn-primary").contains("Yes"),
    addNewJobModalTitle: () =>
      cy.get("app-job-edit-form h4.modal-title").contains("Add New Job"),
    estimatePreviewModalTitle: () => cy.get("app-report-preview-dialog h4"),
    savedNotification: () => cy.get(".sn-content.ng-star-inserted"),
    selectCustomerTextBox: () => cy.get('.customerselect input[name="search"]'),
    customerSearchItems: () => cy.get(".ibox-content .customerList b"),
    billToCustomerName: () =>
      cy.get("._header-preview.topsummary .customerName a"),
    upDownButtons: {
      moveUp: () => cy.get('table i[title="Move Up"]'),
      moveDown: () => cy.get('table i[title="Move Down"]'),
    },
    previewiFrame: {
      custName: () =>
        cy
          .get("iframe#contentHolder")
          .its("0.contentDocument.body")
          .then(cy.wrap)
          .find(".customerInfo li")
          .should("have.class", "custName")
          .first(),
      note: () =>
        cy
          .get(".iframe #contentHolder")
          .its("0.contentDocument.body")
          .should("not.be.empty")
          .then(cy.wrap)
          .find(".total.row h3+p"),
      description: () =>
        cy
          .get(".iframe #contentHolder")
          .its("0.contentDocument.body")
          .should("not.be.empty")
          .then(cy.wrap)
          .find(".comp-header .col-lg-4:last-child() span"),
    },
    addDiscountRowElement: () =>
      cy.get('a[data-target="#modalAddDiscountPartLine"]'),

    addInvoiceDiscountButton: () =>
      cy.get('a[data-target="#modalAddDiscount"]'),
    tableRows: () => cy.get(".dataTable tbody tr.gradeA"),
    rowTotal: () => cy.get(".dataTable tbody tr td:nth-last-child(2) span"),
    invoiceSubTotal: () =>
      cy.get(".table.invoice-total tbody tr:first-child() td:nth-child(2)"),
    invoiceDiscount: () =>
      cy.get(".table.invoice-total tr:nth-child(2) td:nth-child(2) a"),
    invoiceTaxPercent: () =>
      cy.get(
        ".table.invoice-total tr:nth-child(3) td:nth-child(1) span:nth-child(2)"
      ),
    invoiceTax: () =>
      cy.get(".table.invoice-total tr:nth-child(3) td:nth-child(2)"),
    invoiceTotal: () => cy.get(".table.invoice-total tr.total td:nth-child(2)"),
    invoiceTotals: () =>
      cy.get(
        ".table.invoice-total tbody tr:first-child() td:nth-child(2), .table.invoice-total tr.total td:nth-child(2)"
      ),
    invoiceTaxButton: () => cy.get("app-tax-selector input"),
    createNewTaxButton: () => cy.get("button").contains("Create new"),
    setTaxModal: {
      taxNameTextbox: () => cy.get("app-tax-selector-dialog input").eq(0),
      taxValueTextbox: () => cy.get("app-tax-selector-dialog input").eq(1),
      saveButton: () =>
        cy.get("app-tax-selector-dialog button").contains("Save"),
    },
    sendToEmailModal: {
      recipientChipRemoveIcon: () => cy.get("mat-chip-list .mat-chip-remove "),
      recipientsInputBox: () => cy.get("#mat-chip-list-input-0"),
      sendEmailButton: () =>
        cy.get(
          "app-estimate-send-mail-dialog .mat-dialog-actions .btn.btn-info"
        ),
    },
    setDiscountValueInput: () =>
      cy.get('input[name="setDiscountItem.discountValue"]'),
    setDiscountModalSaveButton: () =>
      cy.get("#modalAddDiscountPartLine .btn.btn-primary"),
    setDiscountModalDropdown: () =>
      cy.get(
        '#modalAddDiscountPartLine select[name="setDiscountItemdiscountKind"]'
      ),
    setInvoiceDiscountValueInput: () => cy.get('input[name="discountValue"]'),
    setInvoiceDiscountModalDropdown: () =>
      cy.get('select[name="discountKind"]'),
    setInvoiceDiscountModalSaveButton: () =>
      cy.get("#modalAddDiscount .btn.btn-primary"),
    notesForCustomerField: () => cy.get('textarea[name="notes"]'),
    changeCustomer: {
      selectCustomerTextbox: () => cy.get("#changeCustomer input"),
      customerListItems: () =>
        cy.get("#changeCustomer .list-group-item").find("b"),
      proceedButton: () => cy.get("#changeCustomer button").contains("Proceed"),
    },

    addingNewInvoiceModal: {
      billToButton: () => cy.get(".billTo button"),
    },
  };

  // changeCustomer(customerName) {
  //   cy.intercept("**/api/**").as("api");
  //   cy.intercept('https://onetrackwebapiprod.azurewebsites.net/api/AddressBooks/GetServiceLocations/**').as('GetServiceLocations')
  //   // this.elements.actionsDropdown().click();
  //   // this.elements.dropDownItems().contains("Edit").click();
  //   this.elements.changeCustomerButton().click();
  //   this.elements.selectCustomerTextBox().type(customerName);
  //   this.elements.searchButton().click();
  //   cy.wait("@api");
  //   cy.wait("@GetServiceLocations");
  //   this.elements.customerSearchItems().contains(customerName).click();
  //   this.elements.proceedButton().click();
  // }

  changeCustomer = (customerName) => {
    this.elements.addingNewInvoiceModal
      .billToButton()
      .click()
      .then(() => {
        cy.get(".mat-menu-content button").contains("Change Customer").click();
      });
    cy.get("#changeCustomer").should("be.visible").and("have.class", "in"); //Assertion before action
    cy.contains("#changeCustomer", "Select Customer"); //Assertion before action
    cy.wait(2000);
    // cy.intercept(
    //   "https://onetrackwebapiprod.azurewebsites.net/api/AddressBooks/AddressBookLiveSearchExt"
    // ).as("AddressBookLiveSearchExt");
    cy.get("#changeCustomer").should("have.class", "in");
    this.elements.changeCustomer
      .selectCustomerTextbox()
      .last()
      .type(`${customerName}`)
      .then(() => {
        cy.wait(2000);
        this.elements.changeCustomer
          .customerListItems()
          .contains(customerName)
          .first()
          .click();
      });

    // cy.wait(4000)
    // this.elements.changeCustomer.customerListItems().contains(customerName).last().click()
    // cy.wait("@AddressBookLiveSearchExt");
    this.elements.changeCustomer.proceedButton().last().click();
  };

  clickAddNew = () => {
    // cy.intercept("**/api/**").as("api");
    cy.wait(300);

    cy.get(".dropdown-menu.dropdown-reminders").invoke(
      "css",
      "display",
      "none"
    );
    cy.get("app-estimates-list")
      .should("exist")
      .then(($el) => {
        cy.wrap($el).find("my-dialog").should("exist");
      });
    this.elements.addNewEstimateButton().should("be.visible");

    // cy.wait("@api");
    this.elements.addNewEstimateButton().click({ force: true });
  };

  typeSearchInput(input) {
    this.elements.searchInput().type(input);
  }

  clickSearch() {
    this.elements.searchButton().click({ force: true });
  }
  selectCustomer(customer_name) {
    cy.contains("estimate-edit", "Adding New Estimation");
    this.typeSearchInput(customer_name);
    this.clickSearch();
    cy.wait(3000);
    cy.contains(".customerlist", customer_name);
    // cy.wait(1000); //Added wait to wait for customer list to finish loading
    this.elements.searchItem().contains(customer_name).click();
    this.elements.proceedButton().click();
  }

  addEstimateDescription = (descriptionText) => {
    cy.get(".preloader").should("not.be.visible");
    this.elements
      .descriptionTextArea()
      .first()
      .scrollIntoView()
      .clear()
      .type(descriptionText);
  };

  inventorySelect(searchItem, itemInfo = { profit: 3 }) {
    cy.intercept("GET", "**InventoryViewLiveSearch**").as(
      "InventoryViewLiveSearch"
    );
    this.elements
      .partsSearch()
      .last()
      .then(($el) => {
        cy.wrap($el).should("be.visible");

        cy.wrap($el).type(`${searchItem.trim()}`);
        cy.wait("@InventoryViewLiveSearch");
        cy.wrap($el).click();
        cy.wait(500);
        cy.wrap($el).type("{downArrow}");
        cy.wrap($el)
          .type("{enter}")
          .then(() => {
            cy.wrap($el)
              .invoke("val")
              .then((val) => {
                cy.log(
                  `[Item search ${val} added to items list](http://example.com)`
                );
              });
          });

        // .invoke("val")
        // .then(($el) => {
        //   // if (val.length > 0) {
        //     cy.wait("@InventoryViewLiveSearch");
        //
        //     // cy.get(".newcardsearchresult mat-option").contains(searchItem.trim()).click();
        //   // }
        // });
      });

    // this.elements.partsSearch().last().type("{downArrow}").type("{enter}");

    // this.
    cy.wait(500);
    this.addDiscountInRow(0, 15, "%", 1);
    cy.wait(500);
    this.addDiscountInRow(0, 15, "$", 1);
    cy.wait(500);
    cy.get(".serviceparts table tr:nth-last-child(3) td input")
      .eq(3)
      .last()
      .clear()
      .type(itemInfo.profit);
  }

  saveEstimate() {
    // cy.intercept(
    //   "https://onetrackwebapiprod.azurewebsites.net/api/estimates/CreateEstimate"
    // ).as("CreateEstimate");

    this.elements.actionsDropdown().first().click({ force: true });
    // cy.intercept("**GetEstimate**").as("GetEstimate");
    this.elements.dropDownItems().should("be.visible");
    this.elements.dropDownItems().contains("Save").click();
    cy.wait(1000);
    // cy.wait("@CreateEstimate");
  }

  saveAndCloseEstimate() {
    this.elements.actionsDropdown().click();
    this.elements.dropDownItems().contains("Save and Close").click();
    // this.elements.tableRowEllipse().should('be.visible')

    // this.elements.dropDownSave().contains('Save and Close').click()
  }

  previewEstimate = () => {
    cy.intercept("https://webprintprod.industrack.com/preview/estimates/**").as(
      "estimates"
    );
    // cy.wait('@GetNumberOfReminders')

    this.elements.actionsDropdown().first().click();

    this.elements.dropDownItems().contains("Preview").click();
    cy.wait("@estimates");

    cy.get("app-estimates-overview info-box > div").should("have.length.lt", 1);
  };

  sendToEmail() {
    this.elements.actionsDropdown().click();
    this.elements.dropDownItems().contains("Send to e-mail").click();
    this.elements.sendToEmailModal.recipientChipRemoveIcon().click();
    this.elements.sendToEmailModal
      .recipientsInputBox()
      .type("ace.simon.g@gmail.com")
      .type("{enter}");
    this.elements.sendToEmailModal.sendEmailButton().click();
  }

  convertToInvoice() {
    // cy.intercept(
    //   "**/api/**"500
    // ).as("GetEstimate");
    this.elements.actionsDropdown().click();
    this.elements.dropDownItems().contains("Convert to Invoice").click();
    // cy.wait("@GetEstimate");
  }

  convertToJob() {
    cy.intercept(
      "https://onetrackwebapiprod.azurewebsites.net/api/estimates/GetEstimate/**"
    ).as("GetEstimate");
    this.elements.actionsDropdown().click();
    this.elements.dropDownItems().contains("Convert to job").click();
    // cy.wait("@GetEstimate");
  }

  markAsWon() {
    this.elements.actionsDropdown().click();
    this.elements.dropDownItems().contains("Mark as Won").click();
  }

  checkEstimateStatus(value) {
    this.elements.statusLabel().contains(value);
  }

  markAslost() {
    this.elements.actionsDropdown().click();
    this.elements.dropDownItems().contains("Mark as Lost").click();
  }

  copyEstimate() {
    this.elements.actionsDropdown().click();
    this.elements.dropDownItems().contains("Copy").click();
  }

  deleteEstimate() {
    this.elements.actionsDropdown().click();
    this.elements.dropDownItems().contains("Delete").click();
  }

  confirmYes() {
    // cy.intercept(
    //   "**/api/**"
    // ).as("GetEstimateJobs");
    // cy.get("mat-dialog-container").should("be.visible");
    // cy.wait("@GetEstimateJobs");
    cy.wait(600);
    this.elements
      .confirmYesButton()
      // .should("be.visible")
      .click();
  }

  checkAddNewJobModalTitle() {
    this.elements.addNewJobModalTitle();
  }

  checkConvertedToInvoiceSuccess = () => {
    cy.intercept("**/api/**").as("api");
    this.elements
      .savedNotification()
      .contains("Estimate has been successfully converted");
    cy.wait("@api");
  };

  checkBillToCustomerName = (customerName) => {
    this.elements.billToCustomerName().contains(customerName);
  };

  checkEstimatePreview = () => {
    // cy.intercept("**/api/**").as("api");
    cy.get("app-report-preview-dialog preloader").should("not.be.visible");

    cy.get("mat-dialog-container app-report-preview-dialog").should(
      "be.visible"
    );
    cy.wait(2500);
    this.elements.estimatePreviewModalTitle().contains("Estimate Preview");
    cy.get("app-report-preview-dialog preloader").should("not.be.visible");
    // cy.wait("@api");
    // cy.wait(800); // cannot omit wait to load the preview completely
    // this.elements.previewiFrame.custName().should("be.visible");
    let verifyThis = {
      customername: "Genius Game Inc.",
    };
    cy.get("app-report-preview-dialog preloader").should("not.be.visible");
    // cy.wait("@api");
    // cy.wait("@GetEstimate");
    cy.get("app-report-preview-dialog preloader").should("not.be.visible");

    cy.enter("iframe#contentHolder").then((getBody) => {
      getBody()
        .find(".comp-header .col-lg-4:last-child() span")
        .should("be.visible");
    });
    // this.elements.previewiFrame.description().contains(verifyThis.customername);
  };

  setRowsToHiddenPrice = (hiddenOrder) => {
    hiddenOrder.forEach((i, index) => {
      this.elements
        .tableRowEllipse()
        .eq(index)
        .click()
        .then(($el) => {
          cy.log(`value:${i} index: ${index}`);
          cy.wait(1800);
          if (i == true) {
            this.elements
              .tableRowEllipseItem()
              .contains("Hide price")
              .last()
              .click({ force: true });
          } else {
            this.elements.tableRowEllipse().eq(index).click();
          }
        });
    });
  };

  setRowsToHiddenLine = (hiddenOrder) => {
    hiddenOrder.forEach((i, index) => {
      this.elements
        .tableRowEllipse()
        .eq(index)
        .click()
        .then(($el) => {
          cy.log(`value:${i} index: ${index}`);
          cy.wait(1800);
          if (i == true) {
            this.elements
              .tableRowEllipseItem()
              .contains("Hide line")
              .last()
              .click({ force: true });
          } else {
            this.elements.tableRowEllipse().eq(index).click();
          }
        });
    });
  };

  checkEstimatePreviewValues = (customerInfo) => {
    cy.wait(2000);
    // cy.intercept("**/api/**").as("api");
    // this.elements.previewiFrame.note().should('have.value', customerInfo.note.toString())
    cy.frameLoaded("#contentHolder");
    cy.get("app-report-preview-dialog preloader").should("not.be.visible");
    // cy.wait("@api");
    cy.get("app-report-preview-dialog preloader").should("not.be.visible");

    this.elements.previewiFrame
      .note()
      .should("contain", customerInfo.note.toString().trim());
    // cy.iframe('#contentHolder').find('p')
  };

  calcGrandTotal = (subTotal, discount) => {
    let grandTotal = subTotal - discount;
    return grandTotal;
  };

  calcRowTotal = (price, discount) => {
    let rowTotal = price - discount;
    return rowTotal;
  };
  verifyGrandTotal = (calc, elementValue) => {
    return calc == elementValue;
  };

  addDiscountInRow(min, max, discountKind, numberOfRows) {
    for (let i = 1; i <= numberOfRows; i++) {
      const randomRow = this.getRandomInt(0, numberOfRows);
      cy.wait(800);
      this.elements
        .addDiscountRowElement()
        .eq(randomRow - 1)
        .click();
      if (discountKind === "$") {
        this.elements
          .setDiscountValueInput()
          .click()
          .clear()
          .type(this.getRandomInt(min, max).toString());
        this.elements.setDiscountModalDropdown().select("$");
      } else if (discountKind === "%") {
        this.elements
          .setDiscountValueInput()
          .click()
          .clear()
          .type(this.getRandomInt(min, max).toString());
        this.elements.setDiscountModalDropdown().select("%");
      } else {
        this.elements.setDiscountModalDropdown().select("$");
        this.elements
          .setDiscountValueInput()
          .click()
          .clear()
          .type(this.getRandomInt(min, max).toString());
      }

      this.elements.setDiscountModalSaveButton().click();
    }
  }

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  };

  changeTableValues = () => {
    function changeInput(
      nameEl,
      descEl,
      qtyEl,
      unitCostEl,
      profitEl,
      unitPriceEl
    ) {
      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }
      const description = descEl;
      const randomQuantity = getRandomInt(0, 10).toString();
      const randomUnitCost = getRandomInt(0, 1000).toString();
      const randomProfit = getRandomInt(0, 5).toString();
      cy.wrap(description).clear().type("TEST Description Change");
      cy.wrap(qtyEl).clear().type(randomQuantity);
      cy.wrap(unitCostEl).clear().type(randomUnitCost);
      cy.wrap(profitEl).clear().type(randomProfit);
    }

    this.elements
      .tableRows()
      .not(".editable")
      .each((row) => {
        cy.wrap(row).find("input, textarea").spread(changeInput);
      });
  };

  checkRowsTotal = () => {
    function checkCalc(
      moveEl,
      skuEl,
      nameEl,
      descEl,
      qtyEl,
      unitCostEl,
      profitEl,
      unitPriceEl,
      totalCostEl,
      priceEl,
      discountEl,
      totalEl
    ) {
      function currencyRoundOff(num) {
        return (Math.round(num * 100) / 100).toFixed(2);
      }
      var qty = parseInt(qtyEl.innerText);
      var item = skuEl.innerText + " - " + nameEl.innerText;
      var unitCost = parseFloat(
        unitCostEl.innerText.replace("$", "").replace(" ", "")
      );
      const totalCost = parseFloat(
        totalCostEl.innerText.replace("$", "").replace(" ", "")
      );
      const price = parseFloat(
        priceEl.innerText.replace("$", "").replace(" ", "")
      );
      let discount = parseFloat(
        discountEl.innerText.replace("$", "").replace(" ", "")
      );
      const total = parseFloat(
        totalEl.innerText.replace("$", "").replace(" ", "")
      );
      const profit = parseFloat(
        profitEl.innerText.replace("%", "").replace(" ", "")
      );
      var profitPercent = profit / 100;
      profitPercent === NaN
        ? (profitPercent = 0.0)
        : (profitPercent = profitPercent);

      if (isNaN(profitPercent)) {
        profitPercent = 0.0;
      } else {
        profitPercent = profitPercent;
      }
      const unitPrice = parseFloat(
        unitPriceEl.innerText.replace("$", "").replace(" ", "")
      );

      if (isNaN(discount)) {
        discount = 0;
      } else {
        discount = discount;
      }

      if (isNaN(profitPercent)) {
        profitPercent = 0;
      } else {
        profitPercent = profitPercent;
      }

      if (isNaN(qty)) {
        qty = 1;
      } else {
        qty = qty;
      }
      const calcTotalCost = currencyRoundOff(qty * unitCost);
      const calcPrice = currencyRoundOff(qty * unitPrice);
      let calcUnitPrice = currencyRoundOff(unitCost * profitPercent + unitCost);
      const calcTotal = currencyRoundOff(price - discount);
      calcUnitPrice === NaN
        ? (calcUnitPrice = 0.0)
        : (calcUnitPrice = calcUnitPrice);
      // expect(
      //   calcTotalCost,
      //   `${item}: Quantity(${qty}) * Unit Cost($${unitCost})`
      // ).to.equal(currencyRoundOff(totalCost));
      // expect(
      //   calcPrice,
      //   `${item}: Quantity(${qty}) * Unit Cost($${unitPrice})`
      // ).to.equal(currencyRoundOff(price));
      // expect(
      //   calcUnitPrice,
      //   `${item}: Unit Cost($${unitCost}) + Profit(${profitPercent})`
      // ).to.equal(currencyRoundOff(unitPrice));
      // expect(
      //   calcTotal,
      //   `${item}: Price($${price}) - Discount($${discount}) = Total($${total})`
      // ).to.equal(currencyRoundOff(total));
    }

    this.elements.tableRows().each((row) => {
      cy.wrap(row).find("td").spread(checkCalc);
    });
  };

  addRandomInvoiceDiscount = () => {
    const randomDiscount = this.getRandomInt(1, 10);
    this.elements.addInvoiceDiscountButton().click();
    this.elements
      .setInvoiceDiscountValueInput()
      .type(randomDiscount.toString());
    this.elements.setInvoiceDiscountModalDropdown().select("%");
    this.elements.setInvoiceDiscountModalSaveButton().click();
  };

  checkInvoiceSubtotal = () => {
    this.elements.rowTotal().then(($cells) => {
      const totals = $cells
        .toArray()
        .map((el) => el.innerText)
        .map((s) => s.replace("$", ""))
        .map(parseFloat);

      const sum = Cypress._.sum(totals)
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      // const subTotal = this.elements.invoiceSubTotal().innerText.toString().replace('$', '').replace(' ', '')
      const subTotal = parseFloat(
        this.elements.invoiceSubTotal().toString().replace("$", "")
      );

      this.elements
        .invoiceSubTotal()
        .contains(`$${sum}`)
        .log(
          `Row total of $${sum} is equal to invoice subtotal element: ${subTotal} `
        );
    });
  };

  addNote = (note) => {
    this.elements.notesForCustomerField().type(`${note}{home}`);
  };

  addInvoiceTax = (taxInfo) => {
    this.elements.invoiceTaxButton().click();
    this.elements.createNewTaxButton().click();
    this.elements.setTaxModal.taxNameTextbox().clear().type(taxInfo.taxName);
    this.elements.setTaxModal.taxValueTextbox().clear().type(taxInfo.taxValue);
    this.elements.setTaxModal.saveButton().click();
  };

  checkInvoiceTotal = () => {
    var subTotal = 0;
    var discount = 0;
    var taxPercent = 0;
    var total = 0;
    // function currencyRoundOff(num) {
    //   return (Math.round(num * 100) / 100).toFixed(2);
    // }
    // this.elements.invoiceSubTotal().then(($el) => {
    //   subTotal = parseFloat($el.text().replace("$", "").replace(",", ""));
    //   cy.log(subTotal.toString());
    //   cy.log(typeof subTotal);
    //   // return subTotal
    // });
    // this.elements.invoiceDiscount().then(($el) => {
    //   discount = parseFloat($el.text().replace("$", "").replace(",", ""));
    //   if (isNaN(discount)) {
    //     discount = 0;
    //   }
    //   cy.log(discount);
    //   cy.log(typeof discount);
    //   // return discount
    // });
    // this.elements.invoiceTotal().then(($el) => {
    //   total = parseFloat($el.text().replace("$", "").replace(",", ""));
    //   cy.log(total.toString());
    //   cy.log(typeof total);
    //   // return total
    //   const calcTotal = subTotal - discount;
    //   cy.log(typeof calcTotal);
    //   cy.log(calcTotal.toString());
    //   expect(
    //     calcTotal,
    //     `Invoice Subtotal($${subTotal}) less invoice discount($${discount})`
    //   ).to.equal(currencyRoundOff(total));
    // });

    // this.elements.invoiceTaxPercent()
    //     .then($el => {
    //         taxPercent = parseFloat($el.text().replace('$', '').replace(',', ''))
    //         const calcTax = subTotal * subTotal
    //         expect(subTotal - discount, `Invoice grand total($${calcTotal}) less invoice discount($${discount})`).to.equal(total)
    //     })

    // // const invoiceSubTotal = parseFloat(this.elements.invoiceSubTotal().toString().replace('$', ''))
    // this.elements.invoiceSubTotal().then(el=> {
    //     const invoiceSubTotal = parseFloat(el.innerText.replace('$', '').replace(' ', ''))
    //     cy.log(invoiceSubTotal)
    // })

    // let invoiceDiscount = parseFloat(this.elements.invoiceDiscount().toString().replace('$', ''))
    // cy.log(invoiceDiscount)
    // const invoiceTotal = parseFloat(this.elements.invoiceTotal().toString().replace('$', ''))
    // if (isNaN(invoiceDiscount)) {
    //     invoiceDiscount = 0
    // }
    // else {
    //     invoiceDiscount = invoiceDiscount
    // }
    // cy.log(invoiceTotal)
    // // expect(invoiceSubTotal.parseFloat - invoiceDiscount.parseFloat).to.equal(invoiceTotal)
  };

  // cy.get('table tbody yd:nth-child(4)')
  //     .then($cells => {
  //         const totals = $cells.toArray()
  //             .map(el.innerText)
  //             .map(s => s.replace('$', ''))
  //             .map(parseFloat)

  //         const sum = Cypress._.sum(totals)
  //         cy.log($sum)

  //         cy.get('$total').invoke('text')
  //             .then((s) => s.replace('$', ''))
  //             .invoke('find', s => s.startsWith('$'))
  //             .invoke('split', ' ')
  //             .then(parseFloat)
  //             .should('equal', sum)

  //         cy.contains('#total', '$' + sum) // Easier way
  //     })

  // contains('#total', '$' + sum)
  randomLineMove = () => {
    this.elements.upDownButtons.moveDown().then(($el) => {
      const count = $el.length;
      const randomRow = this.getRandomInt(0, count);
      this.elements.upDownButtons
        .moveDown()
        .eq(randomRow)
        .should("be.visible")
        .click();
    });

    this.elements.upDownButtons.moveUp().then(($el) => {
      const count = $el.length;
      const randomRow = this.getRandomInt(0, count);
      this.elements.upDownButtons
        .moveUp()
        .eq(randomRow)
        .should("be.visible")
        .click();
    });
  };
}

module.exports = new EstimatesPage();
