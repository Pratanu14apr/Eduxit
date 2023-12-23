import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Menu.module.css";
const Menu = () => {
  return (
    <>
      <section className={style.MenuCon}>
        <ul className={style.row}>
          <li className={style.col1}>
            <span className={style.spans}> Courses</span>
            <div className={style.CourseCon}>
              <ul>
                <NavLink to="/Courses/Java">
                  <li>Java </li>
                </NavLink>

                <NavLink to="/Courses/Python">
                  <li>Python </li>
                </NavLink>

                <NavLink to="/Courses/html">
                  <li>html </li>
                </NavLink>

                <NavLink to="/Courses/CSS">
                  <li>CSS </li>
                </NavLink>

                <NavLink to="/Courses/JavaScript">
                  <li>Java Script </li>
                </NavLink>

                <NavLink to="/Courses/react">
                  <li>react </li>
                </NavLink>

                <NavLink to="/Courses/express">
                  <li>express </li>
                </NavLink>

                <NavLink to="/Courses/sql">
                  <li>sql </li>
                </NavLink>

                <NavLink to="/Courses/mongodb">
                  <li>mongodb </li>
                </NavLink>

                <NavLink to="/Courses/Nodejs">
                  <li>Nodejs </li>
                </NavLink>
              </ul>
            </div>
          </li>
          <li className={style.col2}>
            <span className={style.spans}> Fullstack</span>
            <div className={style.FullstackCon}>
              <ul>
                <NavLink to="/FullStacks/JavaFullStack">
                  <li>Java FullStack</li>
                </NavLink>
                <NavLink to="/FullStacks/PythonFullStack">
                  <li> Python FullStack</li>
                </NavLink>
                <NavLink to="/FullStacks/MernFullStack">
                  <li>MERN FullStack</li>
                </NavLink>
                <NavLink to="/FullStacks/IbmFullStack">
                  <li>IBM Fullstack</li>
                </NavLink>
                <NavLink to="/FullStacks/combo">
                  <li>Combo</li>
                </NavLink>
              </ul>
            </div>
          </li>
          {/* <li className={style.col3}>
            <span className={style.spans}> Resources</span>
            <div className={style.ResourcesCon}>
              <ul>
                <li>Blog</li>
                <li>Events</li>
                <li>Sample Videos</li>
                <li>Case Studies</li>
                <li>About us</li>
              </ul>
            </div>
          </li> */}
          <li className={style.col4}>
            <span className={style.spans}>
              <NavLink to="/Eduxit/Register">Register</NavLink>
            </span>
          </li>
          <li className={style.col5}>
            <span className={style.spans}>
              <NavLink to="/Eduxit/Login  ">Login</NavLink>
            </span>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Menu;
