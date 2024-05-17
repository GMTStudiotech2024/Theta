import { useState, useEffect, useRef, FormEvent } from 'react';
import { useNavigate } from "react-router-dom";
import gmtStudioLogo from '/assets/images/GMTStudio_.png';
const sendEmail = async (email: string): Promise<boolean> => {
  try {
    // Replace this with your actual email sending logic
    console.log(`Sending password reset email to ${email}`);
    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    // Simulate email success/failure
    const isSuccess = Math.random() > 0.2; // 80% success rate
    return isSuccess;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const history = useNavigate();

  useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsError(false);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      setIsError(true);
      return;
    }

    setIsLoading(true);
    const success = await sendEmail(email);
    setIsLoading(false);

    if (success) {
      setIsSubmitted(true);
      setEmail('');
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  return (
    
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <img src={gmtStudioLogo} alt="GMTStudio" className="w-auto h-12 md:h-16" />
      <h2 className="h3-bold text-blue-500">Theta v0.7a</h2>

      <h1 className="text-2xl font-bold text-center mb-6">Forgot Password</h1>
      {isSubmitted ? (
        <div className="text-center">
          <p className="text-green-600">
            Your request to reset your password has been sent to the admin account.
            You will receive further instructions via email.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Send Another Request
          </button>
        </div>
      ) : (
        <>
          <p className="text-gray-600 text-center mb-6">
            To reset your password, please enter your email address below, and
            we'll send a request to the admin account.
          </p>
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <input
                type="email"
                id="email"
                ref={emailInputRef}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                aria-label="Email address"
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
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50"
              disabled={isLoading}
              aria-busy={isLoading}
            >
              {isLoading ? 'Sending...' : 'Submit Request'}
            </button>
          </form>
        </>
      )}
      <div className="text-center mt-6">
        <button
          onClick={() => history("/sign-in")}

          className="py-2 px-4 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-300"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
