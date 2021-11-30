import React, { createContext, useContext, useEffect, useState } from "react";
import mentorServices from "../services/MentorServices";
import { Toastify } from "../services/ToastServices";
import { BatchContext } from "./BatchContext";

export const MentorContext = createContext();

function MentorProvider({ children }) {
  const [mentors, setMentors] = useState([]);
  const { currentBatch } = useContext(BatchContext);

  const getIndex = (id) => mentors.findIndex((b) => b._id === id);

  const fetchAll = async () => {
    try {
      const headers = { batch_id: currentBatch };
      const { data: mentors } = await mentorServices.getALl(headers);
      setMentors(mentors);
    } catch (ex) {
      console.log(ex);
    }
  };
  const get = (id) => {
    const index = getIndex(id);
    return mentors[index];
  };
  const create = async (newMentor) => {
    const prevMentor = mentors;

    const headers = { batch_id: currentBatch };
    Toastify(mentorServices.create(newMentor, headers), {
      pending: "Creating the New Mentor",
      onSuccess: ({ data }) => {
        setMentors([...mentors, data]);
        return "Created The New Mentor";
      },
      onError: ({ data }) => {
        setMentors(prevMentor);
        return data?.response?.data?.message || "An Unexpected Error";
      },
    });
  };
  const update = async (id, updatedMentor) => {
    const prevMentors = mentors;
    const index = getIndex(id);
    const newMentors = [...mentors];
    newMentors[index] = { ...newMentors[index], ...updatedMentor };
    setMentors(newMentors);

    const headers = { batch_id: currentBatch };
    Toastify(mentorServices.update(id, updatedMentor, headers), {
      pending: "Updating the Mentor",
      onSuccess: () => {
        return "Updated the Mentor";
      },
      onError: ({ data }) => {
        setMentors(prevMentors);
        return data?.response?.data?.message || "An Unexpected Error";
      },
    });
  };
  const remove = async (id) => {
    const prevMentors = mentors;
    const index = getIndex(id);
    const newMentors = [...mentors];
    newMentors.splice(index, 1);
    setMentors(newMentors);

    const headers = { batch_id: currentBatch };
    // toast message - promise
    Toastify(mentorServices.remove(id, headers), {
      pending: "Deleting the Mentor",
      onSuccess: () => {
        return "Deleted the Mentor";
      },
      onError: ({ data }) => {
        setMentors(prevMentors);
        return data?.response?.data?.message || "An Unexpected Error";
      },
    });
  };

  useEffect(
    () => {
      fetchAll();
    },
    // eslint-disable-next-line
    [currentBatch]
  );

  return (
    <MentorContext.Provider
      value={{ get, fetchAll, mentors, create, update, remove }}
    >
      {children}
    </MentorContext.Provider>
  );
}

export default MentorProvider;
