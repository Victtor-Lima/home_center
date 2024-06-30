// TYPES CARD

export type ICard = {
  product: Product;
  arrFavorite: [Product[], React.Dispatch<React.SetStateAction<Product[]>>];
};

export type IButtonFavorite = {
  addToFavorites: [
    Product,
    [Product[], React.Dispatch<React.SetStateAction<Product[]>>],
    string
  ];
};

export type IButtonDelete = {
  deleteFromFavorites: [
    Product,
    [Product[], React.Dispatch<React.SetStateAction<Product[]>>],
    string
  ];
};

// Types data

export type Product = {
  id: string;
  title: string;
  thumbnail: string;
  original_price: number | null;
  price: number;
};

export type SearchByCategory = {
  site_id: string;
  country_default_time_zone: string;
  paging: object;
  results: Array<Product>;
  sort: object;
  available_sorts: Array<Obj>;
  filters: Array<Filters_propriedades>;
  available_filters: Array<AvailableFilters_propriedades>;
  pdp_tracking: object;
  user_context: null;
};

export type Obj = {
  id: string;
  name: string;
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

// Types Context

export type IDataContext = {
  categories: Obj[] | null;
  setCategories: React.Dispatch<React.SetStateAction<Obj[] | null>>;
  urlProducts: string | null;
  seturlProducts: React.Dispatch<React.SetStateAction<string | null>>;
  data: SearchByCategory | null;
  setData: React.Dispatch<React.SetStateAction<SearchByCategory | null>>;
};
