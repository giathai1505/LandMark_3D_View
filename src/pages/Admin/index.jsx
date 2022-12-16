import { Table } from "antd";
import React, { useEffect, useState } from "react";
import ContactAPI from "../../api/contactAPI";
import Header from "../../components/Header";
import moment from "moment";

const AdminPage = () => {
  const [listContact, setListContact] = useState([]);
  const getAllContact = async () => {
    try {
      const result = await ContactAPI.getAll();

      setListContact(result.comments);
    } catch (error) {}
  };

  useEffect(() => {
    getAllContact();
  }, []);

  const columns = [
    {
      title: "#",
      dataIndex: "stt",
      key: "stt",
      className: "sttRow",
      render: (text, record, index) => <span>{++index}</span>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record, index) => (
        <span>{record.name !== "" ? record.name : record.userId.username}</span>
      ),
    },
    {
      title: "Content",
      dataIndex: "age",
      key: "age",
      render: (text, record, index) => <span>{record.content}</span>,
    },
    {
      title: "Time",
      dataIndex: "address",
      key: "address",
      render: (text, record, index) => (
        <span>{moment(record.createdAt).fromNow()}</span>
      ),
    },
  ];
  return (
    <div>
      <Header />
      <div className="pt-[100px] px-[150px]">
        <h3 className="font-bold font-header text-xxl text-center my-3">
          Contact
        </h3>
        <Table dataSource={listContact} columns={columns} pagination={false} />
      </div>
    </div>
  );
};

export default AdminPage;
