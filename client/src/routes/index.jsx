import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../site/pages/home";
import Rooms from "./../site/pages/rooms/index";
import SignIn from "./../site/pages/sign-in/index";
import SignUp from "./../site/pages/sign-up/index";
import SiteRoot from "./../site/root/index";

import AdminHome from "./../admin/pages/home/index";
import AdminLogin from "./../admin/pages/login/index";
import AdminRoot from "./../admin/root/index";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<SiteRoot />}>
        <Route index element={<Home />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
      <Route path="/admin" element={<AdminRoot />}>
        <Route index element={<AdminHome />} />
        <Route path="sign-in" element={<AdminLogin />} />
      </Route>
    </Routes>
  );
};

export default Routing;
