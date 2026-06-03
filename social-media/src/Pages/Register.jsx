import React from "react";
import { useForm } from "react-hook-form";
export default function Register() {
  let { handleSubmit, register } = useForm({
    defaultValues: {
      name: "",
      email: "",
      passwoed: "",
      repassword: "",
      date: "",
      gender: "",
    },
  });
  console.log();
  function SendData(userdata) {
    console.log(userdata);
  }
  return (
    <>
      <div className="bg-white rounded-2xl shadow-2xl py-10 px-6 min-w-md ">
        <h1 className="flex justify-center text-2xl mb-4">Register</h1>
        <form onSubmit={handleSubmit(SendData)} className="flex flex-col gap-4">
          <input
            label="name"
            type="text"
            {...register("name")}
            placeholder="name"
          />
          <input
            label="email"
            type="name"
            {...register("email")}
            placeholder="email"
          />
          <input
            label="password"
            type="password"
            {...register("password")}
            placeholder="password"
          />
          <input
            label="password"
            type="password"
            {...register("repassword")}
            placeholder="Repassword"
          />
          <div className="flex ">
            <input label="date" {...register("date")} type="date" />
            <select name="gender" {...register("gender")} id="gender">
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <button type="submit" className="bg-amber-100 hover:bg-amber-700">
            Register
          </button>
        </form>
      </div>
    </>
  );
}
