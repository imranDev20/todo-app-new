import React from "react";
import {
  useSignInWithGoogle,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";

const Login = ({ auth }) => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(email, password);
    console.log(user);
  };

  return (
    <div className="mx-auto max-w-xs bg-polka my-20 py-10 px-10 rounded-lg">
      <h2 className="text-center transform rotate-1 bg-yellow-300 mx-auto w-44 px-3 py-1 text-2xl text-neutral-600 rounded">
        Login
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
        <input
          type="submit"
          className="border-2 border-yellow-500 text-yellow-500 px-3 py-1 transform -rotate-1 focus:text-orange-600 focus:border-orange-600 bg-white rounded inline-block mt-5 cursor-pointer"
        />
      </form>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Login;
