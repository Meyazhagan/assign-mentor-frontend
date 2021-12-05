import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { BatchContext } from "../../context/BatchContext";
import Mentor from "./Mentor";
import Student from "./Student";

function BatchPage() {
  const batch_id = useParams().batchId;
  const { get } = useContext(BatchContext);
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <button
          onClick={() => navigate("/")}
          className="font-bold text-red-600
                hover:bg-gray-200 py-2 px-4
                rounded-md"
        >
          Back
        </button>
        <div className=" font-bold text-xl">Batch - {get(batch_id)?.name}</div>
      </div>
      <div className="space-y-10">
        <Mentor />
        <Student />
      </div>
    </div>
  );
}

export default BatchPage;
