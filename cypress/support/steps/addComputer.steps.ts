import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../pages/home.page";
import signInPage from "../pages/signIn.page";
import computersPage from "../pages/computers.page";
import newComputerPage from "../pages/newComputer.page";

let computer: string;

Given("{word} has access to the portal", () => {
  cy.visit("", { failOnStatusCode: false });
  homePage.signInButton.click();
  signInPage.usernameInput.type("prmiguel");
  signInPage.passwordInput.type("Control*123.");
  signInPage.signInButton.click();
});

When("she/he add a new computer", () => {
  computer = "test";
  computersPage.addANewComputerButton.click();
  newComputerPage.computerNameInput.type(computer);
  newComputerPage.createThisComputerButton.click();
});

Then("she/he sees the computer added to the list", () => {
  computersPage.alertMessage.should(
    "have.text",
    `Done !  Computer ${computer} has been created`
  );
});
