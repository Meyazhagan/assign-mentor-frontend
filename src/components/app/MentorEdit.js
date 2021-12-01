import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MentorContext } from "../../context/MentorContext";
import MentorForm from "../common/MentorForm";

function MentorEdit() {
  const { update, get } = useContext(MentorContext);
  const navigate = useNavigate();
  const mentor_id = useParams().mentorId;
  const handleSubmit = (values) => {
    update(mentor_id, values);
    navigate("../");
  };
  return (
    <div className="md:w-4/6 md:mx-auto w-full">
      <h2 className="text-xl font-bold mb-6">Edit Mentor</h2>
      <MentorForm
        initialValues={get(mentor_id)}
        onSubmit={handleSubmit}
        onCancel={() => navigate("../")}
      />
    </div>
  );
}

export default MentorEdit;
