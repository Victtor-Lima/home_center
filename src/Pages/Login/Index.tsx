import React from "react";
import Form from "../../components/Form/Index";
import { useLogin } from "../../context/LoginContext";

const Login = () => {
  const { loggedUser } = useLogin();

  console.log(loggedUser);
  return (
    <section>
      {loggedUser ? (
        <>
          <p>USUÁRIO LOGADO</p>
          <button></button>
        </>
      ) : (
        <Form page="signIn" />
      )}
    </section>
  );
};

export default Login;
