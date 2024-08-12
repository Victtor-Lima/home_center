import { UserType } from "../../context/LoginContext";

export function createUser(email: string, password: string) {
  const local = localStorage.getItem("registrations");
  const registrations: Array<UserType> = local ? JSON.parse(local) : false;
  const isUserValid = registrations
    ? registrations.find((user) => user.email === email)
    : false;

  if (isUserValid) {
    alert("Você já possui uma conta com esse e-mail");
    return;
  }

  const id = (Math.random() * (2000 - 1) + 1).toFixed();
  const user = { email, password, id };

  if (!registrations) {
    localStorage.setItem("registrations", JSON.stringify([user]));
  } else if (registrations) {
    localStorage.setItem(
      "registrations",
      JSON.stringify([...registrations, user])
    );
  }
}