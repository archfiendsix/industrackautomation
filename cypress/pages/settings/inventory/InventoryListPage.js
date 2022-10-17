class InventoryListPage {
  /*
cy.get('button[data-target="#modalAddNewCustomer"]').click()
    */
  elements = {
    inventoryPanel: () => cy.get("#side-menu > li").contains("Inventory"),
    inventoryListPanel: () =>
      cy.get("#side-menu .nav-second-level a").contains("Inventory list"),
    actionsDropdown: () => cy.get('button[data-toggle="dropdown"]'),
    addNewInventory: () =>
      cy.get('button[data-toggle="dropdown"]+ul li:first-child()'),
    addNewNonInventory: () =>
      cy
        .get('button[data-toggle="dropdown"]+ul li a')
        .contains("Add new Non-inventory"),
    addNewService: () =>
      cy
        .get('button[data-toggle="dropdown"]+ul li a')
        .contains("Add new Service"),
    addNewAssembly: () =>
      cy
        .get('button[data-toggle="dropdown"]+ul li a')
        .contains("Add new Assembly"),
    addNonInventoryModal: {
      nameTextbox: () => cy.get("part-edit-dialog input#name"),
      skuTextbox: () => cy.get("part-edit-dialog input#number"),
      vendorTextbox: () => cy.get('part-edit-dialog input[name="vendor"]'),
      nonTaxableCheckbox: () =>
        cy.get('part-edit-dialog mat-checkbox[name="nonTaxable"]'),
      salesPriceRateTexbox: () => cy.get("part-edit-dialog input#salesPrice"),
      salesDescriptionField: () =>
        cy.get("part-edit-dialog textarea#salesInfo"),
      costTextbox: () => cy.get("part-edit-dialog input#cost"),
      mainWarehouseQuantityOnHandTextbox: () =>
        cy.get("part-edit-dialog input#quantity"),
      saveButton: () => cy.get("part-edit-dialog button").contains("Save"),
    },
    addServiceModal: {
      nameTextbox: () => cy.get("service-edit-dialog input#name"),
      skuTextbox: () => cy.get("service-edit-dialog input#number"),
      nonTaxableCheckbox: () =>
        cy.get('service-edit-dialog  mat-checkbox[name="nonTaxable"]'),
      salesPriceRateTexbox: () =>
        cy.get("service-edit-dialog input#salesPrice"),
      salesDescriptionField: () =>
        cy.get("service-edit-dialog textarea#salesInfo"),
      costTextbox: () => cy.get("service-edit-dialog input#cost"),
      saveButton: () => cy.get("service-edit-dialog button").contains("Save"),
    },
    addAssemblyModal: {
      nameTextbox: () => cy.get("bundle-edit-dialog input#name"),
      skuTextbox: () => cy.get("bundle-edit-dialog input#number"),
      configurableCheckbox: () =>
        cy.get('bundle-edit-dialog mat-checkbox[name="isConfigurable"]'),
      nonTaxableCheckbox: () =>
        cy.get('service-edit-dialog  mat-checkbox[name="nonTaxable"]'),
      partSearchTextbox: () =>
        cy.get('bundle-edit-dialog input[aria-label="Parts search"]'),
      partSearchSelect: () => cy.get(".newcardsearchresult mat-option"),
      partSearchQty: () =>
        cy.get('bundle-edit-dialog input[name="addPartModel.quantity"]'),
      addPartButton: () =>
        cy.get("bundle-edit-dialog button").contains("Add Part"),
      serviceSearchTextbox: () =>
        cy.get('bundle-edit-dialog input[aria-label="Services search"]'),
      serviceSearchQty: () =>
        cy.get('bundle-edit-dialog input[name="addServiceModel.quantity"]'),
      addServiceButton: () =>
        cy.get("bundle-edit-dialog button").contains("Add Service"),
      salesPriceRateTexbox: () => cy.get("bundle-edit-dialog input#salesPrice"),
      salesDescriptionField: () =>
        cy.get("bundle-edit-dialog textarea#salesInfo"),
      saveButton: () => cy.get("bundle-edit-dialog button").contains("Save"),
    },
    addEquipmentModal: {
      generalTab: {
        nameTextbox: () => cy.get("equipment-item-edit-dialog input#type"),
        skuTextbox: () => cy.get("equipment-item-edit-dialog input#sku"),
        pictureChoosefileInput: () =>
          cy.get("equipment-item-edit-dialog input#inputDocument"),
        manufacturerTextbox: () =>
          cy.get("equipment-item-edit-dialog input#manufacturer"),
        modelTextbox: () => cy.get("equipment-item-edit-dialog input#model"),
        vendorTextbox: () =>
          cy.get('equipment-item-edit-dialog input[name="vendor"]'),
        quantityOnHandTextbox: () =>
          cy.get("equipment-item-edit-dialog input#quantity"),
        reorderPointTextbox: () =>
          cy.get("equipment-item-edit-dialog input#minOrderQuantity"),
        nonTaxableCheckbox: () =>
          cy.get('equipment-item-edit-dialog  mat-checkbox[name="nonTaxable"]'),
        salesPriceRateTexbox: () =>
          cy.get("equipment-item-edit-dialog input#salesPrice"),
        salesDescriptionField: () =>
          cy.get("equipment-item-edit-dialog textarea#salesInfo"),
        costTextbox: () => cy.get("equipment-item-edit-dialog input#cost"),
        purchasingDescriptionTextarea: () =>
          cy.get("equipment-item-edit-dialog textarea#purchasingInfo"),
      },
      serialNumbersTab: {},
    },
  };

  gotoAddNewInventory = () => {
    cy.visit("/settingsTab/general/setting");
    cy.wait(3000);
    this.elements.inventoryPanel().click();
    this.elements.inventoryListPanel().click();
    // cy.visit("settingsTab/inventory/list")
    this.elements.actionsDropdown().click();
    this.elements.addNewInventory().click();
  };

  gotoAddNewInventoryUrl = () => {
    cy.visit("settingsTab/inventory/list");
  };

  gotoAddNewNonInventoryModal = () => {
    this.gotoAddNewInventoryUrl();
    this.elements.actionsDropdown().click();
    this.elements.addNewNonInventory().click();
  };

  gotoAddNewServiceModal = () => {
    this.gotoAddNewInventoryUrl();
    this.elements.actionsDropdown().click();
    this.elements.addNewService().click();
  };
  gotoAddNewAssemblyModal = () => {
    this.gotoAddNewInventoryUrl();
    this.elements.actionsDropdown().click();
    this.elements.addNewAssembly().click();
  };

  addNewNonInventory = (nonInventoryInfo) => {
    cy.wait(1500);
    nonInventoryInfo.name &&
      this.elements.addNonInventoryModal
        .nameTextbox()
        .clear()
        .type(nonInventoryInfo.name);
    cy.wait(1500);
    nonInventoryInfo.sku &&
      this.elements.addNonInventoryModal
        .skuTextbox()
        .clear()
        .type(nonInventoryInfo.sku);
    nonInventoryInfo.vendor &&
      this.elements.addNonInventoryModal
        .vendorTextbox()
        .clear()
        .type(nonInventoryInfo.vendor);
    nonInventoryInfo.nonTaxable &&
      this.elements.addNonInventoryModal.nonTaxableCheckbox().click();
    nonInventoryInfo.salesPriceRate &&
      this.elements.addNonInventoryModal
        .salesPriceRateTexbox()
        .clear()
        .type(nonInventoryInfo.salesPriceRate);
    nonInventoryInfo.salesDescription &&
      this.elements.addNonInventoryModal
        .salesDescriptionField()
        .clear()
        .type(nonInventoryInfo.salesDescription);
    nonInventoryInfo.cost &&
      this.elements.addNonInventoryModal
        .costTextbox()
        .clear()
        .type(nonInventoryInfo.cost);
    nonInventoryInfo.mainWarehouseQuantityOnHand &&
      this.elements.addNonInventoryModal
        .mainWarehouseQuantityOnHandTextbox()
        .clear()
        .type(nonInventoryInfo.mainWarehouseQuantityOnHand);

    this.elements.addNonInventoryModal.saveButton().click();
  };
  addNewService = (serviceInfo) => {
    serviceInfo.name &&
      this.elements.addServiceModal
        .nameTextbox()
        .clear()
        .type(serviceInfo.name);
    serviceInfo.sku &&
      this.elements.addServiceModal.skuTextbox().clear().type(serviceInfo.sku);
    serviceInfo.nonTaxable &&
      this.elements.addServiceModal.nonTaxableCheckbox().check();
    serviceInfo.salesPriceRate &&
      this.elements.addServiceModal
        .salesPriceRateTexbox()
        .clear()
        .type(serviceInfo.salesPriceRate);
    serviceInfo.salesDescription &&
      this.elements.addServiceModal
        .salesDescriptionField()
        .clear()
        .type(serviceInfo.salesDescription);
    serviceInfo.cost &&
      this.elements.addServiceModal
        .costTextbox()
        .clear()
        .type(serviceInfo.cost);
    this.elements.addServiceModal.saveButton().click();
  };

  addNewAssembly = (assemblyInfo) => {
    assemblyInfo.name &&
      this.elements.addAssemblyModal
        .nameTextbox()
        .clear()
        .type(assemblyInfo.name),
      assemblyInfo.sku &&
        this.elements.addAssemblyModal
          .skuTextbox()
          .clear()
          .type(assemblyInfo.sku);
    assemblyInfo.configurable &&
      this.elements.addAssemblyModal.configurableCheckbox().click();
    assemblyInfo.nonTaxable &&
      this.elements.addAssemblyModal.nonTaxableCheckbox().click();
    assemblyInfo.salesPriceRate &&
      this.elements.addAssemblyModal
        .salesPriceRateTexbox()
        .clear()
        .type(assemblyInfo.salesPriceRate);
    assemblyInfo.salesDescription &&
      this.elements.addAssemblyModal
        .salesDescriptionField()
        .clear()
        .type(assemblyInfo.salesDescription);
    assemblyInfo.parts &&
      assemblyInfo.parts.forEach((i) => {
        this.elements.addAssemblyModal
          .partSearchTextbox()
          .clear()
          .type(`${i.name}`);
        cy.wait(1000);
        this.elements.addAssemblyModal.partSearchSelect().first().click();
        this.elements.addAssemblyModal.partSearchQty().clear().type(`${i.qty}`);
        this.elements.addAssemblyModal.addPartButton().click();
      });
    assemblyInfo.services &&
      assemblyInfo.services.forEach((i) => {
        this.elements.addAssemblyModal
          .serviceSearchTextbox()
          .clear()
          .type(`${i.name}`);
        cy.wait(1000);
        this.elements.addAssemblyModal.partSearchSelect().first().click();
        this.elements.addAssemblyModal
          .serviceSearchQty()
          .clear()
          .type(`${i.qty}`);
        this.elements.addAssemblyModal.addServiceButton().click();
      });

    this.elements.addAssemblyModal.saveButton().click();
  };
}

module.exports = new InventoryListPage();
