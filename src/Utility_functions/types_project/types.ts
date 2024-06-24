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
  filters: Array<filters_values>;
  available_filters: Array<object>;
  pdp_tracking: object;
  user_context: null;
};

type Obj = {
  id: string;
  name: string;
};

type filters_values = {
  values: Array<filters_values_object>;
};

type filters_values_object = {
  id: string;
  name: string;
  path_from_root: Array<{ id: string; name: string }>;
};

// Types Context

export type IDataContext = {
  urlProducts: string | null;
  seturlProducts: React.Dispatch<React.SetStateAction<string | null>>;
  data: SearchByCategory | null;
};
