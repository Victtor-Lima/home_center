// TYPES CARD
import React from "react";

// TYPES DATA

export type IProduct = {
  id: string;
  title: string;
  thumbnail: string;
  original_price: number | null;
  price: number;
  amount: number;
};

export type SearchByCategory = {
  site_id: string;
  country_default_time_zone: string;
  paging: object;
  results: Array<IProduct>;
  sort: object;
  available_sorts: Array<Obj>;
  filters: Array<Filters_propriedades>;
  available_filters: Array<AvailableFilters_propriedades>;
  pdp_tracking: object;
  user_context: null;
};

type Filters_propriedades = {
  values: Array<Filters_propriedades_values_object>;
};

type Filters_propriedades_values_object = {
  id: string;
  name: string;
  path_from_root: Array<{ id: string; name: string }>;
};

type AvailableFilters_propriedades = {
  id: string;
  name: string;
  type: string;
  values: Array<available_filters_propriedades_values_object>;
};

type available_filters_propriedades_values_object = {
  id: string;
  name: string;
  results: number;
};

export type Obj = {
  id: string;
  name: string;
};

// TYPES COMPONENTS

export type ICard = {
  product: IProduct;
};

export type IButton = React.ComponentProps<"button"> & {
  user?: ILoggedUser | null;
  product: IProduct;
  arrState: [
    IProduct[] | null,
    React.Dispatch<React.SetStateAction<IProduct[] | null>>
  ];
  nameList: "favorite" | "cart";
};

export type IButtonCart = React.ComponentProps<"button"> & {
  product: IProduct;
  children: React.ReactNode;
};

// TYPES CONTEXTLOGIN

export type SignType = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onChange: ({ target }: { target: EventTarget & HTMLInputElement }) => void;
  error: string | null;
  validate: () => boolean;
  onBlur: () => boolean;
};

export type LoginTypeContext = {
  loggedUser: ILoggedUser | null;
  userName: SignType;
  userEmail: SignType;
  userPassword: SignType;
  favorite: IProduct[] | null;
  setFavorite: React.Dispatch<React.SetStateAction<IProduct[] | null>>;
  cart: IProduct[] | null;
  setCart: React.Dispatch<React.SetStateAction<IProduct[] | null>>;
  favoriteProduct: (product: IProduct) => void;
  cartProduct: (product: IProduct) => void;
  signIn: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  signUp: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  logout: () => void;
};

export type ILoggedUser = {
  userName: string;
  userEmail: string;
  userId: number;
};

export type IUserData = {
  name: string;
  email: string;
  password: string;
  id: number;
  favorite: IProduct[];
  cart: IProduct[];
};
