import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../firebase";
import { getAuth } from "firebase/auth";
const auth = getAuth(app);

const Protected = ({ children }) => {
  const location = useLocation();

  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">Loading...</div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default Protected;
