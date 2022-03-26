import React from "react";
import { Formik } from "formik";
import register from "services/register";

export default function Register() {
  return (
    <>
      <h1>Register form</h1>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(values) => {
          return register(values);
        }}
      >
        {({ handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <input name="username" onChange={handleChange}></input>
            <input name="password" onChange={handleChange}></input>
            <button className="btn" disabled={isSubmitting}>
              Register
            </button>
          </form>
        )}
      </Formik>
    </>
  );
}
