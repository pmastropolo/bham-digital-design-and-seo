import React from 'react';
  import { useForm, ValidationError } from '@formspree/react';
  function ContactForm() {
    const [state, handleSubmit] = useForm("mqkrznkv");
    if (state.succeeded) {
        return <p>We will reach out to you soon!</p>;
    }
  

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
      <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
      <input
        id="phone"
        type="tel"
        name="phone"
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      />
      <ValidationError
        prefix="Phone Number"
        field="phone"
        errors={state.errors}
        className="text-red-500"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="businessName" className="block text-gray-700">Business Name</label>
      <input
        id="businessName"
        type="text"
        name="businessName"
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      />
      <ValidationError
        prefix="Business Name"
        field="businessName"
        errors={state.errors}
        className="text-red-500"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="companyWebsite" className="block text-gray-700">Company Website URL</label>
      <input
        id="companyWebsite"
        type="url"
        name="companyWebsite"
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      />
      <ValidationError
        prefix="Company Website"
        field="companyWebsite"
        errors={state.errors}
        className="text-red-500"
      />
    </div>



          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700">Address</label>
            <input
              id="address"
              type="text"
              name="address"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            <ValidationError
              prefix="Address"
              field="address"
              errors={state.errors}
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="projectDescription" className="block text-gray-700">Project Description</label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            <ValidationError
              prefix="Project Description"
              field="projectDescription"
              errors={state.errors}
              className="text-red-500"
            />
          </div>
          <button type="submit" disabled={state.submitting} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            {state.submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      );
    }
    
    export default ContactForm;