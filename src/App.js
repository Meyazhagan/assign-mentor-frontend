import React from "react";
import BatchProvider from "./context/BatchContext";
import MentorProvider from "./context/MentorContext";
import StudentProvider from "./context/StudentContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BatchProvider>
      <MentorProvider>
        <StudentProvider>
          <div className="min-h-screen flex flex-col p-5">
            <div className=" shadow-2xl p-10 rounded-xl min-h-screen">
              <AppRoutes />
            </div>
          </div>
        </StudentProvider>
      </MentorProvider>
    </BatchProvider>
  );
}

export default App;
