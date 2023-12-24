import React from 'react';

const DigitalMarketingPage = () => {
    return (
        <div className="container mx-auto px-6 py-8 bg-white">
            <div className="max-w-6xl mx-auto text-gray-800">
                <h1 className="text-5xl lg:text-6xl font-bold text-center mb-10 underline decoration-blue-500 decoration-4 underline-offset-8">Digital Impact Package</h1>
                
                <p className="text-xl mb-8 leading-relaxed font-light">
                    Elevate your brands online presence with our <span className="font-semibold text-blue-600">Digital Impact Package</span>, meticulously designed to maximize your digital marketing effectiveness. Embrace the power of a comprehensive strategy that includes:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border-l-4 border-blue-500 bg-teal-50 p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Targeted Campaign Development</h2>
                        <p className="text-gray-600">Customize your digital reach with our targeted campaigns, designed to meet your audiences unique needs and your specific business goals.</p>
                    </div>
               
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border-l-4 border-yellow-500 bg-red-50 p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Social Media Strategy</h2>
                        <p className="text-gray-600">Boost your brands presence on social platforms, engaging your audience and enhancing brand awareness with our strategic social media approach.</p>
                    </div>

                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border-l-4 border-rose-500 bg-red-50 p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Email Marketing Solutions</h2>
                        <p className="text-gray-600">Drive conversions and build loyalty with our impactful email marketing campaigns, tailored to resonate with your customers.</p>
                    </div>

                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border-l-4 border-purple-500 bg-pink-200 p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Content Marketing</h2>
                        <p className="text-gray-600">Engage and attract your target audience with compelling content, strategically crafted and distributed to maximize impact.</p>
                    </div>

                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border-l-4 border-green-500 bg-red-50 p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Analytics and Insights</h2>
                        <p className="text-gray-600">Leverage advanced analytics for strategic insights, guiding your campaigns to greater effectiveness and success.</p>
                    </div>

                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border-l-4 border-teal-500 bg-red-50 p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Personalized Consultation</h2>
                        <p className="text-gray-600">Receive ongoing, expert consultation to continuously refine and align your digital marketing strategies with your business objectives.</p>
                        </div>
                
                
                            {/* Targeted Campaign Development Section */}
            <div className="bg-gradient-to-r from-blue-500 to-teal-300 py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-10">Targeted Campaign </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Individual Steps */}
                        <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Custom</h3>
                            <p className="text-gray-600">We tailor digital campaigns to match your audiences unique needs.</p>
                            
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Goals</h3>
                            <p className="text-gray-600">We align campaigns with your specific business objectives.</p>
                            
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Impact</h3>
                            <p className="text-gray-600">Our approach ensures maximum effectiveness in reaching your target audience.</p>
                            
                        </div>                                
                        </div>
            </div>
        </div>


        <div className="bg-gradient-to-r from-yellow-500 to-red-300 py-12 px-4">
    <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-10">Social Media Strategy</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Individual Steps */}
                        <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Presence</h3>
                            <p className="text-gray-600">Boost your brands presence on social platforms.</p>
                            
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Engage</h3>
                            <p className="text-gray-600">We engage your audience, fostering a stronger brand connection.</p>
                            
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Aware</h3>
                            <p className="text-gray-600">Increase brand awareness through strategic social media tactics.</p>
                            
                        </div>
                        </div>
    </div>
</div>

<div className="bg-gradient-to-r from-rose-500 to-red-300 py-12 px-4">
    <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-10">Email Marketing</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Individual Steps */}
                        <div className="bg-white rounded-xl shadow-lg p-3 transform transition duration-300 hover:scale-105">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Conversion</h3>
                            <p className="text-gray-600">Drive conversions and customer loyalty.</p>
                            
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Impact</h3>
                            <p className="text-gray-600">Our campaigns are designed to resonate with your customers.</p>
                            
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Approach</h3>
                            <p className="text-gray-600">Tailored emails for a more personal touch.</p>
                            
                        </div>
                        </div>
    </div>
</div>

<div className="bg-gradient-to-r from-pink-500 to-blue-300 py-12 px-4">
    <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-10">Content Marketing</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Individual Steps */}
                        <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Engage</h3>
                            <p className="text-gray-600">Engage and captivate your target audience.</p>
                            
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Content</h3>
                            <p className="text-gray-600">High-quality content strategically crafted for impact.</p>
                            
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Distribute</h3>
                            <p className="text-gray-600">Content distribution maximizes reach and engagement.</p>
                            
                        </div>
                        </div>
    </div>
</div>

<div className="bg-gradient-to-r from-teal-500 to-lime-300 py-12 px-4">
    <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-10">Analytics and Insights</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Individual Steps */}
                        <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Data- Driven</h3>
                            <p className="text-gray-600">We leverage advanced analytics for strategic insights.</p>
                            
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-4 transform transition duration-300 hover:scale-105">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Campaign</h3>
                            <p className="text-gray-600">Insights guide campaign refinement.</p>
                            
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Effective</h3>
                            <p className="text-gray-600">Data-backed decisions for better results.</p>
                            
                        </div>
                        </div>
    </div>
</div>

<div className="bg-gradient-to-r from-blue-800 to-cyan-300 py-12 px-4">
    <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-10">Personalized Consultation</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Individual Steps */}
                        <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Refine</h3>
                            <p className="text-gray-600">Ongoing consultation for strategy alignment.</p>
                            
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Guidance</h3>
                            <p className="text-gray-600">Receive expert advice to meet your business objectives.</p>
                            
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-5 transform transition duration-300 hover:scale-105">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Strategies</h3>
                            <p className="text-gray-600">Strategies designed to match your unique goals.</p>
                            
                        </div>
                        </div>
    </div>
</div>



                </div>
            </div>
        </div>
    );
};

export default DigitalMarketingPage;