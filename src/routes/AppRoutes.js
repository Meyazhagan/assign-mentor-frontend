import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Batch from "../components/app/Batch";
import BatchCreate from "../components/app/BatchCreate";
import BatchEdit from "../components/app/BatchEdit";
import BatchPage from "../components/app/BatchPage";
import MentorCreate from "../components/app/MentorCreate";
import MentorEdit from "../components/app/MentorEdit";
import MentorPage from "../components/app/MentorPage";
import StudentCreate from "../components/app/StudentCreate";
import StudentEdit from "../components/app/StudentEdit";
import StudentPage from "../components/app/StudentPage";
import BatchRoutes from "./BatchRoutes";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/batch" element={<Batch />} />
        <Route path="/batch/create" element={<BatchCreate />} />
        <Route path="/batch/edit/:batchId/" element={<BatchEdit />} />
        <Route path="/batch/:batchId/" element={<BatchRoutes />}>
          <Route path="" element={<BatchPage />} />
          <Route path="mentor/:mentorId" element={<MentorPage />} />
          <Route path="mentor/create" element={<MentorCreate />} />
          <Route path="mentor/edit/:mentorId" element={<MentorEdit />} />

          {/* <Route path="" element={} /> */}
          <Route path="student/:studentId" element={<StudentPage />} />
          <Route path="student/create" element={<StudentCreate />} />
          <Route path="student/edit/:studentId" element={<StudentEdit />} />
        </Route>
        <Route path="/" element={<Navigate to="/batch" />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default AppRoutes;
