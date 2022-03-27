import React from "react";
import { useRoute, Link } from "wouter";
import useUser from "hooks/useUser";
import { Header, HeaderLink } from "./styles";

export default function HeaderComponent() {
  const { isLogged, logout } = useUser();
  const [match] = useRoute("/login");

  const handleClick = (e) => {
    e.preventDefault();
    logout();
  };

  const renderLoginButtons = ({ isLogged }) => {
    return isLogged ? (
      <HeaderLink href="#" onClick={handleClick}>
        Logout
      </HeaderLink>
    ) : (
      <>
        <HeaderLink to="/login">Login</HeaderLink>
        <HeaderLink to="/register">Register</HeaderLink>
      </>
    );
  };

  const content = match ? null : renderLoginButtons({ isLogged });

  return <Header>{content}</Header>;
}
