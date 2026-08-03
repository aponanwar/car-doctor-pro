"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGoogle, BsGithub } from "react-icons/bs";

export default function page() {
  const handleSignup = async (e) => {
    e.preventDefault();
    // Handle signup logic here
    const newUser = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };
    console.log("New user data:", newUser);

    const response = await fetch("http://localhost:3000/signup/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    console.log("Response from server:", response);
    if (response.ok) {
      const data = await response.json();
      console.log("User created successfully:", data);
      e.target.reset(); // Reset the form after successful signup
    } else {
      const errorData = await response.json();
      console.error("Error creating user:", errorData);
    }
  };
  return (
    <div>
      <div className="grid grid-cols-2 gap-12 container mx-auto my-12">
        {/* image section */}
        <div>
          <Image
            src="/assets/images/login/login.svg"
            alt="Signup"
            width={400}
            height={400}
          />
        </div>
        {/* // The signup form section */}
        <div className="p-12 bg-base-300 rounded-2xl">
          <div>
            <div className=" bg-base-100 w-full shadow-2xl p-5 rounded-2xl">
              <div className="">
                <fieldset className="fieldset">
                  <form onSubmit={handleSignup} className="space-y-4">
                    <h1 className="text-2xl font-bold text-center capitalize">
                      Signup here
                    </h1>
                    <label className="label">Name</label>
                    <input
                      type="text"
                      className="input w-full"
                      placeholder="Name"
                    />
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
                      Signup
                    </button>
                  </form>
                  <div className="mt-4">
                    <p>
                      Already have an account?{" "}
                      <Link
                        href="/login"
                        className="link link-hover text-red-400"
                      >
                        Login here
                      </Link>
                    </p>
                  </div>
                  <div>
                    <div className="divider">OR</div>

                    <div className="flex gap-4 justify-around">
                      {" "}
                      <button className="btn btn-outline btn-secondary ">
                        <BsGoogle></BsGoogle> Signup with Google
                      </button>
                      <button className="btn btn-outline btn-neutral">
                        <BsGithub></BsGithub> Signup with Github
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
