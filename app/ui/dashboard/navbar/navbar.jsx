"use client";
import React from "react";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import {
  MdSearch,
  MdPublic,
  MdOutlineChat,
  MdNotifications,
} from "react-icons/md";
const Navbar = () => {
  const pathname = usePathname();

  return (
  <div className={styles.container}>
    <div className={styles.title}>{pathname.split('/').pop()}</div>
  </div>)
};

export default Navbar;
