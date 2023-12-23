import React, { useState,useEffect } from "react";
import LOG from "./Login.module.css";
const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loading, setLoading] = useState("");
  let handleSubmit = e => {
    e.preventDefault();
    try {
      setLoading(true);
      console.log({ email, password });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    setEmail("");
    setPassword("");
  };
  return (
    <section className={LOG.mainConBlock}>
      <article>
        <main>
          <h1 className={LOG.head}>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter e-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button>{loading ? "loading..." : "login"}</button>
            </div>
          </form>
        </main>
      </article>
    </section>
  );
};

export default Login;
