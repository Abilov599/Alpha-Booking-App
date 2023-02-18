import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAuth } from "../../redux/slice/userAuthSlice";

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

  return isAuth ? <Outlet /> : <h1>Access Denied</h1>;
};

export default AdminRoot;
