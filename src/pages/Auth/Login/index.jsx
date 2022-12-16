import { Modal } from "antd";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import landmark from "../../../assests/landmark.png";
import * as Yup from "yup";
import FormikControl from "../../../components/formikCustom/FormikControl.jsx";
import AuthAPI from "../../../api/authAPI";
import { toast } from "react-toastify";
import { ee } from "../../3DView/AskForCommentDialog";

const validationSchema = Yup.object({
  email: Yup.string().required("Enter your email"),
  password: Yup.string().required("Enter your password"),
});

const initialValues = {
  email: "",
  password: "",
};

const Login = ({ isShow, onOk, onCancel }) => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const result = await AuthAPI.login(values);
      console.log(values);
      console.log("result", result);
      if (result.success) {
        localStorage.setItem("userInfo", JSON.stringify(result.userInfo || {}));
        toast.success("Login successfully!");
        ee.emit("login", "Open Login Dialog");
        onOk();
      } else {
        toast.error(result.response.data.message);
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
          <div className="flex flex-col gap-2">
            <div className="flex justify-center">
              <img src={landmark} alt="" className="w-40" />
            </div>
            <h3 className="flex justify-center text-[23px] mt-2 font-header">
              SIGN IN
            </h3>
            <div>
              <FormikControl
                placeholder="Enter your email"
                control="input"
                type="text"
                label="Email"
                name="email"
              />

              <FormikControl
                placeholder="**************"
                control="input"
                type="password"
                label="Password"
                name="password"
              />
            </div>

            <div className="flex gap-2 items-center justify-end">
              <button
                type="submit"
                className=" rounded px-4 w-full bg-blue-900 py-2"
              >
                Sign In
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
};

export default Login;
