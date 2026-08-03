"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGoogle, BsGithub } from "react-icons/bs";

export default function page() {
  const handleLogin = async (e) => {
    e.preventDefault();
    // Handle login logic here
    const email = e.target[0].value;
    const password = e.target[1].value;
    console.log("Login data:", { email, password });

    const response = signIn("credentials", {
      email,
      password,
      redirect: false,
    });
      console.log("Response from server:", response);
  };
  return (
    <div>
      <div className="grid grid-cols-2 gap-12 container mx-auto my-12">
        {/* image section */}
        <div>
          <Image
            src="/assets/images/login/login.svg"
            alt="Login"
            width={400}
            height={400}
          />
        </div>
        {/* // The login form section */}
        <div className="p-12 bg-base-300 rounded-2xl">
          <div>
            <div className=" bg-base-100 w-full shadow-2xl p-5 rounded-2xl">
              <div className="">
                <fieldset className="fieldset">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <h1 className="text-2xl font-bold text-center capitalize">
                      Login here
                    </h1>
                    <label className="label">Email</label>
                    <input
                      type="email"
                      className="input w-full"
                      placeholder="Email"
                    />
                    <label className="label">Password</label>
                    <input
                      type="password"
                      className="input w-full"
                      placeholder="Password"
                    />
                    <div>
                      <a className="link link-hover">Forgot password?</a>
                    </div>
                    <button type="submit" className="btn btn-error mt-4 w-full">
                      Login
                    </button>
                  </form>
                  <div className="mt-4">
                    <p>
                      New to Car Doctor?{" "}
                      <Link
                        href="/signup"
                        className="link link-hover text-red-400"
                      >
                        Create an account
                      </Link>
                    </p>
                  </div>
                  <div>
                    <div className="divider">OR</div>

                    <div className="flex gap-4 justify-around">
                      {" "}
                      <button className="btn btn-outline btn-secondary ">
                        <BsGoogle></BsGoogle> Login with Google
                      </button>
                      <button className="btn btn-outline btn-neutral">
                        <BsGithub></BsGithub> Login with Github
                      </button>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
