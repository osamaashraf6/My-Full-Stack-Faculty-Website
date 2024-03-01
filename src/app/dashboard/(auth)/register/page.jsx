"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await fetch("http://localhost:3000/api/auth/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name,
  //         email,
  //         password,
  //       }),
  //     });
  //     router.push("/dashboard/login");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <>
      <section className="py-20 pt-40 flex justify-center items-center bg-gray-100">
        <div className="wrapper flex flex-col justify-center items-center">
          <h1 className="text-xl font-bold text-orange-500 mb-4">Welcome Back</h1>
          <h3 className="text-sm font-bold text-gray-400 mb-8">
            Please sign up to see the dashboard.
          </h3>
          <form className="flex flex-col gap-4 w-52 mb-3">
            <div>
              <input
                type="text"
                placeholder="Username"
                className="bg-transparent border-gray-200 border p-3 rounded w-full"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
              Register
            </button>
          </form>
          <span className="block text-gray-400  text-sm">- OR -</span>
          <Link
            href="/dashboard/login?search=login"
            className="underline text-gray-500 text-sm"
          >
            Login with existing account
          </Link>
        </div>
      </section>
    </>
  );
};

export default Register;
