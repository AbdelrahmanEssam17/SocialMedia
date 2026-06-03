import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const registerSchema = z
  .object({
    name: z.string().min(3).max(30),

    email: z.string().email(),

    password: z
      .string()
      .min(8)
      .max(30)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/),

    repassword: z.string(),

    date: z.string().min(1),

    gender: z.enum(["male", "female"]),
  })
  .refine((data) => data.password === data.repassword, {
    path: ["repassword"],
  });

export default function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
      date: "",
      gender: "",
    },
  });

  function SendData(userdata) {
    console.log(userdata);
  }

  return (
    <>
      <div className="bg-white rounded-2xl shadow-2xl py-10 px-6 min-w-md">
        <h1 className="flex justify-center text-2xl mb-4">Register</h1>

        <form onSubmit={handleSubmit(SendData)} className="flex flex-col gap-4">
          <input type="text" {...register("name")} placeholder="Name" />
          <p className="text-red-500">{errors.name?.message}</p>

          <input type="email" {...register("email")} placeholder="Email" />
          <p className="text-red-500">{errors.email?.message}</p>

          <input
            type="password"
            {...register("password")}
            placeholder="Password"
          />
          <p className="text-red-500">{errors.password?.message}</p>

          <input
            type="password"
            {...register("repassword")}
            placeholder="Confirm Password"
          />
          <p className="text-red-500">{errors.repassword?.message}</p>

          <div className="flex gap-2">
            <input {...register("date")} type="date" />

            <select {...register("gender")} id="gender">
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <p className="text-red-500">{errors.date?.message}</p>
          <p className="text-red-500">{errors.gender?.message}</p>
          <button type="submit" className="bg-amber-100 hover:bg-amber-700">
            Register
          </button>
        </form>
      </div>
    </>
  );
}
