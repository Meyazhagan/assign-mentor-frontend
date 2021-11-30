import React, { createContext } from "react";

export const StudentContext = createContext();

function StudentProvider({ children }) {
  return (
    <StudentContext.Provider value={{}}>{children}</StudentContext.Provider>
  );
}

export default StudentProvider;
