import classNames from "classnames";
import React, { useState } from "react";
import Check from "./CheckBox";

function StudentToMentor({ students, onSubmit, actionLable, title }) {
  const [selected, setSelected] = useState([]);
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const selected = students.map((s) => s._id);
      setSelected(selected);
    } else {
      setSelected([]);
    }
  };

  const handleSubmit = () => {
    if (selected.length <= 0) return;
    onSubmit(selected);
    setSelected([]);
  };

  const handleChecked = (e, id) => {
    const newSelected = [...selected];
    const index = selected.findIndex((s) => s === id);
    if (index === -1) {
      newSelected.push(id);
    } else {
      newSelected.splice(index, 1);
    }
    setSelected(newSelected);
  };

  const isSelected = (id) => {
    return selected.findIndex((s) => s === id) === -1 ? false : true;
  };
  return (
    <div className=" mt-10">
      <h2 className="mb-3 text-">
        {title}
        <button
          onClick={handleSubmit}
          className={classNames(
            ` font-bold text-red-600
            hover:bg-gray-100 px-4 mx-4
            rounded-md `,
            { hidden: selected.length <= 0 }
          )}
        >
          {actionLable}
        </button>
      </h2>
      <table className="w-full">
        <thead>
          <tr className="border-b-4">
            <th>
              <Check onChange={handleSelectAll} />
            </th>
            <th className="p-4">#</th>
            <th className="p-4">Student Name</th>
            <th className="p-4">Student Email</th>
            <th className="p-4">Assigned To</th>
            <th></th>
            {/* <th className="p-4"></th>
          <th className="p-4"></th> */}
          </tr>
        </thead>
        <tbody>
          {students.map((m, index) => (
            <tr
              onClick={(e) => handleChecked(e, m._id)}
              key={index}
              className="border-t-2 hover:bg-gray-100 cursor-pointer hover:text-blue-800 "
            >
              <th>
                <Check
                  name={m._id}
                  id={m._id}
                  onChange={(e) => handleChecked(e, m._id)}
                  checked={isSelected(m._id)}
                />
              </th>
              <td className="p-4 text-center">{index + 1}</td>
              <td
                // onClick={() => handleToMentor(m._id)}
                className="p-4 text-center cursor-pointer hover:text-blue-800 "
              >
                {m.name}
              </td>
              <td className="p-4 text-center">{m.email}</td>
              <td className="p-4 text-center">
                {m.mentor?.name || (
                  <span className="text-red-600"> Not Assigned</span>
                )}
              </td>
              <td className=" text-center"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentToMentor;
