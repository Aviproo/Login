import React from "react";
import classes from "./Login.module.css";
const Login = () => {
  return (
    <div>
      <form>
        <div>
          <input placeholder="Email Id" className={classes.email} />
        </div>
        <div>
          <input placeholder="Password" className={classes.password} />
        </div>
        <div className={classes.loginDiv}>
          <button className={classes.login}>Login</button>
          <button className={classes.signup}>SignUp</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
