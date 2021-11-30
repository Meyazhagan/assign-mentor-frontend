import { useFormik } from "formik";
import React from "react";
import Input from "./Input";

function StudentForm() {
  const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = "Batch Name is required";
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      course: "",
      level: "",
    },
    onSubmit,
    validate,
  });
  return (
    <form className="p-6">
      <Input
        type="text"
        name="name"
        id="name"
        label="Mentor Name"
        placeHolder="Enter the mentor name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && formik.errors.name}
      />
      <Input
        type="text"
        name="email"
        id="email"
        label="Email"
        placeHolder="Enter the email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && formik.errors.email}
      />
      <Input
        type="text"
        name="experience"
        id="experience"
        label="Batch experience"
        placeHolder="Enter the batch experience"
        value={formik.values.experience}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.experience && formik.errors.experience}
      />
    </form>
  );
}

export default StudentForm;
