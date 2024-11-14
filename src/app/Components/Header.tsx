"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../reduxx/store";

const Header = () => {
  const dd = useSelector((state: RootState) => state.Cardall);

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>Main Card</h1>
      <h4>Cart Item {dd.length}</h4>

      <div style={styles.navLinks}>
        <Link href="../MainHome" style={styles.link}>
          Home
        </Link>
        <Link href="/Card" style={styles.link}>
          Card
        </Link>
        <Link href="../Login" style={styles.link}>
          Login
        </Link>
        <Link href="../Register" style={styles.link}>
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
  },
  title: {
    fontSize: "24px",
  },
  navLinks: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default Header;
