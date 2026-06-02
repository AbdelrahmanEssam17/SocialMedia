import React from "react";

export default function Register() {
  return (
    <>
      <div className="bg-white rounded-2xl shadow-2xl py-10 px-6 min-w-md ">
        <h1 className="flex justify-center text-2xl mb-4">Register</h1>
        <form className="flex flex-col gap-4">
          <input label="name" type="text" name="name" placeholder="name" />
          <input label="email" type="name" placeholder="email" />
          <input label="password" type="password" placeholder="password" />
          <input label="password" type="password" placeholder="Repassword" />
          <div className="flex ">
            <input label="date" type="date" />
            <select name="gender" id="gender">
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <button className="bg-amber-100 hover:bg-amber-700">Register</button>
        </form>
      </div>
    </>
  );
}
