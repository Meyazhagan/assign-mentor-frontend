import { useFormik } from "formik";
import React from "react";
import Input from "./Input";

function BatchForm({ initialValues, onSubmit, onCancel }) {
  const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = "Batch Name is required";
    return errors;
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <form className="">
      <Input
        type="text"
        name="name"
        id="name"
        label="Batch Name"
        placeholder="Enter the batch name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && formik.errors.name}
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

export default BatchForm;
