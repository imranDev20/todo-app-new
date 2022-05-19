import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import app from "../firebase";
import { Link } from "react-router-dom";

const auth = getAuth(app);

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  console.log(user);

  return (
    <header className="w-full bg-yellow-500 text-white">
      <div className="container px-10 mx-auto py-3 flex justify-between">
        <h1 className="text-2xl">ToDo App</h1>
        <div>
          <Link className="mx-2" to="/">
            Home
          </Link>
          <Link className="mx-2" to="/">
            Login
          </Link>
        </div>
        <div className="flex items-center">
          <p className="mr-2">{user?.email}</p>
          {user ? (
            <button
              onClick={() => signOut(auth)}
              className="bg-white rounded px-4 py-2 text-yellow-500"
            >
              Logout
            </button>
          ) : (
            <Link
              className="bg-white rounded px-4 py-2 text-yellow-500"
              to="/login"
            >
              Log in
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
