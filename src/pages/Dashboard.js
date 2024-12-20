import React from "react";
import Sidebar from "../components/Sidebar";
import ProgressBar from "../components/ProgressBar";
import ClaimForm from "../components/ClaimForm";

const Dashboard = () => {
  return (
    <div className="flex bg-gray-100 h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-grow p-6">
        {/* Company Logo and Name */}
        <div className="flex items-center mb-6">
          <img
            src="https://via.placeholder.com/40" 
            alt="Jur Logo"
            className="h-10 w-10"
          />
          <h1 className="text-2xl font-extrabold text-blue-600 tracking-wide ml-3">
            Jur
          </h1>
        </div>

        {/* Welcome Section */}
        <h2 className="text-xl font-bold mb-6">Welcome to Jur Dashboard</h2>

        {/* Progress Bar Section */}
        <div className="mb-8">
          <ProgressBar progress={50} /> {/* Adjust the progress dynamically */}
        </div>

        {/* Claim Form Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <ClaimForm />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;