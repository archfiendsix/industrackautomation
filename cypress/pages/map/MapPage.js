class MapPage {
    elements = {
        vehiclesButton: () => cy.get('#side-menu .stype button').contains('Vehicles'),
        employeesButton: () => cy.get('#side-menu .stype button').contains('Employees'),
        defaultTab:()=> cy.get('a[href="#tab-2"]'),
        groupedTab:()=> cy.get('a[href="#tab-1"]'),
        sortByDropdown: ()=> cy.get('select.form-control.sortby'),
        mapSearch: {
            textBox: ()=> cy.get('.mapsearch .search-form input'),
            goButton: ()=> cy.get('.mapsearch .input-group-btn button').contains('Go!'),
        },
        mapFilters: {
            vehicles: ()=> cy.get('.mapfilters .button').contains('Vehicles'),
            employees: ()=> cy.get('.mapfilters .button').contains('Employees'),
            jobs: ()=> cy.get('.mapfilters .button').contains('Jobs'),
            geofences: ()=> cy.get('.mapfilters .button').contains('Geofences'),
            addressBook: ()=> cy.get('.mapfilters .button').contains('Address Book'),
            traffic: ()=> cy.get('.mapfilters .button').contains('Traffic'),
            clearView: ()=> cy.get('.mapfilters .button').contains('Clear View'),
        }
    }

    action = () => {

    }
}

module.exports = new MapPage();