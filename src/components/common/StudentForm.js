import { useFormik } from "formik";
import React from "react";
import Input from "./Input";
import SelectInput from "./Select";

function StudentForm({ initialValues, onSubmit, onCancel }) {
  const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = "Student Name is required";
    if (!values.email) errors.email = "Student Email is required";
    if (!values.level) errors.level = "Level is required";
    if (!values.course) errors.course = "Course is required";
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
        label="Student Name"
        placeHolder="Enter the Student name"
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
      <SelectInput
        name="level"
        id="level"
        label="Level"
        placeHolder="Select the Level"
        options={["beginner", "intermediate", "advanced"]}
        value={formik.values.level}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.level && formik.errors.level}
      />
      <Input
        type="text"
        name="course"
        id="course"
        label="Course"
        placeHolder="Enter the course"
        value={formik.values.course}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.course && formik.errors.course}
      />
      <div className="flex flex-row-reverse">
        <button
          type="submit"
          onClick={formik.handleSubmit}
          className="font-bold px-4 py-2 
          hover:bg-gray-100 focus:outline-none focus:bg-gray-100
          rounded-md text-green-600"
        >
          Submit
        </button>
        <button
          onClick={onCancel}
          className="font-bold px-4 py-2 
          hover:bg-gray-100 focus:bg-gray-100 focus:outline-none
          rounded-md text-red-600"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default StudentForm;
