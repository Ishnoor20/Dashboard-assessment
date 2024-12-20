import React from 'react';

const ProgressBar = () => {
  const steps = [
    "Preliminary",
    "Your Details",
    "KYC",
    "Parties",
    "Claim",
    "Review",
    "Payment",
  ];

  return (
    <div className="flex justify-between items-center my-4">
      {steps.map((step, index) => (
        <div key={index} className="text-center">
          <div
            className={`h-8 w-8 rounded-full mx-auto ${
              index < 3 ? "bg-blue-500 text-white" : "bg-gray-300"
            } flex items-center justify-center`}
          >
            {index + 1}
          </div>
          <p className="text-sm">{step}</p>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
