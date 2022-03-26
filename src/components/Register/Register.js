import React, { useState } from "react";
import registerService from "services/register";
import { useForm } from "react-hook-form";

export default function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [registered, setRegistered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (values) => {
    console.log(values);
    setIsSubmitting(true);
    return registerService(values).then(() => {
      setRegistered(true);
      setIsSubmitting(false);
    });
  };

  if (registered) return <h2>You have been succesfully registered</h2>;

  return (
    <>
      <h1>Register form</h1>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Username"
          {...register("username", { required: true })}
        />
        {errors.username?.type === "required" && (
          <span className="form-error">Username is required</span>
        )}

        <input
          placeholder="Password"
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password?.type === "required" && (
          <span className="form-error">Password is required</span>
        )}

        <button disabled={isSubmitting}>Register</button>
      </form>
    </>
  );
}
