// TYPES CARD
import React from "react";
import { User } from "../context/LoginContext";

export type ICard = {
  product: IProduct;
  arrFavorite: [IProduct[], React.Dispatch<React.SetStateAction<IProduct[]>>];
  arrCart: [IProduct[], React.Dispatch<React.SetStateAction<IProduct[]>>];
};

export type ICardFavorite = Pick<ICard, "product">;

export type ICardCart = Pick<ICard, "product" | "arrCart">;

export type IButton = React.ComponentProps<"button"> & {
  user: User | null;
  product: IProduct;
  arrState: [
    IProduct[] | null,
    React.Dispatch<React.SetStateAction<IProduct[] | null>>
  ];
  nameList: "favorite" | "cart";
};

// Types data

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
