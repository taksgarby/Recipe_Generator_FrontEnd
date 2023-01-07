import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export function Button() {
  return (
    <Link to="login">
      <button className="btn login-btn">
        <i className="fas fa-user mr-2" />
        Login
      </button>
    </Link>
  );
}
