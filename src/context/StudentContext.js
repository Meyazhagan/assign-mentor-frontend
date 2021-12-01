import React, { createContext, useEffect, useState } from "react";
import { Toastify } from "../services/ToastServices";
import studentServices from "../services/StudentServices";
import { useParams } from "react-router";

export const StudentContext = createContext();

function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);
  const batch_id = useParams().batchId;

  const getIndex = (id) => students.findIndex((b) => b._id === id);

  const fetchAll = async () => {
    try {
      const { data: students } = await studentServices.getALl();
      setStudents(students);
    } catch (ex) {}
  };
  const get = (id) => {
    const index = getIndex(id);
    return students[index];
  };
  const create = async (student) => {
    const prevStudents = students;

    Toastify(studentServices.create(student), {
      pending: "Creating the New Student",
      onSuccess: ({ data }) => {
        setStudents([...students, data]);
        return "Created The New Student";
      },
      onError: (data) => {
        setStudents(prevStudents);
        console.log(data);
        return data?.response?.data?.message || "An Unexpected Error";
      },
    });
  };
  const update = async (id, updatedStudent) => {
    const prevStudents = students;
    const index = getIndex(id);
    const newStudents = [...students];
    newStudents[index] = { ...newStudents[index], ...updatedStudent };
    setStudents(newStudents);

    Toastify(studentServices.update(id, updatedStudent), {
      pending: "Updating the Student",
      onSuccess: () => {
        return "Updated the Student";
      },
      onError: (data) => {
        setStudents(prevStudents);
        return data?.response?.data?.message || "An Unexpected Error";
      },
    });
  };
  const remove = async (id) => {
    const prevStudents = students;
    const index = getIndex(id);
    const newStudents = [...students];
    newStudents.splice(index, 1);
    setStudents(newStudents);

    // toast message - promise
    Toastify(studentServices.remove(id), {
      pending: "Deleting the Student",
      onSuccess: () => {
        return "Deleted the Student";
      },
      onError: (data) => {
        setStudents(prevStudents);
        return data?.response?.data?.message || "An Unexpected Error";
      },
    });
  };

  useEffect(
    () => {
      fetchAll();
    },
    // eslint-disable-next-line
    [batch_id]
  );
  return (
    <StudentContext.Provider
      value={{ get, fetchAll, students, create, update, remove }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export default StudentProvider;
