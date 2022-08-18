class InventoryListPage {

    /*
cy.get('button[data-target="#modalAddNewCustomer"]').click()
    */
    elements = {
        inventoryPanel: () => cy.get('#side-menu li i.fas.fa-pallet'),
        inventoryListPanel: ()=> cy.get('a[href="/settingsTab/inventory/list"]'),
        actionsDropdown: ()=> cy.get('button[data-toggle="dropdown"]'),
        addNewInventory:()=>cy.get('button[data-toggle="dropdown"]+ul li:first-child()'),
    }

    gotoAddNewInventory = () => {
        cy.wait(3000)
        // this.elements.inventoryPanel().click()
        // this.elements.inventoryListPanel().click()
        cy.visit("settingsTab/inventory/list")
        this.elements.actionsDropdown().click()
        this.elements.addNewInventory().click()
    }
    
    gotoAddNewInventoryUrl=()=> {
        cy.visit("settingsTab/inventory/list")
    }
    
}

module.exports = new InventoryListPage();