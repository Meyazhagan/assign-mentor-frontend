import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { MentorContext } from "../../context/MentorContext";

function MentorPage() {
  const { assignedStudents, getAssignedStudents, get } =
    useContext(MentorContext);

  const mentor_id = useParams().id;

  useEffect(() => {
    getAssignedStudents(mentor_id);
    // getMentor();
  }, [mentor_id]);

  return (
    <div>
      <div>
        <div>Mentor Name - {get(mentor_id)?.name}</div>
        <div>
          {assignedStudents.length > 0 ? (
            <table className="w-full">
              <thead>
                <tr className="border-b-4">
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th className="p-4">#</th>
                  <th className="p-4">Student Name</th>
                  <th className="p-4">Student Email</th>
                  <th className="p-4">Assigned To</th>
                  {/* <th className="p-4"></th>
                  <th className="p-4"></th> */}
                </tr>
              </thead>
              <tbody>
                {assignedStudents.map((m, index) => (
                  <tr className="border-t-2 hover:bg-gray-100" key={index}>
                    <th>
                      <input type="checkbox" className="" />
                    </th>
                    <td className="p-4 text-center">{index + 1}</td>
                    <td
                      // onClick={() => handleToMentor(m._id)}
                      className="p-4 text-center cursor-pointer hover:text-blue-800 "
                    >
                      {m.name}
                    </td>
                    <td className="p-4 text-center">{m.email}</td>
                    <td className="p-4 text-center">{m.mentor?.name}</td>
                    <td className=" text-center">
                      <button
                        // onClick={() => handleToEdit(m._id)}
                        className="font-bold text-green-600
                         hover:bg-gray-200 py-2 px-4
                         rounded-md"
                      >
                        Unassign
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div>There is no student assigned. </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MentorPage;
