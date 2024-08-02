
## Contact Form
A simple contact form built with React and React Hook Form.

## Features
Form validation using React Hook Form
Displays error messages for invalid inputs
Clean and organized codebase

## Installation
1. Clone the repository:

2. Navigate to the project directory:

2. cd contact-form
Install the dependencies:

2. npm install
Start the development server:


2. npm run dev
The app will be running at http://localhost:3000.

## Usage
The ContactForm component is the main entry point of the application. It uses the useForm hook from react-hook-form to handle form state and validation.

Here's a breakdown of the component's structure:

The ContactForm component is the main container for the form.
The form is wrapped in a <form> element with the onSubmit handler set to handleSubmit(onSubmit).
Each form field is wrapped in a <div> with the class form-group, which includes the label and the input field.
The input fields use the register function from react-hook-form to register them with the form.
The errors object from the formState is used to display error messages for each field.
The DevTool component from @hookform/devtools is included for debugging purposes.