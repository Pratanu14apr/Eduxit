import React, { useEffect } from "react";
import cou from "./Courses.module.css";
import { Link } from "react-router-dom";
import java from "../../assets/images/js.webp";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaRupeeSign } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiNotebook } from "react-icons/gi";
const JavaScript = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className={cou.secMain}>
        <article className={cou.artMain}>
          <img src={java} alt="" />
          <ul>
            <li>
              <h1>Javascript Certification Training Course</h1>
            </li>
            <li>
              <p>
                industry benchmarks and curated by top industry experts.
                Eduxit's <br />
                online Javascript Course guide you to become a Oracle certified
                professional to clear Java <br /> SE8 programmer, Javascript
                SE11 developer certification exam on the first attempt. This{" "}
                <br /> Javascript training online will give you extensive
                knowledge of Javascript
              </p>
            </li>
            <li>
              <Link to="/enroll">
                <button>Enroll</button>
              </Link>
            </li>
          </ul>
        </article>
        <article className={cou.screen}></article>
      </section>
      <section className={cou.DetailsMain}>
        <article className={cou.DetailsSub}>
          <div>
            <h1>
              <span>{<AiOutlineFieldTime />}</span> duration
            </h1>
            <p>3 months</p>
          </div>
          <div>
            <h1>
              <span>{<GiTakeMyMoney />}</span> fees details{" "}
            </h1>
            <p>{<FaRupeeSign />}35,000</p>
          </div>
          <div>
            <h1>
              <span>{<GiNotebook />}</span> topics covered
            </h1>
            <button>view syllabus </button>
          </div>
        </article>
      </section>
    </>
  );
};

export default JavaScript;
