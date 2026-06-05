import React from "react";
import Register from "./Register";
import { useNavigate, Link } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-2xl shadow-2xl py-10 px-6 min-w-md items-center justify-center">
      <h1 className="flex justify-center text-2xl mb-4 items-center">
        Login Now
      </h1>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="email"
          className="flex items-center justify-center "
        />
        <input
          type="password"
          placeholder="password"
          className="flex items-center justify-center "
        />
      </div>
      <button className="bg-gray-600 rounded-2xl shadow-2xl py-3 px-44 flex text-2xl ">
        Login
      </button>
      <p>
        you dont have account? please{" "}
        <Link
          className="text-blue-400 cursor-pointer"
          onClick={() => navigate("/register")}
        >
          Register
        </Link>
      </p>
    </div>
  );
}
