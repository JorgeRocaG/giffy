import useUser from "hooks/useUser";
import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";

import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [, pushLocation] = useLocation();
  const { isLoginLoading, hasLoginError, login, isLogged } = useUser();

  useEffect(() => {
    if (isLogged === true) pushLocation("/");
  }, [isLogged, pushLocation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  return (
    <>
      {isLoginLoading && <strong>Checking credentials...</strong>}
      {!isLoginLoading && (
        <form className="form" onSubmit={handleSubmit}>
          <label for="login-username">Username</label>
          <input
            id="login-username"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />

          <label for="login-password">Password:</label>
          <input
            id="login-password"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <button>Login</button>
        </form>
      )}
      {hasLoginError && <strong>Login error</strong>}
    </>
  );
}
