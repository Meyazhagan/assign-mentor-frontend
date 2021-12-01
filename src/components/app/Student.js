import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { MentorContext } from "../../context/MentorContext";
import { StudentContext } from "../../context/StudentContext";

function Student() {
  const { students, fetchAll, remove } = useContext(StudentContext);
  const { get } = useContext(MentorContext);
  const batch_id = useParams().batchId;
  const navigate = useNavigate();

  const handleToMentor = (id) => {
    navigate(`student/${id}`);
  };

  const handleDelete = (id) => {
    remove(id);
  };
  const handleToCreate = () => {
    navigate(`student/create`);
  };

  const handleToEdit = (id) => {
    navigate(`student/edit/${id}`);
  };

  useEffect(
    () => {
      fetchAll();
    },
    // eslint-disable-next-line
    [batch_id]
  );

  return (
    <div className="w-full">
      <button
        onClick={handleToCreate}
        className="font-bold text-blue-700 border-2 px-4 py-2 rounded 
      border-blue-700 text-sm hover:bg-blue-700 hover:text-white
      "
      >
        Create New Student
      </button>
      <div className="w-full overflow-auto whitespace-nowrap">
        {students.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr className="border-b-4">
                <th className="p-4">#</th>
                <th className="p-4">Student Name</th>
                <th className="p-4">Student Email</th>
                <th className="p-4">Level</th>
                <th className="p-4">Course</th>
                <th className="p-4">Assigned</th>
                <th className="p-4">To</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, index) => (
                <tr className="border-t-2 hover:bg-gray-100" key={index}>
                  <td className="p-4 text-center">{index + 1}</td>
                  <td
                    onClick={() => handleToMentor(s._id)}
                    className="p-4 text-center cursor-pointer hover:text-blue-800 "
                  >
                    {s.name}
                  </td>
                  <td className="p-4 text-center">{s.email}</td>
                  <td className="p-4 text-center capitalize">{s.level}</td>
                  <td className="p-4 text-center">{s.course}</td>
                  <td className="p-4 text-center">{s.mentor ? "Yes" : "No"}</td>
                  <td className="p-4 text-center">
                    {s.mentor && get(s.mentor)?.name}
                  </td>
                  <td className=" text-center">
                    <button
                      onClick={() => handleToEdit(s._id)}
                      className="font-bold text-green-600
                       hover:bg-gray-200 py-2 px-4
                       rounded-md"
                    >
                      Edit
                    </button>
                  </td>
                  <td className="text-center pr-4">
                    <button
                      onClick={() => handleDelete(s._id)}
                      className="font-bold text-red-600
                   hover:bg-gray-200 px-4 py-2 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="mt-4">
            There is no Student Present. Add new Student.
          </div>
        )}
      </div>
    </div>
  );
}

export default Student;
