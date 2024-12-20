import React, { useState } from "react";
import {
  FaBalanceScale,
  FaEdit,
  FaMapMarkerAlt,
  FaLanguage,
  FaFileAlt,
  FaBook,
} from "react-icons/fa";

const ClaimForm = () => {
  const [uploadedFiles, setUploadedFiles] = useState({
    contract: null,
    arbitration: null,
    documentation: null,
    statement: null,
  });

  const [statementText, setStatementText] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [placeAgreement, setPlaceAgreement] = useState(null);
  const [languageAgreement, setLanguageAgreement] = useState(null);

  const currencies = ["USD", "INR", "EUR", "GBP"];
  const languages = ["English", "French", "German", "Spanish", "Hindi"];
  const places = ["New York", "London", "Paris", "Berlin", "Delhi", "Tokyo"];

  const handleFileUpload = (e, fieldName) => {
    const file = e.target.files[0];

    if (file && file.type !== "application/pdf") {
      alert("Only PDF files are allowed.");
      return;
    }

    if (file && file.size > 2 * 1024 * 1024) {
      alert("File size should not exceed 2 MB.");
      return;
    }

    setUploadedFiles((prev) => ({
      ...prev,
      [fieldName]: file,
    }));

  
  };

  const handleStatementTextChange = (e) => {
    setStatementText(e.target.value);
    setUploadedFiles((prev) => ({
      ...prev,
      statement: null,
    }));
  };

  return (
    <div className="bg-white p-6 rounded shadow-lg">
      {/* Claim Value Section */}
      <div className="text-center border border-dashed border-gray-300 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-extrabold mb-4 flex items-center justify-center text-blue-800">
          <FaBalanceScale className="mr-3 text-blue-500" /> Claim Value
        </h3>
        <div className="mb-4">
          <label className="block text-sm mb-2 font-semibold">Contract Value</label>
          <input
            type="text"
            className="border border-gray-300 rounded-lg p-2 w-full"
            placeholder="Enter contract value"
          />
        </div>
        <div>
          <label className="block text-sm mb-2 font-semibold">Claim Value</label>
          <input
            type="text"
            className="border border-gray-300 rounded-lg p-2 w-full"
            placeholder="Enter claim value"
          />
        </div>
      </div>

      {/* Statement Section */}
      <div className="text-center border border-dashed border-gray-300 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-extrabold mb-4 flex items-center justify-center text-blue-800">
          <FaEdit className="mr-3 text-blue-500" /> Statement
        </h3>
        <textarea
          value={statementText}
          onChange={handleStatementTextChange}
          className="border border-gray-300 rounded-lg p-2 w-full"
          rows="4"
          placeholder="Write your statement here (or upload a PDF below)"
        ></textarea>
        <p className="text-sm text-gray-500 mt-2">Or upload a statement as a PDF:</p>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => handleFileUpload(e, "statement")}
          className="mt-2"
        />
        {uploadedFiles.statement && (
          <p className="text-sm text-green-500 mt-2">
            Uploaded: {uploadedFiles.statement.name}
          </p>
        )}
      </div>

      {/* Place Section */}
      <div className="text-center border border-dashed border-gray-300 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-extrabold mb-4 flex items-center justify-center text-blue-800">
          <FaMapMarkerAlt className="mr-3 text-blue-500" /> Place
        </h3>
        <input
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-full"
          placeholder="Select the place for the proceedings"
          list="places"
          value={selectedPlace}
          onChange={(e) => setSelectedPlace(e.target.value)}
        />
        <datalist id="places">
          {places.map((place, index) => (
            <option key={index} value={place} />
          ))}
        </datalist>
        <p className="text-sm mt-4 font-semibold">
          Is the place for the proceedings the one mentioned in the agreement?
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="placeAgreement"
              value="yes"
              onChange={() => setPlaceAgreement(true)}
              checked={placeAgreement === true}
            />
            <span className="ml-2">Yes</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="placeAgreement"
              value="no"
              onChange={() => setPlaceAgreement(false)}
              checked={placeAgreement === false}
            />
            <span className="ml-2">No</span>
          </label>
        </div>
      </div>

      {/* Language Section */}
      <div className="text-center border border-dashed border-gray-300 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-extrabold mb-4 flex items-center justify-center text-blue-800">
          <FaLanguage className="mr-3 text-blue-500" /> Language
        </h3>
        <select
          className="border border-gray-300 rounded-lg p-2 w-full"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <option value="">Select the language for proceedings</option>
          {languages.map((language, index) => (
            <option key={index} value={language}>
              {language}
            </option>
          ))}
        </select>
        <p className="text-sm mt-4 font-semibold">
          Is the language for the proceedings the one mentioned in the agreement?
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="languageAgreement"
              value="yes"
              onChange={() => setLanguageAgreement(true)}
              checked={languageAgreement === true}
            />
            <span className="ml-2">Yes</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="languageAgreement"
              value="no"
              onChange={() => setLanguageAgreement(false)}
              checked={languageAgreement === false}
            />
            <span className="ml-2">No</span>
          </label>
        </div>
      </div>

      {/* Agreement under Disputes Section */}
      <div className="text-center border border-dashed border-gray-300 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-extrabold mb-4 flex items-center justify-center text-blue-800">
          <FaFileAlt className="mr-3 text-blue-500" /> Agreement under Disputes
        </h3>
        <div className="flex justify-between">
          <div className="text-center w-1/2 px-2">
            <p className="font-semibold">Upload Contract</p>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => handleFileUpload(e, "contract")}
              className="mt-2"
            />
          </div>
          <div className="text-center w-1/2 px-2">
            <p className="font-semibold">Arbitration Agreement</p>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => handleFileUpload(e, "arbitration")}
              className="mt-2"
            />
            {uploadedFiles.arbitration && (
              <p className="text-sm text-green-500 mt-2">
                Uploaded: {uploadedFiles.arbitration.name}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Additional Documentation Section */}
      <div className="text-center border border-dashed border-gray-300 p-4 rounded-lg">
        <h3 className="text-lg font-extrabold mb-4 flex items-center justify-center text-blue-800">
          <FaBook className="mr-3 text-blue-500" /> Additional Documentation
        </h3>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => handleFileUpload(e, "documentation")}
          className="mt-2"
        />
        {uploadedFiles.documentation && (
          <p className="text-sm text-green-500 mt-2">
            Uploaded: {uploadedFiles.documentation.name}
          </p>
        )}
      </div>
    </div>
  );
};

export default ClaimForm;