import React from "react";
import styles from "../Style/InputSearch.module.css";
import { useNavigate } from "react-router-dom";
import { normalizeString } from "./Card";

const InputSearch = () => {
  const [inputValue, setInputValue] = React.useState<string | null>(null);
  const navigate = useNavigate();

  function search(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    if (inputValue !== null) {
      navigate(`/search/${normalizeString(inputValue)}`);
    }
  }

  return (
    <form className={styles.form_search}>
      <input
        className={styles.input_search}
        type="text"
        onChange={({ target }) => setInputValue(target.value)}
      />
      <button
        className={styles.button_search}
        onClick={(event) => search(event)}
      >
        Buscar
      </button>
    </form>
  );
};

export default InputSearch;
