import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { MentorContext } from "../../context/MentorContext";
import MentorForm from "../common/MentorForm";

function MentorCreate() {
  const { create } = useContext(MentorContext);
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    create(values);
    navigate("../");
  };
  return (
    <div className="md:w-4/6 md:mx-auto w-full">
      <h2 className="text-xl font-bold mb-6">Create Mentor</h2>
      <MentorForm
        initialValues={{ name: "", email: "", role: [], experience: "" }}
        onSubmit={handleSubmit}
        onCancel={() => navigate("../")}
      />
    </div>
  );
}

export default MentorCreate;
