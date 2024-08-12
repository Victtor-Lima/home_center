// const form = document.querySelector("form");
// const access = document.querySelector("#access");
// console.log(access);

// export class Verifications {
//   constructor() {}

//   isEmailValid(email: HTMLInputElement) {
//     const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/;

//     if (email.value === "" || !emailRegex.test(email.value)) {
//       console.log(email.value);
//       return false;
//     } else {
//       return true;
//     }
//   }

//   isPasswordValid(password: HTMLInputElement) {
//     const passwordRegex =
//       /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/;

//     if (password.value === "" || !passwordRegex.test(password.value)) {
//       console.log(password.value);
//       return false;
//     } else {
//       return true;
//     }
//   }

//   passwordConfirmation(
//     password: HTMLInputElement,
//     passConfirm: HTMLInputElement
//   ) {
//     if (passConfirm.value === password.value) {
//       return true;
//     } else {
//       console.log(passConfirm.value);
//       return false;
//     }
//   }
// }

// function handleSubmit(event) {
//   event.preventDefault();
//   const email = form?.elements.item(0);
//   const password = form?.elements.item(1);

//   if (!new Verifications().isEmailValid(email)) {
//     email.classList.add("erro");
//     alert("preencha o e-mail corretamente.");
//     return;
//   }
//   if (!new Verifications().isPasswordValid(password)) {
//     password.classList.add("erro");
//     alert("preencha a senha corretamente.");
//     return;
//   }

//   login(email);
// }

// function login(email) {
//   const registrations = JSON.parse(localStorage.getItem("registrations"));

//   if (registrations && isUserValid(registrations, email.value)) {
//     alert("logado");
//   } else {
//     window.location.href = "./page2.html";
//     console.log(registrations);
//   }
// }

// function isUserValid(registrations, email) {
//   return registrations.some((user) => user.email === email);
// }

// access?.addEventListener("click", handleSubmit);
