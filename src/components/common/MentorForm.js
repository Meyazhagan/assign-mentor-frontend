import { useFormik } from "formik";
import React from "react";
import Input from "./Input";
import SelectInput from "./Select";

const role = [
  "HTML",
  "CSS",
  "JAVA SCRIPT",
  "REACT",
  "NODE JS",
  "AWS",
  "MONGO DB",
  "EXPRESS",
  "FRONTEND",
  "BACKEND",
];

function MentorForm({ initialValues, onSubmit, onCancel }) {
  const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = "Mentor Name is required";
    if (!values.email) errors.email = "Mentor Email is required";
    if (!values.role) errors.role = "Role is required";
    else if (values.role.length < 3) errors.role = "Select Atleast 3 roles";
    if (!values.experience) errors.experience = "Experience is required";
    return errors;
  };
  const formik = useFormik({
    initialValues,
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
        label="Mentor Email"
        placeHolder="Enter the email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && formik.errors.email}
      />
      <SelectInput
        multiple={true}
        name="role"
        id="role"
        label="Role"
        placeHolder="Enter the role"
        options={role}
        value={formik.values.role}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.role && formik.errors.role}
      />
      <Input
        type="text"
        name="experience"
        id="experience"
        label="Experience"
        placeHolder="Enter the experience"
        value={formik.values.experience}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.experience && formik.errors.experience}
      />
      <div className="flex flex-row-reverse">
        <button
          type="submit"
          onClick={formik.handleSubmit}
          className="font-bold px-4 py-2 hover:bg-gray-100 rounded-md text-green-600"
        >
          Submit
        </button>
        <button
          onClick={onCancel}
          className="font-bold px-4 py-2 hover:bg-gray-100 rounded-md text-red-600"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default MentorForm;
