import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StudentContext } from "../../context/StudentContext";
import StudentForm from "../common/StudentForm";

function StudentEdit() {
  const { update, get } = useContext(StudentContext);
  const navigate = useNavigate();
  const student_id = useParams().id;
  const handleSubmit = (values) => {
    update(student_id, values);
    navigate("../");
  };
  return (
    <div className="md:w-4/6 md:mx-auto w-full">
      <h2 className="text-xl font-bold mb-6">Edit Student</h2>
      <StudentForm
        initialValues={get(student_id)}
        onSubmit={handleSubmit}
        onCancel={() => navigate("../")}
      />
    </div>
  );
}

export default StudentEdit;
