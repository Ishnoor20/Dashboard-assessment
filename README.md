A responsive and user-friendly Claim Form Dashboard designed to simplify the claim process. This project uses React.js to implement a modular, scalable, and functional dashboard.

Features
	•	Claim Value Section: Input fields for contract and claim values.
	•	Statement Section: Allows users to write a statement or upload a PDF.
	•	Place Section: A searchable input field to select places and confirm agreement details.
	•	Language Section: Dropdown to select the language for proceedings with a confirmation option.
	•	Agreement Under Disputes: File upload for contracts and arbitration agreements.
	•	Additional Documentation: File upload for any extra documents.

Approach to Building the Dashboard
	1.	Component-Based Design:
	•	Used React.js to split the dashboard into reusable components (Sidebar, ProgressBar, and ClaimForm).
	•	Each section of the form (Claim Value, Statement, etc.) was implemented as a separate functional unit within the ClaimForm.
	2.	Styling:
	•	Applied Tailwind CSS for consistent and modern styling.
	•	Maintained a blue theme for a professional and cohesive look.
	3.	Icons and Design:
	•	Integrated React Icons for visual appeal and better usability.
	•	Used subtle hover effects and font weights to differentiate headings, subheadings, and sidebar items.
	4.	Dynamic and Validated Form:
	•	Added validations for file uploads (PDF format, size limit).
	•	Enabled dynamic functionalities such as dropdowns, searchable fields, and radio buttons.
	5.	Responsiveness:
	•	Ensured the layout adapts seamlessly to various screen sizes (desktop, tablet, mobile) using responsive utilities in Tailwind CSS.

Challenges Faced and Solutions
	1.	Maintaining Functionalities While Improving Design:
	•	Challenge: Balancing between adding visual improvements and preserving the existing functionalities.
	•	Solution: Modularized components to isolate functionality and ensure the design updates didn’t interfere with the logic.
	2.	File Upload Validation:
	•	Challenge: Ensuring uploaded files are PDFs and under 2 MB.
	•	Solution: Added client-side validation using JavaScript to alert users of invalid files before submission.
	3.	Dynamic Fields and Reusability:
	•	Challenge: Adding flexibility for features like searchable inputs and dropdowns.
	•	Solution: Used reusable React components for dynamic fields, reducing duplication and improving maintainability.
	4.	GitHub Repository Management:
	•	Challenge: Managing updates and large file exclusions.
	•	Solution: Configured a .gitignore file to exclude node_modules and other unnecessary files.

Assumptions Made
	1.	File Upload Limits:
	•	Assumed the maximum file size for uploads is 2 MB.
	•	Only PDF files are allowed for upload.
	2.	Predefined Lists:
	•	Places and languages are predefined arrays (["New York", "London", ...] and ["English", "French", ...]) for simplicity.
	3.	Blue Theme:
	•	Assumed a blue color scheme aligns with the project’s professional requirements.
	4.	Users Have Node.js Installed:
	•	Assumed the user has Node.js installed locally to run the application.

How to Run the Project

	1.	Clone the Repository:
git clone https://github.com/Ishnoor20/Dashboard-assessment.git

	2.	Install Dependencies:
Navigate to the project directory and run:
npm install

	3.	Start the Development Server:
npm start

	4.	Open http://localhost:3000 in your browser to view the dashboard.
Future Improvements
	•	Add backend integration for saving user data.
	•	Implement form submission with APIs.
	•	Improve form validation for better UX.
