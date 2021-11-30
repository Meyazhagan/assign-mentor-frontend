import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { BatchContext } from "../../context/BatchContext";
import BatchForm from "../common/BatchForm";

function BatchCreate() {
  const { create } = useContext(BatchContext);
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    create(values);
    navigate("/batch");
  };
  return (
    <div className="md:w-4/6 md:mx-auto w-full">
      <h2 className="text-xl font-bold mb-6">Create Batch</h2>
      <BatchForm
        initialValues={{ name: "" }}
        onSubmit={handleSubmit}
        onCancel={() => navigate("/batch")}
      />
    </div>
  );
}

export default BatchCreate;
