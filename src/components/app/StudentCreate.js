import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StudentContext } from "../../context/StudentContext";
import StudentForm from "../common/StudentForm";

function StudentCreate() {
  const { create } = useContext(StudentContext);
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    create(values);
    navigate("../");
  };
  return (
    <div className="md:w-4/6 md:mx-auto w-full">
      <h2 className="text-xl font-bold mb-6">Create Student</h2>
      <StudentForm
        initialValues={{ name: "", email: "", level: "", course: "" }}
        onSubmit={handleSubmit}
        onCancel={() => navigate("../")}
      />
    </div>
  );
}

export default StudentCreate;
