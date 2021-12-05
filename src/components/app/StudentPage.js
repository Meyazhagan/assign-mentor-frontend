import classNames from "classnames";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { BatchContext } from "../../context/BatchContext";
import { MentorContext } from "../../context/MentorContext";
import { StudentContext } from "../../context/StudentContext";
import MentorToStudent from "../common/MentorToStudent";

function StudentPage() {
  const { current, get, assign, unassign } = useContext(StudentContext);
  const { get: getBatch } = useContext(BatchContext);
  const { get: getMentor, mentors } = useContext(MentorContext);

  const [assignToggler, setAssignToggler] = useState(false);

  const navigate = useNavigate();
  const params = useParams();
  const batch_id = params.batchId;
  const student_id = params.studentId;

  // const getStudent = async () => {
  //   const student = await get(student_id);
  //   console.log(student);
  //   setStudent(student);
  // };
  useEffect(() => {
    get(student_id);
  }, [student_id, get]);

  const handleAssign = (mentor_id) => {
    assign(student_id, mentor_id);
  };
  const handleUnassign = () => {
    unassign(student_id);
  };
  return (
    <div>
      <div className="flex justify-between items-center flex-wrap">
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
          <div>Student Name - {current?.name}</div>
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
            Assign Mentor
          </button>
        </div>
      </div>
      <div className="">
        <div className="overflow-auto whitespace-nowrap">
          {current?.mentor ? (
            <MentorToStudent
              mentors={[getMentor(current?.mentor)]}
              actionLable={"Unassign"}
              onSubmit={handleUnassign}
              title={`Mentor Assigned to Student ${current?.name}`}
            />
          ) : (
            <div className="mt-10">There is No Mentor assigned. </div>
          )}
        </div>
        <div className="overflow-auto whitespace-nowrap">
          {assignToggler &&
            (mentors.length > 0 ? (
              <MentorToStudent
                skip={current.mentor}
                mentors={mentors}
                actionLable={"Assign"}
                onSubmit={handleAssign}
                title={`All Mentors in Batch - ${getBatch(batch_id)?.name}`}
              />
            ) : (
              <div className="mt-10">There is no Mentor.</div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default StudentPage;
