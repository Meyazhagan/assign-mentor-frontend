import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Batch from "../components/app/Batch";
import BatchCreate from "../components/app/BatchCreate";
import BatchEdit from "../components/app/BatchEdit";
import BatchPage from "../components/app/BatchPage";
import Mentor from "../components/app/Mentor";
import MentorCreate from "../components/app/MentorCreate";
import MentorEdit from "../components/app/MentorEdit";
import MentorPage from "../components/app/MentorPage";
import Student from "../components/app/Student";
import StudentCreate from "../components/app/StudentCreate";
import StudentEdit from "../components/app/StudentEdit";
import StudentPage from "../components/app/StudentPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/batch" element={<Batch />} />
        <Route path="/batch/create" element={<BatchCreate />} />
        <Route path="/batch/edit/:id/" element={<BatchEdit />} />
        <Route path="/batch/:batchId/" element={<BatchPage />}>
          <Route
            path=""
            element={
              <>
                <Mentor />
                <Student />
              </>
            }
          />
          <Route path="mentor/:id" element={<MentorPage />} />
          <Route path="mentor/create" element={<MentorCreate />} />
          <Route path="mentor/edit/:id" element={<MentorEdit />} />

          {/* <Route path="" element={} /> */}
          <Route path="student/:id" element={<StudentPage />} />
          <Route path="student/create" element={<StudentCreate />} />
          <Route path="student/edit/:id" element={<StudentEdit />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default AppRoutes;