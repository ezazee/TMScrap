"use client";
require("dotenv").config();
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { CircularProgress } from "@nextui-org/react";

const FormLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(""); // Reset error message

    try {
      const response = await fetch(`http://10.20.20.99:8960/api/v1/token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        if (data && data.message) {
          throw new Error(data.message);
        } else {
          throw new Error("Mungkin Username atau Password Salah");
        }
      }

      const data = await response.json();

      // Simpan token JWT ke dalam cookie
      Cookies.set("jwt_token", data.access_token);
      // Simpan tm_token ke dalam cookie
      Cookies.set("tm_token", data.tm_token);

      // Redirect to dashboard after successful login
      router.push("/dashboard");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            className="block text-13 font-medium text-gray-700 mb-2 dark:text-zinc-200"
            htmlFor="username">
            Username
          </label>
          <input
            type="text"
            className="dark:outline-none dark:border-transparent dark:text-zinc-200 dark:placeholder:text-zinc-200 dark:bg-transparent dark:border-zinc-50 w-full border rounded p-2 placeholder:text-gray-600 border-gray-400 placeholder:text-13 focus:border focus:border-gray-400 focus:ring-0 focus:outline-none text-gray-700 text-13"
            id="username"
            placeholder="Enter username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-13 font-medium text-gray-700 mb-2 dark:text-zinc-200"
            htmlFor="userpassword">
            Password
          </label>
          <div className="flex overflow-hidden rounded">
            <input
              type="password"
              className="dark:outline-none dark:border-transparent dark:text-zinc-200 dark:placeholder:text-zinc-200 dark:bg-transparent dark:border-zinc-50 w-full border rounded p-2 placeholder:text-gray-600 border-gray-400 placeholder:text-13 focus:border focus:border-gray-400 focus:ring-0 focus:outline-none text-gray-700 text-13"
              id="userpassword"
              placeholder="Enter password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              required
            />
          </div>
        </div>
        {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}
        <div className="mt-3 text-end">
          <button
            className="flex items-center justify-center px-6 w-full text-white bg-primary border-transparent hover:bg-purple-600 transition ease-in duration-200 btn"
            type="submit"
            disabled={isLoading}>
            {isLoading ? (
              <CircularProgress color="secondary" size="sm" />
            ) : (
              "Login"
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default FormLogin;
