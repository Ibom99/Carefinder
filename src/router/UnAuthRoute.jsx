import React from "react";
import { Navigate } from "react-router-dom";
import { STORAGE_KEYS, ROUTES } from "../utils/constants";

const UnAuthRoute = ({ children }) => {
  const token = localStorage.getItem(STORAGE_KEYS.TOKEN);
  return !token ? children : <Navigate to={ROUTES.DASHBOARD} replace={true} />;
};

export default UnAuthRoute;
