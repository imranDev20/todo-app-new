import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const Protected = ({ auth, children }) => {
  return auth ? children : <Navigate to="/login" />;
};

export default Protected;
