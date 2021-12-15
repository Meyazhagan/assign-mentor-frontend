import React, { createContext, useEffect, useState } from "react";

import mentorServices from "../services/MentorServices";
import assignServices from "../services/AssignServices";
import unassignServices from "../services/UnassignServices";

import { Toastify } from "../services/ToastServices";

export const MentorContext = createContext();

function MentorProvider({ children }) {
    const [mentors, setMentors] = useState([]);
    const [assignedStudents, setAssignedStudents] = useState([]);
    const [unassignedStudents, setUnAssignedStudents] = useState([]);

    const getIndex = (id) => mentors.findIndex((b) => b._id === id);

    const fetchAll = async () => {
        try {
            const { data: mentors } = await mentorServices.getALl();
            setMentors(mentors);
        } catch (ex) {}
    };

    const get = (id) => {
        const index = getIndex(id);
        return mentors[index];
    };

    const create = async (newMentor) => {
        const prevMentor = mentors;

        Toastify(mentorServices.create(newMentor), {
            pending: "Creating the New Mentor",

            onSuccess: ({ data }) => {
                setMentors([...mentors, data]);
                return "Created The New Mentor";
            },

            onError: (data) => {
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

        Toastify(mentorServices.update(id, updatedMentor), {
            pending: "Updating the Mentor",

            onSuccess: () => {
                return "Updated the Mentor";
            },

            onError: (data) => {
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

        // toast message - promise
        Toastify(mentorServices.remove(id), {
            pending: "Deleting the Mentor",

            onSuccess: () => {
                return "Deleted the Mentor";
            },

            onError: (data) => {
                setMentors(prevMentors);
                return data?.response?.data?.message || "An Unexpected Error";
            },
        });
    };

    const getAssignedStudents = async (mentorId) => {
        try {
            const { data: assigned } = await assignServices.getAll(mentorId);
            setAssignedStudents(assigned);
        } catch (ex) {}
    };

    const getUnassignedStudents = async () => {
        try {
            const { data: unassigned } = await unassignServices.getAll();
            setUnAssignedStudents(unassigned);
        } catch (ex) {}
    };

    const assignStudents = async (mentorId, studentIds) => {
        Toastify(assignServices.many({ mentorId, studentIds }), {
            pending: "Assigning Students to Mentor",

            onSuccess: ({ data }) => {
                getAssignedStudents(mentorId);
                getUnassignedStudents();
                return "Assigned Students to Mentor";
            },

            onError: (data) => {
                return data?.response?.data?.message || "An Unexpected Error";
            },
        });
    };

    const unassignStudents = async (mentorId, studentIds) => {
        Toastify(unassignServices.many({ studentIds }), {
            pending: "UnAssigning Students",

            onSuccess: ({ data }) => {
                getAssignedStudents(mentorId);
                getUnassignedStudents();
                return "UnAssigned the Students";
            },

            onError: (data) => {
                return data?.response?.data?.message || "An Unexpected Error";
            },
        });
    };

    // useEffect(
    //   () => {
    //     fetchAll();
    //   },
    //   // eslint-disable-next-line
    //   [batch_id]
    // );

    useEffect(
        () => {
            fetchAll();
        },
        // eslint-disable-next-line
        []
    );

    return (
        <MentorContext.Provider
            value={{
                get,
                fetchAll,
                mentors,
                create,
                update,
                remove,
                assignedStudents,
                unassignedStudents,
                getAssignedStudents,
                getUnassignedStudents,
                assignStudents,
                unassignStudents,
            }}>
            {children}
        </MentorContext.Provider>
    );
}

export default MentorProvider;
