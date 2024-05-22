import React from "react";
import classes from "./Home.module.css";
const Home = () => {
  return (
    <div>
      <form>
        <ul className={classes.ul}>
          <li>
            Name:-
            <input placeholder="Avinash Kumar" />
          </li>
          <li>
            Email:-
            <input placeholder="abc@gmail.com" />
          </li>
          <li>
            Mobile No.-
            <input placeholder="1234567890" />
          </li>
          <li>
            Address:-
            <input placeholder="Address" />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Home;
