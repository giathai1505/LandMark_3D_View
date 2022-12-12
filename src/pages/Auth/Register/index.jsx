import { Modal } from "antd";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import landmark from "../../../assests/landmark.png";
import * as Yup from "yup";
import FormikControl from "../../../components/formikCustom/FormikControl.jsx";
import AuthAPI from "../../../api/authAPI";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  email: Yup.string().required("Enter your email"),
  username: Yup.string().required("Enter your username"),
  password: Yup.string().required("Enter your password"),
  confirmPassword: Yup.string().required("Enter your password"),
});

const initialValues = {
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

const Register = ({ isShow, onOk, onCancel }) => {
  const handleSubmit = async (values, { resetForm }) => {
    console.log(values);

    try {
      const result = await AuthAPI.register(values);
      if (result.success) {
        toast.success(result.message);
        ee.emit("message", "Open Login Dialog");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseForm = () => {
    onCancel();
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
          <div>
            <div className="flex justify-center">
              <img src={landmark} alt="" className="w-40" />
            </div>
            <h3 className="flex justify-center text-[23px] my-3 font-header">
              SIGN UP
            </h3>
            <FormikControl
              placeholder="Enter email"
              control="input"
              type="text"
              label="Email"
              name="email"
            />
            <FormikControl
              placeholder="Enter your username"
              control="input"
              type="text"
              label="Username"
              name="username"
            />
            <FormikControl
              placeholder="****************"
              control="input"
              type="password"
              label="Password"
              name="password"
            />
            <FormikControl
              placeholder="****************"
              control="input"
              type="password"
              label="Confirm password"
              name="confirmPassword"
            />
          </div>

          <div className="flex gap-2 items-center justify-end">
            <button
              type="submit"
              className=" rounded px-4 w-full bg-blue-900 py-2"
            >
              Sign up
            </button>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
};

export default Register;
