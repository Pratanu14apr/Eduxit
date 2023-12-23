import React from "react";
import style from "./Logo.module.css";
import { BiSearch } from "react-icons/bi";
// import logo from '../assets/images/logooo.jpg'
import { BiCodeAlt } from "react-icons/bi";
const Logo = () => {
  return (
    <section className={style.LogoCon}>
      <article className={style.LogoSubCon}>
        <div className={style.Logo}>
          {/* <img src={logo} alt="" /> */}
          <span>{<BiCodeAlt />}</span>
          <span>EDUXIT</span>
        </div>
        <div className={style.Search}>
          <span >{<BiSearch />}</span>
          <input type="text" placeholder="search here" />
        </div>
      </article>
    </section>
  );
};

export default Logo;
