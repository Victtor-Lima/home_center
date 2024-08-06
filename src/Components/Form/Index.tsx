import { useLogin } from "../context/LoginContext";

const Form = () => {
  const { setEmail, setPassword, signIn } = useLogin();

  return (
    <form>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={({ target }) => setEmail(target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button onClick={(e) => signIn(e)}>Acessar</button>
    </form>
  );
};

export default Form;
