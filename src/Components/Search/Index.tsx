import React from "react";
import * as S from "./Styled";
import { useNavigate } from "react-router-dom";
import { normalizeString } from "../../utilityFunctions/normalizeString";

const Search = () => {
  const [inputValue, setInputValue] = React.useState<string | null>(null);
  const navigate = useNavigate();

  function search(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    if (inputValue !== null) {
      navigate(`/home_center/search/${normalizeString(inputValue)}`);
    }
  }

  return (
    <S.FormSearch>
      <S.Input
        type="text"
        onChange={({ target }) => setInputValue(target.value)}
      />
      <S.ButtonSearch onClick={(event) => search(event)}>
        <S.Lupa />
      </S.ButtonSearch>
    </S.FormSearch>
  );
};

export default Search;
