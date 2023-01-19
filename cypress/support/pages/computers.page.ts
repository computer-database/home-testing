class ComputersPage {

    get addANewComputerButton() : Cypress.Chainable<any> {
        return cy.get('#add')
    }

    get alertMessage() : Cypress.Chainable<any> {
        return cy.get('.alert-message')
    }
}

export default new ComputersPage
