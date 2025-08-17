import React from "react";
import AuthorNavbar from "../components/AuthorNavbar";
import AuthorContent from "../components/AuthorContent";

const AuthorDashboard = () => {
  return (
    <>
      <AuthorNavbar />
      <div className="min-h-screen bg-[#F7FBF7] flex flex-col md:flex-row">
        <AuthorContent />
      </div>
    </>
  );
};

export default AuthorDashboard;
