import React from "react";
import TopNavBar from "./Components/TopNavbar/TopNavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/SideBar/Sidebar";
import TyssRoute from "./Routes/TyssRoute";
import style from "./AppCss.module.css";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Router>
        <TopNavBar />
        <Navbar />
        <div className={style.AppDiv}>
            <Sidebar />
          <article className={style.RouteCon}>
            <TyssRoute />
            <Footer />
          </article>
        </div>
      </Router>
    </>
  );
};

export default App;
