import React from 'react';

const PaymentTerms = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800">Payment Terms and Conditions</h2>
      
      <h3 className="mt-4 text-xl font-medium text-gray-700">Project Initiation Deposit</h3>
      <p className="mt-2 text-gray-600">To commence any project, we require an upfront deposit of 60% of the total project cost. This deposit is necessary to secure your slot in our schedule and allows us to allocate the necessary resources and time to your project. Payment of the deposit is regarded as acceptance of our terms and conditions and signifies the start of the project.</p>
      
      <h3 className="mt-4 text-xl font-medium text-gray-700">Final Payment</h3>
      <p className="mt-2 text-gray-600">The remaining 40% of the project cost is due upon project completion, before the final delivery of the product or service. We will notify you when the project is complete and provide a final invoice for the remaining balance. Prompt payment of this balance ensures that you will receive the final product or service without delay.</p>
      
      <h3 className="mt-4 text-xl font-medium text-gray-700">Payment Methods</h3>
      <p className="mt-2 text-gray-600">We are pleased to offer a variety of convenient payment options through our secure Stripe payment system. Accepted methods include major credit and debit cards (such as Visa, MasterCard, American Express), bank transfers, and digital wallets like Apple Pay and Google Pay. Our goal is to provide you with flexible and secure payment solutions to suit your preferences.</p>
      
      <h3 className="mt-4 text-xl font-medium text-gray-700">Project Completion Criteria</h3>
      <p className="mt-2 text-gray-600">A project is deemed complete upon the fulfillment of all outlined objectives within the agreed project scope. This encompasses the successful execution of deliverables to the clients satisfaction and their formal approval of the final product. Our commitment is to ensure that all specified criteria are met to provide a conclusive and satisfactory project conclusion for our clients.</p>
      
      <h3 className="mt-4 text-xl font-medium text-gray-700">Late Payment</h3>
      <p className="mt-2 text-gray-600">In instances of delayed payment, we are entitled to impose a late payment fee or interest charges. Specific details of these charges, including the rate and conditions, will be outlined in our initial agreement. This policy is in place to encourage timely payments and ensure fairness for all our clients.</p>
      
      <h3 className="mt-4 text-xl font-medium text-gray-700">Cancellation Policy</h3>
      <p className="mt-2 text-gray-600">If you need to cancel the project after it has begun, please be aware that the initial 60% deposit is non-refundable. This is to cover resources and time already invested in the project.</p>
      
      <h3 className="mt-4 text-xl font-medium text-gray-700">Changes and Revisions</h3>
      <p className="mt-2 text-gray-600">Any changes to the project scope or additional requests outside the original agreement may be subject to additional charges. We will communicate these charges to you for approval before proceeding with any changes.</p>
      
      <h3 className="mt-4 text-xl font-medium text-gray-700">Acceptance of Terms</h3>
      <p className="mt-2 mb-4 text-gray-600">By proceeding with the initial payment, you accept these payment terms and conditions. We look forward to a successful working relationship and are committed to delivering a high-quality product or service.</p>
    </div>
  );
};

export default PaymentTerms;