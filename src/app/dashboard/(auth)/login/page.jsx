"use client";
import React, { useEffect, useState } from "react";
// import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const Login = ({ url }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  // const [success, setSuccess] = useState("");

  useEffect(() => {
    setError("Error");
    // setSuccess("success");
  }, [params]);

  // if (session.status === "loading") {
  //   return <p>Loading...</p>;
  // }

  // if (session.status === "authenticated") {
  //   router?.push("/dashboard");
  // }
  // console.log(session);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   signIn("credentials", {
  //     email,
  //     password,
  //   });
  // };

  return (
    <>
      <section className="py-20 pt-40 flex justify-center items-center bg-gray-100">
        <div className="wrapper flex flex-col justify-center items-center">
          <h1 className="text-xl font-bold text-orange-500 mb-4">
            Welcome Back
          </h1>
          <h3 className="text-sm font-bold text-gray-400 mb-8">
            Please sign in to see the dashboard.
          </h3>
          <form className="flex flex-col gap-4 w-52 mb-3">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border-gray-200 border p-3 rounded w-full"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="bg-transparent border-gray-200 border p-3 rounded w-full"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              // onClick={handleSubmit}
              className="block rounded-md bg-emerald-600 w-full py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              Login
            </button>
            {/* {error && <p>error</p>} */}
            <button
              // onClick={(e) => {
              // e.preventDefault();
              // signIn("google");
              // }}
              className="block rounded-md bg-red-500 w-full py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Login With Google
            </button>
          </form>
          <span className="block text-gray-400  text-sm">- OR -</span>
          <Link
            href="/dashboard/register?search=register"
            className="underline text-gray-500 text-sm"
          >
            Create new account
          </Link>
        </div>
      </section>
    </>
  );
};

export default Login;
