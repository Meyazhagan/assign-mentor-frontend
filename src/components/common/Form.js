import { useFormik } from "formik";
import React from "react";

function Form({
  children: Children,
  initialValues,
  onSubmit,
  validate,
  ...rest
}) {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
    ...rest,
  });
  return <form>{<Children {...formik} />}</form>;
}

export default Form;
