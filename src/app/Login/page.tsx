"use client";
import React, { FormEvent, useState } from "react";
import "../Styles/login.css";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebaseconfig";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
const LoginPage = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const router = useRouter();
  const Login = (e: FormEvent) => {
    e.preventDefault();
    try {
      const user = signInWithEmailAndPassword(auth, email, password);
      Swal.fire({
        title: "Login Successfull",
      });
      setemail("");
      setpassword("");
      router.push("../MainHome");
    } catch (err) {
      alert("wrong password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form onSubmit={Login}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              onChange={(e) => setemail(e.currentTarget.value)}
              value={email}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              onChange={(e) => setpassword(e.currentTarget.value)}
              value={password}
            />
          </div>
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
        <p className="register-link">
          Don’t have an account? <Link href="../Register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
