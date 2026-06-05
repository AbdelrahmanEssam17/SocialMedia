import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { signup } from "../Services/authservices";

const registerSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),

    username: z.string().min(3, "Username must be at least 3 characters"),

    email: z.string().email("Invalid email"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(30)
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/,
        "Password must contain uppercase, lowercase, number and special character",
      ),

    rePassword: z.string(),

    dateOfBirth: z.string().min(1, "Date of birth is required"),

    gender: z.enum(["male", "female"], {
      message: "Please select a gender",
    }),
  })
  .refine((data) => data.password === data.rePassword, {
    path: ["rePassword"],
    message: "Passwords do not match",
  });

export default function Register() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      rePassword: "",
      dateOfBirth: "",
      gender: "",
    },
  });

  async function SendData(userData) {
    try {
      console.log("Sending Data:", userData);

      const response = await signup(userData);

      console.log("Signup Success:", response);

      navigate("/login");
    } catch (error) {
      console.log("Signup Error:", error.response?.data);
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl py-10 px-6 min-w-md">
      <h1 className="flex justify-center text-2xl mb-4">Register</h1>

      <form onSubmit={handleSubmit(SendData)} className="flex flex-col gap-4">
        <input
          type="text"
          {...register("name")}
          placeholder="Name"
          className="border p-2 rounded"
        />
        <p className="text-red-500">{errors.name?.message}</p>

        <input
          type="text"
          {...register("username")}
          placeholder="Username"
          className="border p-2 rounded"
        />
        <p className="text-red-500">{errors.username?.message}</p>

        <input
          type="email"
          {...register("email")}
          placeholder="Email"
          className="border p-2 rounded"
        />
        <p className="text-red-500">{errors.email?.message}</p>

        <input
          type="password"
          {...register("password")}
          placeholder="Password"
          className="border p-2 rounded"
        />
        <p className="text-red-500">{errors.password?.message}</p>

        <input
          type="password"
          {...register("rePassword")}
          placeholder="Confirm Password"
          className="border p-2 rounded"
        />
        <p className="text-red-500">{errors.rePassword?.message}</p>

        <input
          type="date"
          {...register("dateOfBirth")}
          className="border p-2 rounded"
        />
        <p className="text-red-500">{errors.dateOfBirth?.message}</p>

        <select {...register("gender")} className="border p-2 rounded">
          <option value="">Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <p className="text-red-500">{errors.gender?.message}</p>

        <button
          type="submit"
          className="bg-amber-200 hover:bg-amber-400 p-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
}
