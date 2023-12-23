import React, { useState, useEffect } from "react";
import wave1 from "../../assets/images/Wave_White_bottom_left_shape_01.png";
import style from "./Home.module.css";
import backGround from "../../assets/images/bg2.avif";
import { Link, NavLink } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import courseDetail from "../../Content/Home/CourseDetails.json";
import { DiJava } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiBmcsoftware } from "react-icons/si";
import { SiIbmcloud } from "react-icons/si";
import online from "../../assets/images/online.png";
import ofline from "../../assets/images/offiline.png";

import { BiCodeAlt } from "react-icons/bi";
// import { VscCombine } from "react-icons/vs";
const Home = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  let [state, setState] = useState(courseDetail);
  console.log(state);
  return (
    <>
      <section className={style.homeMainCon}>
        <article className={style.homeSubCon}>
          <img src={backGround} alt="loading.." />
          <h2>
            Eduxit provides an correct path to choose career<br></br> Here is a
            list of the best IT certifications courses in 2023
          </h2>
        </article>
        <article className={style.hoverImg}></article>
        <article className={style.hoverTitleText}>
          <h1>{<BiCodeAlt />}EDUXIT</h1>
          <h3>brings you better carrer</h3>
        </article>
        <article className={style.EnrollCon}>
          <NavLink to="/enroll">
            <button>Enroll Now</button>
          </NavLink>
        </article>
        <article>
          <img className={style.waveImg} src={wave1} alt="" />
        </article>
      </section>

      <section className={style.BtmCardCon}>
        <article>
          <header className={style.CardHead}>
            <h1>Course List</h1>
          </header>
        </article>
        <article className={style.CardSecBtm}>
          <div>
            {state.map((m, i) => {
              let { path, name, date, img, description, rating } = m;
              return (
                <section className={style.BtmCard1} key={i}>
                  <figure id={style.imgCon11}>
                    <img className={style.ImgCd1} src={img} alt="" />
                  </figure>
                  <aside>
                    <main>
                      <header>{name}</header>
                      <h1>
                        <Link to={m.path}>
                          {description} <span>{date} Enroll Now</span>
                        </Link>
                      </h1>
                      <h4>
                        <p> {rating}</p>
                        <p>{<AiFillStar />}</p>
                      </h4>
                    </main>
                  </aside>
                  <Link to={path}>
                    <button>Go to Course</button>
                  </Link>
                </section>
              );
            })}
          </div>
        </article>
      </section>
      <section className={style.IconCon}>
        <article>
          <h2 className={style.FullStackCon}>FullStack course List</h2>
        </article>
        <article className={style.IconCard}>
          <div>
            <p>{<DiJava />}</p>
            <p>Java full stack</p>
            <NavLink to="/FullStacks/JavaFullStack">
              <button>Enroll</button>
            </NavLink>
          </div>
          <div>
            <p>{<FaPython />}</p>
            <p>Python full stack</p>
            <NavLink to="/FullStacks/PythonFullStack">
              <button>Enroll</button>
            </NavLink>
          </div>
          <div>
            <p>{<FaNodeJs />}</p>
            <p>MERN full stack</p>
            <NavLink to="/FullStacks/MernFullStack">
              <button>Enroll</button>
            </NavLink>
          </div>
          <div>
            <p>{<SiIbmcloud />}</p>
            <p>IBM full stack</p>
            <NavLink to="/FullStacks/IbmFullStack">
              <button>Enroll</button>
            </NavLink>
          </div>
          <div>
            <p>{<SiBmcsoftware />}</p>
            <p>Combo selection</p>
            <NavLink to="/FullStacks/Combo">
              <button>Select</button>
            </NavLink>
          </div>
        </article>
      </section>
      <h1 className={style.Scedule}>Schedule Class</h1>
      <section className={style.ClassCard}>
        <article className={style.ClassSubCard}>
          <div>
            <aside>
              <img className={style.img1} src={online} alt="" />
            </aside>
            <aside>
              <h1>EduxIT</h1>
              <h4>ONLINE</h4>
              <p>
                eduxIT provides online flatForm to learn the courses Specially
                crafted early learning program for young minds
              </p>
              <p>
                <button>Book Online</button>
              </p>
             
            </aside>
          </div>
          <div>
            <aside>
              <img className={style.img2} src={ofline} alt="" />
            </aside>
            <aside>
              <h1>EduxIT</h1>
              <h4>OFFLINE</h4>
              <p>
                EduxIT provides offline flat form Personalised learning program
                for the leaders of tomorrow
              </p>
              <p>
                <button>Book Online</button>
              </p>
            </aside>
          </div>
        </article>
      </section>
      <h1 className={style.StudentReviews}>Student reviews</h1>
      <section className={style.ReviewCon}>
        <article className={style.ReviewSub}>
          <div>
            <p>
              <img src="" alt="" />
            </p>
            <p>
              <b>NAME </b>: Mahesh
            </p>
            <p>
              <b>Course : </b>Java FullStack
            </p>
            <p>
              <b> REVIEW</b> : eduxIT provides an best knowledge for my career
              to strengthen my Skils.
            </p>
          </div>
          <div>
            <p>
              <img src="" alt="" />
            </p>
            <p>
              <b>NAME</b> : Ram
            </p>
            <p>
              <b>Course : </b>Python Course
            </p>
            <p>
              <b> REVIEW</b> : eduxIT provides an best knowledge for my career
              to strengthen my Skils.
            </p>
          </div>
          <div>
            <p>
              <img src="" alt="" />
            </p>

            <p>
              <b>NAME </b>: Krishna
            </p>
            <p>
              <b>Course : </b>React Course
            </p>
            <p>
              <b> REVIEW </b>: eduxIT provides an best knowledge for my career
              to strengthen my Skils.
            </p>
          </div>
          <div>
            <p>
              <img src="" alt="" />
            </p>

            <p>
              <b>NAME</b> : Hari
            </p>
            <p>
              <b>Course : </b>MERN Full Stack 
            </p>
            <p>
              <b>REVIEW</b> : eduxIT provides an best knowledge for my career to
              strengthen my Skils.
            </p>
          </div>
        </article>
      </section>
      <section className={style.ReviewBtn}>
        <NavLink to="/StudentReview">
          <h1 className={style.MoreReviews}>more reviews</h1>
        </NavLink>
      </section>
    </>
  );
};

export default Home;
