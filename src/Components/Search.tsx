import React from "react";
import styles from "../Style/InputSearch.module.css";
import { useNavigate } from "react-router-dom";
import { normalizeString } from "./Card";
import { ButtonSearch } from "../Style/styled_search/ButtonSearch";
import { Input } from "../Style/InputSearch";
import { FormSearch } from "../Style/styled_search/FormSearch";

const Search = () => {
  const [inputValue, setInputValue] = React.useState<string | null>(null);
  const navigate = useNavigate();

  function search(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    if (inputValue !== null) {
      navigate(`/search/${normalizeString(inputValue)}`);
    }
  }

  return (
    <FormSearch>
      <Input
        type="text"
        onChange={({ target }) => setInputValue(target.value)}
      />
      <ButtonSearch onClick={(event) => search(event)}>Buscar</ButtonSearch>
    </FormSearch>
  );
};

export default Search;
