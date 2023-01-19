class ComputersPage {

    get computerNameInput() : Cypress.Chainable<any> {
        return cy.get('#name')
    }

    get createThisComputerButton() : Cypress.Chainable<any> {
        return cy.get('.primary')
    }
}

export default new ComputersPage
