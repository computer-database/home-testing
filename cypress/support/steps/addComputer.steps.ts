import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import computersPage from "../pages/computers.page";
import newComputerPage from "../pages/newComputer.page";
import signIn from "../actions/signIn";

let computer: string;

Given("{word} has access to the portal", () => {
  cy.visit("", { failOnStatusCode: false });
  signIn.usingEmail("prmiguel").withPassword("Control*123.").andSignIn();
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
