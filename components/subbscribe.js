import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const SubscribeForm = () => {
    const [state, handleSubmit] = useForm("mbjnjogj");
    if (state.succeeded) {
        return <p className="text-green-500">Thanks for joining!</p>;
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 sr-only">
                Email Address
            </label>
            <input
                id="email"
                type="email" 
                name="email"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                           focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                placeholder="Enter your email"
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                className="text-red-600 text-sm mt-1"
            />
            <button 
                type="submit" 
                disabled={state.submitting}
                className="mt-2 sm:mt-0 w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded shadow
                           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 disabled:bg-indigo-300"
            >
                Subscribe
            </button>
        </form>
    );
};

export default SubscribeForm;