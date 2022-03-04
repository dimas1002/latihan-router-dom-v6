import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div style={{ textAlign: "center", color: "red" }}>
      <h1>Belajar React Router Dom V6</h1>
      <nav>
        <Link to="/">Home</Link> | {""}
        <Link to="about">About</Link> | {""}
        <Link to="profile">Profile</Link>
      </nav>
      <br></br>
      <hr></hr>
    </div>
  );
}
