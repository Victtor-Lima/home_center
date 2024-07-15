import React from "react";
import * as S from "./Styled";
import { Button } from "../ButtonFavorite/Styled";
import { useNavigate } from "react-router-dom";
import { normalizeString } from "../../Utility_functions/normalizeString";

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
    <S.FormSearch>
      <S.Input
        type="text"
        onChange={({ target }) => setInputValue(target.value)}
      />
      <S.ButtonSearch onClick={(event) => search(event)}>Buscar</S.ButtonSearch>
    </S.FormSearch>
  );
};

export default Search;
