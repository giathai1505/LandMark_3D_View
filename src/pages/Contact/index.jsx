import React from "react";
import Header from "../../components/Header";
import landmark from "../../assets/images/landmark.png";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormikControl from "../../components/formikCustom/FormikControl";
import ContactAPI from "../../api/contactAPI";
import { toast } from "react-toastify";
import { Footer } from "../../components/Footer";

const validationSchema = Yup.object({
  name: Yup.string().required("Enter your name"),
  email: Yup.string().required("Enter your email"),
  message: Yup.string().required("Enter your message"),
});

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const handleSubmit = async (values) => {
    try {
      const result = await ContactAPI.create({
        name: values.name,
        content: values.message,
      });
      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    } catch (error) {}
  };
  return (
    <div>
      <Header />
      <div className="grid grid-cols-2 pt-[150px] h-[800px] mx-[400px]">
        <div className="col-span-1">
          <img src={landmark} alt="" />
        </div>
        <div className="col-span-1">
          <Formik
            initialValues={initialValues}
            enableReinitialize
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="flex flex-col gap-2">
                <h3 className="flex justify-center text-[23px] mt-2 font-header">
                  CONTACT US
                </h3>
                <div>
                  <FormikControl
                    placeholder="Enter your name"
                    control="input"
                    type="text"
                    label="Full name"
                    name="name"
                  />

                  <FormikControl
                    placeholder="giathai1505@gmail.com"
                    control="input"
                    type="text"
                    label="Email"
                    name="email"
                  />

                  <FormikControl
                    placeholder="message"
                    control="textarea"
                    type="text"
                    label="Message"
                    name="message"
                    className="text-[14px]"
                  />
                </div>

                <div className="flex gap-2 items-center justify-end">
                  <button
                    type="submit"
                    className=" rounded px-4 w-full bg-blue-900 py-2"
                  >
                    Send
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
