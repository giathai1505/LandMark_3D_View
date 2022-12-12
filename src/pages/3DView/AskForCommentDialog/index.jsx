import { Modal } from "antd";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import landmark from "../../../assests/landmark.png";
import * as Yup from "yup";
import FormikControl from "../../../components/formikCustom/FormikControl.jsx";

import { EventEmitter } from "events";

const validationSchema = Yup.object({
  name: Yup.string().required("Enter your name"),
  email: Yup.string().required("Enter your email"),
});

const initialValues = {
  name: "",
  email: "",
};

export let ee = new EventEmitter();

const AskForLogin = ({ isShow, onOk, onCancel }) => {
  const handleSubmit = async (values, { resetForm }) => {
    onOk(values);
  };

  const handleCloseForm = () => {
    onCancel();
  };

  const handleOpenLoginDialog = (e) => {
    e.preventDefault();
    onCancel();
    ee.emit("message", "Open Login Dialog");
  };

  return (
    <Modal
      className="w-[800px]"
      open={isShow}
      onOk={onOk}
      onCancel={handleCloseForm}
      footer={null}
    >
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="flex flex-col gap-2">
            <div className="flex justify-center">
              <img src={landmark} alt="" className="w-40" />
            </div>
            <button
              className="w-full py-2 bg-blue-900"
              type="text"
              onClick={handleOpenLoginDialog}
            >
              Đăng nhập để bình luận
            </button>
            <div className="flex justify-center my-2">
              <span>________________________</span>
              <span> Hoặc </span>
              <span>________________________</span>
            </div>
            <div>
              <FormikControl
                placeholder="Enter your name"
                control="input"
                type="text"
                label=""
                name="name"
              />

              <FormikControl
                placeholder="Enter your email"
                control="input"
                type="text"
                label=""
                name="email"
              />
            </div>

            <div className="flex gap-2 items-center justify-end">
              <button
                type="submit"
                className=" rounded px-4 w-full bg-blue-900 py-2"
              >
                Gửi bình luận
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
};

export default AskForLogin;
