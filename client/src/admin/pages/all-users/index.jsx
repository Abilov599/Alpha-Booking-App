// import React, { useEffect } from "react";
// import { Table } from "antd";
// import "./index.scss";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllUsers } from "./../../../../../server/controllers/User";

// const AllUsers = () => {
//   // const { loading, data, error } = useSelector((state) => state.fetchAllUsers);
//   // const dispatch = useDispatch();

//   // useEffect(() => {
//   //   dispatch(getAllUsers());
//   // }, [dispatch]);

//   const columns = [
//     {
//       title: "name",
//       dataIndex: "name",
//     },
//     {
//       title: "Chinese Score",
//       dataIndex: "chinese",
//       sorter: {
//         compare: (a, b) => a.chinese - b.chinese,
//         multiple: 3,
//       },
//     },
//     {
//       title: "Math Score",
//       dataIndex: "math",
//       sorter: {
//         compare: (a, b) => a.math - b.math,
//         multiple: 2,
//       },
//     },
//     {
//       title: "English Score",
//       dataIndex: "english",
//       sorter: {
//         compare: (a, b) => a.english - b.english,
//         multiple: 1,
//       },
//     },
//   ];

//   const onChange = (pagination, filters, sorter, extra) => {
//     console.log("params", pagination, filters, sorter, extra);
//   };
//   return <Table columns={columns} dataSource={data} onChange={onChange} />;
// };

// export default AllUsers;
