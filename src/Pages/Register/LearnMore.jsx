import React from 'react';

const LearnMore = () => {
    return (
        <div>
            <div className="p-6 max-w-2xl mx-auto  rounded-2xl shadow-md my-16">
                <h2 className="text-2xl font-bold  mb-4">Our Terms and Policy</h2>
                <p className="text-sm mb-3">
                    By registering, you agree to our platform’s Terms and Conditions. This includes your consent to our use of your
                    data in accordance with applicable laws and regulations. We prioritize transparency, user privacy, and data
                    protection.
                </p>
                <p className="text-sm  mb-3">
                    Your personal information will be securely stored and only used for login, communication, and platform improvement
                    purposes. We do not share your data with third parties without your consent.
                </p>
                <p className="text-sm ">
                    If you have any questions about how your data is handled, please contact our support team. By clicking the checkbox
                    in the registration form, you acknowledge that you’ve read and agreed to these terms.
                </p>
            </div>
        </div>
    );
};

export default LearnMore;