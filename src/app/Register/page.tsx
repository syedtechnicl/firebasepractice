"use client";
import React, { FormEvent, useState } from "react";
import "../Styles/login.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebaseconfig";
const LoginPage = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  // path
  const router = useRouter();

  const Register = (e: FormEvent) => {
    e.preventDefault();
    try {
      // auth
      const user = createUserWithEmailAndPassword(auth, email, password);
      // auth
      // sweet alert
      let timerInterval;
      Swal.fire({
        title: "Account Creating...",
        html: "I will close in <b></b> milliseconds.",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
      // sweet end
      setemail("");
      setpassword("");
      router.push("../Login");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Sign Up</h2>
        <form onSubmit={Register}>
          <div className="input-group">
            <label>Email</label>
            <input
              value={email}
              type="email"
              placeholder="Enter your email"
              required
              onChange={(e) => setemail(e.currentTarget.value)}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setpassword(e.currentTarget.value)}
            />
          </div>
          <button type="submit" className="login-button">
            Sign Up
          </button>
        </form>
        <p className="register-link">
          Already have an account ? <Link href="../Login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
