import { IProduct, IUserData } from "../../typesProject/types";
import { getLocal } from "../localstorage_funcs";

type createUser = {
  name: string;
  email: string;
  password: string;
  id: string;
  favorite: IProduct[];
  cart: IProduct[];
};

export function createUser(name: string, email: string, password: string) {
  const registrations: Array<IUserData> = getLocal("registrations");
  const isUserValid = registrations?.find((user) => user.email === email);

  if (isUserValid) {
    alert("Você já possui uma conta com esse e-mail");
    return;
  }

  const id = (Math.random() * (2000 - 1) + 1).toFixed();
  const user = { name, email, password, id, favorite: [], cart: [] };

  if (!registrations) {
    localStorage.setItem("registrations", JSON.stringify([user]));
  } else if (registrations) {
    localStorage.setItem(
      "registrations",
      JSON.stringify([...registrations, user])
    );
  }
}
