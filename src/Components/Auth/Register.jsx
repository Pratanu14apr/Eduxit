import React, { useState, useEffect } from "react";
import REG from "./Register.module.css";

const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let [name, setName] = useState("");
  let [conPass, setConPass] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loading, setLoading] = useState("");
  let handleSubmit = e => {
    e.preventDefault();
    try {
      setLoading(true);
      console.log({ name, conPass, email, password });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    setName("");
    setConPass("");
    setEmail("");
    setPassword("");
  };
  return (
    <section className={REG.mainBlock}>
      <article>
        <main>
          <h1 className={REG.headReg}>Registration Form</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter full name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter valid e-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="conPass">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password again"
                onChange={e => setConPass(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button>{loading ? "loading..." : "Register"}</button>
            </div>
          </form>
        </main>
      </article>
    </section>
  );
};

export default Register;
