import React from "react";
import { Navigate } from "react-router-dom";
import { STORAGE_KEYS, ROUTES } from "../utils/constants";

const AuthRoute = ({ children }) => {
  const token = localStorage.getItem(STORAGE_KEYS.TOKEN);
  return token ? children : <Navigate to={ROUTES.SIGN_IN} replace={true} />;
};

export default AuthRoute;
