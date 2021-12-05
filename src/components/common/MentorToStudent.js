import classNames from "classnames";
import React, { useState } from "react";
import Check from "./CheckBox";

function MentorToStudent({ mentors, onSubmit, actionLable, title, skip }) {
  const [selected, setSelected] = useState("");

  //   const handleSelectAll = (e) => {
  //     if (e.target.checked) {
  //       const selected = students.map((s) => s._id);
  //       setSelected(selected);
  //     } else {
  //       setSelected([]);
  //     }
  //   };

  const handleSubmit = () => {
    if (!selected) return;
    onSubmit(selected);
    setSelected("");
  };

  const handleChecked = (e, id) => {
    selected === id ? setSelected("") : setSelected(id);
  };

  const isSelected = (id) => {
    return selected === id;
  };
  return (
    <div className="mt-10">
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
            <th></th>
            <th className="p-4">#</th>
            <th className="p-4">Mentor Name</th>
            <th className="p-4">Mentor Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {mentors.map((m, index) => {
            return (
              m?._id !== skip && (
                <tr
                  onClick={(e) => handleChecked(e, m?._id)}
                  className="border-t-2 hover:bg-gray-100 cursor-pointer hover:text-blue-800 "
                  key={index}
                >
                  <th>
                    <Check
                      onChange={(e) => handleChecked(e, m?._id)}
                      checked={isSelected(m?._id)}
                    />
                  </th>
                  <td className="p-4 text-center">{index + 1}</td>
                  <td className="p-4 text-center ">{m?.name}</td>
                  <td className="p-4 text-center">{m?.email}</td>
                </tr>
              )
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MentorToStudent;
