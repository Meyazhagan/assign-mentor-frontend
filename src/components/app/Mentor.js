import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { BatchContext } from "../../context/BatchContext";
import { MentorContext } from "../../context/MentorContext";

function Mentor() {
  const { mentors, remove } = useContext(MentorContext);
  const { setCurrentBatch } = useContext(BatchContext);
  const navigate = useNavigate();
  const batch_id = useParams().batchId;

  useEffect(() => {
    setCurrentBatch(batch_id);
  }, [batch_id, setCurrentBatch]);

  const handleToMentor = (id) => {
    navigate(id);
  };

  const handleDelete = (id) => {
    remove(id);
  };
  const handleToCreate = () => {
    navigate(`mentor/create`);
  };

  const handleToEdit = (id) => {
    navigate(`mentor/edit/${id}`);
  };

  return (
    <div className=" w-full overflow-auto whitespace-nowrap">
      <button
        onClick={handleToCreate}
        className="font-bold text-blue-700 border-2 px-4 py-2 rounded 
            border-blue-700 text-sm hover:bg-blue-700 hover:text-white
            "
      >
        Create New Mentor
      </button>
      <table className="w-full">
        <thead>
          <tr className="border-b-4">
            <th className="p-4">#</th>
            <th className="p-4">Mentor Name</th>
            <th className="p-4">Mentor Email</th>
            <th className="p-4">Role</th>
            <th className="p-4">Experience</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {mentors.map((m, index) => (
            <tr className="border-t-2 hover:bg-gray-100" key={index}>
              <td className="p-4 text-center">{index + 1}</td>
              <td
                onClick={() => handleToMentor(m._id)}
                className="p-4 text-center cursor-pointer hover:text-blue-800 "
              >
                {m.name}
              </td>
              <td className="p-4 text-center">{m.email}</td>
              <td className="p-4 text-center">{m.role.join(", ")}</td>
              <td className="p-4 text-center">{m.experience}</td>
              <td className=" text-center">
                <button
                  onClick={() => handleToEdit(m._id)}
                  className="font-bold text-green-600 
                     hover:bg-gray-200 py-2 px-4
                     rounded-md"
                >
                  Edit
                </button>
              </td>
              <td className="text-center pr-4">
                <button
                  onClick={() => handleDelete(m._id)}
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
    </div>
  );
}

export default Mentor;
