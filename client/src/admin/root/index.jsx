import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAuth } from "../../redux/slice/userAuthSlice";
import Aside from "../layouts/aside";

const AdminRoot = () => {
  const { loading, data, error } = useSelector((state) => state.userAuthSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserAuth());
  }, [dispatch]);

  const useAuth = () => {
    return data?.isAdmin;
  };

  const isAuth = useAuth();

  return isAuth ? (
    <div
      style={{
        display: "flex",
        maxWidth: "1600px",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <Aside />
      <div>
        <Outlet />
      </div>
    </div>
  ) : (
    <h1>Access Denied</h1>
  );
};

export default AdminRoot;
