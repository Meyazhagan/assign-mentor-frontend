import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { BatchContext } from "../../context/BatchContext";

function Batch() {
  const { batch, remove } = useContext(BatchContext);
  const navigate = useNavigate();
  const handleToBatch = (id) => {
    navigate(id);
  };
  const handleDelete = (id) => {
    remove(id);
  };
  const handleToCreate = () => {
    navigate(`create`);
  };

  const handleToEdit = (id) => {
    navigate(`edit/${id}`);
  };

  return (
    <div className=" w-full overflow-auto whitespace-nowrap">
      <button
        onClick={handleToCreate}
        className="font-bold text-blue-700 border-2 px-4 py-2 rounded 
            border-blue-700 text-sm hover:bg-blue-700 hover:text-white
            "
      >
        Create New Batch
      </button>
      <table className="w-full">
        <thead>
          <tr className="border-b-4">
            <th className="p-4">#</th>
            <th className="p-4 w-full">Batch Name</th>
            <th className="p-4"></th>
            <th className="p-4"></th>
          </tr>
        </thead>
        <tbody>
          {batch.map((b, index) => (
            <tr className="border-t-2 hover:bg-gray-100" key={index}>
              <td className="p-4 text-center">{index + 1}</td>
              <td
                onClick={() => handleToBatch(b._id)}
                className="p-4 text-center cursor-pointer hover:text-blue-800 "
              >
                {b.name}
              </td>

              <td className=" text-center">
                <button
                  onClick={() => handleToEdit(b._id)}
                  className="font-bold text-green-600 
                      hover:bg-gray-200 py-2 px-4
                      rounded-md"
                >
                  Edit
                </button>
              </td>
              <td className="text-center pr-4">
                <button
                  onClick={() => handleDelete(b._id)}
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
    //   </div>
    // </div>
  );
}

export default Batch;
