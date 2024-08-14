import * as S from "./Styled";

type InputType = {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: ({ target }: { target: EventTarget & HTMLInputElement }) => void;
  onBlur: ({ target }: { target: EventTarget & HTMLInputElement }) => void;
  error: string | null;
};

const Input = ({
  label,
  name,
  type,
  value,
  onChange,
  onBlur,
  error,
}: InputType) => {
  return (
    <S.Container>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <S.SpanError>{error}</S.SpanError>}
    </S.Container>
  );
};

export default Input;
