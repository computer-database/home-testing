class SignInPage {

    get usernameInput() : Cypress.Chainable<any> {
        return cy.get('#username')
    }

    get passwordInput() : Cypress.Chainable<any> {
        return cy.get('#password')
    }

    get signInButton() : Cypress.Chainable<any> {
        return cy.get('#kc-login')
    }
}

export default new SignInPage
