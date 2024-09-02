import React from "react";
import { useLogin } from "../../context/LoginContext";
import { Navigate } from "react-router-dom";

const ProtectedRouter = ({ children }: { children: React.ReactNode }) => {
  const { loggedUser } = useLogin();

  if (loggedUser) {
    return children;
  } else if (!loggedUser) {
    return <Navigate to="/home_center/login" />;
  } else {
    return <></>;
  }
};

export default ProtectedRouter;
