class HomePage {

    get signInButton() : Cypress.Chainable<any> {
        return cy.get('.button')
    }
}

export default new HomePage
