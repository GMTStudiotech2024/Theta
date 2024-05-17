import { useState } from 'react';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim() === "") {
      setIsError(true);
    } else {
      setIsSubmitted(true);
      setIsError(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Forget Password</h1>
      {isSubmitted ? (
        <p className="text-green-600 text-center">
          Your request to reset your password has been sent to the admin account.
          You will receive further instructions via email.
        </p>
      ) : (
        <>
          <p className="text-gray-600 text-center mb-6">
            To reset your password, please enter your email address below, and
            we'll send a request to the admin account.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {isError && (
                <p className="text-red-600 mt-2">
                  Please enter a valid email address.
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Submit Request
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ForgetPassword;
