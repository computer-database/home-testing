import homePage from "../pages/home.page";
import signInPage from "../pages/signIn.page";
import computersPage from "../pages/computers.page";

class SignIn {
  private username: string;
  private password: string;

  usingEmail(username): SignIn {
    this.username = username;
    return this;
  }

  withPassword(password): SignIn {
    this.password = password;
    return this;
  }

  andSignIn() : void {
    homePage.signInButton.click();
    signInPage.usernameInput.type(this.username);
    signInPage.passwordInput.type(this.password);
    signInPage.signInButton.click();
  }
}

export default new SignIn();
