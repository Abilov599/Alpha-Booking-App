import React, { useEffect } from "react";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./../../redux/slice/dataSlice";

const Home = () => {
  const data = useSelector((state) => state.getDataSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  console.log(data);

  return <main id="home">Home</main>;
};

export default Home;
