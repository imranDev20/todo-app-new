import React, { useEffect } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import { useNavigate, useLocation } from "react-router-dom";

import app from "../firebase";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

const Login = () => {
  const [signInWithGoogle, googleUser, googleUserloading, googleUsererror] =
    useSignInWithGoogle(auth);

  const [
    createUserWithEmailAndPassword,
    createdUser,
    createUserloading,
    createUserError,
  ] = useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  // User sign up with email and password
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(email, password);
  };

  createdUser && navigate("/");
  googleUser && navigate("/");

  return (
    <div className="mx-auto max-w-xs bg-polka my-20 py-10 px-10 rounded-lg">
      <h2 className="text-center transform rotate-1 bg-yellow-300 mx-auto w-44 px-3 py-1 text-2xl text-neutral-600 rounded">
        Sign Up
      </h2>

      <form className="mt-10" onSubmit={(event) => handleSubmit(event)}>
        <input
          className="bg-polka w-full outline-none border-b-4 border-b-yellow-500 border-dotted focus:border-b-orange-600 transition placeholder:text-neutral-500 my-3"
          type="email"
          name="email"
          placeholder="Your email"
        />
        <input
          className="bg-polka w-full outline-none border-b-4 border-b-yellow-500 border-dotted focus:border-b-orange-600 transition placeholder:text-neutral-500 my-3"
          type="password"
          name="password"
          id=""
          placeholder="Your password"
        />
        <p className="text-sm text-red-500">{createUserError?.message}</p>
        <input
          type="submit"
          className="border-2 border-yellow-500 text-yellow-500 px-3 py-1 transform -rotate-1 focus:text-orange-600 focus:border-orange-600 bg-white rounded inline-block mt-5 cursor-pointer"
        />
      </form>
      <button
        onClick={() => signInWithGoogle()}
        className="w-44 mx-auto flex justify-center items-center text-center border-2 border-yellow-500 text-yellow-500 px-3 py-1 transform focus:text-orange-600 focus:border-orange-600 bg-white rounded mt-5"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
