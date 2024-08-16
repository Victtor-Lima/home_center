import React from "react";
import * as S from "../Login/Styled";
import Form from "../../components/Form/Index";
import { bodyColor } from "../../utilityFunctions/pageBackgroundColor";

const SignUp = () => {
  React.useEffect(() => bodyColor(), []);

  return (
    <S.LoginContainer>
      <Form page="signUp" />
    </S.LoginContainer>
  );
};

export default SignUp;
