import { IProduct, IUserData } from "../../typesProject/types";

type createUser = {
  name: string;
  email: string;
  password: string;
  id: string;
  favorite: IProduct[];
  cart: IProduct[];
};

export function createUser(name: string, email: string, password: string) {
  const local = localStorage.getItem("registrations");
  const registrations: Array<IUserData> = local ? JSON.parse(local) : false;
  const isUserValid = registrations
    ? registrations.find((user) => user.email === email)
    : false;

  if (isUserValid) {
    alert("Você já possui uma conta com esse e-mail");
    return;
  }

  const id = (Math.random() * (2000 - 1) + 1).toFixed();
  const user = { name, email, password, id, favorite: [], cart: [] };

  if (registrations.length === 0) {
    localStorage.setItem("registrations", JSON.stringify([user]));
  } else if (registrations) {
    localStorage.setItem(
      "registrations",
      JSON.stringify([...registrations, user])
    );
  }
}
