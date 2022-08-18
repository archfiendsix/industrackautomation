class VendorListPage {

    /*
cy.get('button[data-target="#modalAddNewCustomer"]').click()
    */
    elements = {
        inventoryPanel: () => cy.get('#side-menu li i.fas.fa-pallet'),
        
    }

    gotoAddNewInventory = () => {
    
    }
    
    gotoAddNewInventoryUrl=()=> {
        cy.visit("settingsTab/inventory/list")
    }
    
}

module.exports = new VendorListPage();