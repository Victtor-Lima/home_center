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
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default Input;
