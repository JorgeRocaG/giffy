import useUser from "hooks/useUser";
import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Login, FormInput, FormLabel, FormSubmit } from "./styles";

export default function LoginComponent({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [, pushLocation] = useLocation();
  const { isLoginLoading, hasLoginError, login, isLogged } = useUser();

  useEffect(() => {
    if (isLogged === true) {
      pushLocation("/");
      onLogin && onLogin();
    }
  }, [isLogged, pushLocation, onLogin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  //TODO: separar en componentes
  return (
    <>
      {isLoginLoading && <strong>Checking credentials...</strong>}
      {!isLoginLoading && (
        <Login onSubmit={handleSubmit}>
          <FormLabel for="login-username">Username</FormLabel>
          <FormInput
            id="login-username"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />

          <FormLabel for="login-password">Password:</FormLabel>
          <FormInput
            id="login-password"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <FormSubmit>Login</FormSubmit>
        </Login>
      )}
      {hasLoginError && <strong>Login error</strong>}
    </>
  );
}
