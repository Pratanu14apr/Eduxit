import { useRoutes } from "react-router-dom";
import JavaFullStack from "../Components/NavBarComponents/FullStacks/JavaFullStack";

import Home from "../Components/Content/Home/Home";
import Ranking from "../Components/Content/Ranking/Ranking";
import StudentReview from "../Components/Content/StudenReview/StudentReview";
import Support from "../Components/Content/Support/Support";
import UpComingCourses from "../Components/Content/UpComingCourse/UpComingCourses";
import Css from "../Components/NavBarComponents/Courses/Css";
import Express from "../Components/NavBarComponents/Courses/Express";
import Html from "../Components/NavBarComponents/Courses/Html";
import Java from "../Components/NavBarComponents/Courses/Java";
import JavaScript from "../Components/NavBarComponents/Courses/JavaScript";
import Mongodb from "../Components/NavBarComponents/Courses/Mongodb";
import Nodejs from "../Components/NavBarComponents/Courses/Nodejs";
import Python from "../Components/NavBarComponents/Courses/Python";
import ReactCom from "../Components/NavBarComponents/Courses/React";
import React from "../Components/NavBarComponents/Courses/React";
import Sql from "../Components/NavBarComponents/Courses/Sql";
import EnrollPage from "../Components/pages/EnrollPage";
import UserPage from "../Components/pages/UserPage";
import MernFullStack from "../Components/NavBarComponents/FullStacks/MernFullStack";
import PythonFullStack from "../Components/NavBarComponents/FullStacks/PythonFullStack";
import IbmFullStack from "../Components/NavBarComponents/FullStacks/IbmFullStack";
import Combo from "../Components/NavBarComponents/FullStacks/Combo";
import Register from "../Components/Auth/Register";
import Login from "../Components/Auth/Login";
const TyssRoute = () => {
  let Routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Ranking",
      element: <Ranking />,
    },
    {
      path: "/StudentReview",
      element: <StudentReview />,
    },
    {
      path: "/Support",
      element: <Support />,
    },
    {
      path: "/UpComingCourses",
      element: <UpComingCourses />,
    },
    {
      path: "/Courses/Css",
      element: <Css />,
    },
    {
      path: "/Courses/Express",
      element: <Express />,
    },
    {
      path: "/Courses/Html",
      element: <Html />,
    },
    {
      path: "/Courses/Java",
      element: <Java />,
    },
    {
      path: "/Courses/JavaScript",
      element: <JavaScript />,
    },
    {
      path: "/Courses/Mongodb",
      element: <Mongodb />,
    },
    {
      path: "/Courses/Nodejs",
      element: <Nodejs />,
    },
    {
      path: "/Courses/Python",
      element: <Python />,
    },
    {
      path: "/Courses/React",
      element: <ReactCom />,
    },
    {
      path: "/Courses/Sql",
      element: <Sql />,
    },
    {
      path: "/enroll",
      element: <EnrollPage />,
    },
    {
      path: "/Courses/User",
      element: <UserPage />,
    },
    {
      path: "/FullStacks/JavaFullStack",
      element: <JavaFullStack />,
    },
    {
      path: "/FullStacks/MernFullStack",
      element: <MernFullStack />,
    },
    {
      path: "/FullStacks/PythonFullStack",
      element: <PythonFullStack />,
    },
    {
      path: "/FullStacks/IbmFullStack",
      element: <IbmFullStack />,
    },
    {
      path: "/FullStacks/Combo",
      element: <Combo />,
    },
    {
      path: "/Eduxit/Register",
      element: <Register />,
    },
    {
      path: "/Eduxit/Login",
      element: <Login />,
    },
  ]);
  return Routes;
};
export default TyssRoute;
