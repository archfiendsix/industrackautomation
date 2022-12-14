/// <reference types="cypress" />

import LoginPage from "../../pages/LoginPage";
import Dashboard from "../../pages/Dashboard";
import { InventoryListPage } from "../../pages/settings/inventory";
import AddNewInventoryPage from "../../pages/AddNewInventoryPage";
import { v4 as uuidv4 } from "uuid";

require("cypress-plugin-tab");

describe("Add Inventory", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    console.log(err);
    return false;
  });

  beforeEach(() => {
    cy.viewport(1280, 768);
    cy.visit("/login");
    LoginPage.loginAdmin(Cypress.env('login_username'), Cypress.env('login_password'));

    Dashboard.clickSettings();
    Dashboard.elements.settingsButton().click();
    // Dashboard.preventNotificationCard()
  });

  it("Add an inventory that is set to non taxable - Use Serial #'s and serial numbers by batch to increase quantity on hand", () => {
    InventoryListPage.gotoAddNewInventory();
    const inventoryInfo = {
      sku: `SKU${uuidv4()}`,
      name: "serialNumbers Added",
      nonTaxable: true,
      useSerialNumbers: true,
      serialNumbers: [`SN${uuidv4()}`, `SN${uuidv4()}`, `SN${uuidv4()}`],
    };
    AddNewInventoryPage.fillData(inventoryInfo);
    AddNewInventoryPage.clickSaveButton();
  });

  it("Add an inventory (taxable) - Use Serial #'s and serial numbers by batch to increase quantity on hand", () => {
    InventoryListPage.gotoAddNewInventory();
    const inventoryInfo = {
      sku: `SKU${uuidv4()}`,
      name: "Add Inventory - SN Used",
      useSerialNumbers: true,
      serialNumbers: [`SN${uuidv4()}`, `SN${uuidv4()}`, `SN${uuidv4()}`],
    };
    AddNewInventoryPage.fillData(inventoryInfo);
    AddNewInventoryPage.clickSaveButton();
  });

  it("Add Inventory - Add Non-inventory - Add Service - Add Assembly", () => {
    //Add Inventory
    InventoryListPage.gotoAddNewInventory();
    const inventoryInfo = {
      sku: `SKU${uuidv4()}`,
      name: `Inventory-${uuidv4().substring(0, 5)}`,
      useSerialNumbers: false,
    };
    AddNewInventoryPage.fillData(inventoryInfo);
    AddNewInventoryPage.clickSaveButton();

    // Add Non Inventory
    InventoryListPage.gotoAddNewNonInventoryModal();
    let randName = uuidv4().substring(0, 5);
    let randSKU = uuidv4().substring(0, 5);
    let randDesc = uuidv4().substring(0, 6);
    const nonInventoryInfo = {
      name: `${randName}-NonInventory`,
      sku: `${randSKU}-SKU`,
      vendor: "Genius Vendor",
      nonTaxable: false,
      salesPriceRate: "150",
      salesDescription: `Description-${randDesc}`,
      cost: "100",
      mainWarehouseQuantityOnHand: "1",
    };
    InventoryListPage.addNewNonInventory(nonInventoryInfo);

    //Add new service
    InventoryListPage.gotoAddNewServiceModal();
    let serviceRandName = uuidv4().substring(0, 5);
    let serviceRandSKU = uuidv4().substring(0, 5);
    const serviceInfo = {
      name: `${serviceRandName}-Service`,
      sku: `${serviceRandSKU}-SKU`,
      nonTaxable: false,
      salesPriceRate: "150",
      salesDescription: "This is a test description - Service",
      cost: "200",
    };
    InventoryListPage.addNewService(serviceInfo);

    //Add new Assembly
    InventoryListPage.gotoAddNewAssemblyModal();
    let assemblyRandName = uuidv4().substring(0, 5);
    let assemblyRandSKU = uuidv4().substring(0, 5);
    const assemblyInfo = {
      name: `${assemblyRandName}-Assembly`,
      sku: `${assemblyRandSKU}-SKU-Assembly`,
      nonTaxable: false,
      configurable: true,
      parts: [
        {
          name: inventoryInfo.name,
          qty: "1",
        },
        {
          name: inventoryInfo.name,
          qty: "1",
        },
      ],
      services: [
        {
          name: serviceInfo.name,
          qty: "1",
        },
      ],
      salesDescription: "This is a test Assembly description",
    };
    InventoryListPage.addNewAssembly(assemblyInfo);
  });
});
