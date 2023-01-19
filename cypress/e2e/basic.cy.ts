import homePage from "../support/pages/home.page"
import signInPage from "../support/pages/signIn.page"

describe('sdfd', () => {

    it('sdfsdf', () => {
        cy.visit('/', { failOnStatusCode: false })
        homePage.signInButton.click()
        signInPage.usernameInput.type('prmiguel')
        signInPage.passwordInput.type('Control*123.')
        signInPage.signInButton.click()
    })
})