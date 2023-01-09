import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export function Button() {
  const { loginWithRedirect } = useAuth0();
  


  return (
    <Link to="login">
      <button className="btn login-btn" onClick={() => loginWithRedirect()}>
        <i className="fas fa-user mr-2" />
        Login
      </button>
    </Link>
  );
}
