import React from "react";
import styles from "./Layout.module.css";
import Header from "../header/Header";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <hr style={{ width: "90%", margin: "40px" }} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
