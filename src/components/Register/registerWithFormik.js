import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import register from "services/register";
import { useState } from "react";

const initialValues = {
  username: "",
  password: "",
};

const validateFields = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "Username is required";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 3) {
    errors.password = "Password must be longet that 3 characters";
  }

  return errors;
};

export default function Register() {
  const [registered, setRegistered] = useState(false);

  if (registered) return <h2>You have been succesfully registered</h2>;

  return (
    <>
      <h1>Register form</h1>
      <Formik
        initialValues={initialValues}
        validate={validateFields}
        onSubmit={(values, { setFieldError }) => {
          return register(values)
            .then(() => {
              setRegistered(true);
            })
            .catch((e) => {
              setFieldError("username", "This username is no valid");
            });
        }}
      >
        {({ errors, isSubmitting }) => (
          <Form className="form">
            <Field
              name="username"
              placeholder="Username"
              className={errors.password ? "error" : ""}
            />
            <ErrorMessage
              className="form-error"
              name="username"
              component="small"
            />

            <Field
              type="password"
              name="password"
              placeholder="Password"
              className={errors.password ? "error" : ""}
            />
            <ErrorMessage
              className="form-error"
              name="password"
              component="small"
            />

            <button className="btn" disabled={isSubmitting}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
