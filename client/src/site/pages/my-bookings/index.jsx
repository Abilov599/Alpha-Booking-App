import { Button, message, Popconfirm, Space, Spin, Table } from "antd";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBookingsByUserId } from "../../../redux/slice/getBookingsByUserId";
import "./index.scss";

const MyBookings = () => {
  const { userID } = useParams();
  const { loading, data, error } = useSelector(
    (state) => state.getBookingsByUserId
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookingsByUserId(userID));
  }, [dispatch]);

  const confirm = (id) => {
    axios.patch();
    message.success("Booking Canceled");
  };

  const columns = [
    {
      title: "Room Image",
      dataIndex: "room",
      render: (room) => (
        <img style={{ width: "200px" }} src={room.thumbnailImage} alt="" />
      ),
    },
    {
      title: "ID",
      dataIndex: "_id",
    },
    {
      title: "Room Type",
      dataIndex: "room",
      render: (room) => <p>{room.type}</p>,
    },
    {
      title: "Check in Date",
      dataIndex: "checkInDate",
    },
    {
      title: "Check Out Date",
      dataIndex: "checkOutDate",
    },
    {
      title: "Total Days",
      dataIndex: "totalDays",
    },
    {
      title: "Adults",
      dataIndex: "adultCount",
    },
    {
      title: "Children",
      dataIndex: "childCount",
    },
    {
      title: "Booked at",
      dataIndex: "createdAt",
    },
    {
      title: "Total Amount",
      dataIndex: "totalAmount",
      render: (price) => <p>{`${price}$`}</p>,
    },
    {
      title: "Cancel Booking",
      dataIndex: "_id",
      render: (id) => (
        <Popconfirm
          placement="bottomRight"
          title={"Are you sure?"}
          description={"Are you sure to cancel booking?"}
          onConfirm={() => confirm(id)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary" danger>
            Cancel
          </Button>
        </Popconfirm>
      ),
    },
  ];

  {
    return loading ? (
      <Space size="middle">
        <Spin size="small" />
        <Spin />
        <Spin size="large" />
      </Space>
    ) : (
      data?.map((bookings, i) => {
        const booking = [bookings];
        console.log(booking);
        return (
          <Table
            key={i}
            rowKey="_id"
            dataSource={booking}
            columns={columns}
            pagination={false}
          />
        );
      })
    );
  }
};

export default MyBookings;
