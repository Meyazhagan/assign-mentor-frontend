import classNames from "classnames";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { BatchContext } from "../../context/BatchContext";
import { MentorContext } from "../../context/MentorContext";
import StudentToMentor from "../common/StudentToMentor";

function MentorPage() {
  const {
    assignedStudents,
    unassignedStudents,
    getAssignedStudents,
    unassignStudents: unassign,
    assignStudents: assign,
    getUnassignedStudents,
    get,
  } = useContext(MentorContext);
  const { get: getBatch } = useContext(BatchContext);

  const [assignToggler, setAssignToggler] = useState(false);

  const mentor_id = useParams().mentorId;
  const batch_id = useParams().batchId;
  const navigate = useNavigate();

  const handleUnassign = (selected) => {
    unassign(mentor_id, selected);
  };

  const handleAssign = (selected) => {
    assign(mentor_id, selected);
  };

  useEffect(
    () => {
      getAssignedStudents(mentor_id);
      getUnassignedStudents();
      // getMentor();
    },
    // eslint-disable-next-line
    [mentor_id]
  );

  return (
    <div>
      <div className="flex justify-between items-center p-4 flex-wrap">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("../")}
            className={classNames(
              `font-bold text-red-600
                hover:bg-gray-200 py-2 px-4
                rounded-md`
            )}
          >
            Back
          </button>
          <div>Mentor Name - {get(mentor_id)?.name}</div>
        </div>
        <div>
          <button
            onClick={() => setAssignToggler((prev) => !prev)}
            className={classNames(
              `font-bold text-green-600
                hover:bg-gray-200 py-2 px-4
                rounded-md`
            )}
          >
            Assign Students
          </button>
        </div>
      </div>
      <div className="">
        <div className="overflow-auto whitespace-nowrap">
          {assignedStudents.length > 0 ? (
            <StudentToMentor
              students={assignedStudents}
              actionLable={"Unassign"}
              onSubmit={handleUnassign}
              title={`Students Assigned to Mentor - ${get(mentor_id)?.name}`}
            />
          ) : (
            <div>There is no student assigned. </div>
          )}
        </div>
        <div className="overflow-auto whitespace-nowrap">
          {unassignedStudents.length > 0 ? (
            assignToggler && (
              <StudentToMentor
                students={unassignedStudents}
                actionLable={"Assign"}
                onSubmit={handleAssign}
                title={`Unassigned Students in Batch - ${
                  getBatch(batch_id)?.name
                }`}
              />
            )
          ) : (
            <div>There is no UnAssigned Students. All Student has Mentor. </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MentorPage;
