import React from "react";
import { useNavigate } from "react-router-dom";
import { normalizeString } from "./Card";
import { Input } from "../Style/styled_search/InputSearch";
import { FormSearch } from "../Style/styled_search/FormSearch";
import { Button } from "./ButtonFavorite/Styled";

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
      <Button onClick={(event) => search(event)}>Buscar</Button>
    </FormSearch>
  );
};

export default Search;
