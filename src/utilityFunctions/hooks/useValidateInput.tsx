import React from "react";

type typesProperties = {
  [key: string]: {
    regex: RegExp;
    message: string;
  };
};

const types: typesProperties = {
  username: {
    regex: /[a-z][a-zA-Z0-9]{0,9}/,
    message:
      "Nome inválido! Deve iniciar com letra e ter, no máximo, 9 caracteres.",
  },
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Email inválido. Ex.: usuario@gmail.com",
  },
  password: {
    regex:
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/,
    message:
      "Deve ter 8 caracteres, letra maiúscula, número e símbolo especial.",
  },
};

export const useValidateInput = (type: string) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);

  function validate(value: string) {
    if (type === undefined) return true;
    if (value.length === 0) {
      setError("Preencha um valor.");
      return false;
    } else if (!error && types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }: { target: EventTarget & HTMLInputElement }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};
