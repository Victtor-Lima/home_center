export class Verifications {
  constructor() {
    this.isEmailValid, this.isPasswordValid, this.passwordConfirmation;
  }

  isEmailValid(email: string) {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/;

    if (email === "" || !emailRegex.test(email)) {
      console.log(email);
      return false;
    } else {
      return true;
    }
  }

  isPasswordValid(password: string) {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/;

    if (password === "" || !passwordRegex.test(password)) {
      console.log(password);
      return false;
    } else {
      return true;
    }
  }

  passwordConfirmation(password: string, passConfirm: string) {
    if (passConfirm === password) {
      return true;
    } else {
      console.log(passConfirm);
      return false;
    }
  }
}
