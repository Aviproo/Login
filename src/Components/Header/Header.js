import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className={classes.logDiv}>
        <Link to="/Login">
          <button className={classes.login}>Login</button>
        </Link>
        <button className={classes.signup}>SignUp</button>
      </div>

      <ul className={classes.ul}>
        <Link to="/" className={classes.home}>
          <li>Home</li>
        </Link>
        <Link to="/Store" className={classes.store}>
          <li>Store</li>
        </Link>
        <li>Products</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Header;
