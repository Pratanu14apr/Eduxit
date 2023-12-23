import React from "react";
import { useState } from "react";
import style from "./EnrollPage.module.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
const EnrollPage = () => {
  // let navigate = useNavigate();
  let [state, setState] = useState({
    name: "",
    email: "",
    phoneNum: "",
    password: "",
    loading: false,
  });
  let { name, email, phoneNum, password,  loading } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      let payload = { name, phoneNum, password, email };
      await axios.post(" http://localhost:5000/products", payload);
      // navigate("/product-dashboard");
    } catch (error) {
      console.log(error);
    }
    setState({
      loading: false,
      name: "",
      password: "",
      email: "",
      phoneNum: "",
    });
  };
  return (
    <section className={style.form}>
      <article>
        <form onSubmit={handleSubmit}>
          <div className={style.formGroup}>
            <label htmlFor="name">name</label>
            <input
              type="text"
              className={style.formControl}
              name="name"
              value={name}
              placeholder="enter name"
              required
              onChange={handleChange}
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="price">phoneNum</label>
            <input
              type="number"
              className={style.formControl}
              name="phoneNum"
              value={phoneNum}
              placeholder="enter phoneNum"
              required
              onChange={handleChange}
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="email">email</label>
            <input
              type="email"
              className={style.formControl}
              name="email"
              value={email}
              placeholder="enter email"
              required
              onChange={handleChange}
            />
          </div>

          <div className={style.formGroup}>
            <label htmlFor="password">password</label>
            <input
              type="password"
              className={style.formControl}
              name="password"
              value={password}
              placeholder="enter password"
              required
              onChange={handleChange}
            />
          </div>
          <button>{loading === true ? "loading..." : "Enroll"}</button>
        </form>
      </article>
    </section>
  );
};


export default EnrollPage;


