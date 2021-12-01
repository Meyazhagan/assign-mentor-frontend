import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { BatchContext } from "../../context/BatchContext";
import BatchForm from "../common/BatchForm";

function BatchEdit() {
  const { update, get } = useContext(BatchContext);
  const batchId = useParams().batchId;
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    update(batchId, values);
    navigate("/batch");
  };
  return (
    <div className="md:w-4/6 md:mx-auto w-full">
      <h2 className="text-xl font-bold mb-6">Edit Batch</h2>
      <BatchForm
        initialValues={get(batchId)}
        onSubmit={handleSubmit}
        onCancel={() => navigate("/batch")}
      />
    </div>
  );
}

export default BatchEdit;
